import React from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import hero from "../../assets/galaxy-rollercoaster.gif";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-hero">
      <p className="text-7xl text-[#C7C7BB] text-center font-semibold px-8 -mt-60">
        Committed to Crafting Intuitive and Modern User-Interfaces.
      </p>
      {/* <Spline scene="https://prod.spline.design/rvMgaXlSMwOUsbI2/scene.splinecode" /> */}
      {/* <Image
        src={hero}
        alt="Background animation"
        className="object-cover w-full h-full"
        priority
      /> */}
    </div>
  );
};
