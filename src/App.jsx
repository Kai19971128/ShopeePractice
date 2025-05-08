import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import '@ant-design/v5-patch-for-react-19'; // Ant Design v5 針對 React 19 的補丁
import HomePage from './pages/HomePage.jsx' // 你的首頁元件
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'
import ProductCollectionPage from './pages/ProductCollectionPage'
import ProductPage from './pages/ProductPage'
import PageTitle from './components/layout/PageTitle' // 頁面標題元件
import { AuthProvider}  from './components/auth/AuthContext' // 身份驗證上下文
import JumpToTop from './components/common/JumpToTop.jsx' // 跳轉至頂部元件
import ScrollToTop from 'react-scroll-to-top' // 另一個滾動至頂部元件
import LoginPage from './pages/LoginPage.jsx' // 登入頁面




function App() {
  
  return (
    <AuthProvider>
      {/* BrowserRouter 設定 basename 以對應 GitHub Pages 的子目錄 */}
      <BrowserRouter basename="/ShopeePractice">
        <JumpToTop /> {/* 確保路由變化時滾動到頁面頂部 */}
        <ScrollToTop smooth  /> {/* 一個向上滾動的按鈕 */}
        <PageTitle /> {/* 動態設定頁面標題的元件 */}
        <Routes>
          {/* 靜態路徑應優先定義 */}
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