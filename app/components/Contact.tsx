import React from "react";
import Image from "next/image";
import cube from "../../assets/cube.png";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Contact = () => {
  return (
    <div className="bg-black w-full">
      <div className="max-w-6xl p-8 mx-auto flex flex-col items-center">
        {/* Header Section */}
        <h1 className="text-4xl font-medium text-[#C7C7BB] mb-4 text-center">
          Hopefully I've concivnced you to work with me!
        </h1>
        <p className="max-w-lg text-[#C7C7BB] text-center mx-auto py-8">
          {/* <ShinyButton>Shiny Button</ShinyButton> */}
          <InteractiveHoverButton>Lets Connect</InteractiveHoverButton>
        </p>
      </div>

      {/* Footer Section */}
      <div className="bg-black p-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            {/* Logo Section */}
            <div className="flex flex-col items-center">
              <Image src={cube} alt="cube" width={100} height={100} />
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-24">
              <div>
                <h3 className="font-medium text-[#C7C7BB] mb-4">Home</h3>
                <ul className="space-y-2 text-[#C7C7BB]">
                  <li>About Me</li>
                  <li>Works</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-[#C7C7BB] mb-4">Works</h3>
                <ul className="space-y-2 text-[#C7C7BB]">
                  <li>Github</li>
                  <li>Behance</li>
                  <li>Dribble</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-[#C7C7BB] mb-4">Social</h3>
                <ul className="space-y-2 text-[#C7C7BB]">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex justify-between items-center mt-16 pt-4 border-t border-[#C7C7BB]">
            <p className="text-[#C7C7BB]">Copyright © Harsh Deshmukh</p>
            <div className="flex items-center space-x-8">
              <span className="text-[#C7C7BB] flex items-center">
                Back to top
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
