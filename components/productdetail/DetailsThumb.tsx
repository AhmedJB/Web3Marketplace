/*DetailsThumb.tsx*/

import React, { Component, ReactNode, RefObject } from 'react';

import styles from '../../styles/modular/Product.module.css';

interface DetailsThumbProps {
  images: string[];
  tab: (index: number) => void;
  myRef: RefObject<HTMLDivElement>;
}

class DetailsThumb extends Component<DetailsThumbProps> {
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
}

export default DetailsThumb;
