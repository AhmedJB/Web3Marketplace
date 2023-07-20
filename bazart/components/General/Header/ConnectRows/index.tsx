import React, { useEffect } from 'react'
import { injected } from '../../../../connectors'
import useEagerConnect from '../../../../hooks/useEagerConnect';
import { WalletT } from '../../../../types/WalletTypes';
import ConnectRow from './ConnectRow';
import { useWeb3React } from '@web3-react/core';

type Props = {
    close: () => void,
}



function ConnectRows({ close }: Props) {
    const triedToEagerConnect = useEagerConnect();
    const { active } = useWeb3React();
    const wallets: WalletT[] = [
        {
            name: "MetaMask",
            connector: injected,
            isMetaMask: true,
            eager: triedToEagerConnect
        },
        /* 
        other connectors
        {
            name : "WalletConnect",
            connector : walletconnect,
            isMetaMask : false,
            eager : true
        } */
    ]

    useEffect(() => {
        if (active) {
            close();
        }

    }, [active])


    return <>
        <div className="flex flex-col my-4">
            {
                wallets.map((e, i) => {
                    return <ConnectRow
                        close={close}
                        key={"wallet-row-" + i}
                        walletOptions={e}
                    />
                })
            }

        </div>

    </>


}

export default ConnectRows