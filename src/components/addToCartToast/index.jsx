import React from 'react'
import { toast } from 'react-hot-toast'

import './styles.css'

const AddToCartToast = ({ t, product, size }) => {
  return (
    <div className="product-added-toast" onClick={() => toast.dismiss(t.id)}>
      <div className="product-added-toast__img" data-brand={product.category}>
        <div className="product-added-toast-img__overlay" style={{ backgroundColor: product.color }}></div>
        <img src={product.imgUrl} alt={product.title} />
      </div>
      <div className="product-added-toast__info">
        <div className="product-added-toast-info__item">
          <div className="product-added-toast-info-item__heading">
            <span>{product.category}</span>
            <h3>{product.title}</h3>
          </div>
          <div className="product-added-toast-info-item__size">
            <span>{size}</span>
          </div>
        </div>
        <div className="product-added-toast-info__item">
          <span>USD {product.price}</span>
          <div className="product-added-toast-info-item__msg">
            <span className="material-symbols-rounded">check_circle</span>
            <span>Added to cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCartToast
