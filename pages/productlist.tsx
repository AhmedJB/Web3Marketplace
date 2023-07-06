import React from 'react'
import Testimonies from '../components/Testimonies';
import Header from '../components/Header';
import TopSellersHome from '../components/TopSellersHome';
import Steps from '../components/Steps';
import SubscribeComponent from '../components/SubscribeComponent';
import CarouselComponent from '../components/CarouselComponent';
import subscribe3 from '../assets/SubscribeHomePageImage/subscribe3.png';

import Footer from '../components/Footer';
import ProductFiltersComponent from '../components/ProductFiltersComponent';
import CardsProductList from '../components/CardsProductList';
import HeartCheckboxComponent from '../components/HeartCheckboxComponent';


type Props = {}

function productlist({}: Props) {
  return <>
  <Header/>

  <ProductFiltersComponent/>
  <CardsProductList/>
  <HeartCheckboxComponent/>


 
   <Footer/>   
  </>
}



export default productlist;