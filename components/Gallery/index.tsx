import React from "react";
import Image from "next/image";

export default function Gallery() {
  return (
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
          <div className="relative">
            <Image
              src="https://koruparkevleri.com/resim/IMG-20221014-WA0015.jpg"
              alt="About"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative p-40">
            <Image
              src="https://koruparkevleri.com/resim/IMG-20221014-WA0013.jpg"
              alt="About"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative p-40">
            <Image
              src="https://koruparkevleri.com/resim/IMG-20221014-WA0011.jpg"
              alt="About"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative p-40">
            <Image
              src="https://koruparkevleri.com/resim/IMG-20221014-WA0010.jpg"
              alt="About"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative p-40">
            <Image
              src="https://koruparkevleri.com/resim/IMG-20221014-WA0009.jpg"
              alt="About"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative p-40">
            <Image
              src="https://koruparkevleri.com/resim/IMG-20221014-WA0008.jpg"
              alt="About"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
