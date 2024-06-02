import Image from "next/image";
import React from "react";
import guyOnMountainSunset from "../public/guyOnMountainSunset.jpg";

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative h-[90vh] w-full flex items-center justify-center"
    >
      <Image
        src={guyOnMountainSunset}
        alt="Mission image"
        placeholder="blur"
        sizes="100vw"
        fill
        className="rounded-3xl object-cover h-auto max-w-full"
      />
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center gap-5 max-w-[500px]">
        <h3 className="mb-5">a new era of medicine</h3>
        <h2 className="">MSICS&apos; mission</h2>
        <p>
          MCSICS is a new pharmaceutical company dedicated to revolutionizing
          healthcare through the use of naturally sourced pcylocybin. Our
          mission is to develop innovative solutions that improve the well-being
          of individuals and contribute to the advancement of medical science.
        </p>
      </div>
    </section>
  );
}
