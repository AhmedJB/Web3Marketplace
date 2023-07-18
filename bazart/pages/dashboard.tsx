import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import MenuLayout from '../components/Utils/MenuLayout';
import Header from '../components/General/Header';
import Footer from '../components/General/Footer';
import ProfileComponent from '../components/ProfileComponent';
import FavoritesComponent from '../components/FavoritesComponent';
import DashboardComponent from '../components/DashboardComponent';
import PaymentSuccess from '../components/Utils/PaymentSuccess';


const dashboard = () => {
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
      default:
        return null;
    }
  };

  return (
    <>
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
  );
};

export default dashboard;
