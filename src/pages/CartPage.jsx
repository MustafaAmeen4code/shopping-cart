import { useOutletContext } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";

const CartPage = () => {
  const { products, incrementHandler, selectProductHandler, resetHandler } =
    useOutletContext();

  return (
    <ShoppingCart
      products={products}
      onIncrement={incrementHandler}
      onDelete={selectProductHandler}
      onReset={resetHandler}
    />
  );
};

export default CartPage;
