import React from 'react';
import ChartComponent from '../ChartComponent';
import CapsuleComponent from './CapsuleComponent';
import capsule from'../../assets/PayementImages/capsule.svg';
import capsule1 from'../../assets/PayementImages/capsule2.svg';

const DashboardComponent= () => {
  return (
    <>
    
      <div>
         
      <CapsuleComponent
        icon={<img src={capsule.src} alt="UP Icon" className="h-6 w-6" />} // Use the imported SVG icon
        value="$108,560.93"
        percentage="13.02%"
      />

      <CapsuleComponent
        icon={<img src={capsule1.src} alt="UP Icon" className="h-9 w-9" />} // Use the imported SVG icon
        value="$108,560.93"
        percentage="13.02%"
      />
     
      
      
      
      <h1 className="text-white font-semibold">Dashboard Page</h1>

      </div>
      <div className='w-full h-full'>
        <ChartComponent/>
      </div>

    
     
    </>
  );
};

export default DashboardComponent ;
