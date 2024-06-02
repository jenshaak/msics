import React from "react";
import LogoAlodia from "../public/LogoAlodia.png";
import logoCareplus from "../public/logoCareplus.png";
import logoKettering from "../public/logoKettering.png";
import logoWorti from "../public/logoWorti.png";
import Image from "next/image";

const partners = ["LogoAlodia", "logoCareplus", "logoKettering", "logoWorti"];

export default function Partners() {
  return (
    <section className="flex flex-col items-center mt-10 gap-3">
      <h3>our partners</h3>
      <div className="flex justify-evenly items-center h-10vh gap-16">
        <div className="h-full w-full flex justify-center items-center">
          <Image
            src={LogoAlodia}
            alt="LogoAlodia"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <Image
            src={logoCareplus}
            alt="logoCareplus"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <Image
            src={logoKettering}
            alt="logoKettering"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <Image
            src={logoWorti}
            alt="logoWorti"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
