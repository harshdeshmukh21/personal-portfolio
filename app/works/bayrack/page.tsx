"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import bayrack from "../../../assets/Bayrack.png";
import { ExternalLink } from "lucide-react";

const Page = () => {
  return (
    // <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row pt-24 md:pt-24 pb-16 gap-12">
          {/* Left Section - Sticky */}
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col gap-8 lg:sticky lg:top-32">
              {/* Tags Section */}
              <div className="flex flex-wrap gap-3">
                {["NextJS", "Tailwind CSS", "Shopify"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm bg-[#C7C7BB] rounded-full border border-gray-700 text-black hover:border-gray-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#C7C7BB] leading-tight">
                  Bayrack
                </h1>
                <p className="text-[#C7C7BB] leading-relaxed">
                  We have revitalized our clothing store website to offer a
                  premium shopping experience. Our redesign emphasizes enhancing
                  user engagement, ensuring accessibility, and delivering a
                  visually captivating interface that showcases our latest
                  fashion collections effortlessly.
                </p>
                {/* Button */}
                <a
                  href="https://bayrack.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C7C7BB] hover:bg-grey-200 text-black rounded-lg transition-colors duration-300"
                >
                  Visit Website
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Scrollable */}
          <div className="w-full lg:w-3/5">
            <div className="bg-gray-900/50 rounded-xl p-4">
              <Image
                src={bayrack}
                alt="Bayrack Clothing"
                width={1200}
                height={2400}
                className="w-full h-auto rounded-lg hover:scale-[1.02] transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
