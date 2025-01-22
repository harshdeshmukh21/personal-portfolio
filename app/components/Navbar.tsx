import React from "react";
import Image from "next/image";
import cube from "../../assets/cube.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-2 bg-black-800">
      <div className="flex items-center">
        <p className="text-[#C7C7BB] text-[25px] mr-4">Harsh Deshmukh</p>
      </div>
      <Image src={cube} alt="cube" width={120} height={120} />
      <div className="flex space-x-6">
        <Link href="/" className="text-[#C7C7BB] text-[25px]">
          About
        </Link>
        <Link href="/" className="text-[#C7C7BB] text-[25px]">
          Works
        </Link>
        <Link href="/" className="text-[#C7C7BB] text-[25px]">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
