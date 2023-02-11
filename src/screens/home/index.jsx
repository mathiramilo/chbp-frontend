import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { productsServices } from '../../services'
import { validCategory } from '../../utils'
import { Navbar, ProductsContainer, ProductsSkeleton } from '../../components'

import './styles.css'

const Home = () => {
  const { category } = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)

    if (!validCategory(category)) return navigate('/')

    const fetchProducts = async () => {
      const products = await productsServices.getAll(category)

      setProducts(products)
      setLoading(false)
    }

    fetchProducts()
  }, [category])

  return (
    <section className="home">
      <Navbar />
      <div className="home-container">
        <div className={category ? `home-banner ${category}` : 'home-banner'}>
          <div className="home-banner__overlay">
            <h1 className="home-banner__title">{category ? category.toUpperCase() : 'ALL SHOES'}</h1>
          </div>
        </div>

        {loading ? <ProductsSkeleton /> : <ProductsContainer products={products} />}
      </div>
    </section>
  )
}

export default Home
