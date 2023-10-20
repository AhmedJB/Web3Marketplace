import React, { useContext } from 'react'
import OrderStatusComponent from '../OrderStatusComponent'
import { AccountContext } from '../../../contexts/AccountContext';
import { useQuery } from 'react-query';
import { getMyOrders } from '../../../api/order';

type Props = {
	isSeller : boolean
}

function OrderStatusLayout({isSeller}: Props) {
	const {accountData,setAccountData} = useContext(AccountContext);
	const { isLoading, isError, data: myOrders, error } = useQuery<OrderRespT[],any>(
		['myorders',accountData?.address,accountData?.signature,isSeller],
		() => getMyOrders({
		  address : accountData?.address,
		  signature : accountData?.signature,
		  isSeller
		}) 
	  );
  
  


  return (
	<div className="w-full flex flex-col">
		{myOrders && myOrders.map((e,i) => {
			return <div key={e.productId+"-o-"+i}>

			 <OrderStatusComponent
			 	prodId={e.productId}
				orderId={e.id}
				isSeller={isSeller}
			/>

			</div>
		})})
	</div>
  )
}

export default OrderStatusLayout