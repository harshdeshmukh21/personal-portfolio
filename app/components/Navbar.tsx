import React from "react";
import Image from "next/image";
import cube from "../../assets/cube.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-10 py-2 bg-black-800 backdrop-blur-md bg-opacity-60">
      <div className="flex items-center">
        <p className="text-[#C7C7BB] text-[18px] font-light mr-4">
          Harsh Deshmukh
        </p>
      </div>
      <Image src={cube} alt="cube" width={80} height={80} />
      <div className="flex space-x-6">
        <Link href="/" className="text-[#C7C7BB] text-[18px] font-light">
          About
        </Link>
        <Link href="/" className="text-[#C7C7BB] text-[18px] font-light">
          Works
        </Link>
        <Link href="/" className="text-[#C7C7BB] text-[18px] font-light">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
