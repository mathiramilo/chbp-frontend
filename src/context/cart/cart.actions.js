import { cartTypes } from './cart.types'
import { cartServices } from '../../services'

const { SET_CART, ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT } = cartTypes

export const setCart = async (cartId, token) => {
  const cart = await cartServices.getProducts(cartId, token)
  return {
    type: SET_CART,
    payload: cart
  }
}

export const addProduct = (product, size) => {
  return {
    type: ADD_PRODUCT,
    payload: { product, size }
  }
}

export const removeProduct = (prodId, size) => {
  return {
    type: REMOVE_PRODUCT,
    payload: { prodId, size }
  }
}

export const increaseProduct = (prodId, size) => {
  return {
    type: INCREASE_PRODUCT,
    payload: { prodId, size }
  }
}

export const decreaseProduct = (prodId, size) => {
  return {
    type: DECREASE_PRODUCT,
    payload: { prodId, size }
  }
}
