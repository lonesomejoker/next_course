import Image from "next/image";
import React from "react";

const UpgradeBusiness = () => {
  const logoGrid = [
    { icon: "/assets/upgrade_business/google.png", title: "Google Workspace" },
    { icon: "/assets/upgrade_business/365.png", title: "Microsoft 365" },
    { icon: "/assets/upgrade_business/Vector.png", title: "Workspace" },
    { icon: "/assets/upgrade_business/filter.png", title: "Bigin by Zoho CRM" },
  ];
  return (
    <section className=" flex gap-12 justify-between container mx-auto py-[4.5rem]">
      <div className=" w-[35%] flex flex-col gap-5">
        <h2 className=" font-[700] text-[50px] leading-[120%]">
          Ready to upgrade your business?
        </h2>
        <p className=" text-[18px] leading-7 w-[80%]">
          We make it easy to tap into 20+ years of experience – our web experts
          will tackle whatever you need for a successful site.
        </p>
        <button className=" text-[16px] font-[700] py-4 px-5 rounded-xl bg-[#3174F0] text-white w-fit">
          Get started for free
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {logoGrid.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col gap-4 bg-[#F4F6F9] rounded-3xl p-8"
          >
            <Image height={48} width={48} src={item.icon} alt={item.title} />
            <p className=" font-[700] leading-6 text-[18px] w-[30%] mt-0.5">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpgradeBusiness;
