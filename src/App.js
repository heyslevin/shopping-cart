import React from 'react';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
