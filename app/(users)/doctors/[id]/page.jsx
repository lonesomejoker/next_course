import { db } from "@/config/db";
import { Mail, Phone, MapPin, Calendar, Award, User } from "lucide-react";
import { notFound } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment


//gets data from build time stored in cache instead from db
export async function generateStaticParams() {
  const [doctors] = await db.execute(`select doctor_id from doctors`);
  //next js convert ids into string(default from db is number) so using toString  
  return doctors.map((doctor) => ({ id: doctor.doctor_id.toString() })); //storing id for static
}

const SingleDoctor = async (props) => {
  const params = await props.params;
  console.log("prams: ", params);

  const [[doctor]] = await db.execute(
    `select * from doctors where doctor_id = ?`,
    [params.id]
  );
  console.log("Single doctor:", doctor);

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  if (!doctor) return notFound();

  // if (!doctor) return <h1>Doctor not found</h1>;

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-[380px] w-full mx-auto bg-white rounded-2xl shadow-lg border border-gray-100  overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
              {getInitials(doctor.first_name, doctor.last_name)}
            </div>
            <div>
              <h3 className="text-white">
                Dr. {doctor.first_name} {doctor.last_name}
              </h3>
              <p className="text-blue-100 ">{doctor.specialization}</p>
              <div className="flex items-center mt-1">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    doctor.is_active ? "bg-green-300" : "bg-red-300"
                  }`}
                ></div>
                <p className="caption text-white">
                  {doctor.is_active ? "Active" : "Inactive"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className=" text-[0.9rem] text-blue-500" />
              <p>{doctor.email}</p>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="text-[0.9rem] text-green-500" />
              <p className="caption">{doctor.phone}</p>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="text-[0.9rem] text-red-500 " />
              <p className="caption">Balambu,Kathmandu</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Professional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Award className="text-[0.9rem] text-yellow-500" />
              <div>
                <div className="text-xs text-gray-500">Experience</div>
                <div className="text-sm font-medium">
                  {doctor.experience_years} years
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-purple-500" />
              <div>
                <div className="text-xs text-gray-500">License</div>
                <div className="text-sm font-medium">
                  {doctor.license_number}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3">
          <h6 className=" text-neutral-500">ID: {doctor.doctor_id} •</h6>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
