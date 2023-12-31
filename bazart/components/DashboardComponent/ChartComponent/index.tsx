import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import 'react-multi-carousel/lib/styles.css';
import DropDownDashboard from '../DropDownDashboard';

type Props = {};
const DynamicChartComponent = dynamic(
  () => import('./ChartComponentOnly'),
  { ssr: false } // Disable server-side rendering
);

function ChartComponent({ }: Props) {


  return (
    <>

      {/*  */}
      <div className="w-full h-full flex flex-col border border-[#EFEEEB] p-6 rounded-2xl">
        <div>
          <div className="flex justify-between">
            <div>
              <h3 className="inter text-[22px] font-semibold text-[#606060]">Overall Sales</h3>
              <h2 className="inter text-[26px] font-semibold text-white">$238,560.93</h2>
            </div>
            <div>
              <DropDownDashboard />
            </div>
          </div>
          <div className="flex gap-3 items-center pt-3">
            <h2 className="text-[#16C098] text-[20px]">13.02%</h2>
            <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.79681 13.5148C1.3401 13.5148 0.883382 13.3693 0.522818 13.0574C-0.174273 12.4544 -0.174273 11.4564 0.522818 10.8535L8.21478 4.20011C8.59938 3.86744 9.10417 3.7011 9.65704 3.74269C10.1859 3.78427 10.6666 4.03377 10.9791 4.42881L13.5992 7.83866L22.1326 0.457592C22.8296 -0.145369 23.9834 -0.145369 24.6805 0.457592C25.3776 1.06055 25.3776 2.05856 24.6805 2.66152L14.5847 11.394C14.2001 11.7267 13.6954 11.893 13.1425 11.8515C12.6137 11.8099 12.1329 11.5604 11.8204 11.1653L9.20032 7.75549L3.0708 13.0574C2.71024 13.3693 2.25353 13.5148 1.79681 13.5148Z" fill="#16C098" />
              <path d="M23.4264 7.27711C22.4408 7.27711 21.6235 6.57019 21.6235 5.71773V3.11876H18.6188C17.6333 3.11876 16.816 2.41184 16.816 1.55938C16.816 0.706919 17.6333 0 18.6188 0H23.4264C24.4119 0 25.2292 0.706919 25.2292 1.55938V5.71773C25.2292 6.57019 24.4119 7.27711 23.4264 7.27711Z" fill="#16C098" />
            </svg>

          </div>
        </div>
        <div className="p-3">
          <DynamicChartComponent />
        </div>
      </div>
      {/*  */}

    </>
  );
}

export default ChartComponent;
