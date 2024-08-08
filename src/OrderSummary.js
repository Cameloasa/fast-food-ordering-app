import React from 'react'

const OrderSummary = ({order,incrementItem,decrementItem}) => {

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Your order</h2>
      <ul className="list-group">
        {order.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - {item.quantity} x {item.price.toFixed(2)} Sek
            <div>
              <button className="btn btn-success btn-sm" 
              style={{ cursor: 'pointer', borderRadius: '5px'}}
              onClick={() => incrementItem(item)}>+</button>
              <button className="btn btn-danger btn-sm" 
              style={{ cursor: 'pointer',borderRadius: '5px' }}
              onClick={() => decrementItem(item)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <br></br>
      <h3 className="mt-3">Total: {calculateTotal()} Sek</h3>
    </div>
  );
};

export default OrderSummary