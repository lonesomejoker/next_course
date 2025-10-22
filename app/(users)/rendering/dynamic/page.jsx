import { db } from "@/config/db";
import React from "react";
import { cache } from "react";

export const dynamic = "force-dynamic";
const DynamicPage = async () => {
  //dynamic page can only show console.log after npm run build
  //when u make changes in db after run build, it reflects in dynamic page

  const doctors = await getAllDoctors();

  return (
    <div className="consistent ">
      <h3 className=" font-[500] tracking-[-0.4px] mb-3">
        Data from sql Database
      </h3>
      <h6>Total Doctors: {doctors.length}</h6>
      <DoctorsLists doctors={doctors} />
    </div>
  );
};

export default DynamicPage;

const DoctorsLists = async () => {
  const doctors = await getAllDoctors();
  return (
    <>
      <ul>
        {doctors.map((item) => {
          return (
            <li key={item.doctor_id} className=" ">
              {item.first_name} {item.last_name}
            </li>
          );
        })}
        <li></li>
      </ul>
    </>
  );
};


//react cache helps to store data: if the db data is same and same function is executed in multiple place , cache only calls api one time  
const getAllDoctors = cache(async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("fetching doctors");
  return doctors;
});
