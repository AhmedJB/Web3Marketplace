import React, { useContext } from 'react'
import { SignContext } from '../../../contexts/SignContext'
import { useWeb3React } from '@web3-react/core';

type Props = {}

function Reminder({ }: Props) {
    const [signed, setSigned] = useContext(SignContext);
    const { active } = useWeb3React();

    return <>
        {
            active && !signed && <div className="fixed top-0 w-full h-[30px] z-[1000] bg-[#ff0000] text-white flex items-center justify-center font-semibold text-xl">
                Please Sign Message
            </div>
        }

    </>



}

export default Reminder