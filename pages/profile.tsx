import React from 'react'
import MenuLayout from '../components/MenuLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
type Props = {}
function profile({}: Props) {
  return <>
  <Header/>
 {/*   <MenuLayout activeMenuItem="profile">
      <h1 className='text-white font-semibold'>Profile Page</h1>
    </MenuLayout> */}
<Footer/>
  </>
}
export default profile;