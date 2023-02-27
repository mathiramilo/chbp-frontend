import React from 'react'

import './styles.css'

const OrderProduct = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <div className="cart-item__img" data-brand={item.product.category}>
          <div className="cart-item-img__overlay" style={{ background: item.product.color }}></div>
          <img src={item.product.imgUrl} alt={item.product.title} />
        </div>

        <div className="cart-item__data">
          <div className="cart-item-data__heading">
            <div className="cart-item-data-heading__title">
              <span>{item.product.category}</span>
              <h3>{item.product.title}</h3>
            </div>
            <div className="cart-item-data-heading__size">
              <span>{item.size}</span>
            </div>
          </div>
          <div className="cart-item-data__qty">
            <span>x {item.qty}</span>
          </div>
        </div>
      </div>
      <div className="cart-item__right">
        <h3>US$ {(item.product.price * item.qty).toFixed(0)}</h3>
      </div>
    </div>
  )
}

export default OrderProduct
