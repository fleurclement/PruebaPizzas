import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';
import '../index.css'


const PizzaDetail = () => {
    const { id } = useParams();
    const { pizzas, addToCart } = useContext(PizzaContext);

    const pizza = pizzas.find((pizza) => pizza.id === id);

    if (!pizza) {
        return <p>Pizza no encontrada</p>;
    }

    return (
        <div className='pizza-detail'> 
            <h2>{pizza.name}</h2>
            <img src={pizza.img} alt={pizza.name} />
            <p>{pizza.desc}</p>
            <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
            <p>Precio: ${pizza.price}</p>
            <button className="btn btn-add" onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
        </div>
    );
};

export default PizzaDetail;
