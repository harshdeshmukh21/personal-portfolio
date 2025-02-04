"use client";
import React from "react";
import Image from "next/image";
import cube from "../../assets/cube.png";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Contact = () => {
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black w-full" id="contact">
      <div className="max-w-6xl p-8 mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-medium text-[#C7C7BB] mb-4 text-center">
          Hopefully I've convinced you to work with me!
        </h1>
        <p className="max-w-lg text-[#C7C7BB] text-center mx-auto py-8">
          <InteractiveHoverButton>Lets Connect</InteractiveHoverButton>
        </p>
      </div>

      <div className="bg-black p-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-center">
              <Image src={cube} alt="cube" width={100} height={100} />
            </div>

            <div className="flex space-x-24">
              <div>
                <h3 className="font-medium text-[#C7C7BB] mb-4">Home</h3>
                <ul className="space-y-2 text-[#C7C7BB]">
                  <li>
                    <span
                      onClick={() => handleScroll("about")}
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      About Me
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => handleScroll("works")}
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      Works
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => handleScroll("contact")}
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      Contact
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-[#C7C7BB] mb-4">Works</h3>
                <ul className="space-y-2 text-[#C7C7BB]">
                  <li>
                    <a
                      href="https://github.com/harshdeshmukh21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://behance.net/harshdeshmukh8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      Behance
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dribbble.com/harshdeshmukh21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      Dribbble
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-[#C7C7BB] mb-4">Social</h3>
                <ul className="space-y-2 text-[#C7C7BB]">
                  <li>
                    <a
                      href="https://www.instagram.com/harshhdeshmukhh?igsh=MWlscGhycTk1YnBwag%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/harshd2110"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/harsh-rajesh-deshmukh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-white transition-colors duration-200"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-16 pt-4 border-t border-[#C7C7BB]">
            <p className="text-[#C7C7BB]">Copyright © Harsh Deshmukh</p>
            <div className="flex items-center space-x-8">
              <span
                onClick={scrollToTop}
                className="text-[#C7C7BB] flex items-center cursor-pointer hover:text-white transition-colors duration-200"
              >
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
