/* ./components/productdetail/Product.tsx */
"use client";
import React, {
  Component,
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import DetailsThumb from "./DetailsThumb";
import styles from "../../styles/modular/ProductDetails.module.css";
import Container from "../Utils/Container";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCartPlus, BsArrowReturnRight } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { GiReturnArrow } from 'react-icons/gi';
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import QuantityInput from "./QuantityInput";
import StarReview from "./StarReview";
import HeartCheckboxComponent from "../Utils/HeartCheckboxComponent";
import { fetchProduct } from "../../api/products";
import { baseUrl } from "../../constants/apiSettings";
import { useWeb3React } from "@web3-react/core";
import { createOrder, deleteOrder } from "../../api/order";
import { AccountContext } from "../../contexts/AccountContext";
import useContract from "../../hooks/useContract";
import { Marketplace } from "../../contracts/types";
import { marketPlaceAddress, marketplace_abi } from "../../constants/contracts";
import { convertToBigInt } from "../../utils";
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

type Props = {};


const ProductDetails = ({ }: Props) => {

  const router = useRouter();
  const queryClient = useQueryClient()
  const [prodId, setProdId] = useState("");
  const {accountData,setAccountData} = useContext(AccountContext);
  const { isLoading, isError, data: prod, error } = useQuery<ProductDetT, any>(
    ['productDetails', prodId],
    () => fetchProduct(prodId as string),
    { enabled: !!prodId }
  );
  const marketplace : Marketplace = useContract(marketPlaceAddress,marketplace_abi) as (Marketplace);

  const hanldeContractSync = async (pid : number, quantity : number, price : number,shipping : number,orderId:number  ) => {
        
    try{
        let  tx = await marketplace.buyProduct(pid,BigInt(quantity),orderId,{
          value : ethers.utils.parseEther(((quantity * price ) + shipping ).toString())
        }) ;
        let receipt = await tx.wait(1)
        let logs =  receipt.logs;
        console.log("Logs : ",logs)
        return true
    }catch (e){
        console.log("failed")
        console.log(e)
        return false
    }        
}

  const deleteOrderMutation = useMutation(deleteOrder,{
    onSuccess : (data, variables, context) => {
        console.log("deleted")
    },
    onError: (error, variables, context) => {
        // I will fire first
        console.log("failed deleting product");
        console.log(error);
    }
})

  const orderCrationMutation = useMutation(createOrder,{
    onSuccess: async (data, variables, context) => {
      console.log("success creation");
      console.log("Buying ",variables.body.data.quantity)
      let res = await hanldeContractSync(variables.body.data.productId,variables.body.data.quantity,variables.body.data.price,variables.body.data.shipping,data.data.oid);
      if (res){
          router.push('/productlist');
      }else{
          console.log("delete product")
          deleteOrderMutation.mutate({id : data.data.oid,address : accountData?.address,signature : accountData?.signature});
      }
  },
  onError: (error, variables, context) => {
      // I will fire first
      console.log("failed creating order");
      console.log(error);
  }
  })

  

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

  useEffect(() => {
    if (prodId.length > 0) {
      queryClient.invalidateQueries("productDetails")
    }
  }, [prodId])
  const handleTab = (index_: number) => {
    setIndex(index_);
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const formatDelivery = (minDays: number | undefined, maxDays: number | undefined) => {
    if (minDays && maxDays) {
      return `${minDays} - ${maxDays} business days`;
    } else {
      return '-- business days'; 
    }
  };
  const handleStep = (step: number) => {
    let newQuantity = quantity + step;
    if (step < 0) {
      if (newQuantity <= 0) {
        setQuantity(1);
      } else {
        setQuantity(newQuantity)
      }
    } else {
      if (newQuantity > 10) {
        setQuantity(10);
      } else {
        setQuantity(newQuantity)
      }
    }
  }

  const submitOrder = async ()  => {
    if (prod  && prod.userId && accountData){
      let data : OrderDataT = {
        sellerId : prod.userId,
        buyerAdd : accountData.address,
        price : prod.Price,
        quantity,
        shipping : prod.shippingCost,
        productId : prod.id
      }
      orderCrationMutation.mutate({address:accountData.address,body:{
        signature : accountData.signature,
        data
      }})
    }
    
  }

  return (
    <>
      <Container>
        <div className={`mx-auto ${styles.app} max-w-[1100px] my-16`}>
          <div className={"flex gap-11 "}>
           <div className={"flex flex-col items-center ml-4"} key={prod?.id}>
              <div className={styles["big-img"] + " relative"}>
                <img src={prod?.images ? baseUrl + prod?.images[index]?.fileUrl.slice(1) : ""} alt="test" />
                <div className="absolute top-3 right-3 rounded-full p-1 bg-white">
                  <HeartCheckboxComponent size="text-sm" />
                </div>
              </div>
              <DetailsThumb
                images={prod?.images?.map(e => baseUrl + e.fileUrl.slice(1))}
                tab={handleTab}
                activeIndex={index}
                />
            </div>
            <div className={"flex flex-col gap-3 pt-12"}>
              <div className="">
                <h2 className="text-2xl font-semibold text-white mt-3 inter">
                  {prod?.title}
                </h2>
                <StarReview rating={3} />
                <p className="text-white text-3xl font-semibold p-2 my-4">
                  {prod?.Price} ETH
                </p>
              </div>

              <QuantityInput quantity={quantity} updateQuantity={handleStep} />

              <div className="flex items-center gap-3">
                {
                  <button
                  className={
                    "w-[250px] bg-orange py-3 px-8 text-white font-semibold rounded-md"
                  }
                  onClick={submitOrder}
                >
                  BUY NOW
                </button>
                }
              </div>

              <button
                onClick={() => setOpenDescription(!openDescription)}
                className="flex items-center gap-3 text-white text-lg font-medium mt-5 mb-2"
              >
                Description{" "}
                {openDescription ? (
                  <HiOutlineChevronUp className="text-lg text-white" />
                ) : (
                  <HiOutlineChevronDown className="text-lg text-white" />
                )}{" "}
              </button>
              {openDescription && (
                <p className="text-white md:w-[550px] w-full mx-2 text-sm font-normal p-1 opacity-80 mb-5 max-h-[200px] overflow-y-auto">
                  {prod?.description} 
                </p>
              )}

              <div className={`flex items-center ${openDescription ? "" : "mt-6"}`}>
                <TbTruckDelivery className="text-5xl text-white " />
                <p className="text-lg text-white font-medium mx-2 w-[300px]">Delivery </p>
                <span className={"text-lg font-medium text-orange"}>
                  {formatDelivery(prod?.minimumDeliveryTime, prod?.maximumDeliveryTime)}
                </span>
              </div>
              <div className={"flex items-center mb-4"}>
                <GiReturnArrow className="text-5xl text-white scale-x-[-1] " />
                <p className="text-lg text-white font-medium mx-2 w-[300px]">Product Exchange and Return  </p>
                <span className={"text-lg font-medium text-orange"}>
                  Terms & Conditions
                </span>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
