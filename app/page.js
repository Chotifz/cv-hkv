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
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const serviceRef = useRef(null);

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToService = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <header className="bg-white  w-full sticky top-0 z-50  shadow-md">
        <Navbar
          onScrollHero={scrollToHero}
          onScrollProduct={scrollToProduct}
          onScrollService={scrollToService}
        />
      </header>
      <a
        href="https://wa.me/+6282278639085"
        className="flex z-10 bottom-20 right-7 fixed cursor-pointer lg:hidden"
      >
        <Image
          src={iconWa}
          alt="service-logo"
          className="w-[30px] md:w-[42px]"
        />
      </a>
      <div ref={heroRef}>
        <Hero />
      </div>
      {/* product */}
      <div
        ref={productRef}
        className="flex flex-col items-center justify-center mx-auto py-6 pt-12 gap-4 font-semibold text-[26px] overflow-hidden"
      >
        <h1 className="text-[20px]">
          <span className="text-green-400 font-bold">SPAREPART</span> UNGGULAN
          UNTUK ANDA
        </h1>
        <div className="flex items-center justify-center h-[540px] sm:h-[665px] md:h-[815px] lg:h-[905px] w-full max-w-7xl flex-col p-4 lg:px-28 md:px-8">
          <div className="flex items-center justify-center w-full h-full">
            <CardProduct title={"Hino Dump Truck 130 HD"} image={truckHd} />
            <CardProduct title={"Hino Damp Truck 500"} image={truck} />
            <CardProduct title={"Traktor Landini"} image={traktorL} />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <CardProduct title={"Triton Double Cabin"} image={tritonDC} />
            <CardProduct title={"Truck Quick"} image={truckQuick} />
            <CardProduct title={"Mesin Genset"} image={mesinGenset} />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <CardProduct title={"Mesin Potong Rumput"} image={mesinPR} />
            <CardProduct title={"Genset"} image={product1} />
            <CardProduct title={"Beragam Mata Bor"} image={matabor} />
          </div>
        </div>
      </div>

      <div
        ref={serviceRef}
        className="relative max-w-7xl mx-auto py-[7px] px-6 md:px-8 lg:px-10"
      >
        <Merk />
        <Services />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
