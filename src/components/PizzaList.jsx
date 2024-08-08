// src/components/PizzaList.jsx
import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import { Link } from 'react-router-dom';
import '../index.css'

const PizzaList = () => {
    const { pizzas, addToCart } = useContext(PizzaContext);
  
    return (
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div className="pizza-card" key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Precio: ${pizza.price}</p>
            <Link to={`/pizza/${pizza.id}`} className="btn btn-details">Ver detalles</Link>
            <button className="btn btn-add" onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default PizzaList;