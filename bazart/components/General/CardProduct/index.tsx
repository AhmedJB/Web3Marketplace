import React from 'react';
import HeartCheckboxComponent from '../../Utils/HeartCheckboxComponent';

type CardProductProps = {
  title: string;
  shippingFrom: string;
  firstName: string;
  lastName:string;
  productImage: string;
  price: number;
};

const CardProduct: React.FC<CardProductProps> = ({ title, shippingFrom, firstName,lastName , price, productImage }) => {

/*   const firstImage = images.length > 0 ? images[0].url : productImage;
 */
  return (
    <div className="relative  w-[340px] h-[440px]  barlow hover:scale-105 transform transition-all duration-700">
      <div className="absolute top-3 right-3 z-50">
        <HeartCheckboxComponent color="text-white" />
      </div>
      <div className=" relative w-full h-full  ">
      <img className="w-full h-full rounded-2xl object-cover" src={productImage} alt={lastName} />
      </div>
      <div className="absolute bottom-0 left-0 h-28 w-full bg-transparent rounded-b-2xl backdrop-blur-md  p-3 pl-5">
        <h2 className=" font-bold text-white barlow text-[18px]">{title}</h2>
        <div className='flex  justify-between items-center mt-4 '>
          <div className=" flex items-center">
            <img className=" w-12 h-12 rounded-full mr-3" src={productImage} alt={shippingFrom} />
            <div>
              <div className="text-[13px] text-cardGray barlow">Creator</div>
              {firstName && lastName ? (
                <div className="text-white barlow">
                  {firstName} {lastName} + {shippingFrom}
                </div>
              ) : (
                <div className="text-white barlow text-sm">Owner name not available</div>
              )}
            </div>
          </div>
          <div>
            <div className="text-[13px] text-cardGray barlow">Amount</div>
            <div className="  text-white font-semibold text-[18px]  barlow">
              {price} ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
