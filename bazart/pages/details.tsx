/*./pages/page.tsx  */
import Image from 'next/image';
import ProductDetails from '../components/ProductDetails';
import styles from '../styles/modular/ProductDetail.module.css';
import Testimonies from '../components/General/Testimonies';
import Header from '../components/General/Header';
import Footer from '../components/General/Footer';
type Props = {}

function page({ }: Props) {
  return <>
    <Header />
    <ProductDetails />
    <Testimonies />
    <Footer/>
  </>
}
export default page;
