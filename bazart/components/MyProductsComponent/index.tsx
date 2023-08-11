import React from 'react'

import CardProduct from '../General/CardProduct';
import Validator from '../HOC/Validator';
import { useQuery } from 'react-query';
import { fetchMyProducts } from '../../api/products';


type Props = {}
const MyProductsComponent = () => {


 
 /*  const products = [
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
  ]; */

  const { isLoading, isError, data: fetchedMyProducts, error } = useQuery<UserProductT[], any>(
    'myproducts',
    fetchMyProducts 
  );

  if (isLoading) {
    return <div className='text-white'>Loading...</div>;
  }

  if (isError) {
    return <div className='text-white'>Error: {error?.message}</div>;
  }

  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-white font-semibold'>My products</h1>
        <div className='flex flex-wrap gap-8 my-4 text-white'>
          here 
           {/* list my product */}
          {/* {fetchedMyProducts.map((product, index) => (
            <CardProduct key={index} {...product} />
          ))} */}

          {fetchedMyProducts.map((userProduct, index) => (
            <div key={index}>
              <h2>{userProduct.product?.Price}</h2>
              {/* Other product details can be displayed similarly */}
            </div>
          ))}
          
        </div>

      </div>

    </>
  );
};

export default MyProductsComponent;
