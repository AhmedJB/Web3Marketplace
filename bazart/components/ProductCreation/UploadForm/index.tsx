import React, { Dispatch, SetStateAction, useState } from 'react'
import ImageUpload from './ImageUpload'
import FormFields from './FormFields'
import Validator from '../../HOC/Validator';

type Props = {}

function UploadForm({ }: Props) {

    const [selectedImages, setSelectedImages]: [FileList[] | [], Dispatch<SetStateAction<FileList[] | []>>] = useState([]);
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        tags: '',
        shippingCost: '',
        shippingFrom: '',
        minimumDeliveryTime: '',
        maximumDeliveryTime: '',
        startingPrice: '',
        quantity: 0,
    });
    const [checked, setChecked] = useState(false);
    const [category, setCategory] = useState(null);


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
            />
        </div>

    </>

}

export default Validator(UploadForm);