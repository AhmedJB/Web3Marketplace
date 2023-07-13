// DataTable.tsx
import React from 'react';
import Rows from './Rows';
import styles from '../../styles/modular/DataTable.module.css';

interface DataTableProps {
  headers: string[];
  products: {
    image: string;
    name: string;
    price: number;
    sold: number;
    status: string;
  }[];
}

const DataTable: React.FC<DataTableProps> = ({ headers, products }) => {
  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.tableTitle}>Product Inventory</h1>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadRow}>
            {headers.map((header, index) => (
              <th className={styles.header} key={index} >{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {products.map((product, index) => (
            <tr className={styles.tableBodyRow} key={index}>
              <Rows product={product} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
