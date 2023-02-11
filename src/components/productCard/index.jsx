import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div key={product._id} className="product-card">
      <div className="product-card__top">
        <span className="product-card__brand">{product.category}</span>
        <img src={product.imgUrl} alt={product.title} className="product-card__img" />
      </div>
      <div className="product-card__bottom">
        <div className="product-card__heading">
          <span>{product.category}</span>
          <h2>{product.title}</h2>
        </div>

        <p className="product-card__desc">{product.description}</p>

        <Link to={`detail/${product._id}`}>
          <button className="product-card__btn">
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
