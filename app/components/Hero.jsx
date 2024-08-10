const Hero = () => {
  return (
    <div className="relative h-[845nnpx] md:h-[565px] lg:h-[760px] bg-image-card">
      <div className="absolute inset-0 bg-black opacity-55 z-0"></div>
      <div className="relative max-w-7xl mx-auto py-[7px] px-6 md:px-8 lg:px-10 ">
        <div className="flex flex-col py-14  gap-7 md:gap-12 md:w-1/2 mt-5 text-white ">
          <span className="flex flex-col gap-5">
            <h1 className="font-semibold text-4xl sm:text-5xl lg:text-5xl">
              Nikmati Kemudahan Mendapatkan{" "}
              <span className="text-green-400 font-bold">SPAREPART</span>{" "}
              Berkualitas
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">
              Temukan suku cadang mobil, traktor, genset dan mesin industri
              berkualitas. Hadar Karya Utama siap mendukung kesuksesan bisnis
              anda.
            </p>
          </span>
          <div>
            <a
              href="/product"
              className="py-2.5 px-6 inline-block rounded-full bg-green-500 text-white text-base"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
