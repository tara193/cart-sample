import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addToCart, changeQuantity } from "../store/actions/products";
import ProductItem from "../components/Products/ProductItem";

const ProductItemContainer = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.shop.products.find((p) => p.id === id)
  );

  const handleQuantityChange = (id, event) => {
    event.preventDefault();
    dispatch(changeQuantity(id, event.target.value));
  };

  const handleAddCart = (id) => {
    dispatch(addToCart(id));
  };


  const handleCartClick = () => props.history.push("/cart");

  const handleBackClick = () => props.history.push("/");

  return (
    <ProductItem
      handleCartClick={handleCartClick}
      handleBackClick={handleBackClick}
      handleQuantityChange={handleQuantityChange}
      handleAddCart={handleAddCart}
      product={product}
      {...props}
    />
  );
};

export default ProductItemContainer;
