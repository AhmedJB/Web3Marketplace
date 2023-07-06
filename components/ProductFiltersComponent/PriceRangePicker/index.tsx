import React, { useState } from 'react';

const PriceRangePicker = () => {
  const [priceRange, setPriceRange] = useState(0);

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange(value);
  };

  return (
    <div className="flex items-center">
      <label className="mr-2 text-white">Price Range:</label>
      <input
        type="range"
        min="0"
        max="10000"
        value={priceRange}
        onChange={handlePriceChange}
        className="h-6 w-44 rounded-full appearance-none bg-gray-300"
      />
      <span className="ml-2 text-white">{priceRange} USD</span>
    </div>
  );
};

export default PriceRangePicker;
