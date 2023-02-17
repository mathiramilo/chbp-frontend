import { cartTypes } from './cart.types'

const { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT } = cartTypes

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
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
    case REMOVE_PRODUCT:
      return state.filter(item => item.product._id !== action.payload.id || item.size !== action.payload.size)
    case DECREASE_PRODUCT:
      return state.map(item => {
        if (item.product._id === action.payload.id && item.size === action.payload.size && item.qty > 1) {
          return { ...item, qty: item.qty - 1 }
        }
        return item
      })
    case INCREASE_PRODUCT:
      return state.map(item => {
        if (item.product._id === action.payload.id && item.size === action.payload.size) {
          return { ...item, qty: item.qty + 1 }
        }
        return item
      })
    default:
      return state
  }
}

export default cartReducer
