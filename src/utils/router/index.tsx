import { Route, Routes } from 'react-router-dom'

import TricksLayout from '#/components/layouts/tricks/tricks.layout'
import Records from '#/pages/[map]/records'
import Tricks from '#/pages/[map]/tricks'
import Triggers from '#/pages/[map]/triggers'
import FAQ from '#/pages/faq'
import Home from '#/pages/home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":map">
        <Route
          path="tricks"
          element={(
            <TricksLayout>
              <Tricks />
            </TricksLayout>
          )}
        />
        <Route
          path="triggers"
          element={(
            <TricksLayout>
              <Triggers />
            </TricksLayout>
          )}
        />
        <Route
          path="records"
          element={(
            <TricksLayout>
              <Records />
            </TricksLayout>
          )}
        />
      </Route>
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  )
}
