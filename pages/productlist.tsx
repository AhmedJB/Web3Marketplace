import React from 'react'
import Header from '../components/General/Header';
import Footer from '../components/General/Footer';
import ProductFiltersComponent from '../components/Utils/ProductFiltersComponent';
import CardsProductList from '../components/CardsProductList';



type Props = {}

function productlist({ }: Props) {
  return <>
    <Header />

    <ProductFiltersComponent />
    <CardsProductList />
    {/* <HeartCheckboxComponent/> */}
    {/* <MenuToggle/> */}



    <Footer />
  </>
}



export default productlist;