import service1 from "@/public/iconl1.png";
import service2 from "@/public/iconl2.png";
import service3 from "@/public/iconl3.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center font-semibold text-[26px] text-center mx-auto gap-4 pt-4">
      <h1 className="text-[20px] ">
        LAYANAN <span className="text-green-400 font-bold">KAMI</span>
      </h1>
      <div className="flex relative flex-col items-center justify-start h-[380px]">
        <div className=" flex w-full gap-4 md:gap-8 ">
          <ServicesDesc
            title={"Konsultasikan"}
            desc={
              "barang yang akan anda pesan. pastikan no seri sesuai dengan pesanan anda apabila no seri tidak ada maka akan kami cari persamaannya."
            }
            image={service1}
          />
          <ServicesDesc
            title={"Garansi"}
            desc={
              "jika barang yang datang tidak sesuai pesanan atau rusak maka akan kami ganti"
            }
            image={service2}
          />
        </div>
        <div className="absolute bottom-1 md:bottom-3 max-w-[205px] sm:max-w-[415px] lg:max-w-[520px]">
          <ServicesDesc
            title={"Pengiriman"}
            image={service3}
            desc={
              "Kami pastikan barang yang sudah di pesan langsung dikirim hari itu juga, apabila ada keterlambatan kami berikan Discount"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

const ServicesDesc = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col items-center justify-start pt-4 w-full h-[220px] md:max-w-[415px] lg:max-w-[520px]">
      <div>
        <Image
          src={image}
          alt="service-logo"
          className="w-[30px] h-[35px] md:w-[42px] md:h-[48px] "
        />
      </div>
      <h1 className="text-green-400">{title}</h1>
      <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
        {desc}
      </p>
    </div>
  );
};
