import React from "react";

const CardService = () => {
  return (
    <div className="bg-gray-100 lg:h-[875px]">
      <div className="max-w-7xl w-full h-full items-center justify-center mx-auto py-3 px-5  md:px-8 lg:px-10 flex flex-col md:flex-row-reverse lg:flex-row-reverse">
        <div className="py-12 w-full ">
          <div className="wmd:w-[295px] md:h-[390px] h-[350px] rounded-t-full bg-image-card"></div>
        </div>
        <div className="flex flex-col w-full gap-3 ">
          <span className="flex flex-col gap-3">
            <h1 className="font-semibold">KEUNGGULAN KAMI</h1>
            <h2 className="font-semibold text-2xl">
              Selalu Siap Mendukung Anda
            </h2>
            <div>
              <span className="px-12 py-[2px] bg-orange-400 inline-block"></span>
            </div>
          </span>
          <div>
            <span>
              <h2 className="font-semibold py-4">
                Komponen Berkualitas Tinggi
              </h2>
              <p className="text-[15px] text-gray-600">
                Kami menyediakan suku cadang dan mesin industri terbaik untuk
                performa optimal perusahaan Anda.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardService;
