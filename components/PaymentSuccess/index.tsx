import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 bg-black p-14 rounded-3xl mt-14">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-7.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L9 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg> */}
      <svg width="170" height="170" className="h-32 w-32 text-green" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.15" cx="84.725" cy="84.79" r="84.4042" fill="#42A846"/>
            <path d="M84.7224 135.956C112.857 135.956 135.877 112.936 135.877 84.8015C135.877 56.6668 112.857 33.6475 84.7224 33.6475C56.5877 33.6475 33.5684 56.6668 33.5684 84.8015C33.5684 112.936 56.5877 135.956 84.7224 135.956Z" fill="#42A846" stroke="#42A846" stroke-width="2.30193" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M62.9824 84.8003L77.459 99.2769L106.463 70.3237" stroke="white" stroke-width="9.20773" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h1 className="text-2xl font-bold text-white barlow">Great!</h1>
      <h2 className="text-xl font-semibold text-center text-yellow barlow"> Payment successful</h2>

        <h3 className="flex text-center barlow text-[#9FA6B9] text-[18px]">Your payment has been processed.<br/>
        The details of your transaction are below.</h3>
     
      <hr className="w-full border-t-2 border-[#9FA6B9]" />
      <h3 className="flex text-center barlow text-[#9FA6B9] text-[18px]">You are now ready to sell it. <br/> Share your product</h3>
      
      <div className='flex items-center gap-5'>
            <Link href="https://linkedin.com" className="hover:scale-125 transform transition-all duration-400 text-[#777E90]">
                <FaLinkedin size={36} />
            </Link>
            <Link href="https://twitter.com" className="hover:scale-125 transform transition-all duration-400 text-[#777E90]">
                <FaTwitter size={36} />
            </Link>
            <Link href="https://instagram.com" className="hover:scale-125 transform transition-all duration-400 text-[#777E90]">
                <FaInstagram size={36} />
            </Link>  
        </div>

      <button className="px-44 py-4 text-white font-semibold text-[16px] bg-[#168521] hover:bg-[#168521ed] rounded-2xl">
        View
      </button>
    </div>
  );
};

export default PaymentSuccess;
