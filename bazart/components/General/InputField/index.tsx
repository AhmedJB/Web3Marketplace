import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { InputTypeEnum } from '../../../types/enums'
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';


interface SelectOptionsT {
    name: string;
    value: string;
}

type onChangeType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

type Props = {
    label?: string;
    required?: boolean;
    sublabel?: string;
    name?: string;
    type?: string;
    defaultValue?: string;
    value?: string;
    inputType: InputTypeEnum;
    placeholder?: string;
    checked?: boolean;
    setChecked?: Dispatch<SetStateAction<boolean>>;
    switchLabel?: string;
    options?: SelectOptionsT[];
    changeFunc?: (event: React.ChangeEvent<onChangeType>) => any


}

const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: "#A259FF",
        '&:hover': {
            backgroundColor: alpha("#A259FF", theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: "#A259FF",
    },
}));

function InputField({ label, required, sublabel, type, inputType, placeholder, checked, setChecked, switchLabel, options, name, changeFunc, defaultValue, value }: Props) {

    const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (setChecked) {
            let isChecked = event?.target?.checked ?? false;
            setChecked(isChecked);
        }
    }


    return <>
        <div className="flex flex-col my-2">
            {
                label && <label className="text-white font-semibold text-lg">{label}
                    {
                        required && <sup className="text-red">*</sup>
                    }
                </label>

            }

            {
                sublabel && <p className="text-subgray opacity-80 text-md font-normal">
                    {sublabel}
                </p>
            }

            {
                inputType === InputTypeEnum.input && <>
                    <input
                        name={name}
                        onChange={changeFunc}
                        className="w-full my-3 rounded-xl p-3 bg-inputBg placeholder:text-subgray text-white font-normal placeholder:text-[0.65rem] placeholder:font-light"
                        placeholder={placeholder}
                        value={value}
                        defaultValue={defaultValue}
                        type={type}
                    />
                </>
            }

            {
                inputType === InputTypeEnum.textarea && <>
                    <textarea
                        name={name}
                        onChange={changeFunc}
                        className="w-full my-3 rounded-xl p-3 bg-inputBg placeholder:text-subgray text-white font-normal min-h-[300px] placeholder:text-[0.8rem] placeholder:font-light"
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        value={value}



                    />
                </>
            }

            {
                inputType === InputTypeEnum.switch && <>
                    <div className="w-full my-3 rounded-xl py-[0.35rem] px-3 bg-inputBg flex items-center">
                        <h3 className="text-md font-extralight text-white">
                            {switchLabel}
                        </h3>

                        <CustomSwitch
                            checked={checked}
                            onChange={handleSwitchChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />

                    </div>
                </>
            }

            {
                inputType === InputTypeEnum.select && <>
                    <select
                        name={name}
                        onChange={changeFunc}
                        value={value}
                        defaultValue={defaultValue}
                        className="w-full my-3 rounded-xl p-3  bg-inputBg placeholder:text-subgray text-white font-normal placeholder:text-[0.65rem] placeholder:font-light">
                        {
                            options?.map((e, i) => {
                                return <option key={e.value + "_" + i} value={e.value}>{e.name}</option>
                            })
                        }


                    </select>

                </>
            }

        </div>

    </>


}

export default InputField