import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,

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
  function RootPathTest() {
    useEffect(() => {
      console.log("RootPathTest component is rendering for path='/'");
    }, []);
    return (
      <div style={{ padding: "20px", textAlign: "center", backgroundColor: "lightyellow" }}>
        <h1>這是首頁路徑測試</h1>
        <p>如果看到這個頁面，表示 path="/" 路由匹配成功。</p>
        <p>接下來請檢查 HomePage.jsx 是否有重新導向或直接渲染了產品頁面。</p>
      </div>
    );
  }

  return (
    <AuthProvider>
      <BrowserRouter basename="/ShopeePractice">
        <JumpToTop />
        <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />
        <PageTitle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mall" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
          <Route path="/:product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App