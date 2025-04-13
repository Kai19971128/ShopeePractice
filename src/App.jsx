import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'
import ProductCollectionPage from './pages/ProductCollectionPage'
import ProductPage from './pages/ProductPage'
import PageTitle from './components/layout/PageTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Navigate to="/mall" />} />
        <Route path="/mall" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
        <Route path="/:product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App