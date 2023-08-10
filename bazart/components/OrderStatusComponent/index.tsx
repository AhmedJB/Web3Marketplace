/* ./components/productdetail/Product.tsx */
"use client";
import React, {
  Component,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "../../styles/modular/ProductDetails.module.css";
import Container from "../Utils/Container";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { GiReturnArrow } from 'react-icons/gi';
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "react-query";
import HeartCheckboxComponent from "../Utils/HeartCheckboxComponent";
import { fetchProduct } from "../../api/products";
import { baseUrl } from "../../constants/apiSettings";
import { useWeb3React } from "@web3-react/core";

import productimage from '../../assets/General/product.png';
import Ethlogo from '../../assets/General/Ethlogo.png';

import { BsPatchCheckFill } from 'react-icons/bs';




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

type Props = {};


const OrderStatusComponent = ({ }: Props) => {

  const router = useRouter();
  const queryClient = useQueryClient()
  const [prodId, setProdId] = useState("");
  const { isLoading, isError, data: prod, error } = useQuery<ProductDetT, any>(
    ['productDetails', prodId],
    () => fetchProduct(prodId as string),
    { enabled: !!prodId }
  );
  const [quantity, setQuantity] = useState(1);

  const [index, setIndex] = useState(0);

  const myRef = useRef<HTMLDivElement | null>(null);
  const [openDescription, setOpenDescription] = useState(false);
  const {active} = useWeb3React();

  useEffect(() => {
    if (router.isReady) {
      setProdId(router.query.id as string)
    }

  }, [router.isReady])




  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
 


  const formatDelivery = (minDays: number | undefined, maxDays: number | undefined) => {
    if (minDays && maxDays) {
      return `${minDays} - ${maxDays} `;
    } else {
      return '6-30 days'; 
    }
  };
  return (
    <>
      <Container>
      <div className="text-yellow inter text-[25px] font-semibold pt-3">
                Your Order Status :
            </div>
        <div className={`flex items-center ${styles.app} max-w-[1200px] my-10  `}>  
        <div className={"flex flex-col p-6"}>
            <div className="text-white text-[18px] pb-6">
                Order Id : <span className="text-white text-base">{prod?.id} 166565 </span>
            </div>
            {/*  container*/}
            <div className="flex  justify-between gap-52">
                <div className="flex">
                    {/* image product */}
                <div className={"flex flex-col items-center"} key={prod?.id}>  
                    <img src={productimage.src} alt="productimage" className="w-[150px]  h-[180px] mr-7" />
                </div>

                {/* product info title + description */}
                <div className="flex flex-col">
                        <div className="">
                        <h2 className="text-2xl font-semibold text-white inter">
                        {prod?.title} Artizana - Handcrafted Artwork
                        </h2>
                    </div>
                    <div className="flex flex-col pt-3">
                        <h2 className="text-yellow">Description :</h2>
                        <p className="text-white md:w-[550px] w-full mx-2 text-sm font-normal p-1 opacity-80 mb-5 max-h-[200px] overflow-y-auto">
                        {prod?.description} Elevate your living space with the captivating beauty of "Artizana," a 
                        handcrafted masterpiece that encapsulates the essence of artistic expression.
                         Meticulously crafted by skilled artisans, each detail of this artwork tells a story of creativity, passion, and dedication.
                        </p>
                    </div>
                </div>
                </div>

            {/* price + Delivery */}
            <div className={"flex flex-col"}>
                <div className="flex space-x-2 mx-2 items-center ">
                    <h1 className="text-white text-base font-medium  barlow">Price : </h1>
                    <div className="flex items-center" >
                        <div className="text-white text-base pl-6 barlow">
                        {prod?.Price}50 ETH
                        </div>
                    <img src={Ethlogo.src} alt="productimage" className="w-[33px] h-[30px]" />
                    </div>

                </div>
                <div className="flex space-x-1 mx-2 ">
                    <h1 className="text-white text-base font-medium  barlow">Quantity : </h1>
                    <div className="text-white text-base pl-16 barlow">
                    10
                    </div>

                </div>
                <div className={`flex items-center mt-2`}>
                    <p className="text-base text-white font-medium mx-2 barlow">Free Shipping </p>
                    <BsPatchCheckFill size={18} className="text-[#32CD32] " />
                </div>
                <div className={`flex items-center mt-2 justify-center mx-2`}>
                    <p className="text-base text-white barlow mr-2 ">Delivery time : </p>
                    <span className={"text-base font-semibold text-[#32CD32] barlow"}>
                    {formatDelivery(prod?.minimumDeliveryTime, prod?.maximumDeliveryTime)}
                    </span>
                </div>
             
            </div>
            </div>




            <div className="flex items-end justify-end">
               <button
                  className={
                    "w-[150px] bg-orange py-2 px-5 text-white font-semibold rounded-md hover:bg-[#b4421d]"
                  }
                >
                  Refund
                </button>           
            </div>
          
           
          </div>

        
        </div>
      </Container>
    </>
  );
};

export default OrderStatusComponent;
