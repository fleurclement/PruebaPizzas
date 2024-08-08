import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(PizzaContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            removeFromCart={removeFromCart}
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
                        />
                    ))}
                    <h2>Total: ${total}</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
