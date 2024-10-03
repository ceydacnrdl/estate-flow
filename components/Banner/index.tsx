"use client";

import React from "react";
import content from "../../shared/content.json";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../Slider/EmblaCarousel";

export default function Banner() {
  return (
    <div className="relative">
      <EmblaCarousel />
    </div>
  );
}
