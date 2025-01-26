import React from "react";
import Carousel from "@/components/ui/carousel";
import fasttap from "../../assets/FastTap.png";
import de from "../../assets/de.png";
import bayrack from "../../assets/Bayrack.png";
import quasar from "../../assets/Quasar.png";

const Works = () => {
  const slideData = [
    {
      title: "FastTap Solutions",
      button: "Explore",
      src: fasttap.src, // Use .src to convert StaticImageData to string
    },
    {
      title: "Deshmukh Enterprises",
      button: "Explore",
      src: de.src,
    },
    {
      title: "Bayrack Clothing",
      button: "Explore",
      src: bayrack.src,
    },
    {
      title: "Quasar",
      button: "Explore",
      src: quasar.src,
    },
  ];

  return (
    <div className="relative w-full h-full py-20">
      <h1 className="text-center text-8xl py-10 font-semibold text-[#C7C7BB]">
        Works
      </h1>
      <Carousel slides={slideData} />
    </div>
  );
};

export default Works;
