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
      <div className="">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title h2">{this.props.product.name}</h5>
            <p className="card-text h4">{this.props.product.price}</p>
            <div className=" d-flex flex-column">
              <div className=" d-flex mb-2">
                <button
                  className=" btn btn-dark w-50 "
                  onClick={this.updateHandel.bind(this)}
                >
                  Update Price
                </button>
                <input
                  type="number"
                  className=" w-50"
                  value={this.state.price}
                  onInput={this.inputHandler.bind(this)}
                />
              </div>
              <button
                className=" btn btn-danger"
                onClick={this.props.deleteProduct.bind(
                  null,
                  this.props.product.id
                )}
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
