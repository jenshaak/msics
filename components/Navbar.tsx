import Image from "next/image";
import React from "react";
import logoMsics from "../public/logoMsics.png";

const links = ["Mission", "Product", "Contact"];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center pt-3">
      <div className="flex justify-center items-center w-44">
        <Image src={logoMsics} alt="MSICS logo" />
      </div>
      <div className="flex justify-center items-center gap-10">
        {links.map((link, i) => (
          <a href={`#${link.toLowerCase()}`} key={i}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
