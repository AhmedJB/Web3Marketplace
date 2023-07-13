// Rows.tsx
import React from 'react';
import styles from '../../styles/modular/Rows.module.css';
interface RowProps {
  product: {
    image: string;
    name: string;
    price: number;
    sold: number;
    status: string;
  };
}

const Rows: React.FC<RowProps> = ({ product }) => {
  return (
    <>
      <td className={styles.imageRow}><img className={styles.image} src={product.image}/></td>
      <td className={styles.name}>{product.name}</td>
      <td className={styles.price}>{product.price}</td>
      <td className={styles.sold}>{product.sold}</td>
      <td className={styles.status}>{product.status}</td>
    </>
  );
};

export default Rows;
