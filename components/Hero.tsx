import React from "react";
import medisinNatur4 from "../public/medisinNatur4.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center -mt-16 h-[85vh]">
      <div className="w-1/2 flex flex-col">
        <h3>Psilocybin pioneers</h3>
        <h1>
          Innovative Healthcare Solutions with Naturally Sourced Psilocybin
        </h1>
      </div>
      <div className="w-1/2 h-full">
        <Image
          src={medisinNatur4}
          alt="HeroImage"
          className="rounded-3xl object-cover h-full w-full"
        />
      </div>
    </section>
  );
}
