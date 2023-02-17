import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { productsServices } from '../../services'
import { useCart } from '../../hooks'
import { addProduct } from '../../context/cart/cart.actions'
import { Footer, Navbar, DetailSkeleton } from '../../components'

import './styles.css'

const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12]

const Detail = () => {
  const { id } = useParams()

  const { dispatch } = useCart()

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState([])

  const [selectedSize, setSelectedSize] = useState(null)

  const navigate = useNavigate()

  const handleAddToCart = () => {
    dispatch(addProduct(product, selectedSize))
    navigate('/')
  }

  useEffect(() => {
    setLoading(true)

    const fetchProduct = async () => {
      const product = await productsServices.getById(id)

      if (!product) return navigate('/')

      setProduct(product)
      setLoading(false)
    }

    fetchProduct()
  }, [id])

  return (
    <section className="detail">
      <Navbar />
      <div className="detail-container">
        {loading ? (
          <DetailSkeleton />
        ) : (
          <>
            <button className="detail__goback" onClick={() => navigate(-1)}>
              <span className="material-symbols-rounded">keyboard_return</span>
              <span>Go back</span>
            </button>

            <div className="detail__main">
              <div className="detail-main__img" data-brand={product.category}>
                <div className="detail-main-img__overlay" style={{ background: product.color }}></div>
                <img src={product.imgUrl} alt={product.title} />
              </div>

              <div className="detail-main__data">
                <div className="detail-main-data__heading">
                  <span>{product.category}</span>
                  <h2>{product.title}</h2>
                </div>

                <span className="detail-main-data__price">USD {product.price}</span>

                <p className="detail-main-data__desc">{product.description}</p>

                <div className="detail-main-data__sizes">
                  <span>Size (US)</span>
                  <div className="detail-main-data-sizes__options">
                    {sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(size)}
                        style={selectedSize === size ? { backgroundColor: '#555555', color: '#ffffff' } : {}}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="detail-main-data__btn" disabled={!selectedSize} onClick={handleAddToCart}>
                  {selectedSize ? 'Add to cart' : 'Select a size'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </section>
  )
}

export default Detail
