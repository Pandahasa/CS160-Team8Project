import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Frontpage from './pages/Frontpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frontpage />
  </StrictMode>,
)