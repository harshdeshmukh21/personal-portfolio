"use client";

import React, { useEffect, useState } from "react";
import fasttap from "../../assets/FastTap.png";
import de from "../../assets/de.png";
import bayrack from "../../assets/Bayrack.png";
import quasar from "../../assets/Quasar.png";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { TerminalDemo } from "./Terminal";
import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";

const Works = () => {
  const { theme } = useTheme();
  const [terminalLoaded, setTerminalLoaded] = useState(false);

  useEffect(() => {
    // Simulate terminal completion delay
    const timer = setTimeout(() => setTerminalLoaded(true), 4700); // Adjust time if needed
    return () => clearTimeout(timer);
  }, []);

  const slideData = [
    {
      title: "FastTap Solutions",
      button: "Explore",
      src: fasttap.src,
      path: "https://www.fasttapsolutions.com/",
    },
    {
      title: "Deshmukh Enterprises",
      button: "Explore",
      src: de.src,
      path: "https://yourwebsite.com/works/deshmukhent",
    },
    {
      title: "Bayrack Clothing",
      button: "Explore",
      src: bayrack.src,
      path: "https://yourwebsite.com/works/bayrack",
    },
    {
      title: "Quasar",
      button: "Explore",
      src: quasar.src,
      path: "https://yourwebsite.com/works/quasar",
    },
  ];

  return (
    <div
      className="relative w-full h-full py-20 flex flex-col items-center"
      id="works"
    >
      <h1 className="text-center text-8xl py-10 font-semibold text-[#C7C7BB]">
        Works
      </h1>

      {/* Terminal Demo */}
      <TerminalDemo />

      {/* Cards should only appear after terminal is loaded */}
      {terminalLoaded && (
        <div className="flex flex-col gap-4 w-full items-center justify-center mt-12">
          <div className="flex flex-row gap-4 w-[90vw] h-[435px] items-center justify-center">
            {slideData.slice(0, 2).map((item, index) => (
              <MagicCard
                key={index}
                className="cursor-pointer flex justify-center text-center whitespace-nowrap py-8 text-4xl dark text-[#C7C7BB]"
                gradientColor={theme === "dark" ? "#C7C7BB" : "#D9D9D955"}
                gradientFrom="#E6CBA8"
                gradientTo="#C7C7BB"
              >
                {item.title}
                <Image
                  src={item.src}
                  alt={item.title}
                  width={450}
                  height={200}
                  className="mt-6 rounded-md"
                />
                <ShinyButton
                  className="mt-4"
                  onClick={() => window.open(item.path, "_blank")}
                >
                  {item.button}
                </ShinyButton>
              </MagicCard>
            ))}
          </div>

          <div className="flex flex-row gap-4 w-[90vw] h-[435px] items-center justify-center">
            {slideData.slice(2).map((item, index) => (
              <MagicCard
                key={index}
                className="cursor-pointer flex justify-center text-center whitespace-nowrap py-8 text-4xl dark text-[#C7C7BB]"
                gradientColor={theme === "dark" ? "#C7C7BB" : "#D9D9D955"}
                gradientFrom="#E6CBA8"
                gradientTo="#C7C7BB"
              >
                {item.title}
                <Image
                  src={item.src}
                  alt={item.title}
                  width={450}
                  height={200}
                  className="mt-6 rounded-md"
                />
                <ShinyButton
                  className="mt-4"
                  onClick={() => window.open(item.path, "_blank")}
                >
                  {item.button}
                </ShinyButton>
              </MagicCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
