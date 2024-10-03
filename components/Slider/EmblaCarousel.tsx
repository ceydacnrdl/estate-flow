"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import ArrowChevronRight from "@/icons/ArrowChevronRight";
import { clsx } from "yet-another-react-lightbox";

export default function EmblaCarousel({
  slides,
  index,
}: {
  slides: any[];
  index?: number;
}) {
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
    if (emblaApi && index !== undefined) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi, index]);

  return (
    <>
      <div className="relative">
        <div className="viewport" ref={emblaRef}>
          <div className="container">
            {slides.map((item: any, index: any) => (
              <div
                key={`slide-${index}`}
                className={clsx(
                  typeof item === "string"
                    ? "slide w-[100vw] h-[36vw]"
                    : "slide w-[60vw] h-[36vw]"
                )}
              >
                <Image
                  src={typeof item === "string" ? item : item.src}
                  alt={typeof item === "string" ? `Slide ${index}` : item.alt}
                  layout="fill"
                  objectFit={typeof item === "string" ? "cover" : "contain"}
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
