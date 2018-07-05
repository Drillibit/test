import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sumOfItems: 0,
      items: []
    };
  }

  render() {
    return (
      <div className="cart_container">
        <p>This is going to be a cart</p>
      </div>
    );
  }
}
