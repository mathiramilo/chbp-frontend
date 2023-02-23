import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { cartServices } from '../../services'
import { useAuth, useCart } from '../../hooks'
import { setCart } from '../../context/cart/cart.actions'
import { BillingModal, Button, CartList, CheckoutToast } from '../../components'
import { ReactComponent as CheckoutFigure } from '../../assets/checkout-figure.svg'
import { ReactComponent as MasterIcon } from '../../assets/master-icon.svg'
import { ReactComponent as VisaIcon } from '../../assets/visa-icon.svg'

import './styles.css'

const Cart = () => {
  const { cart, dispatch, productsQty, getSubtotal, getTotal } = useCart()
  const { user, token } = useAuth()

  const [address, setAddress] = useState({
    fullName: '',
    address: '',
    city: '',
    country: ''
  })
  const [card, setCard] = useState({
    number: '',
    fullName: '',
    expDate: '',
    cvv: ''
  })

  const [loading, setLoading] = useState(false)

  const showLast4Digits = number => {
    const last4Digits = number.slice(-4)
    return `•••• •••• •••• ${last4Digits}`
  }

  const [modalOpen, setModalOpen] = useState(false)

  const navigate = useNavigate()

  const handleCheckout = async () => {
    const buyerPayload = {
      name: user.fullName,
      email: user.email,
      phone: user.phone
    }

    const addressPayload = {
      address: address.address,
      city: address.city,
      country: address.country
    }

    const paymentPayload = {
      cardNumber: +card.number,
      cardHolder: card.fullName,
      expirationDate: card.expDate,
      cvv: +card.cvv
    }

    setLoading(true)

    try {
      const { order } = await cartServices.checkout(user.cartId, buyerPayload, addressPayload, paymentPayload, token)
      const { _id, totalCost } = order
      toast.custom(t => <CheckoutToast orderId={_id} total={totalCost} />)
      dispatch(await setCart(user.cartId, token))
      navigate('/')
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  return (
    <>
      <section className="cart-container">
        <div className="cart">
          <div className="cart-left">
            <div className="cart-left__return">
              <button className="detail__goback" onClick={() => navigate(-1)}>
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

              <CartList cart={cart} dispatch={dispatch} />
            </div>
          </div>
          <div className="cart-right">
            <div className="cart-right__address">
              {address.address ? (
                <>
                  <div className="cart-right-item__top">
                    <h4>{address.fullName}</h4>
                    <button onClick={() => setModalOpen(true)}>Edit</button>
                  </div>
                  <div className="cart-right-address__bottom">
                    <span>{address.address}</span>
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
            <div className="cart-right__payment">
              {address.address ? (
                <>
                  <div className="cart-right-item__top">
                    <h4>Payment Method</h4>
                    <button onClick={() => setModalOpen(true)}>Edit</button>
                  </div>
                  <div className="cart-right-payment__bottom">
                    <span>Credit/Debit Card</span>
                    <div>
                      <span>{showLast4Digits(card.number)}</span>
                      {['0', '1', '2', '3', '4'].includes(card.number[0]) ? (
                        <VisaIcon className="cart-right-payment__icon" />
                      ) : (
                        <MasterIcon className="cart-right-payment__icon" />
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="cart-right-item__top">
                  <h4>Payment Method</h4>
                  <button onClick={() => setModalOpen(true)}>Add</button>
                </div>
              )}
            </div>
            <div className="cart-right__discount">
              <h4>Do you have any discount code?</h4>
              <span>Only one discount code per order can be applied</span>
              <div>
                <input type="text" placeholder="Your code here" />
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
                  <Button text="Look Sneakers" style={{ padding: '1rem 3rem' }} />
                </Link>
              ) : (
                <Button
                  disabled={!address.address || !card.number || loading}
                  text={loading ? 'Wait a bit...' : 'Checkout'}
                  variant={address.address ? 'principal' : 'disabled'}
                  style={{ padding: '1rem 3rem' }}
                  onClick={handleCheckout}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <BillingModal
        open={modalOpen}
        setOpen={setModalOpen}
        address={address}
        card={card}
        setAddress={setAddress}
        setCard={setCard}
      />
    </>
  )
}

export default Cart
