import React from "react";
import content from "../../shared/content.json";
import Whatsapp from "@/icons/Whatsapp";
import Phone from "@/icons/Phone";
import Email from "@/icons/Email";

export default function ContactInfo() {
  return (
    <div className="flex justify-between w-full text-blue-900 text-xl">
      <div className="bg-blue-400 p-10 w-full relative text-blue-950 flex  justify-center items-center content-center">
        <a href="https://goo.gl/maps/9D3aEUQjeFuXpvyM6" className="pr-4">
          <Phone />
        </a>
        <div>
          <div className="font-bold">Bizi Arayın</div>
          <div>{content.footer.whatsapp}</div>
        </div>
      </div>
      <div className="bg-blue-900 p-10 w-full !text-white flex justify-center items-center content-center">
        <a href="tel:90-224-241-51-35" className="pr-4">
          <Whatsapp />
        </a>
        <div>
          <div className="font-bold">Whatsapp</div>
          <div>{content.footer.phone}</div>
        </div>
      </div>
      <div className="bg-blue-400 p-10 w-full text-blue-950 flex justify-center items-center content-center">
        <div className="pr-4">
          <Email />
        </div>
        <div>
          <div className="font-bold">Email</div>
          <div>{content.footer.email}</div>
        </div>
      </div>
    </div>
  );
}
