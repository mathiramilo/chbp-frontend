import React from 'react'

import CartItem from '../cartItem'

import './styles.css'

const CartList = ({ cart, dispatch }) => {
  return (
    <div className="cart-list">
      {cart.map(({ product, size, qty }, index) => (
        <CartItem key={index} product={product} size={size} qty={qty} dispatch={dispatch} />
      ))}
    </div>
  )
}

export default CartList
