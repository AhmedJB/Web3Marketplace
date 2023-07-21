import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import MenuLayout from '../components/Utils/MenuLayout';
import Header from '../components/General/Header';
import Footer from '../components/General/Footer';
import ProfileComponent from '../components/ProfileComponent';
import FavoritesComponent from '../components/FavoritesComponent';
import DashboardComponent from '../components/DashboardComponent';
import PaymentSuccess from '../components/Utils/PaymentSuccess';
import DashboardPageComp from '../components/DashboardComponent/DashboardPageComp';


const dashboard = () => {


  return (
    <>
      <DashboardPageComp />
    </>
  );
};

export default dashboard;
