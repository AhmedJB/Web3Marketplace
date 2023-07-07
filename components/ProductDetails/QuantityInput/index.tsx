import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type Props =  {
    quantity : number;
    updateQuantity : (step : number) => void
}

const QuantityInput = ({quantity,updateQuantity} :Props) => {

  

  return (
    <div className="flex items-center ">
      <div className='border border-white flex items-center justify-between p-3 w-[250px]'>
      <button
        className="px-2 py-1 rounded-md bg-blue-500 text-white"
        onClick={() => updateQuantity(-1)}
      >
        <FaMinus />
      </button>
      <p className="w-16 mx-2 text-center bg-mainDark  text-white ">
        {quantity}
      </p>

      <button
        className="px-2 py-1 rounded-md bg-blue-500 text-white"
        onClick={() => updateQuantity(1)}
      >
        <FaPlus />
      </button>

      </div>
      
    </div>
  );
};

export default QuantityInput;