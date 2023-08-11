import React, { useState } from 'react'
import Header from '../components/General/Header';
import Footer from '../components/General/Footer';
import ProductFiltersComponent from '../components/Utils/ProductFiltersComponent';
import CardsProductList from '../components/CardsProductList';
type Props = {}
function productlist({}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const setCategory = (category: number) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Header />
      <ProductFiltersComponent setCategory={setCategory} />
      <CardsProductList selectedCategory={selectedCategory} />
      <Footer />
    </>
  );
}
export default productlist;