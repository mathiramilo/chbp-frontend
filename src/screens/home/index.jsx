import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks'
import { productsServices } from '../../services'
import { validCategory, shuffle } from '../../utils'
import { Footer, Navbar, ProductsContainer, ProductsSkeleton } from '../../components'

import './styles.css'

const Home = () => {
  const { category } = useParams()

  const { token } = useAuth()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0)

    if (!validCategory(category)) return navigate('/')

    const fetchProducts = async () => {
      const products = await productsServices.getAll(category, token)

      const shuffledProducts = shuffle(products)

      setProducts(shuffledProducts)
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
      <Footer />
    </section>
  )
}

export default Home
