// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

const Navigation = () => {
    const { cart } = useContext(PizzaContext);
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <header className="header">
        <Link to="/" className="header__title">
          <h1>Pizzería Mamma Mia!</h1>
        </Link>
        <div className="header__cart">
          <Link to="/carrito">
            <span>🛒</span>
            <span>${total.toFixed(2)}</span>
          </Link>
        </div>
      </header>
    );
  };

export default Navigation;
