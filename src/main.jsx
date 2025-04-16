import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Frontpage from './pages/Frontpage.jsx'
import WhereToRecycle from './pages/WhereToRecycle.jsx'
import WhatToRecycle from './pages/WhatToRecycle.jsx'
import HowToRecycle from './pages/HowToRecycle.jsx'
import CarbonFootprint from './pages/CarbonFootprint.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="whereToRecycle" element={<WhereToRecycle />} />
        <Route path="whatToRecycle" element={<WhatToRecycle />} />
        <Route path="howToRecycle" element={<HowToRecycle />} />
        <Route path="carbonFootprint" element={<CarbonFootprint />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)