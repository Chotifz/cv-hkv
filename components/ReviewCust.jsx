import React from "react";
import CardCust from "./CardCust";

const ReviewCust = () => {
  return (
    <div className="flex flex-col lg:flex-row py-12">
      <div className="w-full pb-6">
        <span>
          <h1 className="font-semibold">PENDAPAT PELANGGAN</h1>
          <h2 className="font-semibold text-2xl">Ulasan Pelanggan</h2>
          <div>
            <span className="px-12 py-[2px] bg-orange-400 inline-block"></span>
          </div>
        </span>
        <p className="text-[15px] text-gray-600">
          Simak pendapat dan pengalaman klien yang puas dengan layanan Hadar
          Karya Utama.
        </p>
      </div>
      <CardCust />
    </div>
  );
};

export default ReviewCust;
