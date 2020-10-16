import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import CartPage from './containers/Cart';
import ProductItem from './containers/ProductItemContainer';
import ProductsPage from './containers/ProductListContainer';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/product-item/:id" component={ProductItem} />
        <Route path="/cart" component={CartPage} />
      </main>
    </React.Fragment>
  );
};

export default App;
