import React from 'react'
import { WalletT } from '../../../../../types/WalletTypes'
import CustomAccount from '../../../../Utils/CustomAccount'

type Props = {
    walletOptions: WalletT,
    close: () => void,
}

function ConnectRow({ walletOptions, close }: Props) {

    return <>
        <div className="w-full p-1 bg-mainDark rounded-xl">
            <CustomAccount
                connector={walletOptions.connector}
                triedToEagerConnect={walletOptions.eager}
                isMetamask={walletOptions.isMetaMask}
                walletName={walletOptions.name}
                close={close}
            />
        </div>

    </>

}

export default ConnectRow