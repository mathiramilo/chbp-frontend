import React from 'react'

import './styles.css'

const OrderSkeleton = () => {
  return (
    <div className="order-detail">
      <div className="order-skeleton__goback"></div>
      <header className="order-detail__header">
        <div className="order-detail__user order-skeleton__user">
          <span></span>
          <div></div>
        </div>
        <div className="order-detail__price order-skeleton__price">
          <div></div>
          <span></span>
        </div>
      </header>

      <div className="order-skeleton__info"></div>

      <div className="order-detail__products">
        <div className="order-skeleton__product"></div>
        <div className="order-skeleton__product"></div>
        <div className="order-skeleton__product"></div>
      </div>
    </div>
  )
}

export default OrderSkeleton
