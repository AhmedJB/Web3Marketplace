import React, { useState } from 'react'
import ProfileComponent from '../../ProfileComponent';
import FavoritesComponent from '../../FavoritesComponent';
import DashboardComponent from '..';
import Header from '../../General/Header';
import MenuLayout from '../../Utils/MenuLayout';
import Footer from '../../General/Footer';
import Validator from '../../HOC/Validator';
import MyProductsComponent from '../../MyProductsComponent';

type Props = {}

function DashboardPageComp({ }: Props) {
    const [activeMenuItem, setActiveMenuItem] = useState('profile');

    const handleMenuClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    const getPageComponent = () => {
        switch (activeMenuItem) {
            case 'profile':
                return <ProfileComponent />;
            case 'favorites':
                return <FavoritesComponent />;
            case 'dashboard':
                return <DashboardComponent />;
            case 'myproducts':
                return <MyProductsComponent />;
            default:
                return null;
        }
    };
    return <>
        <Header />
        <div className="w-full relative mb-64 mt-20">
            <div className="w-full md:container mx-auto">
                <div className="flex  gap-8 pb-11">
                    <MenuLayout activeMenuItem={activeMenuItem} handleMenuClick={handleMenuClick} />
                    {getPageComponent()}
                </div>

                {/* <div className="flex items-center justify-center py-10">
            <PaymentSuccess />
          </div> */}
            </div>
        </div>
        <Footer />
    </>
}

export default Validator(DashboardPageComp)