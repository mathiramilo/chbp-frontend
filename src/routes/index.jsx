import { Routes, Route, Navigate } from 'react-router-dom'

import { useAuth } from '../hooks'
import {
  HomeScreen,
  RegisterScreen,
  LoginScreen,
  CartScreen,
  DetailScreen,
  OrdersScreen,
  OrderDetailScreen,
  SuccessScreen,
  FailureScreen,
  PendingScreen
} from '../screens'

const AppRoutes = () => {
  const { user } = useAuth()

  return (
    <Routes>
      <Route
        path="/:category?"
        element={<HomeScreen />}
      />
      <Route
        path="/register"
        element={!user ? <RegisterScreen /> : <Navigate to={-1} />}
      />
      <Route
        path="/login"
        element={!user ? <LoginScreen /> : <Navigate to={-1} />}
      />
      <Route
        path="/cart"
        element={user ? <CartScreen /> : <Navigate to="/login" />}
      />
      <Route
        path="/detail/:id"
        element={<DetailScreen />}
      />
      <Route
        path="/orders"
        element={user ? <OrdersScreen /> : <Navigate to="/login" />}
      />
      <Route
        path="/orders/:id"
        element={user ? <OrderDetailScreen /> : <Navigate to="/login" />}
      />
      <Route
        path="/success"
        element={user ? <SuccessScreen /> : <Navigate to="/login" />}
      />
      <Route
        path="/failure"
        element={user ? <FailureScreen /> : <Navigate to="/login" />}
      />
      <Route
        path="/pending"
        element={user ? <PendingScreen /> : <Navigate to="/login" />}
      />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  )
}

export default AppRoutes
