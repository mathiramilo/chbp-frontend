import { Toaster } from 'react-hot-toast'

import AppRoutes from './routes'
import { CartContextProvider, AuthContextProvider } from './context'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <AppRoutes />
          <Toaster position="top-center" />
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App
