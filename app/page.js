import CardService from "@/components/CardService";
import product1 from "@/public/genset.png";
import matabor from "@/public/matabor.png";
import CardProduct from "./components/CardProduct";
import Hero from "./components/Hero";
import Merk from "./components/Merk";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center justify-center mx-auto py-6 gap-4 font-semibold text-[26px]">
        <h1 className="text-[20px]">
          <span className="text-green-400 font-bold">SPAREPART</span> Unggulan
          Untuk Anda
        </h1>
        <div className="flex items-center justify-center h-full max-w-7xl gap-3 flex-wrap p-4">
          <CardProduct title={"Genset"} image={product1} />
          <CardProduct title={"Genset"} image={product1} />
          <CardProduct title={"Genset"} image={product1} />
          <CardProduct title={"Genset"} image={product1} />
          <CardProduct title={"Genset"} image={product1} />
          <CardProduct title={"Genset"} image={product1} />
          <CardProduct title={"Genset"} image={product1} />
          <CardProduct title={"Genset"} image={product1} />
          <CardProduct title={"Beragam Mata Bor"} image={matabor} />
        </div>
      </div>

      <div className=" relative max-w-7xl mx-auto py-[7px] px-6 md:px-8 lg:px-10">
        <Merk />

        <About />
        <Services />
      </div>
      <CardService />
      <Contact />
    </>
  );
}
