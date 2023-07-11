import React, { useState } from 'react';

const PriceRangePicker = () => {
  const [priceRange, setPriceRange] = useState(0);
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange(value);
  };
  return (
    <div className="flex flex-col py-3 px-5 pb-5 text-white  hover:text-black hover:font-semibold hover:bg-yellow ">
      <div className='flex justify-between'>
        <label className="mr-2 text-[18px]">Price </label>
        <span className="ml-2  text-[18px]">{priceRange} ETH</span>
      </div>
      <div className='py-2'>
        <input
          type="range"
          min="0"
          max="20"
          value={priceRange}
          onChange={handlePriceChange}
          className="h-6 w-full cursor-pointer rounded-full appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-black"

          
        />
      </div>
    </div>
  );
};
export default PriceRangePicker;
