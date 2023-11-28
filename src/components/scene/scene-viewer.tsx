/* eslint-disable ts/no-use-before-define */
import type { FC } from 'react'
import { Suspense, useRef } from 'react'

import { Html, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import styled from '@emotion/styled'

import Scene from './scene'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      {progress}
      % loaded
    </Html>
  )
}

// Scene viewer component
//* ------------------------------------------------------------------------------------------ *//
const SceneViewer: FC = () => {
  const canvasContainerRef = useRef<HTMLElement | null>(null)

  return (
    <SceneViewerStyled
      ref={(el) => {
        canvasContainerRef.current = el
      }}
    >
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 60, near: 0.025 }}>
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </SceneViewerStyled>
  )
}

export default SceneViewer

// Style
//* ------------------------------------------------------------------------------------------ *//
const SceneViewerStyled = styled.div`
  display: grid;
  grid-template-columns: auto 8%;
  height: 50vh;

  & > div {
    grid-column: 1/-1;
    grid-row: 1/-1;
  }

  & > .mantine-ActionIcon-root {
    grid-column: 2/-1;
    grid-row: 1/-1;
    margin-top: 1.05em;
    margin-right: 1.05em;
    justify-self: end;
  }

  @media (min-width: 768px) {
    width: 80vw;
    height: 100vh;
  }
`
