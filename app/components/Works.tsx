"use client";

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
      src: fasttap.src,
      path: "/works/fasttap",
    },
    {
      title: "Deshmukh Enterprises",
      button: "Explore",
      src: de.src,
      path: "/works/deshmukhent",
    },
    {
      title: "Bayrack Clothing",
      button: "Explore",
      src: bayrack.src,
      path: "/works/bayrack",
    },
    {
      title: "Quasar",
      button: "Explore",
      src: quasar.src,
      path: "/works/quasar",
    },
  ];

  return (
    <div className="relative w-full h-full py-20" id="works">
      <h1 className="text-center text-8xl py-10 font-semibold text-[#C7C7BB]">
        Works
      </h1>
      <Carousel
        slides={slideData}
        onExplore={(slide) => {
          if (slide.path) {
            window.location.href = slide.path;
          }
        }}
      />
    </div>
  );
};

export default Works;
