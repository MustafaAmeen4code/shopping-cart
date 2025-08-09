import React, { Component } from "react";

import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";

class App extends Component {
  //mounting phase

  //constructor is called when the component is created
  //It is used to initialize state and bind methods
  //It is the first method called in the lifecycle of a component
  //It is called only once in the lifecycle of a component
  //It is not called when the component is updated
  //It is not called when the component is unmounted
  //It is not called when the component is re-rendered
  constructor(props) {
    super(props);
    console.log("App ==> Constructor");
  }
  componentDidMount() {
    //This method is called after the component is mounted
    //It is used to fetch data from an API or perform any other side effects
    console.log("App ==> ComponentDidMount");
  }
  //Updating phase
  //componentDidUpdate is called after the component is updated
  componentDidUpdate(prevProps, prevState) {
    //This method is called after the component is updated
    //It is used to perform any side effects after the component is updated
    console.log("App ==> ComponentDidUpdate");
    //You can compare the previous props and state with the current props and state
    console.log("Previous State:", prevState);
    console.log("Products updated:", this.state.products);
  }
  state = {
    products: [
      { id: 1, name: "Product 1", price: 10.0, quantity: 1 },
      { id: 2, name: "Product 2", price: 20.0, quantity: 0 },
      { id: 3, name: "Product 3", price: 30.0, quantity: 1 },
    ],
  };

  //incrementHandler is a method to increment the quantity by a given value
  incrementHandler = (productId) => {
    const products = [...this.state.products];
    const index = products.findIndex((p) => p.id === productId);
    if (index !== -1) {
      // Clone the product object
      products[index] = {
        ...products[index],
        quantity: products[index].quantity + 1,
      };
      this.setState({ products });
    }
  };
  //deleteHandler is a method to remove a product from the cart
  deleteHandler = (productId) => {
    this.setState({
      products: this.state.products.filter((p) => p.id !== productId),
    });
  };
  //Handle Reset
  resetHandler = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  render() {
    //third phase of the component lifecycle
    //render is called when the component is mounted or updated
    console.log("App ==> Render");
    return (
      <React.Fragment>
        <Navbar
          productsCount={
            this.state.products.filter((p) => p.quantity > 0).length
          }
        />
        <main className="container">
          <ShoppingCart
            products={this.state.products}
            onIncrement={this.incrementHandler}
            onDelete={this.deleteHandler}
            onReset={this.resetHandler}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
