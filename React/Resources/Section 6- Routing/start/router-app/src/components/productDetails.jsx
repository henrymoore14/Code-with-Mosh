import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    //Especially used for login pages
    this.props.history.replace('/products')
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
