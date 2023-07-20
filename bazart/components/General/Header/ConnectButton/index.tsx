import { useWeb3React } from "@web3-react/core"
import React, { useContext } from "react"
import { formatEtherscanLink, shortenHex } from "../../../../util"
import useENSName from "../../../../hooks/useENSName"
import { SignContext } from "../../../../contexts/SignContext"


type Props = {
    toggleDropdown: () => void,
    toggleModal: () => void
}

const ConnectButton = ({ toggleDropdown, toggleModal }: Props) => {

    const { active, account, deactivate, chainId } = useWeb3React();
    const [signed, setSigned] = useContext(SignContext);

    const ENSName = useENSName(account);


    return <>
        {
            !active && <button
                className="ml-4 py-3 px-12  rounded-[15px] barlow text-[18px] font-semibold text-white header-gradient "
                onClick={toggleModal}> Connect Your Wallet
            </button>
        }

        {
            active && <div className="flex items-center">
                <a
                    className="text-white"
                    {...{
                        href: formatEtherscanLink("Account", [chainId, account]),
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }}
                >
                    {ENSName || `${shortenHex(account, 4)}`}
                </a>
                <button
                    className="p-3 bg-mainDark text-white"
                    onClick={() => {
                        setSigned(false);
                        deactivate();
                    }}
                >
                    Logout
                </button>
            </div>
        }

    </>
}

export default ConnectButton;