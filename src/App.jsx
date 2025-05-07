import { useState, useEffect } from 'react' // 引入 useEffect 用於 console.log
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate // 如果不再需要預設導向到 /mall 以外的頁面，可以考慮移除
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

// 建立一個簡單的診斷元件
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

function App() {
  // useState hook，目前未使用，可以根據需要保留或移除
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      {/* BrowserRouter 設定 basename 以對應 GitHub Pages 的子目錄 */}
      <BrowserRouter basename="/ShopeePractice">
        <JumpToTop /> {/* 確保路由變化時滾動到頁面頂部 */}
        <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} /> {/* 一個向上滾動的按鈕 */}
        <PageTitle /> {/* 動態設定頁面標題的元件 */}
        <Routes>
          {/* 靜態路徑應優先定義 */}
          {/* 當訪問 /ShopeePractice/ 時，直接渲染 RootPathTest 進行診斷 */}
          <Route path="/" element={<RootPathTest />} /> {/* <--- 診斷點 */}
          
          {/* 為了相容性或其他需求，仍然讓 /ShopeePractice/mall 也能訪問 HomePage */}
          <Route path="/mall" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage/>} />
          
          {/* 動態路徑，建議放在靜態路徑之後 */}
          <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
          
          {/* 注意: 這個路由 :product 非常通用。
            它應該放在所有其他更具體的路徑之後，以避免意外攔截其他路由。
            例如，如果 URL 是 /ShopeePractice/about，且沒有定義 /about 路由，它將匹配此處。
          */}
          

          {/* 如果一開始的 <Route path="/" element={<Navigate to="/mall" />} /> 是為了避免根路徑空白，
            現在直接渲染 HomePage 就不再需要那個 Navigate 了。
          */}
          {/* 如果有其他未匹配的路由，可以考慮添加一個 404 頁面 */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App