import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


type Props = {
    rating : number
}

const StarReview = ({rating} : Props) => {


  return (

    <div className="flex items-center">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer text-xl my-2 ${
                  index < Math.floor(rating) ? 'text-starYellow' : 'text-white'
                }`} 
              />
            ))}
          </div>
          <span className={`ml-2 text-white text-lg font-semibold`}>
            {rating || '0'}
          </span>
        </div>

    
  );
};

export default StarReview;