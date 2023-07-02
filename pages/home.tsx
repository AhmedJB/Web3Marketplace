import React from 'react'
import Testimonies from '../components/Testimonies';
import Header from '../components/Header';
import TopSellersHome from '../components/TopSellersHome';
import Steps from '../components/Steps';
import SubscribeComponent from '../components/SubscribeComponent';
import CarouselComponent from '../components/CarouselComponent';

import Footer from '../components/Footer';


type Props = {}

function home({}: Props) {
  return <>
  <Header/>
  <CarouselComponent />
  <TopSellersHome/>
  <Steps/>
  <SubscribeComponent/>
   <Testimonies />   
  </>
}
/*
  <div className={styles.container}>
      <div className={styles.leftCircle}></div>
      <div className={styles.rightCircle}></div>
      <Header />
      <TopSellersHome />
      <Steps />
  </div>
  <h1 className={`${styles.test} inter text-headerColor`}>Hello</h1>
  <h3 className="barlow text-headerColor">hello 2</h3>
  <p className="text-headerColor">this is a paragraph</p>
*/

export default home;