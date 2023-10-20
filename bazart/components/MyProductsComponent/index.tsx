import React, { useContext } from 'react'

import CardProduct from '../General/CardProduct';
import Validator from '../HOC/Validator';
import { useQuery } from 'react-query';
import { fetchMyProducts } from '../../api/products';
import { AccountContext } from '../../contexts/AccountContext';
import { baseUrl } from '../../constants/apiSettings';
import Link from 'next/link';


type Props = {}
const MyProductsComponent = () => {

  const {accountData,setAccountData} = useContext(AccountContext);

 
 /*  const products = [
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
    { title: 'Amazigh Vintage Rug', creatorName: 'Fatima', creatorImage: 'https://i.pinimg.com/564x/93/0e/d3/930ed321b0243d4772ced6321677b5a2.jpg', productImage: 'https://i.pinimg.com/564x/fa/0d/f3/fa0df33078a041ad5c9c75845e2f261c.jpg', price: 0.025 },
  ]; */

  const { isLoading, isError, data: fetchedMyProducts, error } = useQuery<ProductT[],any>(
    ['myproducts',accountData?.address,accountData?.signature],
    () => fetchMyProducts({
      address : accountData?.address,
      signature : accountData?.signature
    }) 
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

          {fetchedMyProducts && fetchedMyProducts.map((userProduct, index) => (
            
              <Link key={userProduct.id} href={`/details?id=${userProduct.id}`}>
                <CardProduct
                  key={userProduct.id}
                  title={userProduct.title}
                  shippingFrom={userProduct.shippingFrom}
                  firstName={userProduct.user?.firstName}
                  lastName={userProduct.user?.lastName}
                  productImage={userProduct.images ?  baseUrl + userProduct.images[0]?.fileUrl.slice(1) :  ""} 
                  price={userProduct.Price}
                  />
                  </Link>
           
          ))}
          
        </div>

      </div>

    </>
  );
};

export default MyProductsComponent;
