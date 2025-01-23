import React from "react";
import cases from "../../assets/cases.png";
import Image from "next/image";
import Link from "next/link";

const About4 = () => {
  return (
    <div className="flex flex-col space-x-2 items-center justify-center pt-48">
      <h1 className="text-4xl font-semibold text-[#C7C7BB] dark:text-white mb-20 text-center">
        Yet another startup? This time it’s
        <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
          CASONOVA CASES
        </span>
      </h1>
      <Image src={cases} alt={""} height={800} width={400}></Image>
      <div className="mb-10 text-center mt-20">
        <p className="text-[#C7C7BB] text-5xl px-60 text-center font-medium pb-4 -mt-2">
          Abode of captivating mobile cases!
        </p>

        <p className="text-[#C7C7BB] text-[21px] px-60 text-center font-extralight">
          It all started when I decided to stick a cool sticker on my plain
          transparent phone case, and everyone was like, "Wow, that looks
          amazing!" Two of my friends suggested I turn this idea into a
          business, and I thought, "Why not?" After nearly a year of research
          and development, Casonova is finally ready to make its mark on the
          market with innovative designs and unmatched durability.
        </p>
        <Link
          href="https://www.instagram.com/casonova_cases/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-black text-1xl bg-[#C7C7BB] rounded-[40px] py-2 px-8 mb-12 mt-8">
            Visit Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About4;
