import React from 'react';
import Carousel from 'react-multi-carousel';

import ProductCard from './ProductCard';
import styles from "../../styles/modular/Carousel.module.css"
import CardProduct from '../CardsProductList/CardProduct';



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
  const products = [
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Wissale', creatorImage: 'https://i.pinimg.com/564x/11/a2/a0/11a2a0a20d555fba66153f73c69213cb.jpg', productImage: 'https://i.pinimg.com/564x/b4/64/2c/b4642c9b62b3efbd5de12a3ac7f75813.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Ahmed', creatorImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg', productImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Issam', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/8f/92/3b/8f923bbba8b5fafa992ae1ea0ea03469.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/11/a2/a0/11a2a0a20d555fba66153f73c69213cb.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/8f/92/3b/8f923bbba8b5fafa992ae1ea0ea03469.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Vintage Antique Moroccan Lantern', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Wissale', creatorImage: 'https://i.pinimg.com/564x/11/a2/a0/11a2a0a20d555fba66153f73c69213cb.jpg', productImage: 'https://i.pinimg.com/564x/b4/64/2c/b4642c9b62b3efbd5de12a3ac7f75813.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Ahmed', creatorImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg', productImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Issam', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/8f/92/3b/8f923bbba8b5fafa992ae1ea0ea03469.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/11/a2/a0/11a2a0a20d555fba66153f73c69213cb.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/8f/92/3b/8f923bbba8b5fafa992ae1ea0ea03469.jpg ', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Vintage Antique Moroccan Lantern', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg', price: 0.025 },

    { title: 'Moroccan Tea Pot Set', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/d1/16/e6/d116e60d8b7e7d283884708a2fb8a925.jpg', productImage: 'https://i.pinimg.com/564x/8f/92/3b/8f923bbba8b5fafa992ae1ea0ea03469.jpg ', price: 0.025 },

    { title: 'Organic Olive Oil Based Soap', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/57/c5/9d/57c59d0ff340939570ffc30e079c58a6.jpg', price: 0.025 },

    { title: 'Moroccan Lip and Cheek Tint', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/8f/92/3b/8f923bbba8b5fafa992ae1ea0ea03469.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },

    { title: 'Moroccan Spice Blend', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },


  ];

  return (
    <div className='container mx-auto mb-11'>
      <h1 className="text-3xl text-center font-semibold text-yellow mt-12" >Trending Sales</h1>
      <h2 className="subheader text-sm text-white opacity-60 text-center my-2 mb-6">Check out our weekly updated trending sales</h2>
      <Carousel className="mx-0 xl:mx-10" responsive={responsive}>
        {products.map((product, index) => (
          <CardProduct key={index} {...product} />


        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;