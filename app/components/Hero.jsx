import Image from "next/image";

import hku from "@/public/hku.png";
const Hero = () => {
  return (
    <div className="relative h-[840px] md:h-[665px] lg:h-[760px] bg-image-card">
      <div className="absolute inset-0 bg-black opacity-55 z-0"></div>
      <div className="relative w-full h-full flex flex-col md:flex-row items-center  max-w-7xl mx-auto  px-6 md:px-8 lg:px-10 gap-8 ">
        {/* card 1 */}
        <div className=" w-full h-full flex flex-col py-14  gap-7 md:gap-12  mt-5 text-white ">
          <span className="flex flex-col gap-5">
            <h1 className="font-semibold text-4xl sm:text-5xl lg:text-5xl">
              Nikmati Kemudahan Mendapatkan{" "}
              <span className="text-green-400 font-bold">SPAREPART</span>{" "}
              Berkualitas
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium">
              Temukan suku cadang berkualitas. Hadar Karya Utama siap mendukung
              kesuksesan bisnis anda.
            </p>
          </span>
          <div>
            <a
              href="#"
              className="py-2.5 px-6 inline-block rounded-full bg-green-500 text-white text-base"
            >
              Selengkapnya
            </a>
          </div>
        </div>

        {/* card 2 */}
        <div className=" flex w-full h-full items-center justify-center">
          <div className="flex flex-col items-center justify-center w-[235px] md:w-[285px] md:h-[285px] lg:w-[305px] h-[235px] lg:h-[305px] bg-white rounded-3xl shadow-2xl p-5 gap-6 max-md:mb-14">
            <div className="flex flex-col items-center justify-center">
              <Image src={hku} className="w-[145px] md:w-[185px]" />
            </div>
            <h1 className="text-[17px] md:text-[22px] lg:text-[24px] font-bold">
              HADAR KARYA UTAMA
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
