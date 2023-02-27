import React from 'react'

import OrderItem from '../orderItem'

import './styles.css'

const OrdersList = ({ orders }) => {
  return (
    <div className="orders-list">
      {orders.map(order => (
        <OrderItem key={order._id} order={order} />
      ))}
    </div>
  )
}

export default OrdersList
