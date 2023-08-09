/*DetailsThumb.tsx*/

import React, { Component, ReactNode, RefObject } from 'react';

import styles from "../../../styles/modular/ProductDetails.module.css"

interface DetailsThumbProps {
  images: string[] | undefined;
  tab: (index: number) => void;
  forwardedRef: RefObject<HTMLDivElement>;
}

const DetailsThumb = ({ images, tab, forwardedRef }: DetailsThumbProps) => {
  return (
    <div className={styles.thumb} ref={forwardedRef}>
      {images && images.map((img, index) => (
        <img
          src={img}
          alt=""
          key={index}
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
