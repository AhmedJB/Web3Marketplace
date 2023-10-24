import React, { useState } from 'react'
import OrderStatusLayout from './OrderStatusLayout'

type Props = {}

function OrderComponent({}: Props) {
	const [activeTab, setActiveTab] = useState("seller")
  return <>
  <div className="flex flex-col w-full" >
	<div className="flex gap-3 items-center w-full mb-8">
	  <div onClick={() => setActiveTab("seller")} className="relative px-3 py-2 cursor-pointer ">
		<h1 className={` text-xl font-semibold ${activeTab === "seller" ? "text-white" : "text-inputBg transition-colors hover:text-white"}`}>
		  Seller
		</h1>
		<hr className={`absolute bottom-0 left-0  border-2 ${activeTab === "seller" ? " border-yellow w-full " : "w-0"} `} />
	  </div>
	  <div onClick={() => setActiveTab("buyer")} className="relative px-3 py-2 cursor-pointer ">
		<h1 className={` text-xl font-semibold ${activeTab === "buyer" ? "text-white" : "text-inputBg transition-colors hover:text-white"} `}>
		  Buyer
		</h1>
		<hr className={`absolute bottom-0 left-0  border-2 ${activeTab === "buyer" ? " border-yellow w-full " : "w-0"} `} />
	  </div>

	</div>

	{
	  activeTab === "seller" && <>
		<OrderStatusLayout isSeller={true} />
	  </>
	}

	{
	  activeTab === "buyer" && <>
		<OrderStatusLayout isSeller={false} />
	  </>
	}


  </div>




</>
}

export default OrderComponent