import React from "react";
import Image from "next/image";
import logo from "../../public/brand.png";
import content from "../../shared/content.json";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="relative bg-transparent bg-white">
      <div className="flex">
        <div className="px-4 py-4">
          <Image
            src={logo}
            placeholder="blur"
            alt={"Brand"}
            height={256}
            width={256}
          />
        </div>
        <Menu content={content} />
      </div>
    </div>
  );
}
