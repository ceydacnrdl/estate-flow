import React from "react";
import content from "../../shared/content.json";

export default function Footer() {
  const { footer } = content;

  return (
    <footer className="bg-blue-950 text-white p-5 text-center w-full flex justify-between">
      <div className="p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.1650414736105!2d28.958442254722534!3d40.249863293324935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca147cfbc6c025%3A0xf77e2f569b005bc!2sKorupark%20Sitesi!5e0!3m2!1sen!2str!4v1727902109220!5m2!1sen!2str"
          width="350"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-right content-center">
        <p className="my-4 text-2xl font-bold">{footer.title}</p>
        <p className="mb-2">{footer.address}</p>
        <p className="mb-2">{footer.phone}</p>
        <p className="mb-2">{footer.email}</p>
        <ul className="list-none p-0">
          {footer.links.map((link, index) => (
            <li key={index} className="inline mx-2">
              <a
                href={link.url}
                className="text-white no-underline hover:underline px-4"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
