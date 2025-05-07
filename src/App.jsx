import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom"
import '@ant-design/v5-patch-for-react-19';
import HomePage from './pages/HomePage.jsx'
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'
import ProductCollectionPage from './pages/ProductCollectionPage'
import ProductPage from './pages/ProductPage'
import PageTitle from './components/layout/PageTitle'
import { AuthProvider}  from './components/auth/AuthContext'
import JumpToTop from './components/common/JumpToTop.jsx'
import ScrollToTop from 'react-scroll-to-top'
import LoginPage from './pages/LoginPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <AuthProvider>
    <BrowserRouter>
    <JumpToTop />
    <ScrollToTop />
      <PageTitle />
      <Routes>
        <Route path="/" element={<Navigate to="/mall" />} />
        <Route path="/mall" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
        <Route path="/:product" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App