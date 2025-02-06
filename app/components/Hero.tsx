import React from "react";

export const Hero = () => {
  return (
    <div className="bg-hero w-full min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-[#C7C7BB] text-center font-semibold
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          leading-tight sm:leading-tight md:leading-tight lg:leading-tight
          max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%]
          mx-auto -mt-52 md:-mt-40 lg:-mt-60"
        >
          Committed to Crafting Intuitive and Modern UIs.
        </p>
      </div>
    </div>
  );
};
