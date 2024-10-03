"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "@/icons/Link";
import Eye from "@/icons/Eye";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import EmblaCarousel from "../Slider/EmblaCarousel";

export default function Gallery() {
  const [clicked, setClicked] = useState(false);
  const [imgIndex, setimgIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setClicked(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setimgIndex(current);

  const images = [
    {
      src: "https://koruparkevleri.com/resim/IMG-20221014-WA0015.jpg",
      alt: "Yürüyüş Yolları 10",
    },
    {
      src: "https://koruparkevleri.com/resim/IMG-20221014-WA0013.jpg",
      alt: "Yürüyüş Yolları 9",
    },
    {
      src: "https://koruparkevleri.com/resim/IMG-20221014-WA0011.jpg",
      alt: "Yürüyüş Yolları 7",
    },
    {
      src: "https://koruparkevleri.com/resim/IMG-20221014-WA0010.jpg",
      alt: "Yürüyüş Yolları 6",
    },
    {
      src: "https://koruparkevleri.com/resim/IMG-20221014-WA0009.jpg",
      alt: "Yürüyüş Yolları 5",
    },
    {
      src: "https://koruparkevleri.com/resim/IMG-20221014-WA0008.jpg",
      alt: "Yürüyüş Yolları 4",
    },
  ];

  return (
    <>
      <div className="w-full h-[100vh] relative mb-8">
        <div className="absolute inset-0 brightness-50">
          <Image
            src="/carousel-2.jpg"
            alt="About"
            layout="fill"
            objectFit="cover"
            objectPosition="top 10%"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 p-8">
            {images.map((image, index) => (
              <div key={index} className={`relative p-40 group`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white w-full px-20 text-lg font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center">
                    {image.alt}

                    <div className="flex justify-between w-full mt-2">
                      <a
                        type="button"
                        className=" bg-blue-950 hover:bg-green-500 p-4 rounded-xl px-6"
                        href="/"
                      >
                        <Link />
                      </a>
                      <button
                        type="button"
                        className="bg-blue-950 hover:bg-green-500 p-4 rounded-xl px-6"
                        onClick={() => {
                          setClicked(true);
                          setimgIndex(index);
                        }}
                      >
                        <Eye />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {clicked ? (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50 w-full overflow-hidden"
          onClick={() => setClicked(false)}
        >
          <div
            className="relative bg-transparent p-8 pl-16 rounded-lg shadow-lg text-center max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <EmblaCarousel slides={images} index={imgIndex} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
