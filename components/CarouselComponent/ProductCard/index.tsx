/*import React from 'react';


import styles from './ProductCard.module.css';



type ProductCardProps = {
  title: string;
  creatorName: string;
  creatorImage: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, creatorName, creatorImage, price }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={creatorImage} alt={creatorName} />
      <div className="product-info">
        <div className="product-title">{title}</div>
        <div className="product-creator">
          <img className="creator-image" src={creatorImage} alt={creatorName} />
          <div className="creator-name">{creatorName}</div>
        </div>
        <div className="product-price">{price} ETH</div>  {/* Here is the change }
      </div>
    </div>
  );
};

export default ProductCard;*/
import React from 'react';
import styles from "../../../styles/modular/ProductCard.module.css"

type ProductCardProps = {
  title: string;
  creatorName: string;
  creatorImage: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, creatorName, creatorImage, price }) => {
  return (
    <div className={styles['product-card']}>
      <img className={styles['product-image']} src={creatorImage} alt={creatorName} />
      <div className={styles['product-info']}>
        <div className={styles['product-title']}>{title}</div>
        <div className={styles['product-creator']}>
          <img className={styles['creator-image']} src={creatorImage} alt={creatorName} />
          <div className={styles['creator-name']}>{creatorName}</div>
        </div>
        <div className={styles['product-price']}>{price} ETH</div>
      </div>
    </div>
  );
};

export default ProductCard;
