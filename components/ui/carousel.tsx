"use client";
import React, { useCallback, useEffect, useState, memo } from "react";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";

interface SlideData {
  title: string;

  button: string;

  src: string;

  path?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  onExplore: (slide: SlideData) => void;
}

const Slide = memo(({ slide, index, current, onExplore }: SlideProps) => {
  return (
    <li className="relative flex flex-col items-center justify-center text-center text-white transition-all duration-300 ease-in-out flex-shrink-0 w-full h-full">
      <div className="absolute w-full h-full bg-[#1D1F2F] overflow-hidden aspect-[16/9]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={slide.title}
          src={slide.src}
          loading="lazy"
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
        <button
          onClick={() => onExplore(slide)}
          className="mt-6 px-6 py-2 bg-white text-black text-sm rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          {slide.button}
        </button>
      </article>
    </li>
  );
});

Slide.displayName = "Slide";

interface CarouselProps {
  slides: SlideData[];
  onExplore: (slide: SlideData) => void;
}

export default function Carousel({ slides, onExplore }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const previousSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-[60vw] max-w-[1000px] aspect-[16/9] mx-auto mb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
            onExplore={onExplore}
          />
        ))}
      </ul>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)] py-4">
        <button
          className="px-4 py-2 bg-[#C7C7BB] text-white rounded-[30px] shadow-md hover:bg-[#b8b8ac] transition-colors"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <IconArrowNarrowLeft className="text-neutral-600 dark:text-neutral-200" />
        </button>
        <button
          className="px-4 py-2 bg-[#C7C7BB] text-white rounded-[30px] shadow-md ml-4 hover:bg-[#b8b8ac] transition-colors"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
      </div>
    </div>
  );
}
