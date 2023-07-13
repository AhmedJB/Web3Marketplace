// SellerDash.tsx, server file where I want the code to show 
import React from 'react';
import DataTable from '../components/Table/DataTable';
import Header from '../components/Header';
import Footer from '../components/Footer';
const App: React.FC = () => {
  const headers = ['Product Name','', 'Price', 'Sold', 'Status'];

  const products = [
    { image: './P1.jpg',name: 'My name is product 1', price: 1.25, sold: 53, status: 'In Stock' },
    { image: './P2.jpg',name: 'My name is product 2', price: 2.34, sold: 53, status: 'In Stock' },
    { image: './P3.jpg',name: 'My name is product 3', price: 5.45, sold: 53, status: 'Out of Stock' },
    { image: './P4.jpg',name: 'My name is product 4', price: 3.45, sold: 53, status: 'In Stock' },
    // Add more products here...
  ];

  return (
    <>
      <Header/>
      <div className="App">
        <DataTable headers={headers} products={products} />
      </div>
      <Footer/>
    </>
  )};
  

export default App;
