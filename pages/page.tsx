/*./pages/page.tsx  */
import Image from 'next/image';
import ProductDetails from '../components/ProductDetails';
import styles from '../styles/modular/ProductDetail.module.css';
import Testimonies from '../components/Testimonies';
import Header from '../components/Header';
type Props = {}

function page({}: Props) {
  return <>
  <Header/>
    <ProductDetails />
   <Testimonies />   
  </>
}
export default page;