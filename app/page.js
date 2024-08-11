"use client";

import { useRef } from "react";
import CardProduct from "./components/CardProduct";
import Hero from "./components/Hero";
import Merk from "./components/Merk";
import Services from "./components/Services";
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
import truckHd from "@/public/truckhd.png";

export default function Home() {
  const heroRef = useRef(null);

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <a
        onClick={scrollToHero}
        id="arrow"
        className="flex z-10 bottom-20 right-7 fixed cursor-pointer"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8543 11.9741L16.2686 10.5599L12.0259 6.31724L7.78327 10.5599L9.19749 11.9741L11.0259 10.1457V17.6828H13.0259V10.1457L14.8543 11.9741Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <div ref={heroRef}>
        <Hero />
      </div>
      {/* product */}
      <div className="flex flex-col items-center justify-center mx-auto py-6 pt-12 gap-4 font-semibold text-[26px] overflow-hidden">
        <h1 className="text-[20px] ">
          <span className="text-green-400 font-bold">SPAREPART</span> UNGGULAN
          UNTUK ANDA
        </h1>
        <div className="flex items-center justify-center h-[540px] sm:h-[665px] md:h-[815px] lg:h-[905px] w-full max-w-7xl flex-col  p-4 lg:px-28 md:px-8">
          <div className="flex items-center justify-center  w-full h-full">
            <CardProduct title={"Hino Dump Truck 130 HD"} image={truckHd} />
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
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
