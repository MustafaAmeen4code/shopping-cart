import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const ChangeProducts = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: 0,
    isInCart: false,
  });
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { products, addProductHandler, editProductHandler } =
    useOutletContext();

  useEffect(() => {
    if (id !== "new") {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/products/${id}`);
          const product = res.data;
          if (product) {
            setFormData({
              name: product.name ?? "",
              price: product.price ?? "",
              quantity: product.quantity ?? 0,
              isInCart: product.isInCart ?? false,
            });
          } else {
            setError("Product not found");
          }
        } catch (err) {
          setError("Product not found");
        }
      };
      fetchProduct();
    }
  }, [id, products]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === "new") {
      await addProductHandler(formData);
      setFormData({ name: "", price: "", quantity: 0, isInCart: false });
    } else {
      await editProductHandler(formData, id);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>{id === "new" ? "Add Product" : "Edit Product"}</h2>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              required
            />
          </div>
          <button className="btn btn-primary btn-outline-light">
            {id === "new" ? "Add" : "Edit"}
          </button>
        </form>
      )}
    </>
  );
};

export default ChangeProducts;
