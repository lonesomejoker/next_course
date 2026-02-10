"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import sydney from "@/public/assets/sydney.jpg";
import { easeInOut, motion } from "motion/react";
import gsap from "gsap";

const Teams = () => {
  const teamMembers = [
    {
      image: "/assets/sydney.jpg",
      name: "Sydney Sweeny",
      position: "Frontend Developer",
      skills: "React & TypeScript",
    },
    {
      image: sydney,
      name: "Jane Doe",
      position: "Backend Developer",
      skills: "Node.js, Python, SQL",
      full: true,
    },
    {
      image: "/user-avatar.png",
      name: "John Smith",
      position: "UI/UX Designer",
      skills: "Figma, Sketch, Adobe XD",
    },
    {
      image: "/user-avatar.png",
      name: "Emily White",
      position: "Project Manager",
      skills: "Agile, Scrum, JIRA",
    },
    {
      image: "/user-avatar.png",
      name: "Michael Green",
      position: "DevOps Engineer",
      skills: "AWS, Docker, Kubernetes",
    },
    {
      image: "/user-avatar.png",
      name: "Jessica Black",
      position: "QA Engineer",
      skills: "Cypress, Jest, Selenium",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between children
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  const cardRef = useRef();
  const hoverTween = useRef();

  useEffect(() => {
    const element = cardRef.current;
    //set
    gsap.set(element, { opacity: 0, y: 50, scale: 1 });

    //to
    gsap.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "power3.out",
      duration: 1,
    });

    const ctx = gsap.context(() => {});

    return () => {
      ctx.revert();
    };
  }, []);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    if (hoverTween.current) hoverTween.current.kill(); //avoid repeated animation

    hoverTween.current = gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      y: -60,
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    if (hoverTween.current) hoverTween.current.kill(); //avoid repeated animation

    hoverTween.current = gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.in",
      y: 0,
      boxShadow: "#fff 0px 0px 0px 0px",
    });
  };

  return (
    <div>
      <motion.section
        className="grid grid-cols-3 gap-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 relative"
            whileTap={{ scale: 0.95 }}
          >
            {member.full ? (
              <Image  //automatic optimization of images using this component
                src={member.image}
                alt={member.name}
                fill //cant use width and height here
                className="object-cover rounded-lg"
                quality={100}
                priority={false}
                placeholder="blur"
                blurDataURL=""
              />
            ) : (
              <Image
                src={member.image}
                width={500}
                height={500}
                quality={80}
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />
            )}
          </motion.div>
        ))}
      </motion.section>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
        className=" border-2 p-4 rounded-xl border-gray-300 w-[20rem] mt-[2.5rem] bg-white"
      >
        <div className="size-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center ">
          <Image
            src="/user-avatar.png"
            width={500}
            height={500}
            quality={80}
            alt="Jessica Chastain"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h6 className="text-center">Jessica Chastain</h6>
        <p className="text-center mt-2">Actor</p>
        <p className="caption text-center mt-1">Acting</p>
      </div>
    </div>
  );
};

export default Teams;
