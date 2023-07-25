import React, { useContext } from 'react'
import { SignContext } from '../../../contexts/SignContext'
import { useWeb3React } from '@web3-react/core';
import { AccountContext } from '../../../contexts/AccountContext';

type Props = {}

function Reminder({ }: Props) {
    const [signed, setSigned] = useContext(SignContext);
    const { active, account } = useWeb3React();
    const { accountData, setAccountData } = useContext(AccountContext);

    const stateValidation = active && !signed && (account !== accountData?.address)

    return <>
        {
            stateValidation && <div className="fixed top-0 w-full h-[30px] z-[1000] bg-[#ff0000] text-white flex items-center justify-center font-semibold text-xl">
                Please Sign Message
            </div>
        }

    </>



}

export default Reminder