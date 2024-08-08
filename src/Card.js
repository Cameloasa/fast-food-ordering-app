import React from 'react';

const Card = ({ product, addToOrder }) => {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Sek: {product.price}</p>
        <button 
        className="btn btn-primary mt-auto" 
        style={{ cursor: 'pointer',borderRadius: '10px' }}
        onClick={() => addToOrder(product)}>
          Add to order
        </button>
      </div>
      </div>
  );
};

export default Card;


