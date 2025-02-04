"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import cube from "../../assets/cube.png";
import Link from "next/link";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-10 py-2 bg-black-800 backdrop-blur-md bg-opacity-60 border-b border-b-[#323232] transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center">
        <p className="text-[#C7C7BB] text-[18px] font-light mr-4">
          Harsh Deshmukh
        </p>
      </div>
      <Image src={cube} alt="cube" width={80} height={80} />
      <div className="flex space-x-6">
        <span
          onClick={() => handleScroll("about")}
          className="text-[#C7C7BB] text-[18px] font-light cursor-pointer hover:text-white transition-colors duration-200"
        >
          About
        </span>
        <span
          onClick={() => handleScroll("works")}
          className="text-[#C7C7BB] text-[18px] font-light cursor-pointer hover:text-white transition-colors duration-200"
        >
          Works
        </span>
        <span
          onClick={() => handleScroll("contact")}
          className="text-[#C7C7BB] text-[18px] font-light cursor-pointer hover:text-white transition-colors duration-200"
        >
          Contact
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
