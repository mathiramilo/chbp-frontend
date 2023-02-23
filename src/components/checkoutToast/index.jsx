import React from 'react'

import './styles.css'

const CheckoutToast = ({ orderId, total }) => {
  return (
    <div className="checkout-toast">
      <div className="checkout-toast__top">
        <span className="material-symbols-rounded">check_circle</span>
        <p>Your order is being processed, thank you very much for trusting us!</p>
      </div>
      <div className="checkout-toast__bottom">
        <span>ID: {orderId}</span>
        <span>Total: USD {total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CheckoutToast
