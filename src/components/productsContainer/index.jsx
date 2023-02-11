import React from 'react'

import ProductCard from '../productCard'

import './styles.css'

const ProductsContainer = ({ products }) => {
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}

export default ProductsContainer
