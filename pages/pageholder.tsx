import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import MenuLayout from '../components/MenuLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileComponent from '../components/ProfileComponent';
import FavoritesComponent from '../components/FavoritesComponent';
import DashboardComponent from '../components/DashboardComponent';
import PaymentSuccess from '../components/PaymentSuccess';
import ChartComponent from '../components/ChartComponent';

const DynamicChartComponent = dynamic(
  () => import('../components/ChartComponent/ChartComponentOnly'),
  { ssr: false } // Disable server-side rendering
);

const pageholder = () => {
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

          <div className="flex items-center justify-center py-10">
            <PaymentSuccess />
          </div>


          <div>
          <ChartComponent/>
          </div>

         



        </div>
      </div>
      <Footer />
    </>
  );
};

export default pageholder;
