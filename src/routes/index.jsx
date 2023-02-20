import { Routes, Route, Navigate } from 'react-router-dom'

import { useAuth } from '../hooks'
import { HomeScreen, RegisterScreen, LoginScreen, CartScreen, DetailScreen } from '../screens'

const AppRoutes = () => {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/:category?" element={user ? <HomeScreen /> : <Navigate to="/login" />} />
      <Route path="/register" element={!user ? <RegisterScreen /> : <Navigate to={-1} />} />
      <Route path="/login" element={!user ? <LoginScreen /> : <Navigate to={-1} />} />
      <Route path="/cart" element={user ? <CartScreen /> : <Navigate to="/login" />} />
      <Route path="/detail/:id" element={user ? <DetailScreen /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
