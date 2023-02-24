import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Footer, Navbar } from '../../components'
import { useAuth } from '../../hooks'
import { ordersServices } from '../../services'

import './styles.css'

const OrderDetail = () => {
  const { id } = useParams()

  const { token } = useAuth()

  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0)

    const fetchOrder = async () => {
      const order = await ordersServices.getById(id, token)

      setOrder(order)
      setLoading(false)
    }

    fetchOrder()
  }, [])

  return (
    <section className="order-detail-screen">
      <Navbar />
      <div className="order-detail-container">
        <br />
        <br />
        <h1>Order Detail</h1>
        <br />
        {loading ? <h4>Please wait, getting your order...</h4> : <h4>ID: {order?._id}</h4>}
      </div>
      <Footer />
    </section>
  )
}

export default OrderDetail
