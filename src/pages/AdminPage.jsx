import { useOutletContext, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const AdminPage = () => {
  const navigate = useNavigate();
  const { products, deleteProductHandler } = useOutletContext();
  const goChangePage = () => {
    navigate("/ChangeProducts/new");
  };
  return (
    <>
      <h2>Admin Page</h2>
      <button
        className="btn btn-primary btn-sm mx-2 btn-outline-light"
        onClick={goChangePage}
      >
        Add
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
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
                  icon={faPenToSquare}
                  style={{
                    cursor: "pointer",
                  }}
                  className="mx-2"
                  title="Edit Product"
                  onClick={() => navigate(`/changeProducts/${product.id}`)}
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ cursor: "pointer" }}
                  className="mx-2"
                  title="Delete Product"
                  onClick={() => {
                    deleteProductHandler(product.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
    </>
  );
};

export default AdminPage;
