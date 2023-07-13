// Rows.tsx
import React from 'react';

interface RowProps {
  product: {
    name: string;
    price: number;
    sold: number;
    status: string;
  };
}

const Rows: React.FC<RowProps> = ({ product }) => {
  return (
    <>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.sold}</td>
      <td>{product.status}</td>
    </>
  );
};

export default Rows;
