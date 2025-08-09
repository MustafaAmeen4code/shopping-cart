import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const activeStyle = "white";
  const inActiveStyle = "gray";

  return (
    <nav className="navbar  navbar-dark bg-dark">
      <NavLink
        to={"/"}
        className="navbar-brand "
        style={({ isActive }) => ({
          color: isActive ? activeStyle : inActiveStyle,
        })}
      >
        Home Page
      </NavLink>
      <NavLink
        to={"/menu"}
        className="navbar-brand "
        style={({ isActive }) => ({
          color: isActive ? activeStyle : inActiveStyle,
        })}
      >
        Menu
      </NavLink>
      <NavLink to={"/cart"} className="navbar-brand ">
        <span
          className="badge badge-primary bg-light text-dark"
          style={{ backgroundColor: "gray" }}
        >
          <FontAwesomeIcon icon={faCartShopping} className="mx-2" />
          {props.productsCount}
        </span>{" "}
      </NavLink>
    </nav>
  );
};

export default Navbar;
