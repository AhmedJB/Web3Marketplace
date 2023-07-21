import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import logo from '../../../assets/demo/logo.png';
import ConnectButton from "./ConnectButton";
import DropDownButton from './DropDownButton';
import { useWeb3React } from '@web3-react/core';
import { SignContext } from '../../../contexts/SignContext';
import Modal from '../../Utils/Modal';
import ConnectRows from './ConnectRows';
import useEagerConnect from '../../../hooks/useEagerConnect';
import { useMutation } from 'react-query';
import { verify } from '../../../api/verification';

type Props = {};

const Header: React.FC<Props> = () => {
  const [signed, setSigned] = useContext(SignContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  //const triedToEagerConnect = useEagerConnect();
  const { active, error, activate, chainId, account, setError, library, deactivate } =
    useWeb3React();

  const verificationMutation = useMutation(verify, {
    onSuccess: (data, variables, context) => {
      console.log("success");
      console.log(variables);
      sessionStorage.setItem("signature", variables.signature);
      sessionStorage.setItem("address", variables.address);
      setSigned(true);

    },
    onError: (error, variables, context) => {
      // I will fire first
      console.log("failed verification");
      setSigned(false);
      deactivate();
    }
  })




  const handleSignature = async () => {
    console.log("using account ", account);
    let signer = library.getSigner();
    console.log("signer ", signer);
    try {
      const signature = await signer.signMessage(account);
      console.log("signature ", signature);
      let body = {
        address: account,
        signature
      }

      verificationMutation.mutate(body);


    } catch (e) {
      console.log("failed signature");
      deactivate();
    }

  }

  useEffect(() => {
    if (active) {
      console.log("running active")
      if ((!signed || !sessionStorage.getItem("signature")) || (account !== sessionStorage.getItem("address"))) {
        setSigned(false);
        handleSignature();
      }
    }

  }, [active, account])

  /* useEffect(() => {
    // reset sign state
    if (active) {
      if (account !== sessionStorage.getItem("address") && signed) {
        console.log("running account")
        setSigned(false);
        sessionStorage.removeItem("signature");
        sessionStorage.removeItem("address")
        handleSignature();
      }
    }


  }, [account]) */

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return <>
    <Modal
      open={openModal}
      close={() => setOpenModal(false)}
      title={"Connect"}
    >
      <ConnectRows close={() => setOpenModal(false)} />

    </Modal>

    <header className="container mx-auto my-3">
      <nav className="flex items-center justify-between h-16 px-4 sm:px-8">
        <div className="flex items-center">
          <Link className="flex items-center  text-headerColor font-bold text-lg " href="/home" passHref>
            <img src={logo.src} alt="BazArt212" className="h-9 mr-2 text-[20px]" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex space-x-10 text-white">
            <li>
              <Link className="hover:text-headerColor text-[20px] barlow" href="/productlist" passHref>
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-headerColor text-[20px]  barlow" href="/blog" passHref>
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-headerColor text-[20px] barlow" href="#testmonies" passHref>
                Testmonies
              </Link>
            </li>
            <li>
              <Link className="hover:text-headerColor text-[20px] barlow" href="/contact" passHref>
                Contact
              </Link>
            </li>
            {
              active && <li>
                <Link className="hover:text-headerColor text-[20px] barlow" href="/dashboard" passHref>
                  Dashboard
                </Link>
              </li>
            }

          </ul>
        </div>

        <div className="hidden sm:block relative">
          <ConnectButton toggleDropdown={toggleDropdown} toggleModal={() => setOpenModal(true)} />

          {isDropdownOpen && (
            <DropDownButton />

          )}
        </div>
      </nav>
    </header>
  </>

    ;
};

export default Header;
