/* ./components/productdetail/Product.tsx */
"use client";
import React, {
  Component,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "../../../styles/modular/ProductDetails.module.css";
import Container from "../../Utils/Container";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { GiReturnArrow } from 'react-icons/gi';
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "react-query";
import HeartCheckboxComponent from "../../Utils/HeartCheckboxComponent";
import { fetchProduct } from "../../../api/products";
import { baseUrl } from "../../../constants/apiSettings";
import { useWeb3React } from "@web3-react/core";

import productimage from '../../../assets/General/product.png';
import Ethlogo from '../../../assets/General/Ethlogo.png';

import { BsPatchCheckFill } from 'react-icons/bs';
import useContract from "../../../hooks/useContract";
import { escrowAddress, escrow_abi } from "../../../constants/contracts";
import { Escrow } from "../../../contracts/types";
import { formatOderStatus } from "../../../utils";
import { ethers } from "ethers";




interface Product {
  _id: string;
  title: string;
  src: string[];
  description: string;
  price: string;
  colors: string[];
  count: number;
  delivery: string;
}

interface AppState {
  products: Product[];
  index: number;
}

interface ProductDetailsT {
  id: number;
  title: string;
  src: string[];
  description: string;
  price: number;
  colors: string[];
  rating: number;
  minDays: number;
  maxDays: number;
}

type Props = {
  prodId : number,
  orderId : number,
  isSeller : boolean
};


const OrderStatusComponent = ({prodId,orderId,isSeller }: Props) => {

  const router = useRouter();
  const queryClient = useQueryClient()
  const { isLoading, isError, data: prod, error,isFetched } = useQuery<ProductDetT, any>(
    ['productDetails', prodId],
    () => fetchProduct(String(prodId)),
    { enabled: !!prodId }
  );
  const [quantity, setQuantity] = useState(1);

  const [index, setIndex] = useState(0);

  const myRef = useRef<HTMLDivElement | null>(null);
  const [openDescription, setOpenDescription] = useState(false);
  const [orderContractResponse,setOrderContractResponse] = useState<Escrow.OrderStructOutput | null>(null);
  const {active} = useWeb3React();

  const escrowContract = useContract(escrowAddress,escrow_abi) as Escrow;

  function trimText(text : string, maxLength : number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  }


  const fetchContractData = async () => {
    if (prod) {
      let orderDetails =  await escrowContract.getOrderById(orderId);
      setOrderContractResponse(orderDetails)
    }
  }


  useEffect(() => {
    if (isFetched){
      fetchContractData()
    }

  },[isFetched])

  const handleButtonAction = async () => {
    let tx
    if (isSeller) {
      tx = await escrowContract.refund(orderId);
    }else{
      tx = await escrowContract.release(orderId);
    }
    await tx.wait(1);
    await fetchContractData()
  }






  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
 


  const formatDelivery = (minDays: number | undefined, maxDays: number | undefined) => {
    if (minDays && maxDays) {
      return `${minDays} - ${maxDays} days`;
    } else {
      return '6-30 days'; 
    }
  };
  return (
    <>
    {
      prod && orderContractResponse &&<>
      <div className="text-yellow inter text-[25px] font-semibold pt-3">
                Your Order Status : {formatOderStatus(orderContractResponse.state)}
            </div>
        <div className={`flex items-center ${styles.app} max-w-[1200px] my-10  `}>  
        <div className={"flex flex-col p-6  w-full"}>
            <div className="text-white text-[18px] pb-6">
                Order Id : <span className="text-white text-base">{orderId} </span>
            </div>
            {/*  container*/}
            
            <div className="flex  justify-between w-full">
                <div className="flex items-center w-full">
                    {/* image product */}
                <div className={"flex flex-col items-center"} key={prod?.id}>  
                    <img src={prod.images ?  baseUrl + prod.images[0]?.fileUrl.slice(1) :  ""} alt="productimage" className="w-[200px]  h-[200px] mr-7 rounded-xl" />
                </div>
                <div className="flex w-full justify-between">
                  {/* product info title + description */}
                <div className="flex flex-col">
                        <div className="">
                        <h2 className="text-2xl font-semibold text-white inter">
                        {prod?.title}
                        </h2>
                    </div>
                    <div className="flex flex-col pt-3">
                        <h2 className="text-yellow">Description :</h2>
                        <p className="text-white md:w-[550px] w-full mx-2 text-sm font-normal p-1 opacity-80 mb-5 max-h-[200px] overflow-y-auto">
                        {trimText(prod.description,300)} 
                        </p>
                    </div>
                </div>
                

            {/* price + Delivery */}
            <div className={"flex flex-col"}>
                <div className="flex space-x-2 mx-2 items-center ">
                    <h1 className="text-white text-base font-medium  barlow">Price : </h1>
                    <div className="flex items-center" >
                        <div className="text-white text-base pl-6 barlow">
                        {prod.Price} ETH
                        </div>
                    <img src={Ethlogo.src} alt="productimage" className="w-[33px] h-[30px]" />
                    </div>

                </div>
                <div className="flex space-x-1 mx-2 ">
                    <h1 className="text-white text-base font-medium  barlow">Quantity : </h1>
                    <div className="text-white text-base pl-16 barlow">
                    {orderContractResponse.quantity.toString()}
                    </div>

                </div>
                <div className={`flex items-center mt-2`}>
                  
                    <p className="text-base text-white font-medium mx-2 barlow">Total </p>
                    <div className="flex items-center" >
                        <div className="text-white text-base pl-6 barlow">
                        {ethers.utils.formatEther(orderContractResponse.value)} ETH
                        </div>
                    <img src={Ethlogo.src} alt="productimage" className="w-[33px] h-[30px]" />
                    </div>
                    
                    {/* <BsPatchCheckFill size={18} className="text-[#32CD32] " /> */}
                </div>
                <div className={`flex items-center mt-2 justify-center mx-2`}>
                    <p className="text-base text-white barlow mr-2 ">Delivery time : </p>
                    <span className={"text-base font-semibold text-[#32CD32] barlow"}>
                    {formatDelivery(prod?.minimumDeliveryTime, prod?.maximumDeliveryTime)}
                    </span>
                </div>
             
            </div>
            </div>

                </div>

                
            </div>




            <div className="flex items-end justify-end">
              {
                orderContractResponse.state === 0 &&<button
                className={
                  "w-[150px] bg-orange py-2 px-5 text-white font-semibold rounded-md hover:bg-[#b4421d]"
                }
                onClick={handleButtonAction}
              >

                {isSeller ? "Refund" : "Confirm"}
              </button> 
              }
              
                         
            </div>
          
           
          </div>

        
        </div>
        </>
    }
      
    </>
  );
};

export default OrderStatusComponent;
