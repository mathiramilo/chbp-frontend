import { Routes, Route, Navigate } from 'react-router-dom'
import {
  HomeScreen,
  RegisterScreen,
  LoginScreen,
  CartScreen,
  CategoryScreen
} from '../screens'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/products/:category" element={<CategoryScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
