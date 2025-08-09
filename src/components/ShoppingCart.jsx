import React from "react";
import Product from "./product";
const ShoppingCart = (props) => {
  return (
    <React.Fragment>
      <h1>Shopping Cart</h1>
      <button className="btn btn-secondary btn-sm m-2" onClick={props.onReset}>
        Reset
      </button>
      {props.products
        .filter((product) => product.isInCart)
        .map((product) => (
          <Product
            key={product.id}
            product={product}
            onIncrement={props.onIncrement}
            onDelete={props.onDelete}
          />
        ))}
    </React.Fragment>
  );
};

export default ShoppingCart;
