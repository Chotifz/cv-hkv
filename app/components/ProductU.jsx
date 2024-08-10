const ProductU = () => {
  return (
    <div className="flex flex-col lg:flex-row  border-b w-full py-4">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-lg font-serif">
          Pilihan Produk Unggulan
        </h1>
        <h2 className="font-bold text-[24px] tracking-wide">
          Jelajahi Berbagai Komponen Penting
        </h2>
        <span>
          <div className="inline-block py-[1.5px] px-12 bg-green-500"></div>
        </span>
        <p className="text-[15px] font-mono">
          Kami menyediakan suku cadang dan mesin pendukung berkualitas tinggi
          untuk kebutuhan industri dan kendaraan.
        </p>
      </div>

      <div className="flex flex-col py-3 gap-2">
        <span>
          <p className="text-orange-400 inline-block text-2xl font-semibold tracking-wider">
            01.
          </p>
        </span>

        <h1 className="font-bold text-2xl tracking-wide">Suku Cadang Mobil</h1>
        <p className="text-[15px] font-mono">
          Suku cadang mobil berkualitas tinggi untuk berbagai merek kendaraan
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

        <h1 className="font-bold text-2xl tracking-wide">Suku Cadang Mobil</h1>
        <p className="text-[15px] font-mono">
          Suku cadang mobil berkualitas tinggi untuk berbagai merek kendaraan
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
          Suku cadang mobil berkualitas tinggi untuk berbagai merek kendaraan
        </p>
        <div>
          {" "}
          <button className="text-orange-400">PELAJARI LEBIH LANJUT</button>
        </div>
      </div>
    </div>
  );
};

export default ProductU;
