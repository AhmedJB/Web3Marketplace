// Rows.tsx
import React from 'react';
import styles from '../../../styles/modular/Rows.module.css';
interface RowProps {
  product?: productType;
  transaction?: transactionType
}

const Rows: React.FC<RowProps> = ({ product, transaction }) => {
  return (
    <>
      {
        product && <>
          {/* <td /* className={styles.imageRow} ></td> */}
          <td className="py-2" /* className={styles.name} */>
            <div className="flex items-center gap-2">
              <img className={styles.image} src={product.image} />
              {product.name}
            </div>

          </td>
          <td /* className={styles.price} */>{product.price} ETH</td>
          <td /*  className={styles.sold} */>{product.sold} pcs</td>
          <td /* className={styles.status} */>{product.status}</td>
        </>
      }

      {
        transaction && <>
          <td className="py-2">
            {transaction.buyerID}
          </td>
          <td>
            {transaction.coin}
          </td>
          <td>
            {transaction.amount} ETH
          </td>
          <td>
            {transaction.status}
          </td>

        </>
      }

    </>
  );
};

export default Rows;
