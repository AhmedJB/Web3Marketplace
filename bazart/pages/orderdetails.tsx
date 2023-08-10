/*./pages/page.tsx  */
import Image from 'next/image';
import OrderDetails from '../components/OrderDetails';
import styles from '../../../styles/modular/OrderDetails.module.css';
import Header from '../components/General/Header';
export default function Home() {
  return (
    <main>
      <OrderDetails/>
    </main>
  )
}

/*
const orderdetail = () => {

    return (
      <>
        <Header />
        <OrderDetails />
      </>
    );
  };*/


  