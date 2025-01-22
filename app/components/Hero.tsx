import React from "react";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <p className="text-7xl text-[#C7C7BB] text-center font-semibold px-8 mt-4">
        Committed to Crafting Intuitive and Modern User-Interfaces.
      </p>
      <Spline
        className="-mt-20"
        scene="https://prod.spline.design/rvMgaXlSMwOUsbI2/scene.splinecode"
      />
    </div>
  );
};
