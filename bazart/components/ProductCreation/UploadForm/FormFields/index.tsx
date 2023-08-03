import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputField from '../../../General/InputField'
import { InputTypeEnum } from '../../../../types/enums'
import { categories } from '../../../../constants/categories'
import CategoryCapsule from './CategoryCapsule'
import axios from 'axios'
import { formatEndPoint, getBaseURL } from '../../../../utils'
import { useQuery } from 'react-query'
import { fetchCategories } from '../../../../api/categories'
import { useRouter } from 'next/router';


type Props = {
    product: ProductFormT,
    setProduct: (c: ProductFormT) => void,
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
    category: number;
    setCategory: (c: number) => void,
    submit: any
}
function FormFields({ product, setProduct, checked, setChecked, category, setCategory, submit }: Props) {


    const { isLoading, isError, data: fetchedCategories, error } = useQuery<CategoryT[], any>('todos', fetchCategories)



    const handleFormChange = (v: ChangeEvent) => {
        let t = v.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        let temp: ProductFormT = { ...product }
        //console.log(`Updating Field ${t.name} with value ${t.value}`)
        let numeric_fields = ["quantity", "minimumDeliveryTime", "maximumDeliveryTime", "Price", "shippingCost"]
        let val: string | number | null = t.value;

        if (numeric_fields.includes(t.name)) {
            val = Number(val);
        }
        let k: keyof ProductFormT = t.name as keyof ProductFormT;
        (temp[k] as (string | number)) = val as ProductFormT[typeof k];
        setProduct(temp);
    }


    return <>
        <div className="flex flex-col p-7 mx-4">
            <InputField
                inputType={InputTypeEnum.input}
                label={"Title"}
                required={true}
                type={"text"}
                name={"title"}
                changeFunc={handleFormChange}
                placeholder={"eg: Moroccan dress"}
                value={product.title}
            />

            <InputField
                inputType={InputTypeEnum.textarea}
                label={"Description"}
                required={true}
                name={"description"}
                changeFunc={handleFormChange}
                placeholder={"eg: Moroccan dress"}
                value={product.description}

            />

            <InputField
                inputType={InputTypeEnum.input}
                label={"Tags"}
                required={true}
                type={"text"}
                placeholder={"eg: Dress,fashion..."}
                name={"tags"}
                changeFunc={handleFormChange}
                sublabel='tags to describe your product'
                value={product.tags}

            />

            <div className="flex flex-col my-2">
                <h1 className="text-2xl text-white font-semibold">
                    SHIPPING INFORMATION <sup className="text-red">*</sup>
                </h1>
                <div className="flex items-center gap-4">
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Shipping Cost"}
                        name={"shippingCost"}
                        changeFunc={handleFormChange}
                        required={true}
                        type={"number"}
                        placeholder={"eg: 0.01 ETH"}
                        value={String(product.shippingCost)}
                    />
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Shipping From"}
                        required={true}
                        type={"text"}
                        name={"shippingFrom"}
                        changeFunc={handleFormChange}
                        placeholder={"eg: Morocco"}
                        value={product.shippingFrom}
                    />

                </div>
            </div>





            <div className="flex flex-col my-2">

                <div className="flex items-center gap-4">
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Minimum delivery time"}
                        required={true}
                        type={"text"}
                        name={"minimumDeliveryTime"}
                        changeFunc={handleFormChange}
                        placeholder={"eg: 5 Days"}
                        value={String(product.minimumDeliveryTime)}

                    />
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Maximum delivery time"}
                        required={true}
                        type={"text"}
                        name={"maximumDeliveryTime"}
                        changeFunc={handleFormChange}
                        placeholder={"eg: 2 weeks"}
                        value={String(product.maximumDeliveryTime)}
                    />
                </div>
            </div>


            <div className="flex flex-col my-2">
                <h1 className="text-2xl text-white font-semibold">
                    Auction <sup className="text-red">*</sup>
                </h1>
                <div className="flex items-center gap-4">
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Starting Price"}
                        required={true}
                        type={"number"}
                        name={"Price"}
                        changeFunc={handleFormChange}
                        placeholder={"eg: 0.01 ETH"}
                        value={String(product.Price)}

                    />
                    <InputField
                        inputType={InputTypeEnum.switch}
                        label={"Enable Auction"}
                        required={true}
                        switchLabel={checked ? "Enabled" : "Disabled"}
                        checked={checked}
                        setChecked={setChecked}
                    />

                </div>
            </div>
            <InputField
                inputType={InputTypeEnum.input}
                label={"Quantity"}
                required={true}
                type={"number"}
                placeholder={"eg: 100"}
                name={"quantity"}
                changeFunc={handleFormChange}
                sublabel='Enter the quantity of the product available for sale.'
                value={product.quantity.toString()}

            />

            <div className="flex flex-col my-2">
                <label className="text-white font-semibold text-lg">
                    CATEGORIZATION <sup className="text-red">*</sup>
                </label>
                <p className="text-subgray opacity-80 text-md font-normal">
                    Select a main category that describes your product
                </p>
                <div className="flex flex-wrap gap-4 my-3">
                    {!isLoading && !isError && fetchedCategories?.map((category_, index) => (
                        <CategoryCapsule
                            id={category_.id}
                            active={category === category_.id}
                            setCategory={setCategory}
                            key={index}
                            title={category_.title}
                            imageUrl={category_.imageUrl}
                        />
                    ))}
                </div>
            </div>

            {/* <div className="flex flex-wrap  gap-4 my-3">
                    {categories.map((category_, index) => (
                        <CategoryCapsule active={category === category_.title} setCategory={setCategory} key={index} title={category_.title} imageUrl={category_.imageUrl} />
                    ))}
                </div> */}




            <button onClick={submit} className="self-end gradient-bg w-[250px] p-1 cursor-pointer transition-transform hover:scale-105 text-white font-semibold rounded-md">Publish</button>
        </div>
    </>


}

export default FormFields