import React from "react";
import BoxReveal from "@/components/ui/box-reveal";
import Image from "next/image";
import Harsh from "../../assets/Harsh.jpg";
import MorphingText from "@/components/ui/morphing-text";

const texts = ["DESIGNER", "DEVELOPER", "FOUNDER"];

const AboutMain = () => {
  return (
    <div
      className="flex flex-col items-center py-6 md:py-10 px-4 md:px-8"
      id="about"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-10 w-full max-w-7xl">
        <div className="w-full lg:w-auto">
          <Image
            src={Harsh}
            alt="Harsh Deshmukh"
            height={700}
            width={400}
            className="w-full max-w-[300px] md:max-w-[400px] mx-auto lg:ml-28 object-cover"
            priority
          />
        </div>

        <div className="w-full lg:w-auto">
          <BoxReveal boxColor={"#C7C7BB"} duration={0.5}>
            <div className="text-4xl sm:text-6xl lg:text-8xl text-[#C7C7BB] font-bold text-center lg:text-left">
              <p className="mb-2">
                HELLO, MY <br className="hidden sm:block" />
                NAME IS
              </p>
              <p className="bg-[#C7C7BB] text-black w-fit mx-auto lg:mx-0 px-2">
                HARSH
              </p>
              <p className="mt-2">
                I AM A
                <MorphingText
                  texts={texts}
                  className="-mb-24 text-3xl sm:text-5xl lg:text-7xl"
                />
              </p>
              <p className="mt-2">
                FROM <br />
                MUMBAI, INDIA.
              </p>
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
