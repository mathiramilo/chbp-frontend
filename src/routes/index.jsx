import { Routes, Route, Navigate } from 'react-router-dom'

import { HomeScreen, RegisterScreen, LoginScreen, CartScreen, DetailScreen } from '../screens'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:category?" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/detail/:id" element={<DetailScreen />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
