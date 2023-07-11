import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import HeartCheckboxComponent from '../components/HeartCheckboxComponent';
import MenuToggle from '../components/Header/MenuToggle';
import MenuLayout from '../components/MenuLayout';


type Props = {}

function dashboard({}: Props) {
  return <>

  <Header/>
  <MenuLayout activeMenuItem="dashboard">
     <h1 className='text-white font-semibold'>dashboard Page</h1>
  </MenuLayout>

  <Footer/>
  
  </>
}



export default dashboard;