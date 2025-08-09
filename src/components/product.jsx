import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //getClasses is a method to determine the class based on quantity
  const getClasses = () => {
    return props.product.quantity === 0
      ? "badge bg-warning m-2"
      : "badge bg-primary m-2";
  };
  return (
    <div className="row">
      <div className="col-2">
        <span>{props.product.name}</span>
      </div>
      <div className="col">
        <span className={getClasses()}>{props.product.quantity}</span>
        <button
          onClick={() => props.onIncrement(props.product.id)}
          className="btn btn-primary btn-sm mx-2 btn-outline-light"
        >
          +1
        </button>
        <FontAwesomeIcon
          icon={faTrash}
          style={{ cursor: "pointer" }}
          className="mx-2"
          title="Delete Product"
          size="lg"
          onClick={() => props.onDelete(props.product.id)}
        />
      </div>
    </div>
  );
};

export default Product;
