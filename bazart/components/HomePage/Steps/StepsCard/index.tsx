import React from 'react';
import Steps1 from '../../../assets/StepsImages/Steps1.png'
import { StaticImageData } from 'next/image';

type Props = {
    title : string;
    subtitle : string;
    image : StaticImageData;
};

function StepsCard({ title, subtitle,image }: Props) {
  return (
<div className="w-full max-w-sm pt-3 bg-mainDark border-4 border-[#5F5F5F] rounded-[24px] ">
  <div className="flex flex-col items-center px-12 pt-10 pb-6">
    <img src={image.src} alt="wallet image" className="w-24 h-24 mb-3 rounded-full shadow-lg" />
    <h5 className="my-2 text-[24px] font-semibold text-white barlow">{title}</h5>
    <div className=" text-[12px] text-white mt-4 text-center">
      {subtitle}
    </div>
  </div>
</div> 
  );
}

export default StepsCard;
