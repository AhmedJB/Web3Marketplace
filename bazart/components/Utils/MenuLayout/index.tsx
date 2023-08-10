import React from 'react';
import Link from 'next/link';
import { BsPerson } from 'react-icons/bs';
import { TbLayoutDashboard ,TbBuildingWarehouse} from 'react-icons/tb';
import { MdFavoriteBorder } from 'react-icons/md';

type MenuLayoutProps = {
  activeMenuItem: string;
  handleMenuClick: (menuItem: string) => void;
};

const MenuLayout: React.FC<MenuLayoutProps> = ({ activeMenuItem, handleMenuClick }) => {
  return (
    <>
            <div className="">
              <ul className="flex flex-col gap-4 ">
                <li
                  className={`mr-6 py-4 pl-6 pr-10 flex gap-3 rounded-3xl cursor-pointer ${
                    activeMenuItem === 'profile' ? 'active bg-yellow' : ''
                  }`}
                  onClick={() => handleMenuClick('profile')}
                >
                  <BsPerson size={23} className={`${activeMenuItem === 'profile' ? 'text-black' : 'text-[#7B7B7B]'}`} />
                  <div
                    className={`inter ${activeMenuItem === 'profile' ? 'font-semibold text-black' : 'text-[#7B7B7B]'}`}
                  >
                    Profile
                  </div>
                </li>


                <li
                  className={`mr-6 py-4 pl-6 pr-10 flex gap-3 rounded-3xl cursor-pointer ${
                    activeMenuItem === 'favorites' ? 'active bg-yellow' : ''
                  }`}
                  onClick={() => handleMenuClick('favorites')}
                >
                  <MdFavoriteBorder
                    size={23}
                    className={`${activeMenuItem === 'favorites' ? 'text-black' : 'text-[#7B7B7B]'}`}
                  />
                  <div
                    className={`inter ${activeMenuItem === 'favorites' ? 'font-semibold text-black' : 'text-[#7B7B7B]'}`}
                  >
                    Favorites
                  </div>
                </li>
                

                <li
                  className={`mr-6 py-4 pl-6 pr-10 flex items-center gap-3 rounded-3xl cursor-pointer ${
                    activeMenuItem === 'myproducts' ? 'active bg-yellow' : ''
                  }`}
                  onClick={() => handleMenuClick('myproducts')}
                >
                  <TbBuildingWarehouse
                    size={23}
                    className={`${activeMenuItem === 'myproducts' ? 'text-black ' : 'text-[#7B7B7B]'}`}
                  />
                  <div
                    className={`inter ${activeMenuItem === 'myproducts' ? ' font-semibold text-black' : 'font-semibold text-[#7B7B7B]'}`}
                  >
                    My products
                  </div>
                </li>



                <li
                  className={`mr-6 py-4 pl-6 pr-10 flex gap-3 rounded-3xl cursor-pointer ${
                    activeMenuItem === 'dashboard' ? 'active bg-yellow' : ''
                  }`}
                  onClick={() => handleMenuClick('dashboard')}
                >
                  <TbLayoutDashboard
                    size={23}
                    className={`${activeMenuItem === 'dashboard' ? 'text-black' : 'text-[#7B7B7B]'}`}
                  />
                  <div className={`inter ${activeMenuItem === 'dashboard' ? 'font-semibold text-black' : 'text-[#7B7B7B]'}`}>
                    Dashboard
                  </div>
                </li>
              </ul>
            </div>
            {/* ........... */}
        
    </>
  );
};

export default MenuLayout;
