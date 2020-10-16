import React from "react";
import Card from "../UI/Card";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="cart-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Quantity {props.quantity}</p>
        <p>Price :{props.price}</p>
      </div>
    </Card>
  );
};

export default CartItem;
