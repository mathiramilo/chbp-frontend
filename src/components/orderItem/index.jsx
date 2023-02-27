import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const OrderItem = ({ order }) => {
  return (
    <Link to={`/orders/${order._id}`}>
      <div className="order-item">
        <header className="order-item__header">
          <span>{new Date(order.timestamp).toLocaleString()}</span>
          <div className="order-item__price">
            <h3>US$ {order.totalCost.toFixed(2)}</h3>
            <span>{order.products.length} Items</span>
          </div>
        </header>
        <div className="order-item__address">
          <div className="order-item-address__item">
            <span className="material-symbols-rounded">badge</span>
            <span>{order.buyer.name}</span>
          </div>
          <div className="order-item-address__item">
            <span className="material-symbols-rounded">home_pin</span>
            <span>{order.address.address}</span>
          </div>
          <div className="order-item-address__item">
            <span className="material-symbols-rounded">location_city</span>
            <span>{order.address.city}</span>
          </div>
          <div className="order-item-address__item">
            <span className="material-symbols-rounded">public</span>
            <span>{order.address.country}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OrderItem
