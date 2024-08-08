import React, { useContext, useEffect } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import PizzaList from '../components/PizzaList';

const Home = () => {
    const { pizzas, setPizzas } = useContext(PizzaContext);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('/pizzas.json');
                const data = await response.json();
                setPizzas(data);
            } catch (error) {
                console.error('Error fetching the pizzas data:', error);
            }
        };

        fetchPizzas();
    }, [setPizzas]);

    return (
        <div>
        <h2>¡Pizzería Mamma Mia!</h2>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <PizzaList  />
      </div>
    );
};

export default Home;
//pizzas={pizzas}