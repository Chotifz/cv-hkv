const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center font-semibold text-[26px] text-center mx-auto pb-6">
      <h1 className="text-[20px] pb-3">
        LAYANAN <span className="text-green-400 font-bold">KAMI</span>
      </h1>
      <div className="flex flex-col">
        <div className="flex w-full">
          <ServicesDesc
            title={"Konsultasikan"}
            desc={
              "barang yang akan anda pesan. pastikan no seri sesuai dengan pesanan anda apabila no seri tidak ada maka akan kami cari persamaannya."
            }
            image={""}
          />
          <ServicesDesc
            title={"Garansi"}
            desc={
              "jika barang yang datang tidak sesuai pesanan atau rusak maka akan kami ganti"
            }
            image={""}
          />
        </div>
        <ServicesDesc
          title={"Pengiriman"}
          image={""}
          desc={
            "Kami pastikan barang yang sudah di pesan langsung dikirim hari itu juga, apabila ada keterlambatan kami berikan Discount"
          }
        />
      </div>
    </div>
  );
};

export default Services;

const ServicesDesc = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col">
      <div>
        <img src={image} alt="" />
      </div>
      <h1 className="text-green-400">{title}</h1>
      <p className="text-[15px]">{desc}</p>
    </div>
  );
};
