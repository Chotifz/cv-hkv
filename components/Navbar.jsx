"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Burger from "./Burger";
import bgMain from "../public/bgmain.png";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const pathname = usePathname();

  return (
    <div
      className="relative  h-[900px] md:h-[565px] lg:h-[760px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgMain.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-55 z-0"></div>
      <nav className="relative max-w-7xl mx-auto py-3 px-6 md:px-8 lg:px-10 z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bebas tracking-wider">
              <img className="w-28" src="/hku.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center font-teko tracking-wide text-lg space-x-4 text-white">
              <li
                className={
                  pathname === "/" ? "text-orange-600 ml-auto" : "ml-auto"
                }
              >
                <Link href="/">Beranda</Link>
              </li>
              <li
                className={
                  pathname === "/about" ? "text-orange-600 ml-auto" : "ml-auto"
                }
              >
                <Link href="/about">Tentang</Link>
              </li>
              <li className={pathname === "/services" ? "text-orange-600" : ""}>
                <Link href="/services">Layanan</Link>
              </li>
              <li className={pathname === "/blog" ? "text-orange-600" : ""}>
                <Link href="/blog" prefetch={false}>
                  Blog
                </Link>
              </li>
              <li className={pathname === "/contact" ? "text-orange-600" : ""}>
                <Link href="/contact" prefetch={false}>
                  Kontak
                </Link>
              </li>
              <div>
                <h1 className="py-3 px-6 rounded-full bg-orange-400 text-white font-semibold font-teko">
                  SELENGKAPNYA
                </h1>
              </div>
            </ul>
          </div>
          <Burger handleClick={handleClick} isActive={isActive} />
        </div>
        <div className="flex flex-col py-16 gap-7 md:gap-12 md:w-1/2 z-10">
          <span className="flex flex-col gap-5 text-white">
            <h1 className="font-semibold">SOLUSI KENDARAN & INDUSTRI</h1>
            <h1 className="font-semibold text-4xl sm:text-5xl lg:text-7xl">
              Kebutuhan Suku Cadang Terpercaya
            </h1>
            <p className="text-[14px] md:text-[16px] font-medium">
              Temukan suku cadang mobil, traktor, genset dan mesin industri
              berkualitas. Hadar Karya Utama siap mendukung kesuksesan bisnis
              anda.
            </p>
          </span>
          <div className="">
            <h1 className="py-3 px-6 rounded-full bg-orange-400 text-white font-teko inline-block">
              SELENGKAPNYA
            </h1>
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden transition-all duration-500 bg-white transform ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden ease-in-out z-10`}
      >
        <div className="pb-2 space-y-1 font-teko tracking-wider text-[14px]">
          <div className="border-t">
            <Link
              className={`p-3.5 px-8 ${
                pathname === "/" ? "text-orange-600 p-2 block " : "p-2 block"
              }`}
              href="/"
            >
              Beranda
            </Link>
          </div>
          <div className="border-t">
            <Link
              className={`p-3.5 px-8 ${
                pathname === "/about"
                  ? "text-orange-600 p-2 block "
                  : "p-2 block"
              }`}
              href="/about"
            >
              Tentang
            </Link>
          </div>
          <div className="border-t">
            <Link
              className={`p-3.5 px-8 ${
                pathname === "/services"
                  ? "text-orange-600 p-2 block "
                  : "p-2 block"
              }`}
              href="/services"
            >
              Layanan
            </Link>
          </div>
          <div className="border-t">
            <Link
              className={`p-3.5 px-8 ${
                pathname === "/blog"
                  ? "text-orange-600 p-2 block "
                  : "p-2 block"
              }`}
              href="/blog"
              prefetch={false}
            >
              Blog
            </Link>
          </div>
          <div className="border-t">
            <Link
              className={`p-3.5 px-8 ${
                pathname === "/contact"
                  ? "text-orange-600 p-2 block "
                  : "p-2 block"
              }`}
              href="/contact"
              prefetch={false}
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
