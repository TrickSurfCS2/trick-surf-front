import { Routes, Route } from 'react-router-dom'

import FAQ from '#/pages/faq'
import Home from '#/pages/home'
import Tricks from '#/pages/tricks/[map]'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/tricks/:map" element={<Tricks />} />
  </Routes>
)
