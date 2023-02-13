import { useContext } from 'react'

import { CartContext } from '../context'

export const useCart = () => {
  const { cart, dispatch, productsQty, getSubtotal, getTotal } = useContext(CartContext)
  return { cart, dispatch, productsQty, getSubtotal, getTotal }
}
