import { ADD_CART, QUANTITY_CHANGE } from "../actions/products";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isAdded: false,
      price: 10,
      quantity: 1,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isAdded: false,
      price: 20,
      quantity: 1,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isAdded: false,
      price: 5,
      quantity: 1,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isAdded: false,
      price: 15,
      quantity: 1,
    },
  ],
  totalPrice: 0,
};

const addToCart = (state, action) => {
  const prodIndex = state.products.findIndex((p) => p.id === action.productId);
  const newAddedStatus = !state.products[prodIndex].isAdded;
  const updatedProducts = [...state.products];
  updatedProducts[prodIndex] = {
    ...state.products[prodIndex],
    isAdded: newAddedStatus,
  };
  if (updatedProducts[prodIndex].isAdded === true) {
    state.totalPrice = state.totalPrice + (updatedProducts[prodIndex].price * updatedProducts[prodIndex].quantity);
  }
  else {
    state.totalPrice = state.totalPrice - (updatedProducts[prodIndex].price * updatedProducts[prodIndex].quantity);
  }
  return {
    ...state,
    products: updatedProducts,
  };
};

const quantityChanged = (state, action) => {
  const productIndex = state.products.findIndex(
    (p) => p.id === action.productId
  );
  const updateProduct = [...state.products];
  let updateTotalPrice = 0;
  if (updateProduct[productIndex].isAdded === true && updateProduct[productIndex].quantity > action.productQuantity) {
    let decreasedQty = updateProduct[productIndex].quantity - action.productQuantity
    updateTotalPrice = state.totalPrice - (updateProduct[productIndex].price * decreasedQty);
  }
  else if(updateProduct[productIndex].isAdded === true && updateProduct[productIndex].quantity < action.productQuantity){
    let increasedQty = action.productQuantity - updateProduct[productIndex].quantity 
    updateTotalPrice = state.totalPrice + (updateProduct[productIndex].price * increasedQty);
  }
  updateProduct[productIndex] = {
    ...state.products[productIndex],
    quantity: action.productQuantity,    
  };
  return {
    ...state,
    products: updateProduct,
    totalPrice: updateTotalPrice
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: return addToCart(state, action);
    case QUANTITY_CHANGE: return quantityChanged(state, action);
    default: return state;
  }
};

export default productReducer;
