"use client";

import React from "react";
import content from "../../shared/content.json";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../Slider/EmblaCarousel";
import img from "../../public/banner.jpeg";
import img1 from "../../public/banner1.jpeg";
import img2 from "../../public/banner2.jpeg";

export default function Banner() {
  const slides = [img.src, img1.src, img2.src];
  return (
    <div className="relative">
      <EmblaCarousel slides={slides} />
    </div>
  );
}
