"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import fasttap from "../../../assets/FastTap.png";
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
                {["NextJS", "Tailwind CSS", "Cloudinary", "AWS", "Clerk"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm bg-[#C7C7BB] rounded-full border border-gray-700 text-black hover:border-gray-500 transition-colors"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#C7C7BB] leading-tight">
                  FastTap Solutions
                </h1>
                <p className="text-[#C7C7BB] leading-relaxed">
                  We have crafted this website in a very unique fashion. It is a
                  complete package of a portfolio website and an admin panel
                  where the client can create digital templates which will be
                  visible after tapping the NFC card or scanning the QR code.
                  The unique thing about this project is, the client can
                  customize the color theme, fonts, add images, PDFs, and change
                  backgrounds of the templates. On top of that, the client can
                  share the edit access to their respective customers, and they
                  can edit and save the changes.
                </p>
                {/* Button */}
                <a
                  href="https://www.fasttapsolutions.com/"
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
                src={fasttap}
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
