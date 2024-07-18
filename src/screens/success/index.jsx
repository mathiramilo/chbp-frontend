import React from 'react'
import { useSearchParams } from 'react-router-dom'

import { Footer, Navbar } from '../../components'

import './styles.css'

const SEARCH_PARAMS = {
  cartId: 'cartId'
}

const Success = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get(SEARCH_PARAMS.cartId))

  return (
    <section>
      <Navbar />
      <div className="success-container">
        <h1>Order Received!</h1>
        <span>{searchParams.get(SEARCH_PARAMS.cartId)}</span>
      </div>
      <Footer />
    </section>
  )
}

export default Success
