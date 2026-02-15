import HomeBannerTwo from "@/components/ui/HomeBannerTwo";
import UpgradeBusiness from "@/components/ui/UpgradeBusiness";
import WhatMakes from "@/components/ui/WhatMakes";
import Link from "next/link";
//route groups : (users)
const Home = () => {
  return (
    <div className="relative  bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 content-center">
      <section className="consistent">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm absolute top-0 left-0 p-6">
          <span className="text-slate-400">/</span>
          <span className="text-emerald-600 font-medium">(users)</span>
        </nav>

        {/* Main Banner Content */}
        <div className="flex flex-col gap-6  items-center justify-center px-6">
          {/* Decorative Element */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-center text-6xl md:text-7xl  font-bold text-emerald-600 tracking-tight">
            Welcome to NEXT 15
          </h1>
          <div className="w-[55%] gap-5 flex flex-col">
            <h1 className=" text-[56px] font-[800] leading-[110%] font-body tracking-[-0.03em]">
              Faster, Secure & Powerful Web Hosting Services
            </h1>
            <p className=" font-[300] text-[18px] leading-[150%] tracking-[0em] w-[85%] ">
              Experience Unmatched Website Performance and Reliability with Our
              State-of-the-Art Hosting Solutions - Empowering Your Online
              Presence for Success 24/7
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-center text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Building the future of web applications with modern React and
            Next.js
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link href="#">
              <button className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      <WhatMakes/>
      <HomeBannerTwo/>
      <UpgradeBusiness/>
    </div>
  );
};

export default Home;
