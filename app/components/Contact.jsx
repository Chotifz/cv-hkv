import Image from "next/image";
import iconWa from "@/public/logo-wa.png";
import iconGmail from "@/public/logo-gmail.png";

const Contact = () => {
  return (
    <div id="contacts" className="relative bg-image-card">
      <div className="absolute inset-0 bg-black opacity-55 z-0"></div>
      <div className=" relative max-w-7xl mx-auto py-[7px] px-6 md:px-8 lg:px-10  flex flex-col h-[330px] lg:h-[440px] w-full items-center justify-start pt-10 gap-5 lg:gap-8">
        <div className="bg-green-500 w-[305px] md:w-[435px] lg:w-[585px] md:h-[135px] h-[105px] absolute bottom-0 rounded-t-3xl flex flex-col items-start justify-center text-white p-9 md:p-16 lg:px-36 lg:py-20 gap-1">
          <a href="https://wa.me/+6282278639085" className="flex gap-2">
            {" "}
            <Image
              src={iconWa}
              alt="service-logo"
              className="w-[30px]  md:w-[42px] "
            />
            <p>+62 822-7863-9085</p>
          </a>
          <div className="flex gap-2">
            <Image
              src={iconGmail}
              alt="service-logo"
              className="w-[30px] md:w-[42px]  "
            />
            <p>hadarkaryautama@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
