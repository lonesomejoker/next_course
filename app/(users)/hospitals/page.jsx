import { db } from "@/config/db";
import { HospitalForm } from "./HospitalForm";
// import { createHospitalAction } from "./hospital.action";

const HospitalPage = async () => {
  const [hospitalsList] = await db.execute(`select * from hospital`);
  console.log("hospital list:", hospitalsList);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <HospitalForm />

      {/* Table of Records */}
      {hospitalsList.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">📋 Hospital Records</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-500 text-white font-heading ">
                <tr>
                  <th className="py-2 px-4 font-[500]">#ID</th>
                  <th className="py-2 px-4 font-[500] text-left">Name</th>
                  <th className="py-2 px-4 font-[500] text-left">City</th>
                  <th className="py-2 px-4 font-[500] text-left">State</th>
                  <th className="py-2 px-4 font-[500] ">Department</th>
                  <th className="py-2 px-4 font-[500] ">Established</th>
                </tr>
              </thead>
              <tbody>
                {hospitalsList.map((hospital) => (
                  <tr
                    key={hospital.hospital_id}
                    className="border-t hover:bg-gray-50 transition text-black font-body"
                  >
                    <td className="py-2 px-4">{hospital.hospital_id}</td>
                    <td className="py-2 px-4">{hospital.name}</td>
                    <td className="py-2 px-4">{hospital.city}</td>
                    <td className="py-2 px-4">{hospital.state}</td>
                    <td className="py-2 px-4">{hospital.department}</td>
                    <td className="py-2 px-4">{hospital.established_year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalPage;
