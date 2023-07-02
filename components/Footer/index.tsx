import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../../assets/demo/logo.png';
import styles from '../../styles/modular/Header.module.css';

type Props = {};

const Footer: React.FC<Props> = () => {
  

  return (
    <footer className="bg-mainDark  container mx-auto mt-3">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img src="" className="h-8 mr-3" alt=" Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">BazArt</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="text-white">BazArt</a>
                </li>
                <li>
                  <a href="" className="text-white hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="text-white ">Github</a>
                </li>
                <li>
                  <a href="" className="text-white">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-white">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">© 2023 <a href="" className="text-white">Flowbite™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-white">
            <a href="#" className="text-white">
              <svg className="w-5 h-5" fill="currentColor" />
              <span className="sr-only text-white">Facebook page</span>
            </a>
            <a href="#" className="text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" /></svg>
                <span className="sr-only text-white">Instagram page</span>
            </a>
            <a href="#" className="text-white">
                <svg className="w-5 h-5" fill="currentColor" />
                <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-white">
                <svg className="w-5 h-5" fill="currentColor" />
                <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-white">
                <svg className="w-5 h-5" fill="currentColor" />
                <span className="sr-only">Dribbble account</span>
            </a>

          </div>
      </div>
    </div>
</footer>
  );
};

export default Footer;
