import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Container from '../Utils/Container';
import productimage from '../../assets/General/product.png';
import { GrClose } from 'react-icons/gr';



const CheckoutComponent = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center w-[900px] space-y-10 bg-black p-14 rounded-3xl mt-14">
        <h1 className="text-2xl font-bold text-yellow barlow">Complete Checkout</h1>
        <div>
        <GrClose size={18} className="text-white" />

        </div>

        {/* Item and Subtitle */}
        <div className="flex justify-between space-x-96 text-white">
          <div className='text-base'>Item</div>
          <div className='text-base'>Subtitle</div>
        </div>

        <hr className="border-2 border-[#ffffff] " />

        {/* Product */}
        <div className="flex justify-between items-center mt-6 space-x-56" >
          <div className="flex items-center space-x-4">
          <img src={productimage.src} alt="BazArt212" className="w-[80px]  h-[90px]" />
            <div className="flex flex-col">
              <h2 className="text-base font-medium text-white">Artizana - Handcrafted</h2>
              <p className="text-white">Owner : issam</p>
              <p className="text-white">949</p>

            </div>
          </div>
          <div className="text-white">
            <p className="text-xs font-medium">Price : 5 ETH</p>
            <p className="text-xs text-white">Price : 200 USD</p>
          </div>
        </div>
        <hr className="border-2 border-[#ffffff] sm:mx-auto" />

        {/* Total */}
        <div className="flex justify-between items-center mt-6 space-x-96">
          <div className="text-white">Total :</div>
          <div className="text-white">
            <p className="text-xs font-medium">Price : 5 ETH</p>
            <p className="text-xs text-white">Price : 200 USD</p>
          </div>
        </div>

        {/* Button */}
        <button className="px-40 py-4 text-white font-semibold text-[16px] bg-red hover:bg-[#d43131] rounded-2xl mt-6">
          View Order Status
        </button>
      </div>
    </Container>
  );
};

export default CheckoutComponent;
