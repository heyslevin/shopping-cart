import React, { useState } from 'react';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import AllProducts from './pages/AllProducts';
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';
import data from './data/data.js';

function App() {
  const [currentProduct, setCurrentProduct] = useState(data[0]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product">
          <ProductPage currentProduct={currentProduct} />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/shopAll">
          <AllProducts setCurrentProduct={setCurrentProduct} data={data} />
        </Route>
        <Route path="/">
          <Home setCurrentProduct={setCurrentProduct} data={data} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
