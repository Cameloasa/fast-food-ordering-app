import React from 'react'

const OrderSummary = ({order,incrementItem,decrementItem}) => {
  return (
    <div>
      <h2>Your order</h2>
      <ul className="list-group">
        {order.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - {item.quantity} x {item.price} Sek
            <div>
              <button className="btn btn-success btn-sm" onClick={() => incrementItem(item)}>+</button>
              <button className="btn btn-danger btn-sm" onClick={() => decrementItem(item)}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary