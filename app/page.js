import Image from "next/image";
import CardService from "@/components/CardService";
import CardProduct from "./components/CardProduct";
import Hero from "./components/Hero";
import Merk from "./components/Merk";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

import product1 from "@/public/genset.png";
import matabor from "@/public/matabor.png";
import mesinPR from "@/public/mesinpotongr.png";
import mesinGenset from "@/public/mesingenset.png";
import truckQuick from "@/public/truckquick.png";
import truck from "@/public/truck.png";
import tritonDC from "@/public/triton.png";
import iconWa from "@/public/logo-wa.png";

import traktorL from "@/public/mobil.png";
// import trraktorL from "@/public/traktor.png"
// import trraktorL from "@/public/traktor.png"

export default function Home() {
  return (
    <div className="">
      <a
        href="https://wa.me/+6282278639085"
        className="z-10 bottom-20 right-7 fixed"
      >
        <Image
          src={iconWa}
          alt="service-logo"
          className="w-[40px] md:w-[52px]  "
        />
      </a>
      <Hero />
      {/* product */}
      <div className="flex flex-col items-center justify-center mx-auto py-6 pt-12 gap-4 font-semibold text-[26px] overflow-hidden">
        <h1 className="text-[20px] ">
          <span className="text-green-400 font-bold">SPAREPART</span> UNGGULAN
          UNTUK ANDA
        </h1>
        <div className="flex items-center justify-center h-[540px] sm:h-[665px] md:h-[815px] lg:h-[905px] w-full max-w-7xl flex-col  p-4 lg:px-28 md:px-8">
          <div className="flex items-center justify-center  w-full h-full">
            <CardProduct title={"Hino Dump Truck 130 HD"} image={""} />
            <CardProduct title={"Hino Damp Truck 500"} image={truck} />
            <CardProduct title={"Traktor Landini"} image={traktorL} />
          </div>
          <div className="flex items-center justify-center   w-full h-full">
            <CardProduct title={"Triton Double Cabin"} image={tritonDC} />
            <CardProduct title={"Truck Quick"} image={truckQuick} />
            <CardProduct title={"Mesin Genset"} image={mesinGenset} />
          </div>
          <div className="flex items-center justify-center   w-full h-full">
            <CardProduct title={"Mesin Potong Rumput"} image={mesinPR} />
            <CardProduct title={"Genset"} image={product1} />
            <CardProduct title={"Beragam Mata Bor"} image={matabor} />
          </div>
        </div>
      </div>

      <div className=" relative max-w-7xl mx-auto py-[7px] px-6 md:px-8 lg:px-10">
        <Merk />
        <Services />
        <About />
      </div>
      <CardService />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
