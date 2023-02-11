import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { productsServices } from '../../services'
import { Navbar } from '../../components'

const Detail = () => {
  const { id } = useParams()

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)

    const fetchProducts = async () => {
      const product = await productsServices.getById(id)

      if (!product) return navigate('/')

      setProduct(product)
      console.log(product)
      setLoading(false)
    }

    fetchProducts()
  }, [id])

  return (
    <div>
      <Navbar />
      <h1>Detail</h1>
      <pre>{product}</pre>
    </div>
  )
}

export default Detail
