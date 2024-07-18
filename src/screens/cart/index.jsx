import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

import { useAuth, useCart } from '../../hooks'
import { BillingModal, Button, CartList } from '../../components'
import { ReactComponent as CheckoutFigure } from '../../assets/checkout-figure.svg'

import './styles.css'
import paymentsServices from '../../services/payments'

const Cart = () => {
  initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY)

  const { cart, dispatch, productsQty, getSubtotal, getTotal } = useCart()
  const { user, token } = useAuth()

  const [address, setAddress] = useState({
    address: '',
    city: '',
    country: ''
  })

  const [modalOpen, setModalOpen] = useState(false)
  const [preferenceId, setPreferenceId] = useState(null)

  const navigate = useNavigate()

  const fetchCreatePreference = async () => {
    const preference = await paymentsServices.createPreference(user.cartId, user._id, address, token)

    setPreferenceId(preference.id)

    console.log(address)
  }

  useEffect(() => {
    fetchCreatePreference()
  }, [cart, address]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section className="cart-container">
        <div
          id="wallet_container"
          className="cart"
        >
          <div className="cart-left">
            <div className="cart-left__return">
              <button
                className="detail__goback"
                onClick={() => navigate(-1)}
              >
                <span className="material-symbols-rounded">keyboard_return</span>
                <span>Continue Shopping</span>
              </button>
              <CheckoutFigure className="cart-left-return__vector" />
            </div>

            <div className="cart-left__main">
              <div className="cart-left-main__heading">
                <h2>Shopping Cart</h2>
                <span>{productsQty} items</span>
              </div>

              <CartList
                cart={cart}
                dispatch={dispatch}
              />
            </div>
          </div>
          <div className="cart-right">
            <div className="cart-right__address">
              {address.address ? (
                <>
                  <div className="cart-right-item__top">
                    <h4>{address.address}</h4>
                    <button onClick={() => setModalOpen(true)}>Edit</button>
                  </div>
                  <div className="cart-right-address__bottom">
                    <span>{address.city}</span>
                    <span>{address.country}</span>
                  </div>
                </>
              ) : (
                <div className="cart-right-item__top">
                  <h4>Address</h4>
                  <button onClick={() => setModalOpen(true)}>Add</button>
                </div>
              )}
            </div>
            <div className="cart-right__discount">
              <h4>Do you have any discount code?</h4>
              <span>Only one discount code per order can be applied</span>
              <div>
                <input
                  type="text"
                  placeholder="Your code here"
                />
                <button>Apply</button>
              </div>
            </div>
            <div className="cart-right__summary">
              <div className="cart-right-summary__item">
                <span>Subtotal ({productsQty} items)</span>
                <span>US$ {getSubtotal().toFixed(0)}</span>
              </div>
              <div className="cart-right-summary__item">
                <span>Shipping costs</span>
                <span>FREE!</span>
              </div>
              <div className="cart-right-summary__item">
                <span>Discount</span>
                <span>-</span>
              </div>
            </div>
            <div className="cart-right__total">
              <div>
                <span>Total (Incl. VAT)</span>
                <h3>US$ {getTotal().toFixed(2)}</h3>
              </div>
              {productsQty === 0 ? (
                <Link to="/">
                  <Button
                    text="Look Sneakers"
                    style={{ padding: '1rem 3rem' }}
                  />
                </Link>
              ) : (
                preferenceId && <Wallet initialization={{ preferenceId }} />
              )}
            </div>
          </div>
        </div>
      </section>

      <BillingModal
        open={modalOpen}
        setOpen={setModalOpen}
        address={address}
        setAddress={setAddress}
      />
    </>
  )
}

export default Cart
