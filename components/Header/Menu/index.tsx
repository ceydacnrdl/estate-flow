import HamburgerIcon from "@/icons/HamburgerIcon";
import React from "react";

interface Menu {
  content: any;
}

export default function Menu({ content }: any) {
  return (
    <div className="w-full pl-28">
      <div className="bg-blue-950 hidden lg:flex lg:gap-4 p-2 text-white">
        <p className="px-4 border-r-2 border-white">{content.footer.email}</p>
        <p className="px-4 border-r-2 border-white">{content.footer.phone}</p>
        <p className="px-4 border-r-2 border-white">
          {content.footer.whatsapp}
        </p>
      </div>
      <div>
        <div className="block lg:hidden">
          <HamburgerIcon />
        </div>
        <div className="hidden lg:block py-7 px-4">
          {content.menu.map((item: any, index: number) => (
            <a
              key={index}
              href={item}
              className="hover:underline text-lg text-blue-900 font-semibold px-4"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
