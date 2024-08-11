const Contact = () => {
  return (
    <div className="relative bg-image-card">
      <div className="absolute inset-0 bg-black opacity-55 z-0"></div>
      <div className=" relative max-w-7xl mx-auto py-[7px] px-6 md:px-8 lg:px-10  flex flex-col h-[330px] lg:h-[440px] w-full items-center justify-start pt-10 gap-5 lg:gap-8">
        <span className="flex flex-col items-start justify-center  text-white gap-3 lg:gap-5">
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

        <div className="bg-green-500 w-[305px] h-[105px] absolute bottom-0 rounded-t-3xl flex flex-col items-start justify-center text-white  p-9">
          <a href="https://wa.me/+6282278639085" className="flex gap-1">
            {" "}
            img <p>+62 822-7863-9085</p>
          </a>
          <div className="flex gap-1">
            {" "}
            img <p>hadarkaryautama@gmail.com</p>
          </div>

          {/* <a href="#">
            <h1 className="py-2.5 px-6 sm:py-3 sm:px-7 lg:py-3.5 lg:px-9 rounded-full bg-green-800 text-white font-semibold font-teko text-[13px] lg:text-base inline-block">
              HUBUNGI KAMI
            </h1>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
