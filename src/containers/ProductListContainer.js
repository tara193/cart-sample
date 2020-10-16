import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQuantity } from "../store/actions/products";
import ProductList from "../components/Products/ProductList";
import "./ProductList.css";

const ProductListContainer = (props) => {
  const productList = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();
  const handleQuantityChange = (id, event) => {
    event.preventDefault();
    dispatch(changeQuantity(id, event.target.value));
  };

  const handleAddCart = (id) => {
    dispatch(addToCart(id));
  };


  const handleCardClick = (id) => props.history.push(`/product-item/${id}`);

  return (
    <ul className="product-list">
      {productList.map((prod) => (
        <ProductList
          key={prod.id}
          id={prod.id}
          isFav={prod.isAdded}
          title={prod.title}
          quantity={prod.quantity}
          handleCardClick={handleCardClick}
          handleQuantityChange={handleQuantityChange}
          handleAddCart={handleAddCart}
        />
      ))}
    </ul>
  );
};

export default ProductListContainer;
