"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Burger from "./Burger";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const pathname = usePathname();

  return (
    <div className="relative shadow-md">
      <nav className="relative max-w-7xl mx-auto py-[7px] px-6 md:px-8 lg:px-10 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-base md:text-lg font-semibold  flex items-center gap-3 md:gap-4"
            >
              <img
                className="w-14 h-[26px] md:w-[68px] md:h-[32px]"
                src="/hku.png"
                alt="Logo"
              />
              <h1>Hadar Karya Utama</h1>
            </Link>
          </div>
          <div className="hidden lg:block ">
            <ul className="flex items-center  text-lg space-x-4 text-gray-700 font-semibold  ">
              <li
                className={
                  pathname === "/" ? "text-green-400 ml-auto" : "ml-auto"
                }
              >
                <Link href="/">Beranda</Link>
              </li>
              <li
                className={
                  pathname === "/about" ? "text-green-400 ml-auto" : "ml-auto"
                }
              >
                <Link href="/about">Tentang</Link>
              </li>
              <li className={pathname === "/services" ? "text-green-400" : ""}>
                <Link href="/services">Layanan</Link>
              </li>
              <li className={pathname === "/blog" ? "text-green-400" : ""}>
                <Link href="/product" prefetch={false}>
                  Produk
                </Link>
              </li>
              {/* <li className={pathname === "/contact" ? "text-green-400" : ""}>
                <Link href="#" prefetch={false}>
                  Kontak
                </Link>
              </li> */}
              <a href="#">
                <h1 className="py-2.5 px-6 rounded-full bg-green-500 text-white  text-base">
                  SELENGKAPNYA
                </h1>
              </a>
            </ul>
          </div>
          <Burger handleClick={handleClick} isActive={isActive} />
        </div>
      </nav>
      <div
        className={`w-full lg:hidden transition-all duration-500 bg-white transform absolute top-[78px] ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden ease-in-out z-10`}
      >
        <div className="pb-2 space-y-1 tracking-wide text-[14px] text-gray-700 font-semibold">
          <div className="border-t">
            <Link
              className={`p-3.5 px-8 ${
                pathname === "/" ? "text-green-400 p-2 block " : "p-2 block"
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
                  ? "text-green-400 p-2 block "
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
                  ? "text-green-400 p-2 block "
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
                pathname === "/product"
                  ? "text-green-400 p-2 block "
                  : "p-2 block"
              }`}
              href="/product"
              prefetch={false}
            >
              Produk
            </Link>
          </div>
          {/* <div className="border-t">
            <Link
              className={`p-3.5 px-8 ${
                pathname === "/contact"
                  ? "text-green-400 p-2 block "
                  : "p-2 block"
              }`}
              href="/contact"
              prefetch={false}
            >
              Kontak
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
