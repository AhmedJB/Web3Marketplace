// DataTable.tsx
import React from 'react';
import Rows from './Rows';
import styles from '../../../styles/modular/DataTable.module.css';

interface DataTableProps {
  title: string;
  headers: string[];
  products?: productType[];
  transactions?: transactionType[];
}

const DataTable: React.FC<DataTableProps> = ({ title, headers, products, transactions }) => {
  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.tableTitle}>{title}</h1>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadRow}>
            {headers.map((header, index) => (
              <th className={styles.header} key={index} >{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {products && products.map((product, index) => (
            <tr className={"my-6"} key={index}>
              <Rows product={product} />
            </tr>
          ))}
          {transactions && transactions.map((transaction, index) => (
            <tr className={"my-6"} key={index}>
              <Rows transaction={transaction} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
