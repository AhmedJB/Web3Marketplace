import React from 'react';
import HeartCheckboxComponent from '../../HeartCheckboxComponent';

type CardProductProps = {
  title: string;
  creatorName: string;
  creatorImage: string;
  productImage: string;
  price: number;
};

const CardProduct: React.FC<CardProductProps> = ({ title, creatorName, creatorImage, price,productImage }) => {
  return (
    <div className="relative  w-[340px] h-[440px]  barlow hover:scale-105 transform transition-all duration-700">
      <div className="absolute top-3 right-3 z-50"> 
      <HeartCheckboxComponent color="text-white" />
      </div>
      <div className=" relative w-full h-full  ">
        <img className=" w-full h-full rounded-2xl  object-cover" src={productImage} alt={creatorName} />
      </div>
      <div className="absolute bottom-0 left-0 h-28 w-full bg-transparent rounded-b-2xl backdrop-blur-md  p-3 pl-5">      
          <h2 className=" font-bold text-white barlow text-[18px]">{title}</h2>
          <div className='flex  justify-between items-center mt-4 '>
            <div className=" flex items-center">
              <img className=" w-12 h-12 rounded-full mr-3" src={creatorImage} alt={creatorName} />
              <div>
                <div className="text-[13px] text-cardGray barlow">Creator</div>
                <div className="text-white barlow">{creatorName}</div>
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
