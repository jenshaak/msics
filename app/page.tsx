import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-2/3 mx-auto flex flex-col items-center gap-20">
      <Navbar />
      <Hero />
      <Mission />
      <About />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
