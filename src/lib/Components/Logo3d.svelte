<script>
  import { Grid, interactivity, OrbitControls, useDraco, useGltf } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  import { Canvas, T } from '@threlte/core'
  import { DEG2RAD } from 'three/src/math/MathUtils'
  import { OrthographicCamera } from 'three'
  import { goto } from '$app/navigation'

  let { defaultZoom = 25 } = $props()

  // Correctly use the Svelte 5 syntax and Threlte methods
  const dracoLoader = useDraco()
  const gltf = useGltf('/img/3d-logo.glb', { dracoLoader })
  interactivity()

  // Focus only on displaying the 3D model
  let model = $state(null)

  // Update the model reference once the GLTF is loaded
  $effect(() => {
    if ($gltf) {
      model = $gltf.scene
    }
  })

  // Adjusted camera position - higher up and looking down more
  const cameraPosition = [-6, 3, 10]

  // Adjusted target to center the model in view
  const orbitTarget = [0, 1, 0]

  // Model position adjustment to center it
  const modelPosition = [0, -1, 0]
</script>

<!-- Position the camera to view from front and slightly above -->
<T.OrthographicCamera
  position={cameraPosition}
  fov={65}
  near={0.1}
  far={50}
  zoom={defaultZoom}
  makeDefault>
  <OrbitControls
    maxZoom={defaultZoom + defaultZoom / 2}
    minZoom={defaultZoom - defaultZoom / 2}
    zoomSpeed={0.1}
    rotateSpeed={0.05}
    minPolarAngle={DEG2RAD * 45}
    maxPolarAngle={DEG2RAD * 90}
    minAzimuthAngle={DEG2RAD * -45}
    maxAzimuthAngle={DEG2RAD * 45} />
</T.OrthographicCamera>

<!-- Improved lighting setup for better visibility -->
<T.AmbientLight intensity={0.4} />
<T.DirectionalLight position={[5, 2, 3]} intensity={1} />

<!-- Display the model if loaded -->
{#if $gltf}
  <T.Group
    rotation.y={DEG2RAD * 90}
    rotation.x={0}
    position={modelPosition}
    onclick={(e) => {
      goto('/')
    }}>
    <!-- Render the entire scene from the GLTF file -->
    <T is={$gltf.scene} />
  </T.Group>
{:else}
  <!-- Loading indicator -->
  <T.Mesh position={[0, 0, 0]}>
    <T.SphereGeometry args={[0.5, 16, 16]} />
    <T.MeshStandardMaterial color="#cccccc" />
  </T.Mesh>
{/if}
