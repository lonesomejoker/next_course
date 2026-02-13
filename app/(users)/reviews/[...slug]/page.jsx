import React from "react";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";

//catch-all segment [...slug]
const Reviews = async (props) => {
  //route: /reviews/technology/frontend/react ,these all paths are catched by [...slug]
  const { slug } = await props.params;
  console.log("slug", slug);

  // Generate breadcrumb items from slug
  const breadcrumbItems = slug ? ["reviews", ...slug] : ["reviews"];

  return (
    <div className=" bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] min-h-screen">
      <div className="consistent py-[4rem] ">
       <h3 className=" text-white mb-[2rem]">Catch All Segment</h3>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center list-none p-0 m-0 gap-2 flex-wrap">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              const href = "/" + breadcrumbItems.slice(0, index + 1).join("/");

              return (
                <li key={index} className="flex items-center gap-2">
                  {!isLast ? (
                    <>
                      <Link
                        href={href}
                        className="relative text-[#8b9dc3] no-underline font-normal font-body tracking-wide px-4 py-2 rounded-lg bg-white/5 border border-white/15 transition-all duration-300 ease-out capitalize backdrop-blur-md hover:text-[#e8edf7] hover:bg-white/12 hover:border-white/30 "
                      >
                        {item}
                      </Link>

                      {/* Separator */}
                    <RiArrowDropRightLine className="text-white text-[2rem]" />
                    </>
                  ) : (
                    <p className="text-[#e8edf7] px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 capitalize backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)] ">
                      {item}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Content Area */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-12 backdrop-blur-xl">
          <h3 className=" text-[#e8edf7] mb-4 ">
            Reviews
          </h3>

          {slug && (
            <p className="text-lg text-[#8b9dc3] font-sans leading-relaxed">
              Current path:{" "}
              <code className="bg-indigo-500/10 px-3 py-1 rounded-md text-[0.95rem] text-purple-300 font-mono">
                {slug.join(" / ")}
              </code>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
