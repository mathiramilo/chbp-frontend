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
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/products/:category" element={<Navigate to="/login" />} />
      <Route path="/cart" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default AppRoutes
