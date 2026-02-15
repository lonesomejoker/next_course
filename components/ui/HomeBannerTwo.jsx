import Image from "next/image";

const HomeBannerTwo = () => {
  return (
    <div className="relative w-full h-[348px] md:h-[600px] container mx-auto p-7 md:p-12 rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/Container.png"
        alt="Home banner background"
        fill
        priority={90}
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <h1 className="font-[700] text-[36px] md:text-[66px] leading-[110%] md:leading-[77px] text-white w-full md:w-[60%]">
          Hire a Pro, We'll Do the Work for You
        </h1>
      </div>
    </div>
  );
};

export default HomeBannerTwo;
