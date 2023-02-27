import React, { useEffect, useState } from 'react'

import { Footer, Navbar, OrdersList, OrdersSkeleton } from '../../components'
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

      const sortedOrders = [...orders].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

      setOrders(sortedOrders)
      setLoading(false)
    }

    fetchOrders()
  }, [user.email, token])

  return (
    <section className="orders-screen">
      <Navbar />
      <div className="orders-screen-container">
        <div className="home-banner">
          <div className="home-banner__overlay">
            <h1 className="home-banner__title">Your Orders</h1>
          </div>
        </div>

        <div className="orders-container">{loading ? <OrdersSkeleton /> : <OrdersList orders={orders} />}</div>
      </div>
      <Footer />
    </section>
  )
}

export default Orders
