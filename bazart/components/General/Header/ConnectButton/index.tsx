import { useWeb3React } from "@web3-react/core"
import React, { useContext, useState } from "react"
import { formatEtherscanLink, shortenHex } from "../../../../util"
import useENSName from "../../../../hooks/useENSName"
import { SignContext } from "../../../../contexts/SignContext"
import Account from "../../../Utils/Accounts"
import { userInfo } from "os"
import Link from "next/link"
import { BsPerson } from 'react-icons/bs';
import { TbLayoutDashboard } from 'react-icons/tb';
import { MdFavoriteBorder,MdOutlineCreate } from 'react-icons/md';
import { CgLogOut } from 'react-icons/cg';




type Props = {
    toggleDropdown: () => void,
    toggleModal: () => void
}

const ConnectButton = ({ toggleDropdown, toggleModal }: Props) => {

    const { active, account, deactivate, chainId } = useWeb3React();
    const [profileImage, setProfileImage] = useState('./avatar.jpg');

    const [signed, setSigned] = useContext(SignContext);

    const ENSName = useENSName(account as string);
    const [showDropdown, setShowDropdown] = useState(false);



    return <>
        {
            !active && <button
                className="ml-4 py-3 px-12  rounded-[15px] barlow text-[18px] font-semibold text-white header-gradient "
                onClick={toggleModal}> Connect Your Wallet
            </button>
        }

        {
            active && <div className="flex items-center justify-center gap-4 ">
                <a
                    className="text-white font-semibold  text-[18px] py-2 pt-4"
                    {...{
                        href: formatEtherscanLink("Account", [chainId, account]),
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }}
                >
                    {ENSName || `${shortenHex(account, 4)}`}
                </a>

        {/* icon profile */}
            <div className="text-white"  onClick={() => setShowDropdown(!showDropdown)}>

                <img className=" w-10 h-10 rounded-full" src={profileImage} alt="Profile" />

            </div>
          {/*  the dropdown menu  */}
          {showDropdown && (
            <div className="absolute top-3 -left-6 right-0  mt-12 header-gradient bg-white rounded-lg shadow-lg z-40">
            <ul className="py-2 px-4">
               <li className="flex items-center gap-3 py-3 cursor-pointer ">
               <BsPerson size={27}  className="text-white hover:text-[#a28787] " />
                 <Link
                   href="/dashboard"   className="  pt-2 font-semibold  block   text-white hover:text-[#e6dede]  "
                   >
                   Profile
                 </Link>
               </li>
               <li className="flex items-center gap-3 py-3 cursor-pointer">
               <TbLayoutDashboard size={27} className="text-white hover:text-[#c4bbbb] "/>                 
                <Link
                   href="/dashboard" className="   pt-2 font-semibold cursor-pointer block   text-white hover:text-[#e6dede]  "
                 >
                   Dashboard
                 </Link>
               </li>
               <li className="flex items-center gap-3 py-3 cursor-pointer  ">
               <MdFavoriteBorder size={27}  className="text-white hover:text-[#e6dede]  " /> 
                <Link
                   href="/dashboard"  className=" font-semibold cursor-pointer block   text-white hover:text-[#e6dede] "
                 >
                   Favorites 
                 </Link>
               </li>


               <li className="flex items-center gap-3 py-3 cursor-pointer  ">
               <MdOutlineCreate size={27}  className="text-white hover:text-[#e6dede]  " /> 
                <Link
                   href="/upload"  className=" font-semibold cursor-pointer block   text-white hover:text-[#e6dede] "
                 >
                   Create 
                 </Link>
               </li>


               <li className="flex items-center gap-3 py-3 cursor-pointer  ">
               <CgLogOut size={28}  className="text-white font-semibold hover:text-[#e6dede]  " /> 
               <button
                    className="font-semibold cursor-pointer block   text-white hover:text-[#e6dede] "
                    onClick={() => {
                        setSigned(false);
                        deactivate();
                    }}
                >
                    Log Out
                </button>
               </li>
             </ul>
          </div>
          )}
                {/* <button
                    className="py-3 px-5 header-gradient rounded-xl  text-white "
                    onClick={() => {
                        setSigned(false);
                        deactivate();
                    }}
                >
                    Logout
                </button> */}
            </div>
        }

    </>
}

export default ConnectButton;