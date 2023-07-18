import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

const DropDownDashboard = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const dropdownRef1 = useRef(null);
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsOpen2(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown1 = () => {
    setIsOpen2(!isOpen2);
  };
  
  return (
    <div className='container mx-auto mt-1'>
      {/* DropDown */}
      <div className="relative" ref={dropdownRef1}>
        <button
          onClick={toggleDropdown1}
          className="flex items-center gap-2 px-5 py-3 bg-yellow border rounded-xl focus:outline-none"
        >
          <span className='text-black text-[14px] font-semibold mr-4'>This Month</span>
          {isOpen2 ? (
            <HiOutlineChevronUp className='text-black' size={15} />
          ) : (
            <HiOutlineChevronDown className='text-black' size={15} />
          )}
        </button>
        {isOpen2 && (
          <ul className="absolute z-10 w-full mt-2 bg-yellow hover:bg-black border rounded-md cursor-pointer">
            <li className="py-3 px-5 text-black text-[14px] font-semibold bg-yellow hover:text-white hover:bg-black">last 3 months</li>
            <li className="py-3 px-5 text-black text-[14px] font-semibold bg-yellow hover:text-white hover:bg-black">last 6 months</li>
            <li className="py-3 px-5 text-black text-[14px] font-semibold bg-yellow hover:text-white hover:bg-black">last year</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownDashboard;
