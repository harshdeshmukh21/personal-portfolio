"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import cube from "../../assets/cube.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Works", id: "works" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 flex justify-between items-center py-2 md:py-0 px-4 md:px-10 bg-black-800 backdrop-blur-md bg-opacity-60 border-b border-b-[#323232] transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center">
        <p className="text-[#C7C7BB] text-base md:text-lg font-light mr-4">
          Harsh Deshmukh
        </p>
      </div>

      {/* Center logo - hidden on mobile */}
      <div className="hidden md:block mt-2">
        <Image src={cube} alt="cube" width={80} height={80} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <span
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="text-[#C7C7BB] text-lg font-light cursor-pointer hover:text-white transition-colors duration-200"
          >
            {link.name}
          </span>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-[#C7C7BB] hover:text-white"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black bg-opacity-95 border-b border-b-[#323232] md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <span
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-[#C7C7BB] text-lg font-light cursor-pointer hover:text-white transition-colors duration-200"
              >
                {link.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
