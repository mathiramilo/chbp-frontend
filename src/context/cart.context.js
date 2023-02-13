import { createContext, useCallback, useMemo, useReducer } from 'react'

export const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const item = state.find(
        item => item.product.id === action.payload.product.id && item.size === action.payload.size
      )

      if (item) {
        return state.map(item => {
          if (item.product.id === action.payload.product.id && item.size === action.payload.size) {
            return { ...item, qty: item.qty + 1 }
          }
          return item
        })
      }

      return [...state, { product: action.payload.product, size: action.payload.size, qty: 1 }]
    case 'REMOVE_PRODUCT':
      return state.filter(item => item.product.id !== action.payload.id || item.size !== action.payload.size)
    case 'DECREASE_PRODUCT':
      return state.map(item => {
        if (item.id === action.payload.id && item.size === action.payload.size && item.qty > 1) {
          return { ...item, qty: item.qty - 1 }
        }
        return item
      })
    case 'INCREASE_PRODUCT':
      return state.map(item => {
        if (item.id === action.payload.id && item.size === action.payload.size) {
          return { ...item, qty: item.qty + 1 }
        }
        return item
      })
    default:
      return state
  }
}

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
