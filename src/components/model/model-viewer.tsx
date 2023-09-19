// import type { FC } from 'react'
// import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
// import styled from '@emotion/styled'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import { Suspense, useRef } from 'react'
// import Model from './model'

// const ModelViewer: FC = () => {
//   const orbitControllerRef = useRef<OrbitControlsImpl>(null)
//   const canvasContainerRef = useRef<HTMLElement | null>(null)

//   return (
//     <CanvasContainer
//       ref={(el) => {
//         canvasContainerRef.current = el
//       }}>
//       <Canvas dpr={[1, 2]} shadows camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3] }}>
//         <Suspense fallback={null}>
//           <Model />
//         </Suspense>
//         {/* <pointLight position={[-10, -10, -10]} /> */}
//         {/* <hemisphereLight intensity={1} /> */}

//         <OrbitControls ref={orbitControllerRef} enablePan={false} />
//         {/* {settingsSnapshot.grid && (
//           <gridHelper
//             args={[15, 15, `white`, `gray`]}
//             position={[0, settingsSnapshot.gridPositionY, 0]}
//           />
//         )} */}
//         {/* {settingsSnapshot.axes && (
//           <axesHelper position={[0, settingsSnapshot.gridPositionY - 0.01, 0]} />
//         )} */}
//         {/* {settingsSnapshot.stats && <Stats showPanel={0} parent={canvasContainerRef} />} */}
//       </Canvas>
//     </CanvasContainer>
//   )
// }

// export default ModelViewer

// const CanvasContainer = styled.div`
//   display: grid;
//   grid-template-columns: auto 8%;
//   height: 50vh;
//   background-color: ${({ theme }) =>
//     (theme as MantineTheme).colorScheme === 'light'
//       ? '#fff'
//       : (theme as MantineTheme).colors.gray[9]};

//   & > div {
//     grid-column: 1/-1;
//     grid-row: 1/-1;
//   }

//   & > .mantine-ActionIcon-root {
//     grid-column: 2/-1;
//     grid-row: 1/-1;
//     margin-top: 1.05em;
//     margin-right: 1.05em;
//     justify-self: end;
//   }

//   @media (min-width: 768px) {
//     width: 80vw;
//     height: 100vh;
//   }
// `
