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
      this.state.newProduct.price,
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
      <>
        {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
        <div className="mb-4 flex flex-1 flex-col justify-center lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Add Product
            </h2>
          </div>

          <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={this.submitHandel.bind(this)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    value={this.state.newProduct.name}
                    onInput={this.inputHandler.bind(this)}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={this.state.newProduct.price}
                    onInput={this.inputHandler.bind(this)}
                    id="price"
                    name="price"
                    type="number"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default NewProduct;
