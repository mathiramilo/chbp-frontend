import { createContext, useEffect, useMemo, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = JSON.parse(localStorage.getItem('token'))

    if (user) {
      setUser(user)
    }
    if (token) {
      setToken(token)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', JSON.stringify(token))
  }, [user, token])

  return (
    <AuthContext.Provider value={useMemo(() => ({ user, setUser, token, setToken }), [user, setUser, token, setToken])}>
      {children}
    </AuthContext.Provider>
  )
}
