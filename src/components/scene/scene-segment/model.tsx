import { Clone, useGLTF } from '@react-three/drei'

import type { GroupProps } from '@react-three/fiber'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    FootL_1: THREE.Mesh
    Torso_2: THREE.Mesh
    Torso_3: THREE.Mesh
    Head_2: THREE.Mesh
    Head_3: THREE.Mesh
    Head_4: THREE.Mesh
    ShoulderL_1: THREE.Mesh
    ArmL: THREE.Mesh
    ShoulderR_1: THREE.Mesh
    ArmR: THREE.Mesh
    LegL: THREE.Mesh
    LowerLegL_1: THREE.Mesh
    LegR: THREE.Mesh
    LowerLegR_1: THREE.Mesh
    FootR_1: THREE.Mesh
    HandR_1: THREE.SkinnedMesh
    HandR_2: THREE.SkinnedMesh
    HandL_1: THREE.SkinnedMesh
    HandL_2: THREE.SkinnedMesh
    Bone: THREE.Bone
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

const Model = (props: { url: string; params?: GroupProps }) => {
  const { url, params } = props

  const { scene } = useGLTF(url) as GLTFResult
  return <Clone object={scene} {...params} />
}

export { Model }
