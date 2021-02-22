import React, { useState } from 'react';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import AllProducts from './pages/AllProducts';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';
import data from './data/data.js';

function App() {
  const [currentProduct, setCurrentProduct] = useState(data[0]);
  const [cart, setCart] = useState([]);

  function handleDeleteProduct(product) {
    let updatedCart = [...cart];
    if (updatedCart.includes(product)) {
      let cartWithoutProduct = updatedCart.filter(item => item !== product);
      setCart(cartWithoutProduct);
    }
  }

  function handleAddToCart(product, quantity) {
    let updatedProduct = product;
    updatedProduct.quantity = parseInt(quantity);
    let updatedCart = [...cart];

    if (cart.includes(product)) {
      let index = updatedCart.indexOf(product);
      updatedCart[index] = updatedProduct;
      setCart(updatedCart);
    } else {
      setCart([...cart, updatedProduct]);
    }

    // let updatedProduct = product;
    // updatedProduct.quantity = parseInt(quantity);

    // if (cart.includes(product)) {
    //   let cartWithoutProduct = cart.filter(item => item !== product);
    //   setCart([...cartWithoutProduct, updatedProduct]);
    // } else {
    //   setCart([...cart, updatedProduct]);
    // }
  }

  return (
    <BrowserRouter>
      <Header cart={cart} />

      <Switch>
        <Route path="/product">
          <ProductPage
            handleAddToCart={handleAddToCart}
            currentProduct={currentProduct}
          />
        </Route>
        <Route path="/checkout">
          <Checkout
            setCart={setCart}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleDeleteProduct={handleDeleteProduct}
          />
        </Route>
        <Route path="/shopAll">
          <AllProducts setCurrentProduct={setCurrentProduct} data={data} />
        </Route>
        <Route path="/">
          <Home setCurrentProduct={setCurrentProduct} data={data} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
