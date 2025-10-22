"use client";

import { useEffect, useState } from "react";
import { Counter } from "./Counter";

const ClientComp = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="flex flex-col gap-6 items-center justify-center consistent">
      <h1 className=" text-center text-emerald-600">Client Component</h1>
      <button
        className=" bg-emerald-500 px-6 py-3 rounded-sm font-body text-white"
        onClick={() => alert("hi")}
      >
        Click Me
      </button>
      <Counter />{" "}
      {/* If client component imports another component , it automatically becomes a client component */}
      {/* No need to use 'use client' again */}
      <div className=" grid grid-cols-3 gap-6 ">
        {posts.slice(0, 10).map((post) => (
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

export default ClientComp;
