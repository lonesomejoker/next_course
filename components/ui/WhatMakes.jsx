import Image from "next/image";
import React from "react";

const WhatMakes = () => {
  const features = [
    {
      id: 1,
      icon: "/assets/what_makes/user.png",
      title: "Employee Owned",
      content:
        "Being employee-owned keeps us focused on the unique needs of our users, and we wouldn't have it any other way. We're committed to helping everyone find success online.",
    },
    {
      id: 2,
      icon: "/assets/what_makes/Group.png",
      title: "Passion for Privacy",
      content:
        "We believe in everyone's right to privacy, and we back that with a strong anti-spam policy and free Domain Privacy Protection.",
    },
    {
      id: 3,
      icon: "/assets/what_makes/flash.png",
      title: "Embrace Open Source",
      content:
        "We strongly believe in providing open source solutions to our customers whenever possible.",
    },

    {
      id: 4,
      icon: "/assets/what_makes/Group.png",
      title: "Commitment to Security",
      content:
        "Our many security features include Multi Factor Authentication, auto-enabled sFTP and free secure hosting with Let's Encrypt.",
    },
    {
      id: 5,
      icon: "/assets/what_makes/flash.png",
      title: "100% Uptime Guaranteed",
      content: "We guarantee it so you don't have to worry about it.",
    },
    {
      id: 6,
      icon: "/assets/what_makes/orange.png",
      title: "24/7 Support",
      content:
        "Our in-house team members do their best to provide one-touch resolution, making you feel like a part of our family.",
    },
  ];
  return (
    <section className="  bg-white py-[6rem]">
      <section className=" container mx-auto flex flex-col md:flex-row justify-between gap-20 items-center ">
        <div className="w-full md:w-[40%] space-y-4 md:space-y-8">
          <h3 className="text-[40px] md:text-[66px] font-[700] leading-[110%] tracking-[0px]">
            What Makes Nest Nepal So Different ?
          </h3>
          <p className="font-[400] leading-[130%] md:leading-[120%] tracking-[0px] text-[14px] md:text-[18px]">
            With over 20 years of hosting experience, we focus on successful
            sites for web designers, developers, bloggers and online businesses.
            Our community and support helps you create a website fast and easy!
          </p>
        </div>
        <section className="gap-2 items-end hidden md:flex">
          <div className=" w-[260px] h-[235px] relative flex justify-center items-center">
            <Image
              src="/assets/what_makes/blue.png"
              alt="group"
              className="object-contain absolute inset-0 z-[1] "
              fill
            />
            <Image
              src="/assets/what_makes/glyph.png"
              height={164}
              width={164}
              alt="group"
              className="object-contain size-[130px] relative z-[2] "
            />
          </div>
          <Image
            src="/assets/what_makes/nest.png"
            alt="next_nepal"
            className="object-contain w-[356px] h-[320px]"
            width={356}
            height={320}
          />
        </section>
      </section>

      <section className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mt-[2.5rem] md:mt-[4.5rem]">
        {features.map((feature) => (
          <div className="flex flex-col gap-3 " key={feature.id}>
            <Image
              src={feature.icon}
              alt={feature.title}
              className="object-contain size-[50px]"
              width={50}
              height={50}
            />
            <div className="space-y-2 mt-1">
              <h3 className="text-[24px] font-[700] leading-8 tracking-[0px] ">
                {feature.title}
              </h3>
              <p className="font-[400] tracking-[0px] leading-[27px] text-[18px]">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default WhatMakes;
