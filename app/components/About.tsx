import React from "react";
import TextRevealByWord from "@/components/ui/text-reveal";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* <div className="flex flex-row justify-between px-24">
        <p className="text-7xl text-[#C7C7BB] mt-20">About Me</p>
        <div>
          <p className="text-[20px] font-thin text-[#C7C7BB] mt-12">
            Hey, I am Harsh. I am a full-stack developer with <br></br> a
            passion for creating modern and intuitive user <br></br> interfaces.
            I am proficient in React, Next.js, and Tail- <br></br> wind CSS. I
            am also familiar with Node.js, Express.js, <br></br>and MongoDB.
          </p>
        </div>
      </div> */}
      <TextRevealByWord text="The communication between neurons via electrical impulse, Every color, every gradient, their glimpse is diverse. Don’t worry, your expense will be worth every dime. Coz I scale innovations 1 pixel at a time!" />
      <div></div>
    </div>
  );
};

export default About;
