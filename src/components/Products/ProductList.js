import React from "react";
import Card from "../UI/Card";

const ProductLsit = (props) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2
          className={props.isAdded ? "is-add" : ""}
          onClick={() => props.handleCardClick(props.id)}
        >
          {props.title}
        </h2>
        <input
          type="number"
          min={1}
          name="quantity"
          aria-label="quantity"
          defaultValue={props.quantity}
          style={{ margin: "5px", padding: "5px", width: "50px" }}
          onChange={(event) => props.handleQuantityChange(props.id, event)}
        />
        <button
          className={!props.isAdded ? "button-outline" : ""}
          onClick={() => props.handleAddCart(props.id)}
        >
          {props.isAdded ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </Card>
  );
};

export default ProductLsit;
