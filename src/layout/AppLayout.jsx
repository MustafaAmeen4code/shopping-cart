import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10.0, quantity: 1, isInCart: false },
    { id: 2, name: "Product 2", price: 20.0, quantity: 1, isInCart: false },
    { id: 3, name: "Product 3", price: 30.0, quantity: 1, isInCart: false },
    { id: 4, name: "Product 4", price: 20.0, quantity: 1, isInCart: false },
    { id: 5, name: "Product 5", price: 70.0, quantity: 1, isInCart: false },
    { id: 6, name: "Product 6", price: 100.0, quantity: 1, isInCart: false },
  ]);

  const incrementHandler = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const deleteHandler = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const resetHandler = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, quantity: 0 }))
    );
  };
  const selectProductHandler = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isInCart: !product.isInCart }
          : product
      )
    );
  };
  return (
    <>
      <Navbar productsCount={products.filter((p) => p.isInCart).length} />
      <main className="container">
        <Outlet
          context={{
            products,
            incrementHandler,
            deleteHandler,
            resetHandler,
            selectProductHandler,
          }}
        />
      </main>
    </>
  );
};

export default AppLayout;
