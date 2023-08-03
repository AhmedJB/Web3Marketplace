//home.tsx
import React from 'react'
import Testimonies from '../components/General/Testimonies';
import Header from '../components/General/Header';
import TopSellersHome from '../components/HomePage/TopSellersHome';
import Steps from '../components/HomePage/Steps';
import SubscribeComponent from '../components/HomePage/SubscribeComponent';
import CarouselComponent from '../components/General/CarouselComponent';

import Footer from '../components/General/Footer';
import Hero from '../components/HomePage/Hero';
import Slider from '../components/Slider';
import CustomSlider from '../components/CustomSlider';


type Props = {}

function home({ }: Props) {
  return <>

    <Header />
    <Hero />
    <CarouselComponent />
    {/* <Slider /> */}
    <CustomSlider />
    <TopSellersHome />
    <Steps />
    <SubscribeComponent />
    <Testimonies />
    <Footer />
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