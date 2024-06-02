import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="flex w-full">
      <div className="flex flex-col gap-4 w-1/2">
        <h2>Contact Us</h2>
        <form className="flex flex-col gap-4 w-max">
          <input
            type="text"
            placeholder="Name"
            className="rounded-full p-3 px-5 bg-slate-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-full p-3 px-5 bg-slate-200"
          />
          <textarea
            placeholder="Message"
            className="rounded-3xl p-3 px-5 bg-slate-200 h-40"
          ></textarea>
          <button
            type="submit"
            className="rounded-full px-6 py-3 bg-[#D0D1F7] w-max hover:bg-[#B3B4DA]"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <h3>Investor Contact</h3>
        <div className="flex items-center gap-3">
          <div className="bg-slate-200 rounded-full w-max p-3">
            <EnvelopeClosedIcon className=" w-6 h-6" />
          </div>
          <p>info@msics.com</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-200 rounded-full w-max p-3">
            <MobileIcon className=" w-6 h-6" />
          </div>
          <p>info@msics.com</p>
        </div>
      </div>
    </section>
  );
}
