import React from 'react';
import ButtonContainer from './ButtonContainer';

const products = [
  {
    id: 1,
    product: 'Mouse',
  },
  {
    id: 2,
    product: 'Keyboard',
  },
];

const CartPage = () => {
  return (
    <>
      <h1>Items to buy</h1>
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.product}</p>
          <ButtonContainer />
        </div>
      ))}
    </>
  );
};

export default CartPage;
