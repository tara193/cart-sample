import React from "react";
import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.product.isAdded ? "is-add" : ""}>{props.product.title}</h2>
        <p>Description: {props.product.description}</p>
        <p>Price: {props.product.price} Rs</p>
        <input
          type="number"
          min={1}
          name="quantity"
          aria-label="quantity"
          defaultValue={props.product.quantity}
          style={{ margin: "5px", padding: "5px", width: "50px" }}
          onChange={(event) => props.handleQuantityChange(props.product.id, event)}
        />
        <button
          className={!props.product.isAdded ? "button-outline" : ""}
          onClick={() => props.handleAddCart(props.product.id)}
        >
          {props.product.isAdded ? "Remove from Cart" : "Add to Cart"}
        </button>
        <button
          className={!props.product.isAdded ? "button-outline" : ""}
          onClick={props.handleCartClick}
        >
          Go To Cart
        </button>
        <button
          className={!props.product.isAdded ? "button-outline" : ""}
          onClick={props.handleBackClick}
        >
          Back To Products
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
