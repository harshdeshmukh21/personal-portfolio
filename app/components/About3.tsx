import React from "react";
import onepx from "../../assets/onepx.png";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { TypingAnimation } from "@/components/ui/typing-animation";

const About3 = () => {
  return (
    <div className="flex flex-col justify-center items-center -mt-40">
      {/* <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Hero waves are cool
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power of canvas to create a beautiful hero section
        </p>
      </WavyBackground> */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#C7C7BB] dark:text-white">
              Meet my startup
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                1PX LABS
              </span>
            </h1>
          </>
        }
      >
        <a href="https://onepx.in/" target="_blank" rel="noopener noreferrer">
          <Image
            src={onepx}
            alt="hero"
            height={800}
            width={1500}
            className="rounded-2xl object-cover h-full"
            draggable={false}
          />
        </a>
      </ContainerScroll>
      <div className="mb-10 text-center -mt-64">
        <p className="text-[#C7C7BB] text-5xl px-60 text-center font-medium pb-8 -mt-2">
          We build amazing websites here at 1PX.
        </p>

        <p className="text-[#C7C7BB] text-[21px] px-60 text-center font-extralight">
          1PX Labs is a web development agency started by me and my 2
          classmates. We craft scalable, innovative products for ambitious
          startups. Our design and development expertise ensures your brand
          grows with every pixel. From mobile applications to Figma-like tools
          and from e-commerce platforms to stylish portfolio websites, we can
          develop it all!
        </p>
      </div>
      ;
    </div>
  );
};

export default About3;
