import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ordersServices } from '../../services'
import { useAuth } from '../../hooks'
import { showLast4Digits } from '../../utils'

import { Footer, Navbar, OrderProduct, OrderSkeleton } from '../../components'
import { ReactComponent as MasterIcon } from '../../assets/master-icon.svg'
import { ReactComponent as VisaIcon } from '../../assets/visa-icon.svg'

import './styles.css'

const OrderDetail = () => {
  const { id } = useParams()

  const { token } = useAuth()

  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0)

    const fetchOrder = async () => {
      const order = await ordersServices.getById(id, token)

      setOrder(order)
      setLoading(false)
    }

    fetchOrder()
  }, [id, token])

  return (
    <section className="order-detail-screen">
      <Navbar />
      <div className="order-detail-container">
        <div className="home-banner">
          <div className="home-banner__overlay">
            <h1 className="home-banner__title">Order Detail</h1>
          </div>
        </div>

        {loading ? (
          <OrderSkeleton />
        ) : (
          <div className="order-detail">
            <button className="detail__goback" onClick={() => navigate(-1)}>
              <span className="material-symbols-rounded">keyboard_return</span>
              <span>Go back</span>
            </button>
            <header className="order-detail__header">
              <div className="order-detail__user">
                <span className="material-symbols-rounded">account_circle</span>
                <h2>{order?.buyer.name}</h2>
              </div>
              <div className="order-detail__price">
                <h3>US$ {order?.totalCost.toFixed(2)}</h3>
                <span>{order?.products.length} Items</span>
              </div>
            </header>

            <div className="order-detail__info">
              <div className="order-detail-info__left">
                <div className="order-detail-info-left__item">
                  <span className="material-symbols-rounded">badge</span>
                  <span>{order?.buyer.name}</span>
                </div>
                <div className="order-detail-info-left__item">
                  <span className="material-symbols-rounded">home_pin</span>
                  <span>{order?.address.address}</span>
                </div>
                <div className="order-detail-info-left__item">
                  <span className="material-symbols-rounded">location_city</span>
                  <span>{order?.address.city}</span>
                </div>
                <div className="order-detail-info-left__item">
                  <span className="material-symbols-rounded">public</span>
                  <span>{order?.address.country}</span>
                </div>
              </div>
              <div className="order-detail-info__right">
                <span>Credit/Debit Card</span>
                <div>
                  <span>{showLast4Digits(`${order?.payment.cardNumber}`)}</span>
                  {['0', '1', '2', '3', '4'].includes(order?.payment.cardNumber.toString()[0]) ? (
                    <VisaIcon className="cart-right-payment__icon" />
                  ) : (
                    <MasterIcon className="cart-right-payment__icon" />
                  )}
                </div>
              </div>
            </div>

            <div className="order-detail__products">
              {order?.products.map(item => (
                <OrderProduct key={item.product._id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  )
}

export default OrderDetail
