import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] bg-[url('/images/hero.png')] bg-cover bg-no-repeat bg-center overflow-hidden">
      {/* <Image
        src="/images/hero.png"
        fill
        alt="bg-image"
        className="object-contain"
      /> */}
    </div>
  );
};

export default Hero;
