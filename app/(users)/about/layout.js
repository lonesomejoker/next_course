import Link from "next/link";
import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br  from-slate-50 via-blue-50 to-indigo-50 space-y-10">
      {/* Header Section */}
      <div className=" flex justify-between items-center consistent py-3 bg-white">
        {/* Title */}
        <div>
          <h3>About</h3>
          <div className="mt-2 h-1 w-16 bg-blue-600 rounded-full"></div>
        </div>

        {/* Navigation */}
        <Link href="/about/teams">
          <div className="group flex items-center gap-2 px-5 py-2.5 w-fit bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30">
            <span>Our Team</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Content Section */}
      <div className="bg-white consistent  min-h-[50vh] rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
        {children}
      </div>
    </div>
  );
};

export default AboutLayout;
