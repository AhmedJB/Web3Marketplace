import React from 'react';
import upicon from '../../../assets/PayementImages/UP.svg'


type CapsuleProps = {
    icon: React.ReactNode;
  value: string;
  percentage: string;
};

const CapsuleComponent: React.FC<CapsuleProps> = ({ icon, value, percentage }) => {
  return (
    <div className="flex flex-col bg-[#252323] border-2 border-[#373737] rounded-2xl my-3 py-5 pl-5 pr-8 shadow-md">
        {icon}
        <div className="flex items-center">
            <h4 className="text-[#E97205] text-sm font-medium mt-1">Avg. Order Value</h4>
        </div>
        <h3 className="text-xl text-white font-semibold mt-2">{value}</h3>
        <div className="flex items-center mt-2">
            <p className="text-sm text-[#16C098] font-semibold mr-1">{percentage}</p>
            <img src={upicon.src} alt="Up Icon" className="h-4 w-4 text-green-500" />
            <p className="text-xs text-[#BABABA] whitespace-nowrap ml-1">Last 24hrs</p>
        </div>
    </div>

  );
};

export default CapsuleComponent;

