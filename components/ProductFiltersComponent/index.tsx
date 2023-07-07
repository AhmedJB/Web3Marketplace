import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import PriceRangePicker from './PriceRangePicker';

const ProductFiltersComponent = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);

  /* To close the dropdown when clicking outside the component */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      console.log(event.target)
      console.log(dropdownRef1.current)
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target) &&
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target) &&
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target)
      ) {
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen2(false);
    setIsOpen1(false);
  };

  return (

    <div className='container mx-auto mt-28'>
        <div className=' text-[60px]    barlow font-semibold text-yellow'>Find something you love</div>
        <PriceRangePicker/>

        <div className="flex justify-between my-16 md:my-10">

            {/* Price DropDown */}
            <div className="relative" ref={dropdownRef1}>
                
                <button
                onClick={toggleDropdown1}
                className="flex items-center justify-between px-5  py-3 w-[400px]  bg-black border border-gray-300 rounded-t-xl focus:outline-none"
                >
                <span className='text-white text-[22px]  Poppins'>Price</span>
                {isOpen1 ? (
                    <HiOutlineChevronUp className='text-white' size={18} />
                ) : (
                    <HiOutlineChevronDown className='text-white' size={18} />
                )}
                </button>

                {isOpen1 && (
                <ul className="absolute z-10 w-full mt-2 bg-black border border-gray-300 rounded-md">
                    <li className="py-3 px-5 text-white text-[18px]  hover:text-black hover:bg-yellow hover:font-semibold">Categ 1</li>
                    <li className="py-3 px-5 text-white text-[18px]  hover:text-black hover:bg-yellow hover:font-semibold">Categ 2</li>
                    <li className="py-3 px-5 text-white text-[18px]  hover:text-black hover:bg-yellow hover:font-semibold">Categ 3</li>
                </ul>
                )}
            </div>


            {/* Categories DropDown */}
            <div className="relative" ref={dropdownRef2}>
                <button
                onClick={toggleDropdown2}
                className="flex items-center justify-between px-5 py-3 w-[400px] bg-black border border-gray-300 rounded-t-xl focus:outline-none"
                >
                <span className='text-white text-[20px] '>Categories</span>
                {isOpen2 ? (
                    <HiOutlineChevronUp className='text-white' size={18} />
                ) : (
                    <HiOutlineChevronDown className='text-white' size={18} />
                )}
                </button>
                {isOpen2 && (
                <ul className="absolute z-10 w-full mt-2 bg-black border border-gray-300 rounded-md">
                    <li className="py-3 px-5 text-white text-[18px]  hover:text-black hover:bg-yellow hover:font-semibold">Categ 1</li>
                    <li className="py-3 px-5 text-white text-[18px]  hover:text-black hover:bg-yellow hover:font-semibold">Categ 2</li>
                    <li className="py-3 px-5 text-white text-[18px]  hover:text-black hover:bg-yellow hover:font-semibold">Categ 3</li>
                </ul>
                )}
            </div>

            {/* Special Offers DropDown */}

            <div className="relative" ref={dropdownRef3}>
                <button
                onClick={toggleDropdown3}
                className="flex items-center justify-between w-[400px] px-5 py-3 bg-black border border-gray-300 rounded-t-xl focus:outline-none"
                >
                <span className='text-white text-[20px]'>Special Offers</span>
                {isOpen3 ? (
                    <HiOutlineChevronUp className='text-white' size={18} />
                ) : (
                    <HiOutlineChevronDown className='text-white' size={18} />
                )}
                </button>
                {isOpen3 && (
                <ul className="absolute z-10 w-full mt-2 bg-black border border-gray-300 rounded-md">
                    <li className="py-3 px-5 text-white text-[18px]  hover:text-black hover:bg-yellow hover:font-semibold">Free Delivery</li>
                    <li className="py-3 px-5 text-white text-[18px]  hover:text-black hover:bg-yellow hover:font-semibold">On Sale</li>
                </ul>
                )}
            </div>
        </div>



    </div>
    
  );
};

export default ProductFiltersComponent;
