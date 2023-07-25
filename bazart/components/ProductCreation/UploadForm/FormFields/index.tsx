import React, { useState } from 'react'
import InputField from '../../../General/InputField'
import { InputTypeEnum } from '../../../../types/enums'

type Props = {}

function FormFields({ }: Props) {

    const [checked, setChecked] = useState(false);
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        tags: '',
        shippingCost: '',
        shippingFrom: '',
        estimatedDeliveryTime1: '',
        estimatedDeliveryTime2: '',
        startingPrice: '',
        enableAuction: false,
        quantity: '',
    });


    return <>
        <div className="flex flex-col p-7 mx-4">
            <InputField
                inputType={InputTypeEnum.input}
                label={"Title"}
                required={true}
                type={"text"}
                placeholder={"eg: Moroccan dress"}
                value={productData.title}
            />

            <InputField
                inputType={InputTypeEnum.textarea}
                label={"Description"}
                required={true}
                placeholder={"eg: Moroccan dress"}
                value={productData.description}

            />

            <InputField
                inputType={InputTypeEnum.input}
                label={"Tags"}
                required={true}
                type={"text"}
                placeholder={"eg: Dress,fashion..."}
                sublabel='tags to describe your product'
                value={productData.tags}

            />

            <div className="flex flex-col my-2">
                <h1 className="text-2xl text-white font-semibold">
                    SHIPPING INFORMATION <sup className="text-red">*</sup>
                </h1>
                <div className="flex items-center gap-4">
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Shipping Cost"}
                        required={true}
                        type={"number"}
                        placeholder={"eg: 0.01 ETH"}
                        value={productData.shippingCost}
                    />
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Shipping From"}
                        required={true}
                        type={"text"}
                        placeholder={"eg: Morocco"}
                        value={productData.shippingFrom}
                    />

                </div>
            </div>





            <div className="flex flex-col my-2">
                
                <div className="flex items-center gap-4">
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Estimated delivery time"}
                        required={true}
                        type={"text"}
                        placeholder={"eg: 5 Days"}
                        value={productData.estimatedDeliveryTime1}

                    />
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Estimated delivery time"}
                        required={true}
                        type={"text"}
                        placeholder={"eg: 2 weeks"}
                        value={productData.estimatedDeliveryTime2}
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
                        placeholder={"eg: 0.01 ETH"}
                        value={productData.startingPrice}

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
                sublabel='Enter the quantity of the product available for sale.'
                value={productData.title}

            />



            <button className="self-end gradient-bg w-[250px] p-1 cursor-pointer transition-transform hover:scale-105 text-white font-semibold rounded-md">Publish</button>




        </div>
    </>


}

export default FormFields