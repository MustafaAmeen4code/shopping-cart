import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";

export async function productsLoader() {
  try {
    const res = await axios.get(`http://localhost:3000/products`);

    return res.data;
  } catch (error) {
    throw new Response("Failed to load users", { status: 500 });
  }
}

const AppLayout = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);

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
  const addProductHandler = async (newProduct) => {
    // Optimistically add product with a temporary ID
    const tempId = Date.now().toString();
    const optimisticProduct = { ...newProduct, id: tempId };
    setProducts((prev) => [...prev, optimisticProduct]);
    try {
      const res = await axios.post(
        "http://localhost:3000/products",
        newProduct
      );
      setProducts((prev) =>
        prev.map((product) => (product.id === tempId ? res.data : product))
      );
    } catch (error) {
      // Rollback on error
      setProducts((prev) => prev.filter((product) => product.id !== tempId));
      alert("Failed to add product.");
    }
  };

  const deleteProductHandler = async (productId) => {
    // Optimistically remove product
    const prevProducts = products;
    setProducts((prev) => prev.filter((product) => product.id !== productId));
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
    } catch (error) {
      // Rollback on error
      setProducts(prevProducts);
      alert("Failed to delete product.");
    }
  };

  const editProductHandler = async (updatedProduct, id) => {
    // Optimistically update product
    const prevProducts = products;
    setProducts((prev) =>
      prev.map((product) =>
        String(product.id) === String(id)
          ? { ...product, ...updatedProduct }
          : product
      )
    );
    try {
      const res = await axios.put(
        `http://localhost:3000/products/${id}`,
        updatedProduct
      );
      setProducts((prev) =>
        prev.map((product) =>
          String(product.id) === String(id)
            ? { ...product, ...res.data }
            : product
        )
      );
    } catch (error) {
      // Rollback on error
      setProducts(prevProducts);
      alert("Failed to edit product.");
    }
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
            addProductHandler,
            deleteProductHandler,
            editProductHandler,
          }}
        />
      </main>
    </>
  );
};

export default AppLayout;
