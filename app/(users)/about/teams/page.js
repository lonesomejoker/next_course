"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Lead Designer",
    skills: "UI/UX, Branding",
    image: "/assets/female1.avif",
    full: true,
  },
  {
    name: "Michael Chen",
    position: "Developer",
    skills: "React, Node.js",
    image: "/assets/female2.avif",
    full: false,
  },
  {
    name: "Emma Williams",
    position: "Product Manager",
    skills: "Strategy, Analytics",
    image: "/assets/female3.avif",
    full: false,
  },
];

export default function TeamSection() {
  const featuredCardRef = useRef(null);
  const teamCardsRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate header on mount
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );

    // Stagger animation for team cards
    gsap.fromTo(
      teamCardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      },
    );

    // Animate featured card
    gsap.fromTo(
      featuredCardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.6 },
    );
  }, []);

  const handleCardHover = (e) => {
    gsap.to(e.currentTarget, {
      y: -8,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardPress = (e) => {
    gsap.to(e.currentTarget, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div className=" py-[4rem] ">
      <div className=" mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals driving our mission forward
          </p>
        </div>

        {/* Team Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => (teamCardsRef.current[index] = el)}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
              onClick={handleCardPress}
            >
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                {member.full ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 object-top group-hover:scale-105"
                    quality={100}
                    priority={index < 3}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-40 h-40">
                      <Image
                        src={member.image}
                        width={160}
                        height={160}
                        quality={90}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover ring-4 ring-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-2">
                  {member.position}
                </p>
                <p className="text-xs text-gray-500">{member.skills}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
