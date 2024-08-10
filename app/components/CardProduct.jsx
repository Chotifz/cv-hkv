import Image from "next/image";

const CardProduct = ({ title, image }) => {
  return (
    <div
      id="card"
      className="relative flex flex-col items-center justify-between py-6 bg-white w-[115px] h-[135px] rounded-xl gap-2  shadow-xl"
    >
      <div className="absolute bottom-[117px] right-0 daun-i"></div>
      {/* image */}
      <div className="relative flex flex-col items-center mx-auto  w-[70px] object-cover">
        <Image
          className=" object-cover object-center "
          src={image}
          alt="Product image"
        />
      </div>
      <h2 className="text-[12px] ">{title}</h2>
    </div>
  );
};

export default CardProduct;
