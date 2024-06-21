import { Route, Routes } from 'react-router-dom'

import FAQ from '../../pages/faq/faq'
import TricksLayout from '../../components/layouts/tricks/tricks.layout'
import Records from '#/pages/[map]/records/records'
import Tricks from '#/pages/[map]/tricks/tricks'
import Triggers from '#/pages/[map]/triggers/triggers'
import Home from '#/pages/home/home'

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
