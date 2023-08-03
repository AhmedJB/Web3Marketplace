import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import ImageUpload from './ImageUpload'
import FormFields from './FormFields'
import Validator from '../../HOC/Validator';
import { AccountContext } from '../../../contexts/AccountContext';
import { formatEndPoint, formatZodError } from '../../../utils';
import { useMutation } from 'react-query';
import { uploadProduct } from '../../../api/products';
import { useRouter } from 'next/router';
import { uploadSchema } from '../../../utils/validator';
import { ZodError } from 'zod';



type Props = {}

function UploadForm({ }: Props) {

    const router = useRouter();


    const [selectedImages, setSelectedImages]: [File[] | [], Dispatch<SetStateAction<File[] | []>>] = useState([] as File[]);
    const { accountData, setAccountData } = useContext(AccountContext);
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        tags: '',
        shippingCost: 0,
        shippingFrom: '',
        minimumDeliveryTime: 0,
        maximumDeliveryTime: 0,
        Price: 0,
        quantity: 0,
    });
    const [checked, setChecked] = useState(false);
    const [category, setCategory] = useState(1);
    const productUploadMutation = useMutation(uploadProduct, {
        onSuccess: (data, variables, context) => {
            console.log("success upload");
            router.push('/productlist');
        },
        onError: (error, variables, context) => {
            // I will fire first
            console.log("failed uploading product");
            console.log(error);
        }
    })
    const submitData = async () => {
        console.log(selectedImages.length)
        if (selectedImages.length === 0) {
            console.log("Must upload at least 1 image")
        } else {
            console.log("uploading product")
            let body = {
                ...productData,
                category,
                signature: accountData?.signature
            }
            let params = {
                address: accountData?.address,
                body,
                images: selectedImages
            }
            console.log(body)
            try {
                let res = uploadSchema.parse(body);
            } catch (e) {
                let err = e as ZodError
                let msgs = formatZodError(err.errors)
                console.log(msgs)
            }
        }


        //productUploadMutation.mutate(params);
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