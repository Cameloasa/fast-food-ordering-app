import React, { useState } from 'react';
import Card from './Card';
import OrderSummary from './OrderSummary';
import ThemeToggle from './ThemeToggle';
import './App.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [order, setOrder] = useState([]);

  const products = [
    { name: 'Burger', image: 'burger.jpg', price: 79.99 },
    { name: 'Pizza', image: 'pizza.jpg', price: 99.99 },
    { name: 'Salad', image: 'salad.jpg', price: 59.99 },
  ];

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const addToOrder = (product) => {
    const existingProduct = order.find(item => item.name === product.name);
    if (existingProduct) {
      setOrder(order.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setOrder([...order, { ...product, quantity: 1 }]);
    }
  };

  const incrementItem = (product) => {
    setOrder(order.map(item =>
      item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementItem = (product) => {
    const updatedOrder = order.map(item =>
      item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setOrder(updatedOrder);
  };

  return (
    <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <ThemeToggle toggleTheme={toggleTheme} />

      <div className="row justify-content-center">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card product={product} addToOrder={addToOrder} />
          </div>
        ))}
      </div>

      <OrderSummary order={order} incrementItem={incrementItem} decrementItem={decrementItem} />
      
    </div>
  );
};

export default App;