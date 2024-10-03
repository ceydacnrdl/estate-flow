import React from "react";
import Image from "next/image";
import content from "../../shared/content.json";

export default function AboutCard() {
  return (
    <div className="container mx-auto px-40 py-32 text-black bg-white">
      <div className="flex w-full ">
        <div className="h-full w-full">
          <Image
            src="/about.jpg"
            className=" rounded-lg brightness-50"
            alt="About"
            width={500}
            height={500}
          />
        </div>
        <div className="mx-auto p-4 content-center">
          <div className="text-start text-blue-900 font-bold">
            {content.about.title.toUpperCase()}
          </div>
          <div className="text-start text-blue-900 text-2xl font-bold">
            {content.about.subTitle}
          </div>
          <div className="text-gray-600 text-2xl my-4 text-start">
            {content.about.content1}
          </div>
          <div className="text-gray-600 text-xl text-start">
            {content.about.content2}
          </div>
        </div>
      </div>
    </div>
  );
}
