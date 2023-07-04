import React, { useState } from 'react';
import logo from '../../assets/General/logo2.png';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineArrowRight } from 'react-icons/hi';
import styles from '../../styles/modular/Header.module.css';

type Props = {};

const Footer: React.FC<Props> = () => {
  

  return (
    <footer className="bg-mainDark  container mx-auto ">
      <div className="mx-auto w-full p-12 ">
        <div className="flex mb-16">

          {/* logo +input email + social media  */}
          <div className="">
              <Link  className="flex items-center  text-headerColor font-bold text-lg "href="/" passHref>
              <img src={logo.src} alt="BazArt212" className="w-[190px]  h-[43px] mr-2" />
              </Link>
              <div className='mt-6 mr-36 w-[450px] text-[18px] text-[#777E90]'>Enter your email to get notified by BazArt 212 for latest updates.</div>
              {/* icons social media */}
              <div className='flex items-center gap-4 py-4'>
                <Link href="https://twitter.com" className="hover:scale-125 transform transition-all duration-400 text-[#777E90]">
                  <FaTwitter size={28} />
                </Link>
                <Link href="https://instagram.com" className="hover:scale-125 transform transition-all duration-400 text-[#777E90]">
                  <FaInstagram size={28} />
                </Link>
                <Link href="https://linkedin.com" className="hover:scale-125 transform transition-all duration-400 text-[#777E90]">
                  <FaLinkedin size={28} />
                </Link>
              </div>
              <div className="flex">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-6 pr-40 py-6  text-cardGray rounded-2xl placeholder:text-[#777E90]  focus:outline-none bg-[#1B1B1B] "
                  />
                  <button className="absolute right-0 top-0 bottom-0 px-2 m-5 bg-blue-500 text-white rounded-full barlow header-gradient hover:scale-110 transform transition-all duration-600">
                    <HiOutlineArrowRight size={18} />
                  </button>
                </div>
              </div>
          </div>



          <div className="grid grid-cols-4 gap-28 mt-5">

            {/* BazArt Section */}
            <div>
              <h2 className="mb-6  font-semibold  text-[20px] barlow  text-white">BazArt</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="" className=" text-[18px] barlow text-[#777E90] hover:underline">Shop</Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow text-[#777E90] hover:underline">Categories</Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow text-[#777E90] hover:underline">Trending</Link>
                </li>
                
              </ul>
            </div>
            {/*My Account Section */}
            <div>
              <h2 className="mb-6  font-semibold  text-[20px] barlow  text-white">My Account</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow  text-[#777E90] hover:underline">Profile</Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow  text-[#777E90] hover:underline">Favorites</Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow text-[#777E90] hover:underline">My collections</Link>
                </li>
              </ul>
            </div>

            {/* Resources Section  */}
            <div>
              <h2 className="mb-6  font-semibold  text-[20px] barlow  text-white">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow  text-[#777E90] hover:underline">Blog</Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow  text-[#777E90] hover:underline">Partners</Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow  text-[#777E90] hover:underline">Newsletter</Link>
                </li>
              </ul>
            </div>

            {/* Community Section */}
            <div className=''>
              <h2 className="mb-6  font-semibold  text-[20px] barlow  text-white">Community</h2>
              <ul >
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow  text-[#777E90] hover:underline">Help Center</Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow  text-[#777E90] hover:underline">Join the DAO </Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="text-[18px] barlow  text-[#777E90] hover:underline">Subscribe</Link>
                </li>
              </ul>
            </div>

          </div>

        </div>


        <hr className="my-6  border-[#65676B] sm:mx-auto lg:my-8" />
        <div className="flex items-center gap-3 ">
          <Link className='text-[20px] barlow  text-[#777E90] hover:underline' href="/">
          Terms
          </Link>
          <Link className='text-[20px] barlow text-[#777E90] hover:underline' href="/">
          Privacy Policy
          </Link>
      </div>
      <hr className="my-6 border-[#65676B] sm:mx-auto lg:my-8" />
      <div className="flex items-center justify-center ">
        <span className="text-[22px] text-white hover:underline  barlow">© BazArt212 , Inc @ . All Rights Reserved.</span>
      </div>

    </div>
</footer>
  );
};

export default Footer;
