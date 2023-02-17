import AppRoutes from './routes'
import { CartContextProvider, AuthContextProvider } from './context'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <AppRoutes />
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App
