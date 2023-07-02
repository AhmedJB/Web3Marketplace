import React from 'react';
import subscribe1 from '../../assets/SubscribeHomePageImage/subscribe1.png';
import subscribe2 from '../../assets/SubscribeHomePageImage/subscribe2.png';
import subscribe3 from '../../assets/SubscribeHomePageImage/subscribe3.png';





type Props = {};

function SubscribeComponent({}: Props) {
  


  return (
    <>
    <div className='container mx-auto py-8'>
      <div className='mx-36 flex flex-col items-center '>
        <div className='text-yellow text-[32px] barlow font-semibold'>test</div>

        <div className='grid grid-cols-2 gap-12 py-8'>
        <div className='flex flex-row justify-end items-center'>
            <img src={subscribe3.src} alt='Image 1' className='w-1/3 h-1/3 mr-[-20px]' />
            <img src={subscribe2.src} alt='Image 2' className='w-2/3 h-2/3 mr-[-40px]' />
            <img src={subscribe1.src} alt='Image 3' className='w-full h-full' />
        </div>
            <div className='flex flex-col justify-center px-7'>
                <div className='font-semibold text-[35px] text-white barlow'>Subscribe to get fresh news and updates about new trends and products</div>
                <div className='text-[14px] font-light text-white py-6 opacity-60 '>The World's Largest  Marketplace for  Authentic Traditional Products.</div>
                <div className='flex'>
                    <input type='text' className='pl-4 pr-40 py-3 barlow font-semibold text-mainDark  placeholder:text-mainDark placeholder:font-semibold focus:outline-none' placeholder='Email Address'  />
                    <button className='px-6 py-4 bg-red text-white text-[16px] barlow header-gradient'   
                    >Subscribe</button>
                </div>
            </div>
        </div>
        </div>

        
    
      </div>
  </>
  );
}
export default SubscribeComponent;
