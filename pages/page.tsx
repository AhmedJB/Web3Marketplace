/*./pages/page.tsx  */
import Image from 'next/image';
import Product from '../components/productdetail/Product';
import styles from '../styles/modular/ProductDetail.module.css';
import Testimonies from '../components/Testimonies';
import Header from '../components/Header';
type Props = {}

function page({}: Props) {
  return <>
  <Header/>
<Product/>
   <Testimonies />   
  </>
}
export default page;