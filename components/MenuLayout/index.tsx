import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { BsPerson } from "react-icons/bs";

import { TbLayoutDashboard } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";





type MenuLayoutProps = {
  children: ReactNode;
  activeMenuItem: string;
};

const MenuLayout: React.FC<MenuLayoutProps> = ({ children, activeMenuItem }) => {

    const [activeItem, setActiveItem] = useState(activeMenuItem);

    const handleClick = (menuItem: string) => {
      setActiveItem(menuItem);
    };

  return (
    <>
     <>
      <div className="w-full relative mb-64 mt-20">
        <div className="w-full md:container mx-auto">
          <div className="flex gap-8">
            <div className="">
              <ul className="flex flex-col gap-4">

                <li className={`mr-6 py-4 pl-6 pr-10 flex gap-3 rounded-3xl cursor-pointer ${ activeItem === 'profile' ? 'active bg-yellow' : '' }`}
                  onClick={() => handleClick('profile')}>
                  <BsPerson size={23} className={`${activeItem === 'profile' ? 'text-black' : 'text-[#7B7B7B]'}`}/>
                  <Link className={`inter ${activeItem === 'profile' ? 'font-semibold text-black' : 'text-[#7B7B7B]' }`} href="/profile">
                    Profile
                  </Link>
                </li>

                <li className={`mr-6 py-4 pl-6 pr-10 flex gap-3 rounded-3xl cursor-pointer ${ activeItem === 'favorites' ? 'active bg-yellow' : ''}`}
                  onClick={() => handleClick('favorites')} >
                  <MdFavoriteBorder size={23} className={`${ activeItem === 'favorites' ? 'text-black' : 'text-[#7B7B7B]'}`} />
                  <Link className={`inter ${ activeItem === 'favorites' ? 'font-semibold text-black' : 'text-[#7B7B7B]' }`} href="/favorites" >
                    Favorites
                  </Link>
                </li>

                <li className={`mr-6 py-4 pl-6 pr-10 flex gap-3 rounded-3xl cursor-pointer ${ activeItem === 'dashboard' ? 'active bg-yellow' : ''}`}
                  onClick={() => handleClick('dashboard')} >
                  <TbLayoutDashboard size={23} className={`${activeItem === 'dashboard' ? 'text-black' : 'text-[#7B7B7B]' }`} />
                  <Link className={`inter ${ activeItem === 'dashboard' ? 'font-semibold text-black' : 'text-[#7B7B7B]' }`} href="/dashboard">
                    Dashboard
                  </Link>
                </li>


              </ul>
            </div>
            {/* ........... */}
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </>
    
    </>
  
  );
};

export default MenuLayout;
