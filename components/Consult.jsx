import React from "react";

const Consult = () => {
  return (
    <div className="w-full items-center justify-center flex h-[315px] lg:h-[520px] bg-green-600 rounded-3xl lg:rounded-[3.5rem]">
      <div className="flex flex-col items-center justify-beetween text-white p-8 text-center gap-4 lg:gap-6">
        <h1 className="font-semibold ">LAKUKAN LANGKAH PERTAMA</h1>
        <h2 className="font-semibold text-2xl lg:text-5xl">
          Konsultasi Gratis dengan Ahli Kami
        </h2>
        <p className="text-[15px]">
          Jangan ragu untuk berdiskusi dengan tim profesional kami mengenai
          kebutuhan suku cadang dan mesin industri Anda.
        </p>
        <a href="#">
          <h1 className="py-2.5 px-6 sm:py-3 sm:px-7 lg:py-3.5 lg:px-9 rounded-full bg-white text-black font-semibold font-teko text-[13px] lg:text-base">
            SELENGKAPNYA
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Consult;
