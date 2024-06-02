import React from "react";
import forsker1 from "../public/forsker1.jpg";
import forsker3 from "../public/forsker3.jpg";
import forskerePlanter from "../public/forskerePlanter.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="product"
      className="flex items-center justify-between h-[70vh]"
    >
      <div className="w-5/12 flex flex-col gap-5">
        <h3 className="pb-5">innovative medicine</h3>
        <h2>MSX-6 - an innovative psilocybin drug</h2>
        <p>
          At MCSICS, we are developing unique healthcare solutions that harness
          the power of naturally sourced pcylocybin. Our innovative approach
          aims to revolutionize the way we address various health conditions.
        </p>
      </div>
      <div className="w-1/2 flex flex-col gap-5 h-full">
        <div className="flex items-center justify-centet h-1/2 w-full">
          <Image
            src={forsker3}
            alt="Scientist 1"
            placeholder="blur"
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center h-1/2 w-full gap-5">
          <div className="flex items-center justify-center w-1/2 h-full">
            <Image
              src={forskerePlanter}
              alt="Scientists and plants"
              className="rounded-3xl object-cover h-full w-full"
            />
          </div>
          <div className="flex items-center justify-center w-1/2 h-full">
            <Image
              src={forsker1}
              alt="Scientist 2"
              className="rounded-3xl object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
