import React, { useEffect, useState } from 'react'

import { Footer, Navbar, OrdersList } from '../../components'
import { useAuth } from '../../hooks'
import { ordersServices } from '../../services'

import './styles.css'

const Orders = () => {
  const { user, token } = useAuth()

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0)

    const fetchOrders = async () => {
      const orders = await ordersServices.getAll(user.email, token)

      setOrders(orders)
      setLoading(false)
    }

    fetchOrders()
  }, [])

  return (
    <section className="orders-screen">
      <Navbar />
      <div className="orders-screen-container">
        <br />
        <br />
        <h1>Your Orders</h1>
        <br />
        <br />

        <div className="orders-container">
          {loading ? (
            <span>Please wait a second, we are getting your orders...</span>
          ) : (
            <OrdersList orders={orders} />
          )}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Orders
