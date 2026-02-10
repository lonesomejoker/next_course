// import { capitalizeFirst } from "@/components/utils/Elements";
// import React from "react";

// const DataFetchServer = async ({ searchParams }) => {
//   const searchParam = await searchParams;
//   const userName = searchParam?.name;
//   console.log("params", await searchParams);

//   const res = await fetch(`https://api.genderize.io/?name=${userName}`);
//   const userData = await res.json();
//   console.log("final result:", userData);
//   const probability = userData.probability * 100;

//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   return (
//     <div className="consistent">
//       {userName ? (
//         <h6>
//           {userData.name}- {probability}% {capitalizeFirst(userData.gender)}
//         </h6>
//       ) : (
//         <div className=" bg-white shadow-lg shadow-slate-200 px-10 py-6 rounded-md w-fit mx-auto">
//           <h6 className=" mb-3">No name Provided</h6>
//           <p>Please provide ?name="..."</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataFetchServer;

import { Suspense } from "react";
import DataCard from "./DataCard";
import Load from "./Load";

const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;
  const userName = searchParams.name;

  // Handle case where no name is provided
   if (!userName || userName === "") {
    return (
      <div className=" bg-white shadow-lg shadow-slate-200 px-10 py-6 rounded-md w-fit mx-auto">
        <h6 className=" mb-3">No valid name Provided</h6>
        <p>Please provide a valid name in the query parameter ?name="..."</p>
      </div>
    );
  }

  //   console.log("Random :", Math.random());

  return (
    <div className="grid grid-cols-2 gap-12 h-full consistent ">
      <div className="h-full flex justify-center items-center  ">
        <p>
          Hii I am 1st component.In Loading.jsx I have to wait but in Suspense I
          don't. I support partial rendering. This means you can show a fallback
          UI (like a loading spinner or skeleton) for specific components while
          the rest of your application renders and remains interactive.
        </p>
      </div>
      <Suspense fallback={<Load />}>
        <DataCard userName={userName} />
      </Suspense>
    </div>
  );
};

export default DataFetchServer;