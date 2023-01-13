import { Routes, Route, Navigate } from 'react-router-dom'
import HomeScreen from '../screens/Home'
import RegisterScreen from '../screens/Register'
import LoginScreen from '../screens/Login'
import CategoryScreen from '../screens/Category'
import CartScreen from '../screens/Cart'

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
