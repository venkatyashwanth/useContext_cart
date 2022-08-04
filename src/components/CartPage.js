import React from "react";
import ButtonContainer from "./ButtonContainer";
import './CartPage.css'
const products = [
  {
    id: 1,
    product: "Mouse",
  },
  {
    id: 2,
    product: "Keyboard",
  },
];

const CartPage = () => {
  return (
    <>
      <h1>Items to buy</h1>
      <div className="productContainer">
        {products.map((item) => (
          <div key={item.id} className="products">
            <p>{item.product}</p>
            <ButtonContainer />
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
