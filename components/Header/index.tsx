import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../../assets/demo/logo.png';
import ConnectButton from "./ConnectButton";
import DropDownButton from './DropDownButton';

type Props = {};

const Header: React.FC<Props> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="container mx-auto my-3">
      <nav className="flex items-center justify-between h-16 px-4 sm:px-8">
        <div className="flex items-center">
          <Link  className="flex items-center  text-headerColor font-bold text-lg "href="/" passHref>
              <img src={logo.src} alt="BazArt212" className="h-9 mr-2 text-[20px]" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex space-x-10 text-white">
            <li>
              <Link className="hover:text-headerColor text-[20px] barlow" href="/shop" passHref>
               Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-headerColor text-[20px]  barlow" href="/blog" passHref>
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-headerColor text-[20px] barlow" href="/testmonies" passHref>
                Testmonies
              </Link>
            </li>
            <li>
              <Link className="hover:text-headerColor text-[20px] barlow"href="/contact" passHref>
                Contact
              </Link>
            </li>
            <li>
              <Link  className="hover:text-headerColor text-[20px] barlow" href="/partners" passHref>
               Partners
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden sm:block relative">
          <ConnectButton toggleDropdown={toggleDropdown} />

          {isDropdownOpen && (
            <DropDownButton/>
            
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
