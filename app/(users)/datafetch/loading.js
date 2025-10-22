import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="w-fit mx-auto">
      <Image
        src="/assets/Fidget-spinner.gif"
        width={100}
        height={100}
        loading="lazy"
        quality={95}
        alt="loading"
        className="size-[6rem] object-contain mx-auto"
      />
    </div>
  );
};

export default loading;
