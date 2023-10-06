import React, { Component } from "react";

class NewProduct extends Component {
  state = {
    newProduct: {
      name: "",
      price: "",
    },
  };

  inputHandler(e) {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        ...(e.target.id === "name" && { name: e.target.value }),
        ...(e.target.id === "price" && { price: e.target.value }),
      },
    });
  }

  submitHandel(e) {
    e.preventDefault();

    this.props.addProduct(
      this.state.newProduct.name,
      this.state.newProduct.price
    );

    this.setState({
      newProduct: {
        price: "",
        name: "",
      },
    });
  }
  render() {
    return (
      <form
        onSubmit={this.submitHandel.bind(this)}
        action=""
        className=" d-flex flex-column gap-1 w-50 mb-4 m-auto p-4"
      >
        <input
          value={this.state.newProduct.name}
          id="name"
          type="text"
          placeholder="name"
          onInput={this.inputHandler.bind(this)}
        />
        <input
          value={this.state.newProduct.price}
          id="price"
          type="number"
          placeholder="price"
          onInput={this.inputHandler.bind(this)}
        />
        <button className=" mt-3 btn btn-primary">Add Product</button>
      </form>
    );
  }
}

export default NewProduct;
