import React, { useState } from 'react'
import InputField from '../../../General/InputField'
import { InputTypeEnum } from '../../../../types/enums'

type Props = {}

function FormFields({ }: Props) {

    const [checked, setChecked] = useState(false);


    return <>
        <div className="flex flex-col p-7 mx-4">
            <InputField
                inputType={InputTypeEnum.input}
                label={"Title"}
                required={true}
                type={"text"}
                placeholder={"eg: Moroccan dress"}
            />

            <InputField
                inputType={InputTypeEnum.textarea}
                label={"Description"}
                required={true}
                placeholder={"eg: Moroccan dress"}
            />

            <InputField
                inputType={InputTypeEnum.input}
                label={"Tags"}
                required={true}
                type={"text"}
                placeholder={"eg: Dress,fashion..."}
                sublabel='tags to describe your product'
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
                    />
                    <InputField
                        inputType={InputTypeEnum.input}
                        label={"Shipping From"}
                        required={true}
                        type={"text"}
                        placeholder={"eg: Morocco"}
                    />

                </div>
            </div>

            <InputField
                inputType={InputTypeEnum.input}
                label={"Estimated delivery time"}
                required={true}
                type={"number"}
                placeholder={"eg: 10 days"}
            />

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
                sublabel='Enter the quantity of the product available for sale.                '
            />



            <button className="self-end gradient-bg w-[250px] p-1 cursor-pointer transition-transform hover:scale-105 text-white font-semibold rounded-md">Publish</button>




        </div>
    </>


}

export default FormFields