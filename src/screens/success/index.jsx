import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { setCart } from '../../context/cart/cart.actions'
import { cartServices } from '../../services'

import { useAuth, useCart } from '../../hooks'
import { Footer, Navbar, CheckoutToast, Button } from '../../components'

import './styles.css'

const SEARCH_PARAMS = {
  cartId: 'cartId',

  paymentProvider: 'paymentProvider',
  paymentId: 'payment_id',
  paymentType: 'payment_type',

  buyerId: 'buyerId',

  address: 'address',
  city: 'city',
  country: 'country'
}

const Success = () => {
  const [searchParams, setSearchParams] = useSearchParams() // eslint-disable-line no-unused-vars
  const navigate = useNavigate()

  const { dispatch, productsQty, getTotal } = useCart()
  const { user, token } = useAuth()

  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    const buyerId = searchParams.get(SEARCH_PARAMS.buyerId)

    const addressPayload = {
      address: searchParams.get(SEARCH_PARAMS.address),
      city: searchParams.get(SEARCH_PARAMS.city),
      country: searchParams.get(SEARCH_PARAMS.country)
    }

    const paymentPayload = {
      provider: searchParams.get(SEARCH_PARAMS.paymentProvider),
      paymentId: searchParams.get(SEARCH_PARAMS.paymentId),
      paymentType: searchParams.get(SEARCH_PARAMS.paymentType)
    }

    setLoading(true)

    try {
      const { order } = await cartServices.checkout(user.cartId, buyerId, addressPayload, paymentPayload, token)
      const { _id, totalCost } = order
      toast.custom((t) => (
        <CheckoutToast
          t={t}
          orderId={_id}
          total={totalCost}
        />
      ))
      dispatch(await setCart(user.cartId, token))
      navigate('/')
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleCheckout()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section>
      <Navbar />
      <div className="success-container">
        <h1>Order Received!</h1>
        <span>{productsQty} items</span>
        <span>Total: ${getTotal()}</span>
        <span>Shipping to:</span>
        <span>{searchParams.get(SEARCH_PARAMS.address)}</span>
        <span>{searchParams.get(SEARCH_PARAMS.city)}</span>
        <span>{searchParams.get(SEARCH_PARAMS.country)}</span>
        <span>Thank you for your purchase!</span>
        <span>Order received successfully</span>
        <span>Order ID: {searchParams.get(SEARCH_PARAMS.paymentId)}</span>
        <span>Payment method: {searchParams.get(SEARCH_PARAMS.paymentType)}</span>
        <Button
          text={loading ? 'Wait a second please...' : 'Go to home'}
          disabled={loading}
        />
      </div>
      <Footer />
    </section>
  )
}

export default Success
