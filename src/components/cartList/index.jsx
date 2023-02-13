import React from 'react'

const CartList = ({ cart, dispatch }) => {
  return (
    <div className="cart-list">
      {cart.map(({ product, size, qty }, index) => (
        <div className="cart-list__item" key={index}>
          <img src={product.imgUrl} alt={product.title} />
          <h4>{product.title}</h4>
          <span>Size: {size}</span>
          <span>Qty: {qty}</span>
          <span>Price: {product.price * qty}</span>
        </div>
      ))}
    </div>
  )
}

export default CartList
