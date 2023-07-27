import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import ImageUpload from './ImageUpload'
import FormFields from './FormFields'
import Validator from '../../HOC/Validator';
import { AccountContext } from '../../../contexts/AccountContext';
import axios from 'axios';
import { formatEndPoint } from '../../../utils';
import { useMutation } from 'react-query';
import { uploadProduct } from '../../../api/products';

type Props = {}

function UploadForm({ }: Props) {

    const [selectedImages, setSelectedImages]: [File[] | [], Dispatch<SetStateAction<File[] | []>>] = useState([]);
    const { accountData, setAccountData } = useContext(AccountContext);
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        tags: '',
        shippingCost: '',
        shippingFrom: '',
        minimumDeliveryTime: '',
        maximumDeliveryTime: '',
        Price: '',
        quantity: 0,
    });
    const [checked, setChecked] = useState(false);
    const [category, setCategory] = useState(-1);


    const productUploadMutation = useMutation(uploadProduct, {
        onSuccess: (data, variables, context) => {
            console.log("success upload");

        },
        onError: (error, variables, context) => {
            // I will fire first
            console.log("failed uploading product");
            console.log(error);
        }
    })


    const submitData = async () => {
        console.log("uploading product")
        let body = {
            ...productData,
            category,
            signature: accountData.signature
        }
        let params = {
            address: accountData.address,
            body,
            images: selectedImages
        }
        productUploadMutation.mutate(params);
    }




    return <>
        <div className="flex flex-col lg:grid lg:grid-cols-2 p-5">
            <ImageUpload
                images={selectedImages}
                setImages={setSelectedImages}
            />
            <FormFields product={productData}
                setProduct={setProductData}
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