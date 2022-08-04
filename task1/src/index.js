import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Products array to be used as props */
const products = [
  {item:'Two Piece Suit – Black', price: 12900, photo:require('./images/suit.jpg' ), id:1},
  {item:'Tan Florsheim Premium Shoes', price: 3290, photo:require('./images/shoes.jpg' ), id:2},
  {item:'Designer Shirt – Translucent Floral', price: 4290, photo:require('./images/shirt.jpg' ), id:3}
];

/* Render in page */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App login = {true} products={products}/>

  </React.StrictMode>
);

reportWebVitals();
