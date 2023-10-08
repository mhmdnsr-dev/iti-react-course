import React, { Component } from "react";

class ProductCard extends Component {
  state = {
    price: 0,
  };

  inputHandler(e) {
    this.setState({ price: e.target.value });
  }
  updateHandel() {
    this.props.updatePrice(this.props.product.id, this.state.price);
    this.setState({ price: 0 });
  }
  render() {
    return (
      <div className="rounded bg-cyan-200 p-2">
        <div>
          <div className="flex flex-col gap-3">
            <h5 className=" text-2xl">{this.props.product.name}</h5>
            <p className="text-xl">${this.props.product.price}</p>

            <div className="flex gap-3">
              <button
                className=" w-1/2 rounded bg-blue-700 pb-1 pe-2 ps-2 pt-1 text-white"
                onClick={this.updateHandel.bind(this)}
              >
                Update Price
              </button>
              <input
                required
                type="number"
                className="w-1/3 rounded"
                value={this.state.price}
                onInput={this.inputHandler.bind(this)}
              />
            </div>
            <button
              className="rounded bg-red-500 pb-1 pe-2 ps-2 pt-1 text-white"
              onClick={this.props.deleteProduct.bind(
                null,
                this.props.product.id,
              )}
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
