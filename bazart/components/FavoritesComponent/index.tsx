import React from 'react'

import CardProduct from '../General/CardProduct';
import Validator from '../HOC/Validator';


type Props = {}
const FavoritesComponent = () => {
  const products = [
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },


  ];
  const limitedProductData = products.slice(0, 6);
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-white font-semibold'>favorites Page</h1>
        <div className='flex flex-wrap gap-8 my-4'>
          {limitedProductData.map((product, index) => (
            <CardProduct key={index} {...product} />
          ))}
        </div>

      </div>

    </>
  );
};

export default FavoritesComponent;
