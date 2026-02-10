import Link from "next/link";
import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div className=" consistent">
      <h1 className="">About Page</h1>
      <Link href="/about/teams">
      <p className=" font-[500] text-blue-500">Our Team</p>
      </Link>
      {children}
    </div>
  );
};

export default AboutLayout;
