const Contact = () => {
  return (
    <div className="relative bg-image-card">
      <div className="absolute inset-0 bg-black opacity-55 z-0"></div>
      <div className="flex flex-col relative h-[330px] lg:h-[440px] w-full items-center justify-center gap-5 lg:gap-8">
        <span className="flex flex-col items-center justify-center text-center text-white gap-3 lg:gap-5">
          <h1 className="font-semibold lg:text-[18px]">
            Langkah Pertama Menuju Kesuksesan
          </h1>
          <h2 className="font-semibold text-2xl lg:text-[26px]">
            Temukan Solusi Terbaik untuk Bisnis Anda
          </h2>
          <p>
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik suku
            cadang dan mesin industri.
          </p>
        </span>

        <a href="#">
          <h1 className="py-2.5 px-6 sm:py-3 sm:px-7 lg:py-3.5 lg:px-9 rounded-full bg-green-500 text-white font-semibold font-teko text-[13px] lg:text-base">
            HUBUNGI KAMI
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Contact;
