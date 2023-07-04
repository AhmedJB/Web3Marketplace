import React from "react"


type Props = {
    toggleDropdown : () => void
}

const ConnectButton = ( {toggleDropdown} : Props)  => {


    return <> 
        <button
            className="ml-4 py-3 px-12 rounded-[15px] barlow text-[18px] font-semibold text-white header-gradient "
            onClick={toggleDropdown}> Connect Your Wallet
        </button>
    </>
}

export default ConnectButton;