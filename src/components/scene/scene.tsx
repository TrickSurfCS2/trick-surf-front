import { useRef } from 'react'

import { Center, Environment, CameraControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls, button, buttonGroup } from 'leva'
import * as THREE from 'three'

import { Ground } from './scene-segment/ground'
import { Model } from './scene-segment/model'
import { Shadows } from './scene-segment/shadows'

const url = '/models/RobotExpressive.glb'
const hdr = '/hdr/sky.hdr'

const { DEG2RAD } = THREE.MathUtils

// Scene component
//* ------------------------------------------------------------------------------------------ *//
const Scene = () => {
  const cameraControlsRef = useRef<CameraControls | null>(null)

  const { camera } = useThree()

  const { minDistance, enabled, verticalDragToForward, dollyToCursor, infinityDolly } = useControls(
    {
      thetaGrp: buttonGroup({
        label: 'rotate theta',
        opts: {
          '+45º': () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
          '-90º': () => cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
          '+360º': () => cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true)
        }
      }),
      phiGrp: buttonGroup({
        label: 'rotate phi',
        opts: {
          '+20º': () => cameraControlsRef.current?.rotate(0, 20 * DEG2RAD, true),
          '-40º': () => cameraControlsRef.current?.rotate(0, -40 * DEG2RAD, true)
        }
      }),
      truckGrp: buttonGroup({
        label: 'truck',
        opts: {
          '(1,0)': () => cameraControlsRef.current?.truck(1, 0, true),
          '(0,1)': () => cameraControlsRef.current?.truck(0, 1, true),
          '(-1,-1)': () => cameraControlsRef.current?.truck(-1, -1, true)
        }
      }),
      dollyGrp: buttonGroup({
        label: 'dolly',
        opts: {
          1: () => cameraControlsRef.current?.dolly(1, true),
          '-1': () => cameraControlsRef.current?.dolly(-1, true)
        }
      }),
      zoomGrp: buttonGroup({
        label: 'zoom',
        opts: {
          '/2': () => cameraControlsRef.current?.zoom(camera.zoom / 2, true),
          '/-2': () => cameraControlsRef.current?.zoom(-camera.zoom / 2, true)
        }
      }),
      minDistance: { value: 0 },
      saveState: button(() => cameraControlsRef.current?.saveState()),
      reset: button(() => cameraControlsRef.current?.reset(true)),
      enabled: { value: true, label: 'controls on' },
      verticalDragToForward: { value: false, label: 'vert. drag to move forward' },
      dollyToCursor: { value: false, label: 'dolly to cursor' },
      infinityDolly: { value: false, label: 'infinity dolly' }
    }
  )

  return (
    <>
      <group position-y={-0.5}>
        <Environment files={hdr} />

        <Center>
          <Model url={url} />
        </Center>

        <Ground />
        <Shadows />

        <CameraControls
          ref={cameraControlsRef}
          minDistance={minDistance}
          enabled={enabled}
          verticalDragToForward={verticalDragToForward}
          dollyToCursor={dollyToCursor}
          infinityDolly={infinityDolly}
        />
      </group>
    </>
  )
}

export default Scene
