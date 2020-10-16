import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import Card from "../components/UI/Card";
import "./ProductList.css";

const Cart = (props) => {
  const favoriteProducts = useSelector((state) => state.shop.products.filter((p) => p.isAdded));
  const totalPrice = useSelector((state) => state.shop.totalPrice);
  let content = <p className="placeholder">Please do shopping!</p>;

  if (favoriteProducts.length > 0) {
    content = (
      <div>
        <ul className="products-list">
          {favoriteProducts.map((prod) => (
            <CartItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
              quantity={prod.quantity}
              price={prod.price}
            />
          ))}
        </ul>
        <Card style={{ marginBottom: "1rem", margin: "3rem", padding: "4"}}>
          <p>TotalPrice {totalPrice}</p>
        </Card>
      </div>
    );
  }

  return content;
};

export default Cart;
