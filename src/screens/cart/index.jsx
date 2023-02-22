import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks'
import { Button, CartList } from '../../components'
import { ReactComponent as CheckoutFigure } from '../../assets/checkout-figure.svg'
import { ReactComponent as MasterIcon } from '../../assets/master-icon.svg'
import { ReactComponent as VisaIcon } from '../../assets/visa-icon.svg'

import './styles.css'

const card = {
  type: 'Credit Card',
  number: '5009 8994 8099 5057',
  show: '•••• •••• •••• 5057'
}

const Cart = () => {
  const { cart, dispatch, productsQty, getSubtotal, getTotal } = useCart()

  const navigate = useNavigate()

  return (
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
            <div className="cart-right-item__top">
              <h4>John Doe</h4>
              <button>Edit</button>
            </div>
            <div className="cart-right-address__bottom">
              <span>California St 9089</span>
              <span>California State</span>
              <span>United States</span>
            </div>
          </div>
          <div className="cart-right__payment">
            <div className="cart-right-item__top">
              <h4>Payment Method</h4>
              <button>Edit</button>
            </div>
            <div className="cart-right-payment__bottom">
              <span>{card.type}</span>
              <div>
                <span>{card.show}</span>
                {card.number.startsWith('4') ? (
                  <VisaIcon className="cart-right-payment__icon" />
                ) : (
                  <MasterIcon className="cart-right-payment__icon" />
                )}
              </div>
            </div>
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
              <Button text="Checkout" style={{ padding: '1rem 3rem' }} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
