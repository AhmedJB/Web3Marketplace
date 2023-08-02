import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../../styles/modular/Carousel.module.css"
import CardProduct from '../General/CardProduct';
import { productlistData } from '../../demoData/productlist';
import axios from 'axios'; 

import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/products'; // Adjust the path accordingly

interface ProductT {
  id: number;
  title: string;
  creatorName: string;
  creatorImage: string;
  productImage: string;
  price: number;
  // ... other properties
}
type Props = {};

function CardsProductList({ }: Props) {



  const { isLoading, isError, data: fetchedProducts, error } = useQuery<ProductT[], any>('products', fetchProducts);

  //const limitedProductData = productlistData.slice(0, 24); // Limit to maximum of 30 items

/*   const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product/list')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className={`flex flex-wrap  gap-7 my-4`}>
          {/* {limitedProductData.map((product, index) => (
            <CardProduct key={index} {...product} />
          ))} */}

      {fetchedProducts.map((product) => (
        <CardProduct
          key={product.id} // Make sure each product has a unique identifier (e.g., "id" field)
          title={product.title}
          creatorName={product.creatorName}
          creatorImage={product.creatorImage}
          productImage={product.productImage}
          price={product.Price}
        />
      ))}

        </div>
      </div>
    </>
  );
}

export default CardsProductList;
