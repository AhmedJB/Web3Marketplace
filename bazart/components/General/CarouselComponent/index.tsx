import React from 'react';
import Carousel from 'react-multi-carousel';
import CardProduct from '../CardProduct';
import { productlistData } from '../../../demoData/productlist';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1630 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1630, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



const CarouselComponent: React.FC = () => {
  // Dummy data for products, replace it with your actual data


  return (
    <div className='container mx-auto mb-11'>
      <h1 className="text-3xl text-center font-semibold text-yellow mt-12" >Trending Sales</h1>
      <h2 className="subheader text-sm text-white opacity-60 text-center my-2 mb-6">Check out our weekly updated trending sales</h2>
      <Carousel className="mx-0 xl:mx-10" responsive={responsive}>
        {productlistData.map((product, index) => (
          <CardProduct key={index} {...product} />


        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;