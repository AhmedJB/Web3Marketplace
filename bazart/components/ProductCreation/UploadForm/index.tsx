import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import ImageUpload from './ImageUpload'
import FormFields from './FormFields'
import Validator from '../../HOC/Validator';
import { AccountContext } from '../../../contexts/AccountContext';
import { convertToBigInt, formatEndPoint, formatZodError } from '../../../utils';
import { useMutation } from 'react-query';
import { deleteProduct, uploadProduct } from '../../../api/products';
import { useRouter } from 'next/router';
import { uploadSchema } from '../../../utils/validator';
import { ZodError } from 'zod';
import { useWeb3React } from '@web3-react/core';
import useContract from '../../../hooks/useContract';
import { marketPlaceAddress, marketplace_abi } from '../../../constants/contracts';
import { Marketplace } from '../../../contracts/types';
import {  ethers } from 'ethers';



type Props = {}

function UploadForm({ }: Props) {

    const router = useRouter();


    const [selectedImages, setSelectedImages]: [File[] | [], Dispatch<SetStateAction<File[] | []>>] = useState([] as File[]);
    const { accountData, setAccountData } = useContext(AccountContext);
    const {active,library} = useWeb3React();
    const marketplace : Marketplace = useContract(marketPlaceAddress,marketplace_abi) as (Marketplace);
    /* const [productData, setProductData] = useState({
        title: '',
        description: '',
        tags: '',
        shippingCost: 0,
        shippingFrom: '',
        minimumDeliveryTime: 0,
        maximumDeliveryTime: 0,
        Price: 0,
        quantity: 0,
    }); */

    const hanldeContractSync = async (pid : number,uri : string,price : number , quantity : number , shipping:number ) => {
        
        try{
            let  tx = await marketplace.createProduct(pid,uri,convertToBigInt(price),convertToBigInt(shipping),convertToBigInt(quantity)) ;
	        await tx.wait(1)
            return true
        }catch (e){
            console.log("failed")
            return false
        }        
   }
    const [checked, setChecked] = useState(false);
    const [category, setCategory] = useState(0);
    const deleteProductMutation = useMutation(deleteProduct,{
        onSuccess : (data, variables, context) => {
            console.log("deleted")
        },
        onError: (error, variables, context) => {
            // I will fire first
            console.log("failed deleting product");
            console.log(error);
        }
    })
    const productUploadMutation = useMutation(uploadProduct, {
        onSuccess: async (data, variables, context) => {
            console.log("success upload");
            let res = await hanldeContractSync(data.data.pid,"test",variables.body.Price,variables.body.quantity,variables.body.shippingCost);
            if (res){
                router.push('/productlist');
            }else{
                console.log("delete product")
                deleteProductMutation.mutate({id : data.data.pid,address : accountData?.address,signature : accountData?.signature});
            }
        },
        onError: (error, variables, context) => {
            // I will fire first
            console.log("failed uploading product");
            console.log(error);
        }
    })
    const submitData = async (productData : ProductFormT) => {
        console.log(selectedImages.length)
        if (selectedImages.length === 0) {
            console.log("Must upload at least 1 image")
        } else {
            console.log("uploading product")
            let numeric_fields = ["quantity", "minimumDeliveryTime", "maximumDeliveryTime", "Price", "shippingCost"]
            let temp = { ...productData }
            for (let key of numeric_fields) {
                (temp[key as keyof typeof temp] as (string | number)) = Number(temp[key as keyof typeof temp])
            }
            let body = {
                ...temp,
                category,
                signature: accountData?.signature ? accountData.signature : ""
            }

            console.log(body)
            try {
                let res = uploadSchema.parse(body);
                let params = {
                    address: accountData?.address ? accountData.address : "",
                    body,
                    images: selectedImages
                }
                productUploadMutation.mutate(params);
            } catch (e) {
                let err = e as ZodError
                let msgs = formatZodError(err.errors)
                console.log(msgs)
            }
        }


        //
    }
    return <>
        <div className="flex flex-col lg:grid lg:grid-cols-2 p-5">
            <ImageUpload
                images={selectedImages}
                setImages={setSelectedImages}
            />
            <FormFields /* product={productData}
                setProduct={setProductData} */
                checked={checked}
                setChecked={setChecked}
                category={category}
                setCategory={setCategory}
                submit={submitData}
            />
        </div>

    </>

}

export default Validator(UploadForm);