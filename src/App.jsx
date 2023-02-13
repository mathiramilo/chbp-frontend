import AppRoutes from './routes'
import { CartContextProvider } from './context'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <AppRoutes />
      </CartContextProvider>
    </div>
  )
}

export default App
