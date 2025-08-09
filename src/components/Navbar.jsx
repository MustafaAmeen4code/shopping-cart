import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <nav className="navbar  navbar-dark bg-dark">
      <a className="navbar-brand " href="./">
        Shopping Cart
      </a>

      <span className="badge badge-primary bg-light text-dark">
        <FontAwesomeIcon icon={faCartShopping} className="mx-2" />
        {props.productsCount}
      </span>
    </nav>
  );
};

export default Navbar;
