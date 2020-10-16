export const ADD_CART = "ADD_CART";
export const QUANTITY_CHANGE = "QUANTITY_CHANGE";

export const addToCart = (id) => {
  return { type: ADD_CART, productId: id };
};

export const changeQuantity = (id, quantity) => {
  return { type: QUANTITY_CHANGE, productId: id, productQuantity: quantity };
};
