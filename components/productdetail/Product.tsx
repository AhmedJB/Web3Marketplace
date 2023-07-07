/* ./components/productdetail/Product.tsx */
"use client"
import React, { Component, createRef } from 'react';
import DetailsThumb from './DetailsThumb';
import styles from '../../styles/modular/Product.module.css';

interface Product {
  _id: string;
  title: string;
  src: string[];
  description: string;
  price: string;
  colors: string[];
  count: number;
  delivery: string;
}

interface AppState {
  products: Product[];
  index: number;
}

class App extends Component<{}, AppState> {
  private myRef = createRef<HTMLDivElement>();

  state: AppState = {
    products: [
      {
        _id: "1",
        title: "Moroccan Vintage Caftan AMAZIGH style",
        src: [

          "./Picture.png",
          "./Pic1.jpg",
          "./Pic2.webp",
          "./Pic3.webp",
        ],
        description: "Description",
        price: "45.50 ETH",
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        delivery: "5 - 15 working days"
      }
    ],
    index: 0
  };

  handleTab = (index: number) => {
    this.setState({ index });
    const images = this.myRef.current?.children;
    if (images) {
      for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    }
  };

  componentDidMount() {
    const { index } = this.state;
    const images = this.myRef.current?.children;
    if (images) {
      images[index].className = "active";
    }
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className={styles.app}>
        {products.map(item => (
          <div className={styles['big-box']}>
            <div className={styles.details} key={item._id}>
              <div className={styles['big-img']}>
                <img src={item.src[index]} alt="" />
              </div>

              <div className={styles.box}>
                <div className={styles.row}>
                  <h2>{item.title}</h2>
                  <span>{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className={styles.cart}>BUY NOW</button>
                <img className={styles['cart-logo']} src="./cart-plus-fill.png" alt=""/>
                <div className={styles.delivery}> <img className={styles['delivery-img']}src='./Truck.png'/><p className='delivery-text'>Delivery </p><span className={styles['delivery-time']}>{item.delivery}</span></div>
                <div className={styles.terms}>
                  <img className={styles['vector-img']} src='./Vector.png'/>
                  Product Exchange and Return &emsp;&emsp;&emsp; 
                  <a  className={styles.vector_text}href=""> Terms & Conditions </a>
                </div>
              </div>
            </div>
            <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
