"use client";

import { capitalizeFirst } from "@/components/utils/Elements";
import { useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";

const DataFetchClient = () => {
  const [userData, setUserData] = useState({});
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  //Another method
  // const searchParams=use(props.searchParams);
  //const userName=searchParams?.name;

  useEffect(() => {
    let timeoutId;

    const revealGender = async () => {
      try {
        const res = await fetch(`https://api.genderize.io/?name=${userName}`);
        const data = await res.json();

        timeoutId = setTimeout(() => {
          setUserData(data);
        }, 3000);
      } catch (err) {
        console.error("Failed to fetch userData:", err);
      }
    };

    if (userName) revealGender();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [userName]);

  //   console.log("final result:", userData);

  const probability = userData?.probability * 100;
  if (!userData.gender || !userName || userName === "") {
    return (
      <div className=" bg-white shadow-lg shadow-slate-200 px-10 py-6 rounded-md w-fit mx-auto">
        <h6 className=" mb-3">No valid name Provided</h6>
        <p>Please provide a valid name in the query parameter ?name="..."</p>
      </div>
    );
  }

  return (
    <div className="consistent">
      <h6>
        {userData?.name}- {probability}% {capitalizeFirst(userData?.gender)}
      </h6>
    </div>
  );
};

export default DataFetchClient;
