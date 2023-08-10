
"use client"
import React, { Component, createRef } from 'react';
//import '../../styles/global/globals.css';
import styles from '../../styles/modular/OrderDetails.module.css';

interface Product {
  _id: string;
  title: string;
  src: string[];
  price: string;
  count: number;
  orderDate: string;
  paymentMethod: string;
  totalPrice: string;
  shippingCost: string;
  discount: string;
  shippingMethod: string;
  Address: string;
  ShippingDate: string;
}

interface AppState {
  products: Product[];
  index: number;
}

class Order extends Component<{}, AppState> {

  state: AppState = {
    products: [
      {
        _id: "1",
        title: "Turkish Moroccan Mosaic Table Lamp, 3 Globes Bohemian Bedside lamp",
        src: [
          "./Pic3.webp",
        ],
        price: "45.50 ETH",
        count: 1,
        orderDate: "12/7/2023",
        paymentMethod: "Crypto",
        totalPrice: "50.00 ETH",
        shippingCost: "0.50 ETH",
        discount: "0.00 ETH",
        shippingMethod: "Free Shipping",
        Address: "Fez, Morocco",
        ShippingDate: "Between 12/7/2023 and 12/9/2023"
      }
    ],
    index: 0
  };




  render() {
    const { products, index } = this.state;
    return (
      <div className={styles.app}>
        {products.map(item => (
            <div className={styles.big_box}>
          <div className={styles.details} key={item._id}>
            <div className={styles.big_img}>
              <img src={item.src[index]} alt="" />
            </div>
            <div className={styles.box}>
              <div className={styles.row}>
                <h2>{item.title}</h2>
                <span>{item.price}</span>
              </div>
                <div> <p className={styles.delivery_text}>Order Date <span className={styles.colored_txt}>{item.orderDate}</span> </p></div>
                <div> <p className={styles.delivery_text}>Quantity of <span  className={styles.colored_txt}>{item.count}</span></p></div>
                  <div className={styles.terms}> 
                    <img onClick={()=>console.log("clicked")} className={styles.vector_img} src='./Vector.png'/>
                    &emsp;Product Exchange and Return&emsp;&emsp;&emsp; 
                    <a href=""  className={`${styles.link} ${styles.linkVisited} ${styles.linkHover} ${styles.linkActive}`}> Terms & Conditions </a>
                  </div>
                <hr className={styles.line}></hr>
                <div className={styles.payment_details}>
                  <p className={styles.payment_details_txt}>Payment Details</p>
                  <p className={styles.payment_method}>Payment Method  </p>
                  <span className={styles.colored_txt}>{item.paymentMethod}</span>
                  <p className={styles.payment_method}>Details  </p>
                  <span className={styles.colored_txt}>Total Price <span className={styles.infos}>{item.totalPrice}</span></span><br></br>
                  <span className={styles.colored_txt}>Shipping cost <span className={styles.infos}>{item.shippingCost}</span> </span><br></br>
                  <span className={styles.colored_txt}>Discount<span className={styles.infos}>{item.discount}</span></span>
                </div>
                <br></br>
                <hr className={styles.line}></hr>
                <div className={styles.payment_details}>
                  <p className={styles.payment_details_txt}>Shipping Details</p>
                  <p className={styles.shipping_method}>Shipping Method  </p>
                  <span className={styles.colored_txt}>{item.shippingMethod}</span>
                  <p className={styles.shipping_method}>Details  </p>
                  <span className={styles.colored_txt}>Shipping Address<span className={styles.infos}> {item.Address}</span></span><br></br>
                  <span className={styles.colored_txt}>Shipping Date <span className={styles.infos}>{item.ShippingDate}</span></span><br></br>
                </div>
            </div>
          </div>

          

       </div>
        ))}
      </div>
    );
  }
}

export default Order;