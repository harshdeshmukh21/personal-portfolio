import React from "react";
import BoxReveal from "@/components/ui/box-reveal";
import Image from "next/image";
import Harsh from "../../assets/Harsh.jpg";
import MorphingText from "@/components/ui/morphing-text";

const texts = ["DESIGNER", "DEVELOPER", "FOUNDER"];

const AboutMain = () => {
  return (
    <div className="flex-col items-center text-center py-10 justify-center">
      {/* <BoxReveal boxColor={"#C7C7BB"} duration={0.5}>
        <p className="text-[3.5rem] text-[#C7C7BB] font-normal mb-10">
          Hey, I am Harsh Deshmukh<span className="text-[#C7C7BB]">.</span>
        </p>
      </BoxReveal> */}
      <div className="flex flex-row justify-left items-start space-x-10">
        <Image
          src={Harsh}
          alt={""}
          height={900}
          width={500}
          className="ml-28"
        ></Image>
        {/* <div className="flex items-center text-center justify-center bg-[#C7C7BB] w-[40vw] h-[62vh]"></div> */}
        <BoxReveal boxColor={"#C7C7BB"} duration={0.5}>
          <p className="text-9xl text-[#C7C7BB] font-bold mb-10 flex-wrap text-left">
            HELLO, MY <br />
            NAME IS
            <p className="bg-[#C7C7BB] text-black w-fit">HARSH</p>
            I AM A<MorphingText texts={texts} className="-mb-24" />
            <br />
            FROM <br />
            MUMBAI, INDIA.
          </p>
        </BoxReveal>
      </div>
    </div>
  );
};

export default AboutMain; 
