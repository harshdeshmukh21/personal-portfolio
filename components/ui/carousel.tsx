"use client";
import { useEffect, useId, useRef, useState } from "react";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";

interface SlideProps {
  slide: { src: string; button: string; title: string };
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <li
      ref={slideRef}
      className="relative flex flex-col items-center justify-center text-center text-white transition-all duration-300 ease-in-out flex-shrink-0 w-full h-full"
      onClick={() => handleSlideClick(index)}
    >
      <div className="absolute w-full h-full bg-[#1D1F2F] overflow-hidden aspect-[16/9]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={slide.title}
          src={slide.src}
          loading="eager"
          decoding="sync"
        />
        {current === index && (
          <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
        )}
      </div>
      <article
        className={`relative p-8 transition-opacity duration-1000 ease-in-out ${
          current === index ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
          {slide.title}
        </h2>
        <button className="mt-6 px-6 py-2 bg-white text-black text-sm rounded-lg shadow-md hover:shadow-lg transition duration-200">
          {slide.button}
        </button>
      </article>
    </li>
  );
};

interface CarouselProps {
  slides: { src: string; button: string; title: string }[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div
      className="relative w-[60vw] max-w-[1000px] aspect-[16/9] mx-auto mb-20"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex gap-20 w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * (100 + 4)}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)] py-4 mb-20">
        <button
          className="px-4 py-2 bg-[#C7C7BB] text-white rounded-[30px] shadow-md"
          onClick={handlePreviousClick}
        >
          <IconArrowNarrowLeft className="text-neutral-600 dark:text-neutral-200" />
        </button>
        <button
          className="px-4 py-2 bg-[#C7C7BB] text-white rounded-[30px] shadow-md ml-4"
          onClick={handleNextClick}
        >
          <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
      </div>
    </div>
  );
}
