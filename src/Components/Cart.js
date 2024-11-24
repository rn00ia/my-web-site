import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const removeItemFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart de Shopping</h1>
      <div>
        {cart.length === 0 ? (
          <p>Ton cart est vide</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <p>{item.title}</p>
              <p>${item.price * item.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className='btn'>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className='btn'>+</button>
              </div>
              <button onClick={() => removeItemFromCart(item.id)} className="remove-btn">Retirer</button>
            </div>
          ))
        )}
      </div>
      <div>
        <h2>Total: ${calculateTotal()}</h2>
        <button disabled={cart.length === 0} className="checkout-btn">Sortir</button>
      </div>
    </div>
  );
};

export default Cart;
