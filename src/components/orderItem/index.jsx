import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const OrderItem = ({ order }) => {
  return (
    <div className='order-item'>
        <h2>Order Item</h2>
        <br />
        <span>ID: {order._id}</span>
        <br />
        <span>USD {order.totalCost.toFixed(2)}</span>
        <br />
        <br />

        <Link to={`/orders/${order._id}`}>
          <button>View Detail</button>
        </Link>
    </div>
  )
}

export default OrderItem