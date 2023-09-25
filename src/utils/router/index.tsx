import { Routes, Route } from 'react-router-dom'

import TricksLayout from '#/components/layouts/tricks/tricks.layout'
import FAQ from '#/pages/faq'
import Home from '#/pages/home'
import Tricks from '#/pages/tricks'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path=":map">
      <Route
        path="tricks"
        element={
          <TricksLayout>
            <Tricks />
          </TricksLayout>
        }
      />
      <Route
        path="triggers"
        element={
          <TricksLayout>
            <Tricks />
          </TricksLayout>
        }
      />
      <Route
        path="record-beat"
        element={
          <TricksLayout>
            <Tricks />
          </TricksLayout>
        }
      />
    </Route>
    <Route path="/faq" element={<FAQ />} />
  </Routes>
)
