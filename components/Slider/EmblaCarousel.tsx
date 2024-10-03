"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import img from "../../public/banner.jpeg";
import img1 from "../../public/banner1.jpeg";
import img2 from "../../public/banner2.jpeg";
import ArrowChevronRight from "@/icons/ArrowChevronRight";

const slides = [img.src, img1.src, img2.src];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 2000 }), Fade()]
  );

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi]);

  return (
    <>
      <div className="relative">
        <div className="viewport" ref={emblaRef}>
          <div className="container">
            {slides.map((item, index) => (
              <div key={`slide-${index}`} className="slide">
                <Image
                  src={item}
                  alt={`Slide ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="absolute left-8 top-1/2 transform -translate-y-1/2"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ArrowChevronRight className="rotate-icon" />
        </button>
        <button
          type="button"
          className="absolute right-8 top-1/2 transform -translate-y-1/2"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ArrowChevronRight className="" />
        </button>
      </div>
    </>
  );
}
