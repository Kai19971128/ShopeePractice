import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import App from './App.jsx'
import './components/common/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
