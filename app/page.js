import Card from "@/components/Card";
import CardService from "@/components/CardService";
import Consult from "@/components/Consult";
import ReviewCust from "@/components/ReviewCust";
import product1 from "@/public/genset.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-[845px] md:h-[565px] lg:h-[760px] bg-image-card">
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
              <button className="py-2.5 px-6 inline-block rounded-full bg-green-500 text-white text-base">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto py-6 gap-4 font-semibold text-[26px]">
        <h1 className="text-[20px]">
          {" "}
          <span className="text-green-400 font-bold">SPAREPART</span> Unggulan
          Untuk Anda
        </h1>
        <div
          id="card"
          className="flex flex-col items-center justify-center bg-slate-500 w-[195px] rounded-xl"
        >
          {/* image */}
          <div className="flex flex-col items-center mx-auto bg-slate-300 w-[165px] h-[170px]">
            <Image width={160} height={185} src={product1} />
          </div>
          <h2 className="text-[12x]">title</h2>
        </div>
      </div>

      {/* tes */}

      <div className="max-w-7xl mx-auto py-3 px-5  md:px-8 lg:px-10">
        {/* sesi 2 */}
        <div className="flex flex-col lg:flex-row  border-b w-full py-4">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-lg font-serif">
              Pilihan Produk Unggulan
            </h1>
            <h2 className="font-bold text-[24px] tracking-wide">
              Jelajahi Berbagai Komponen Penting
            </h2>
            <span>
              <div className="inline-block py-[1.5px] px-12 bg-orange-400"></div>
            </span>
            <p className="text-[15px] font-mono">
              Kami menyediakan suku cadang dan mesin pendukung berkualitas
              tinggi untuk kebutuhan industri dan kendaraan.
            </p>
          </div>

          <div className="flex flex-col py-3 gap-2">
            <span>
              <p className="text-orange-400 inline-block text-2xl font-semibold tracking-wider">
                01.
              </p>
            </span>

            <h1 className="font-bold text-2xl tracking-wide">
              Suku Cadang Mobil
            </h1>
            <p className="text-[15px] font-mono">
              Suku cadang mobil berkualitas tinggi untuk berbagai merek
              kendaraan
            </p>
            <div>
              {" "}
              <button className="text-orange-400">PELAJARI LEBIH LANJUT</button>
            </div>
          </div>
          <div className="flex flex-col py-3 gap-2">
            <span>
              <p className="text-orange-400 inline-block text-2xl font-semibold tracking-wider">
                01.
              </p>
            </span>

            <h1 className="font-bold text-2xl tracking-wide">
              Suku Cadang Mobil
            </h1>
            <p className="text-[15px] font-mono">
              Suku cadang mobil berkualitas tinggi untuk berbagai merek
              kendaraan
            </p>
            <div>
              {" "}
              <button className="text-orange-400">PELAJARI LEBIH LANJUT</button>
            </div>
          </div>
          <div className="flex flex-col py-3 gap-2">
            <span>
              <p className="text-orange-400 inline-block text-2xl font-semibold tracking-wider">
                01.
              </p>
            </span>

            <h1 className="font-bold text-2xl tracking-">Suku Cadang Mobil</h1>
            <p className="text-[15px] font-mono">
              Suku cadang mobil berkualitas tinggi untuk berbagai merek
              kendaraan
            </p>
            <div>
              {" "}
              <button className="text-orange-400">PELAJARI LEBIH LANJUT</button>
            </div>
          </div>
        </div>
        {/* sesi 3 */}
        <div className="flex flex-col lg:flex-row w-full py-4">
          <div className="w-full">sss</div>
          <div className="flex flex-col gap-3 w-full">
            <h1 className="font-semibold  font-serif">TENTANG KAMI</h1>
            <h2 className="font-bold text-[24px] tracking-wide">
              Profil Perusahaan Hadar Karya Utama
            </h2>
            <span>
              <div className="inline-block py-[1.5px] px-12 bg-orange-400"></div>
            </span>
            <p className="text-[15px] font-mono">
              Hadar Karya Utama adalah agensi terpercaya dalam menyediakan
              komponen penting untuk industri dan kendaraan. Kami hadir dengan
              layanan berkualitas tinggi.
            </p>
          </div>
        </div>

        <Consult />
        <ReviewCust />
      </div>
      <CardService />
      <Card />
    </>
  );
}
