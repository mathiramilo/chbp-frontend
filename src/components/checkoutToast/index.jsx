import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import './styles.css'

const CheckoutToast = ({ t, orderId, total }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    toast.dismiss(t.id)
    navigate(`/orders/${orderId}`)
  }

  return (
    <div className="checkout-toast" onClick={handleClick}>
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
