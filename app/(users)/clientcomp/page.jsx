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
    <div className="min-h-screen  ">
      <div className=" consistent">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className=" font-light tracking-[-2px] text-slate-800 mb-4">
            Client Component
          </h1>
          <p className="text-slate-500 text-sm">
            Interactive React component with dynamic data
          </p>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-4 mb-10 justify-center">
          <button
            className="px-8 py-3 bg-emerald-500 font-body hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            onClick={() => alert("hi")}
          >
            Click Me
          </button>
          <Counter />
          {/* If client component imports another component , it automatically becomes a client component */}
          {/* No need to use 'use client' again */}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 9).map((post) => (
            <article
              key={post.id}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200"
            >
              <h5 className=" mb-3 line-clamp-2 uppercase ">{post.title}</h5>
              <p className=" text-neutral-600 text-sm leading-relaxed line-clamp-3">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientComp;
