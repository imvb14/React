import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContectProvider  from './store/context-store.jsx';
import Product from './components/Product.jsx';

function App() {
  return (
    <>
    <CartContectProvider>
      <Header/>
      <Shop> 
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))} </Shop>
      </CartContectProvider>
    </>
  );
}

export default App;


