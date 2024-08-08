// src/components/CartItem.jsx
import React  from 'react';

const CartItem = ({ item, removeFromCart, incrementQuantity, decrementQuantity }) => {
    return (
      <div>
        <h3>{item.name}</h3>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <button onClick={() => incrementQuantity(item.id)}>+</button>
        <button onClick={() => decrementQuantity(item.id)}>-</button>
        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
      </div>
    );
  };
  
  export default CartItem;
