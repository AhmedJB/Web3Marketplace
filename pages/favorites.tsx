import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import HeartCheckboxComponent from '../components/HeartCheckboxComponent';
import MenuToggle from '../components/Header/MenuToggle';
import MenuLayout from '../components/MenuLayout';
import CardProduct from '../components/CardsProductList/CardProduct';


type Props = {}

function favorites({}: Props) {
    const products = [
        { title: 'Amazigh Vintage Rug', creatorName: 'Fatima',creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg',  productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
       
      ];



      const limitedProductData = products.slice(0,6);
  return <>
  <Header/>
 {/*  <MenuLayout activeMenuItem="favorites">
    <h1 className='text-white font-semibold'>favorites Page</h1>
    <div className='grid grid-cols-4 gap-7 my-4'>
    {limitedProductData.map((product, index) => (
        <CardProduct key={index} {...product}/>
    ))}
    </div>
  </MenuLayout> */}
  <Footer/>

  </>
}



export default favorites;