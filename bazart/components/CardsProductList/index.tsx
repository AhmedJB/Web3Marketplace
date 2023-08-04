import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import CardProduct from '../General/CardProduct';

import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/products'; // Adjust the path accordingly
import Link from 'next/link';
import { baseUrl } from '../../constants/apiSettings';
/* import { fetchUser } from '../../api/user';
 */
type Props = {};
function CardsProductList({ }: Props) {
  const { isLoading, isError, data: fetchedProducts, error } = useQuery<ProductT[], any>('products', fetchProducts);
  /*  const { isLoading, isError, data: fetchedProducts, error } = useQuery<ProductT[], any>('products', fetchProducts, {
     onSuccess: (data) => {
       // Optional: Clear the cache after a successful data fetch
       queryClient.setQueryData('products', data);
     },
   });
  */
  /* const { isLoading: isLoadingProducts, isError: isErrorProducts, data: fetchedProducts, error: errorProducts } = useQuery<ProductT[], any>('products', fetchProducts);
   *//* const { isLoading: isLoadingUser, isError: isErrorUser, data: userData, error: errorUser } = useQuery<UserModelT[], any>('user', fetchUser);
 */
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
  /*   if (isLoadingProducts || isLoadingUser) {
      return <div>Loading...</div>;
    }
  
    if (isErrorProducts || isErrorUser) {
      return <div>Error: {errorProducts?.message || errorUser?.message}</div>;
    } */
  return (
    <div className='container mx-auto'>
      <div className={`flex flex-wrap  gap-7 my-4`}>
        {fetchedProducts?.map((product) => {
          if (product.images && product.images.length > 0) {
            return <Link key={product.id} href={`/details?id=${product.id}`}>
              <CardProduct
                key={product.id} //unique identifier
                title={product.title}
                shippingFrom={product.shippingFrom}
                firstName={product?.user?.firstName}
                lastName={product?.user?.lastName}
                productImage={baseUrl + product?.images[0]?.fileUrl.slice(1)}
                price={product.Price}
/*               images={product.productImagee} 
 */            />
            </Link>
          } else {
            return <></>
          }

        })}

      </div>
    </div>
  );
}

export default CardsProductList;
