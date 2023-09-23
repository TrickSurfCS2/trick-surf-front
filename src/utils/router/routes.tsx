import { Routes, Route } from 'react-router-dom'

import FAQ from '#/pages/faq'
import Home from '#/pages/home'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/faq" element={<FAQ />} />
  </Routes>
)
