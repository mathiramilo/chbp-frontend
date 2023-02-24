import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const OrderItem = ({ order }) => {
  return (
    <Link to={`/orders/${order._id}`}>
      <div className="order-item">
        <h5>{new Date(order.timestamp).toLocaleString()}</h5>
        <span>
          {order.address.address} | {order.address.city} | {order.address.country}
        </span>
        <h4>US$ {order.totalCost.toFixed(2)}</h4>
      </div>
    </Link>
  )
}

export default OrderItem
