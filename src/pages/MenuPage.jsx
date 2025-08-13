import { useOutletContext } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const MenuPage = () => {
  const { products, selectProductHandler } = useOutletContext();
  return (
    <>
      <h1>Menu</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={product.id}>
              <th scope="row">{idx + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{
                    cursor: "pointer",
                    color: product.isInCart ? "black" : "gray",
                  }}
                  className="mx-2"
                  title="Add to Cart"
                  size="lg"
                  onClick={() => selectProductHandler(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
    </>
  );
};

export default MenuPage;
