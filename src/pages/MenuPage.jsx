import Menu from "../components/Menu";
import { useOutletContext } from "react-router-dom";

const MenuPage = () => {
  const { products, selectProductHandler } = useOutletContext();
  return (
    <>
      <h1>Menu</h1>
      <Menu products={products} onSelect={selectProductHandler} />;
    </>
  );
};

export default MenuPage;
