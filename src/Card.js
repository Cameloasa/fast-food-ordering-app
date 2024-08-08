import React from 'react';

const Card = ({ product, addToOrder }) => {
  return (
    <div className="card">
      <img className="card-image" src={product.image} alt={product.name} />
      <h2 className="card-title">{product.name}</h2>
      <p className="card-text">Sek: {product.price}</p>
      <button className="btn btn-primary" onClick={() => addToOrder(product)}>
        Add to order
      </button>
    </div>
  );
};

export default Card;


