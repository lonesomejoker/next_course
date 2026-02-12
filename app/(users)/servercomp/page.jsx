import React from "react";

export const metadata = {
  title: "Server Component",
  description: "Server Component",
  authors: [
    { name: "shirish shrestha" },
    { name: "lonesomejoker", url: "https://github.com/lonesomejoker" },
  ],
  keywords: ["nextjs", "reactjs", "server component"],
  icons: {
    icon: "/assets/psylocke.jpg",
  },
};

//never use async in client components
const ServerComp = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  //server components hides the url,tokens,api etc to the client side

  return (
    <div className="consistent ">
      {/* Header Section */}
      <div className="text-center mb-14">
        <h1 className="font-light tracking-[-2px] text-slate-800 mb-4">
          Server Component
        </h1>

        <p className="text-slate-500 text-sm max-w-md mx-auto">
          Fetched securely on the server with protected API credentials
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.slice(0, 9).map((post, index) => (
          <article
            key={post.id}
            className="group relative bg-white/80 backdrop-blur-sm p-8 overflow-clip rounded-xl border border-emerald-100/50 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <h6 className="uppercase line-clamp-2 mb-4">
              {post.title}
            </h6>
            <p className="text-neutral-600 line-clamp-4">
              {post.body}
            </p>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-500 rounded-bl-2xl"></div>
          </article>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center">
        <p className="text-xs text-slate-400 italic">
          Rendered on the server • No client-side JavaScript required
        </p>
      </div>
    </div>
  );
};

export default ServerComp;
