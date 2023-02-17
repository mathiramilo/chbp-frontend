import { createContext, useCallback, useMemo, useReducer } from 'react'
import cartReducer from './cart.reducer'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

  const productsQty = useMemo(() => cart.reduce((total, item) => total + item.qty, 0), [cart])

  const getSubtotal = useCallback(() => cart.reduce((total, item) => total + item.product.price * item.qty, 0), [cart])

  const getTotal = useCallback(() => getSubtotal() * 1.15, [getSubtotal])

  return (
    <CartContext.Provider
      value={useMemo(
        () => ({ cart, dispatch, productsQty, getSubtotal, getTotal }),
        [cart, dispatch, productsQty, getSubtotal, getTotal]
      )}
    >
      {children}
    </CartContext.Provider>
  )
}
