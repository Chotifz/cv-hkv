import mitshu from "@/public/merk/merk1.png";
import ford from "@/public/merk/ford.png";
import hino from "@/public/merk/hino.png";
import toyota from "@/public/merk/toyota.png";
import mercedes from "@/public/merk/mercedes.png";
import kubota from "@/public/merk/kubos.png";
import quick from "@/public/merk/quick.png";
import yanmar from "@/public/merk/yanmar.png";
import johnDerf from "@/public/merk/johnderf.png";
import landini from "@/public/merk/landini.png";
import jcb from "@/public/merk/jcb.png";
import tanka from "@/public/merk/tanka.png";
import firman from "@/public/merk/firman.png";
import stihl from "@/public/merk/stihil.png";
import ryu from "@/public/merk/ryu.png";
import isuzu from "@/public/merk/isuzu.png";
import perkins from "@/public/merk/perkins.png";
import Image from "next/image";

const Merk = () => {
  return (
    <div className="flex flex-col items-center justify-center font-semibold text-[26px] text-center mx-auto">
      <h1 className="text-[20px]">
        BERBAGAI <span className="text-green-400 font-bold">MERK</span> YANG
        KAMI SEDIAKAN
      </h1>
      <div className="flex flex-col items-center justify-center py-6 overflow-hidden">
        <div>
          <div id="image-merk-1" className="flex">
            <ImageMerk image={mitshu} />
            <ImageMerk image={ford} />
            <ImageMerk image={hino} />
            <ImageMerk image={toyota} />
            <ImageMerk image={mercedes} />
          </div>
        </div>
        <div id="image-merk-2" className="flex">
          <ImageMerk image={kubota} />
          <ImageMerk image={quick} />
          <ImageMerk image={yanmar} />
          <ImageMerk image={johnDerf} />
          <ImageMerk image={landini} />
          <ImageMerk image={jcb} />
        </div>
        <div id="image-merk-3" className="flex">
          <ImageMerk image={tanka} />
          <ImageMerk image={firman} />
          <ImageMerk image={stihl} />
          <ImageMerk image={ryu} />
          <ImageMerk image={isuzu} />
          <ImageMerk image={perkins} />
        </div>
      </div>
    </div>
  );
};

export default Merk;

const ImageMerk = ({ image }) => {
  return (
    <div className="flex flex-col">
      <div className="relative flex justify-center items-center mx-auto w-full h-full object-cover">
        <Image
          className="object-cover object-center w-[70px] sm:w-[115px] md:w-[145px] lg:w-[160px]"
          src={image}
          alt="Product image"
        />
      </div>
    </div>
  );
};
