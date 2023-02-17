import { createContext, useEffect, useMemo, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userId = localStorage.getItem('userId')

    if (userId) {
      setUser(userId)
    }
  }, [])

  return (
    <AuthContext.Provider value={useMemo(() => ({ user, setUser }), [user, setUser])}>{children}</AuthContext.Provider>
  )
}
