import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ products, onSelect }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
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
                title="Delete Product"
                size="lg"
                onClick={() => onSelect(product.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Menu;
