import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../../styles/modular/Carousel.module.css"
import CardProduct from '../General/CardProduct';
import { productlistData } from '../../demoData/productlist';

type Props = {};

function CardsProductList({ }: Props) {




  const limitedProductData = productlistData.slice(0, 24); // Limit to maximum of 30 items




  return (
    <>
      <div className='container mx-auto'>
        <div className={`flex flex-wrap  gap-7 my-4`}>
          {limitedProductData.map((product, index) => (
            <CardProduct key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardsProductList;
