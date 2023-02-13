import React from 'react'
import { Link } from 'react-router-dom'

import NikeLogo from '../../assets/nike-logo.png'
import AdidasLogo from '../../assets/adidas-logo.png'
import PumaLogo from '../../assets/puma-logo.png'

import './styles.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__top" style={{ backgroundColor: product.color }}>
        {product.category === 'nike' ? (
          <img src={NikeLogo} className="product-card__brand" alt={product.title} />
        ) : product.category === 'adidas' ? (
          <img src={AdidasLogo} className="product-card__brand" alt={product.title} />
        ) : (
          <img src={PumaLogo} className="product-card__brand" alt={product.title} />
        )}
        <img src={product.imgUrl} alt={product.title} className="product-card__img" />
      </div>
      <div className="product-card__bottom">
        <div className="product-card__heading">
          <span>{product.category}</span>
          <h2>{product.title}</h2>
        </div>

        <p className="product-card__desc">{product.description}</p>

        <Link to={`/detail/${product._id}`}>
          <button className="product-card__btn" style={{ backgroundColor: product.color }}>
            <span>USD {product.price}</span>
            <div></div>
            <span>View More</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
