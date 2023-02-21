import React from 'react'

import { useAuth } from '../../hooks'
import { cartServices } from '../../services'
import { removeProduct, increaseProduct, decreaseProduct } from '../../context/cart/cart.actions'

import './styles.css'

const CartItem = ({ product, size, qty, dispatch }) => {
  const { user, token } = useAuth()

  const handleRemove = async () => {
    dispatch(removeProduct(product._id, size))
    await cartServices.removeProduct(user.cartId, product._id, size, token)
  }

  const handleIncrease = async () => {
    dispatch(increaseProduct(product._id, size))
    await cartServices.addProduct(user.cartId, product._id, size, token)
  }

  const handleDecrease = async () => {
    dispatch(decreaseProduct(product._id, size))
    await cartServices.decreaseProduct(user.cartId, product._id, size, token)
  }

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <div className="cart-item__img" data-brand={product.category}>
          <div className="cart-item-img__overlay" style={{ background: product.color }}></div>
          <img src={product.imgUrl} alt={product.title} />
        </div>

        <div className="cart-item__data">
          <div className="cart-item-data__heading">
            <div className="cart-item-data-heading__title">
              <span>{product.category}</span>
              <h3>{product.title}</h3>
            </div>
            <div className="cart-item-data-heading__size">
              <span>{size}</span>
            </div>
          </div>
          <div className="cart-item-data__qty">
            <button onClick={handleDecrease}>
              <span className="material-symbols-rounded">remove</span>
            </button>
            <span>{qty}</span>
            <button onClick={handleIncrease}>
              <span className="material-symbols-rounded">add</span>
            </button>
          </div>
        </div>
      </div>
      <div className="cart-item__right">
        <h3>US$ {(product.price * qty).toFixed(0)}</h3>
        <button onClick={handleRemove}>
          <span className="material-symbols-rounded">close</span>
        </button>
      </div>
    </div>
  )
}

export default CartItem
