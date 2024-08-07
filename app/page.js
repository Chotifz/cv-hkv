export default function Home() {
  return (
    <div>
      {" "}
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
        {/* sesi 4 card */}
        <div className="w-full h-60 bg-orange-400 rounded-3xl"></div>
        {/* sesi 5 Ulasan Pelanggan */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full">title</div>
          <div className="w-full">Ulasan</div>
        </div>
      </div>
      {/* sesi 6 Services */}
      <div className="  bg-slate-400">
        <div className="max-w-7xl mx-auto py-3 px-5  md:px-8 lg:px-10 flex flex-col lg:flex-row-reverse">
          <div className="w-full h-60 bg-cyan-300"> IMAGE</div>
          <div className="flex flex-col w-full ">
            <span>
              <h1>KEUNGGULAN KAMI</h1>
              <h2>Selalu Siap Mendukung Anda</h2>
            </span>
            <div>
              <span>
                <h2>Komponent Berkualitas Tinggi</h2>
                <p>
                  Kami menyediakan suku cadang dan mesin industri terbaik untuk
                  performa optimal perusahaan Anda.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ses 7 Contact */}
      <div className="flex flex-col bg-zinc-800 h-[330px] lg:h-[440px] w-full items-center justify-center gap-4">
        <span className="flex flex-col items-center justify-center text-center text-white gap-2">
          <h1>Langkah Pertama Menuju Kesuksesan</h1>
          <h2>Temukan Solusi Terbaik untuk Bisnis Anda</h2>
          <p>
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik suku
            cadang dan mesin industri.
          </p>
        </span>

        <div>
          <h1 className="py-3 px-6 rounded-full bg-orange-400 text-white font-semibold font-teko">
            SELENGKAPNYA
          </h1>
        </div>
      </div>
    </div>
  );
}
