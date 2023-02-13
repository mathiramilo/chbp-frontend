import React from 'react'

import './styles.css'

const ProductsSkeleton = () => {
  return (
    <div className="products-skeleton-container">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  )
}

const ProductCardSkeleton = () => {
  return (
    <div className="product-card-skeleton">
      <div className="product-card-skeleton__top"></div>

      <div className="product-card-skeleton__bottom">
        <div className="product-card-skeleton__heading">
          <span></span>
          <div></div>
        </div>

        <div className="product-card-skeleton__btn"></div>
      </div>
    </div>
  )
}

export default ProductsSkeleton
