import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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
  const products = [
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Fassi Caftan', creatorName: 'Creator 2', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', price: 0.23 },
    { title: 'Cold Pressed Argan Oil', creatorName: 'Creator 3', creatorImage: 'https://i.pinimg.com/564x/11/a2/a0/11a2a0a20d555fba66153f73c69213cb.jpg ', price: 1.21},
    { title: 'Moroccan Lip and Cheek Tint', creatorName: 'Creator 3', creatorImage: 'https://i.pinimg.com/564x/d1/16/e6/d116e60d8b7e7d283884708a2fb8a925.jpg', price: 1.345 },
    { title: 'Organic Olive Oil Based Soap', creatorName: 'Creator 3', creatorImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg ', price: 0.123  },
    { title: 'Moroccan Spice Blend', creatorName: 'Creator 3', creatorImage: 'https://i.pinimg.com/564x/d1/3f/9d/d13f9d018f4b807d1bed0065cf6227c2.jpg ', price: 1.347 },
    { title: 'Moroccan Tea Pot Set', creatorName: 'Creator 3', creatorImage: 'https://i.pinimg.com/564x/8f/92/3b/8f923bbba8b5fafa992ae1ea0ea03469.jpg ', price: 2.345 },
    { title: 'Vintage Antique Moroccan Lantern', creatorName: 'Creator 3', creatorImage: 'https://i.pinimg.com/564x/b4/64/2c/b4642c9b62b3efbd5de12a3ac7f75813.jpg', price: 1.22 },
    
  ];

  return (
    <div>
      <h1 style={{ color: '#D3BC84' }}>Trending Sales</h1>
      <h2 style={{ color: '#D3BC84' }}>Check out our weekly updated trending sales</h2>
      <Carousel responsive={responsive}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;