import React from "react";

const CardCust = () => {
  return (
    <div className="w-full flex  items-center justify-center  border rounded-3xl p-6">
      <div className="flex w-1/2 flex-col items-start justify-between gap-3">
        <span>*****</span>
        <p>
          Suku cadang berkualitas dan pelayanan cepat. Sangat merekomendasikan!.
        </p>
        <div className="flex gap-2">
          <div>
            Image
            <img className="h-20 rounnded-full" src="" alt="" />
          </div>
          <h1>Name Customers</h1>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default CardCust;
