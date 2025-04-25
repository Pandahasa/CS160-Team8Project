import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Frontpage from './pages/Frontpage.jsx'
import WhereToRecycle from './pages/WhereToRecycle.jsx'
import WhatToRecycle from './pages/whatToRecycle.jsx'
import HowToRecycle from './pages/HowToRecycle.jsx'
import CarbonFootprint from './pages/CarbonFootprint.jsx'
import PaperCardboard from './pages/PaperCardboard.jsx'
import PlasticBottles from './pages/PlasticBottles.jsx'
import AluminumCans from './pages/AluminumCans.jsx'
import PlasticBags from './pages/PlasticBags.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Frontpage />} />
          <Route path="frontpage" element={<Frontpage />} />
          <Route path="whatToRecycle" element={<WhatToRecycle />} />
          <Route path="whereToRecycle" element={<WhereToRecycle />} />
          <Route path="howToRecycle" element={<HowToRecycle />} />
          <Route path="carbonFootprint" element={<CarbonFootprint />} />
          <Route path="PaperCardboard" element={<PaperCardboard />} />
          <Route path="PlasticBottles" element={<PlasticBottles />} />
          <Route path="AluminumCans" element={<AluminumCans />} />
          <Route path="PlasticBags" element={<PlasticBags />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)