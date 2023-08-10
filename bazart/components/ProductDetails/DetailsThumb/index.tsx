/*DetailsThumb.tsx*/

import React, { Component, ReactNode, RefObject } from 'react';

import styles from "../../../styles/modular/ProductDetails.module.css"

interface DetailsThumbProps {
  images: string[] | undefined;
  tab: (index: number) => void;
  activeIndex : number
}

const DetailsThumb = ({ images, tab,activeIndex }: DetailsThumbProps) => {
  return (
    <div className={styles.thumb} >
      {images && images.map((img, index) => (
        <img
          src={img}
          alt=""
          key={index}
          className={`${activeIndex === index ? "border-4 border-white" :  ""} `}
          onClick={() => tab(index)}
        />
      ))}
    </div>
  );
};

/* class DetailsThumb extends Component<DetailsThumbProps> {
  render(): ReactNode {
    const { images, tab, myRef } = this.props;
    return (
      <div className={styles.thumb} ref={myRef}>
        {images.map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            onClick={() => tab(index)}
          />
        ))}
      </div>
    );
  }
} */

export default DetailsThumb;
