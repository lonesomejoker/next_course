import { db } from "@/config/db";
import React from "react";

const StaticPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log(doctors);
  return (
    <div className="consistent ">
      <h3 className=" font-[500] tracking-[-0.4px] mb-3">Data from sql Database</h3>
      <ul>
        {doctors.map((item) => {
          return (
            <li key={item.doctor_id} className=" caption">
              {item.first_name} {item.last_name}
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
};

export default StaticPage;
