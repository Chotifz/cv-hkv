import Image from "next/image";

const CardProduct = ({ title, image }) => {
  return (
    <div className="w-full h-full lg:p-6 md:p-4 p-2">
      <div
        id="card"
        className="relative w-full h-full flex flex-col items-center justify-between py-6 bg-white  rounded-xl gap-2  shadow-xl"
      >
        <div className="absolute top-0 right-0 daun-i md:h-[24px] lg:h-[28px] md:w-[28px] lg:w-[32px]"></div>
        {/* image */}
        <div className="relative flex justify-center items-center mx-auto w-full h-full object-cover">
          <Image
            className=" object-cover object-center  w-[70px] sm:w-[115px] md:w-[145px] lg:w-[160px] "
            src={image}
            alt="Product image"
          />
        </div>
        <h2 className="text-[11px] sm:text-[12px]  md:text-[14px] lg:text-[16px]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardProduct;
