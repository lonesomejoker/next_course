import React from "react";

//never use async in client components
const ServerComp = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  //server components hides the url,tokens,api etc to the client side
  return (
    <div className=" consistent space-y-[2.5rem]">
      <h3 className=" text-center text-emerald-600 ">ServerComp</h3>
      <div className=" grid grid-cols-3 gap-6 ">
        {data.slice(0, 10).map((post) => (
          <div
            key={post.id}
            className="mb-4 p-4 border border-emerald-300 rounded shadow-sm bg-white"
          >
            <h6 className=" text-emerald-700 mb-3">{post.title}</h6>
            <p className="">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerComp;
