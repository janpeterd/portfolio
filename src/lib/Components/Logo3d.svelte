<script>
  import { Grid, interactivity, OrbitControls, useDraco, useGltf } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  import { Canvas, T, useTask } from '@threlte/core'
  import { OrthographicCamera } from 'three'
  import { deg2rad } from '$lib/utils'
  import { goto } from '$app/navigation'
  let { defaultZoom = 25, rotate } = $props()

  // Correctly use the Svelte 5 syntax and Threlte methods
  const dracoLoader = useDraco()
  const gltf = useGltf('/logo3d.glb', { dracoLoader })
  interactivity()

  // Focus only on displaying the 3D model
  let model = $state(null)

  // Update the model reference once the GLTF is loaded
  $effect(() => {
    if ($gltf) {
      model = $gltf.scene
    }
  })

  let rotationY = $state(0)
  let rotationX = $state(0)
  let isIncreasingY = $state(true)
  let isIncreasingX = $state(true)
  const minRotationY = deg2rad(0)
  const maxRotationY = deg2rad(90)
  const minRotationX = deg2rad(-15)
  const maxRotationX = deg2rad(30)

  useTask((delta) => {
    if (rotate) {
      // Handle Y rotation
      if (isIncreasingY) {
        rotationY += delta * 0.5
        if (rotationY >= maxRotationY) {
          rotationY = maxRotationY
          isIncreasingY = false
        }
      } else {
        rotationY -= delta * 0.5
        if (rotationY <= minRotationY) {
          rotationY = minRotationY
          isIncreasingY = true
        }
      }

      // Handle X rotation (slightly slower for subtle effect)
      if (isIncreasingX) {
        rotationX += delta * 0.3
        if (rotationX >= maxRotationX) {
          rotationX = maxRotationX
          isIncreasingX = false
        }
      } else {
        rotationX -= delta * 0.3
        if (rotationX <= minRotationX) {
          rotationX = minRotationX
          isIncreasingX = true
        }
      }
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
    zoomSpeed={0.5}
    rotateSpeed={0.5}
    minPolarAngle={deg2rad(45)}
    maxPolarAngle={deg2rad(90)}
    minAzimuthAngle={deg2rad(-45)}
    maxAzimuthAngle={deg2rad(45)} />
</T.OrthographicCamera>

<!-- Improved lighting setup for better visibility -->
<T.AmbientLight intensity={0.4} />
<T.DirectionalLight position={[5, 2, 3]} intensity={1} />

<!-- Display the model if loaded -->
{#if $gltf}
  <T.Group
    rotation.y={rotate ? rotationY : deg2rad(90)}
    rotation.x={rotate ? rotationX : 0}
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
