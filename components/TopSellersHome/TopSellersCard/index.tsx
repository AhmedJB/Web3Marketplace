import React from 'react';

import { StaticImageData } from 'next/image';

type Props = {
  name : string;
  totalSales : string;
  number :number;
  image : StaticImageData;
};

function TopSellersCard({ name, totalSales,number, image }: Props) {
  return (
<div className="w-full max-w-sm pt-3 bg-[#3B3B3B] border border-gray-200 rounded-[24px] flex flex-col">
  <div className="relative">
    <div className="absolute flex items-center justify-center bg-[#2B2B2B] text-[#858584] rounded-full w-[36px] h-[36px] left-10 top-[16px] space-mono  text-[18px]">
      {number}
    </div>
    <div className="flex flex-col items-center px-12 pt-5 pb-10">
      <img src={image.src} alt="Bonnie image" className="w-24 h-24 mb-3 rounded-full shadow-lg" />
      <h5 className="mb-1 text-[22px] font-semibold text-white barlow">{name}</h5>
      <div className="flex text-[16px] text-[#858584] mt-4">
        Total Sales: <span className="ml-2 text-[16px] text-white">{totalSales}</span>
      </div>
    </div>
  </div>
</div>


 
  );
}

export default TopSellersCard;
