import React from 'react'

import CartItem from '../cartItem'

import './styles.css'

const CartList = ({ cart, dispatch }) => {
  return (
    <div className="cart-list">
      {cart.length === 0 ? (
        <div className="cart-list__empty">
          <span className="material-symbols-rounded">error</span>
          <p>Your cart is empty, please add some cool sneakers!</p>
        </div>
      ) : (
        cart.map(({ product, size, qty }, index) => (
          <CartItem key={index} product={product} size={size} qty={qty} dispatch={dispatch} />
        ))
      )}
    </div>
  )
}

export default CartList
