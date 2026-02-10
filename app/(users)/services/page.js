import React from "react";
import style from "./service.module.css";

export const metadata = {
  title: "Services",
  description: "Services Page",
  authors: [
    { name: "shirish shrestha" },
    { name: "lonesomejoker", url: "https://github.com/lonesomejoker" },
  ],
  keywords: ["nextjs", "reactjs", "services"],
  icons: {
    icon: "/assets/psylocke.jpg",
  },
};

const Services = () => {
  return (
    <div>
      <p className={style.common_text}>Services</p>
    </div>
  );
};

export default Services;
