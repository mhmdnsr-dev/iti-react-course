import React, { Component } from "react";
import ProductCard from "../product-card/ProductCard.jsx";
import NewProduct from "../new-product/NewProduct.jsx";
import { products } from "../../db/products.js";

class Products extends Component {
  state = {
    products,
  };

  addProduct = (name, price) => {
    if (!name || !price) return;
    this.setState({
      products: [
        ...this.state.products,
        {
          id: this.state.products.length + 1,
          name,
          price,
        },
      ],
    });
  };

  deleteProduct = (id) => {
    this.setState({ products: this.state.products.filter((p) => p.id !== id) });
  };

  updatePrice = (id, value) => {
    if (!value) return;
    this.setState({
      products: this.state.products.map((p) => {
        p.id === id && (p.price = value);
        return p;
      }),
    });
  };

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem("products"));
    products && this.setState({ products: products });
  }

  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  render() {
    return (
      <>
        <NewProduct addProduct={this.addProduct}></NewProduct>
        <div className="d-flex flex-wrap gap-2">
          {this.state.products.map((p) => {
            return (
              <ProductCard
                key={p.id}
                product={p}
                deleteProduct={this.deleteProduct}
                updatePrice={this.updatePrice}
              ></ProductCard>
            );
          })}
        </div>
      </>
    );
  }
}

export default Products;
