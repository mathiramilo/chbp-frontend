import { cartTypes } from './cart.types'

const { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT } = cartTypes

export const addProduct = (product, size) => {
  return {
    type: ADD_PRODUCT,
    payload: { product, size }
  }
}

export const removeProduct = (id, size) => {
  return {
    type: REMOVE_PRODUCT,
    payload: { id, size }
  }
}

export const increaseProduct = (id, size) => {
  return {
    type: INCREASE_PRODUCT,
    payload: { id, size }
  }
}

export const decreaseProduct = (id, size) => {
  return {
    type: DECREASE_PRODUCT,
    payload: { id, size }
  }
}
