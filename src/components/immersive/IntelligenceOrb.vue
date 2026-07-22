<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'

const emit = defineEmits<{ activate: [] }>()
const host = ref<HTMLElement | null>(null)
const isReady = ref(false)
const hasWebGL = ref(true)

let renderer: THREE.WebGLRenderer | undefined
let scene: THREE.Scene | undefined
let camera: THREE.PerspectiveCamera | undefined
let energySystem: THREE.Group | undefined
let auraFrame: THREE.Group | undefined
let core: THREE.Mesh | undefined
let shell: THREE.Mesh | undefined
let innerRing: THREE.Mesh | undefined
let outerRing: THREE.Mesh | undefined
let frame = 0
let resizeObserver: ResizeObserver | undefined
let visibilityObserver: IntersectionObserver | undefined
let pointerX = 0
let pointerY = 0
let elapsed = 0
let autoRotation = 0
let lastTime = 0
let lastLightningRefresh = 0
let disposed = false
const lightningLines: THREE.Line[] = []
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const onPointerMove = (event: PointerEvent) => {
  if (!host.value || reduceMotion) return
  const bounds = host.value.getBoundingClientRect()
  pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.55
  pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.4
}

const createGlowTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const context = canvas.getContext('2d')
  if (!context) return new THREE.Texture()
  const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128)
  gradient.addColorStop(0, 'rgba(255,255,238,1)')
  gradient.addColorStop(0.13, 'rgba(255,236,151,.98)')
  gradient.addColorStop(0.38, 'rgba(255,176,42,.7)')
  gradient.addColorStop(0.7, 'rgba(225,104,7,.2)')
  gradient.addColorStop(1, 'rgba(225,104,7,0)')
  context.fillStyle = gradient
  context.fillRect(0, 0, 256, 256)
  return new THREE.CanvasTexture(canvas)
}

const randomDirection = () =>
  new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()

const lightningPoints = () => {
  const start = randomDirection().multiplyScalar(1.1 + Math.random() * 0.18)
  const end = randomDirection().multiplyScalar(1.8 + Math.random() * 0.55)
  const points: THREE.Vector3[] = []
  const segments = 7

  for (let index = 0; index <= segments; index += 1) {
    const progress = index / segments
    const point = start.clone().lerp(end, progress)
    if (index > 0 && index < segments) {
      const jitter = 0.13 * Math.sin(progress * Math.PI)
      point.add(randomDirection().multiplyScalar(jitter + Math.random() * 0.08))
    }
    points.push(point)
  }
  return points
}

const refreshLightning = () => {
  lightningLines.forEach((line, index) => {
    line.geometry.setFromPoints(lightningPoints())
    const material = line.material as THREE.LineBasicMaterial
    material.opacity = index % 3 === 0 ? 1 : 0.5 + Math.random() * 0.45
  })
}

const createEnergySystem = () => {
  const group = new THREE.Group()

  const coreMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffcf57,
    emissive: 0xff8a08,
    emissiveIntensity: 3.2,
    roughness: 0.05,
    metalness: 0.08,
    transmission: 0.28,
    thickness: 1.6,
    transparent: true,
    opacity: 0.96,
  })
  core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 6), coreMaterial)
  group.add(core)

  shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.28, 3),
    new THREE.MeshBasicMaterial({
      color: 0xffd66f,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending,
    }),
  )
  group.add(shell)

  const glassShell = new THREE.Mesh(
    new THREE.SphereGeometry(1.42, 48, 32),
    new THREE.MeshPhysicalMaterial({
      color: 0xffc34b,
      emissive: 0xa64104,
      emissiveIntensity: 0.45,
      roughness: 0.08,
      transmission: 0.8,
      thickness: 0.5,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    }),
  )
  group.add(glassShell)

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0xffc54b,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
  })
  innerRing = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.025, 8, 160), ringMaterial)
  innerRing.rotation.set(1.05, 0.35, 0.15)
  outerRing = new THREE.Mesh(new THREE.TorusGeometry(2.13, 0.018, 8, 180), ringMaterial.clone())
  outerRing.rotation.set(0.35, 1.1, -0.3)
  const verticalRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.92, 0.012, 8, 160),
    ringMaterial.clone(),
  )
  verticalRing.rotation.set(0.7, -0.55, 1.05)
  group.add(innerRing, outerRing, verticalRing)

  for (let index = 0; index < 4; index += 1) {
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(lightningPoints()),
      new THREE.LineBasicMaterial({
        color: index % 3 === 0 ? 0xffffda : 0xffb52b,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      }),
    )
    lightningLines.push(line)
    group.add(line)
  }

  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: createGlowTexture(),
      transparent: true,
      opacity: 0.56,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  )
  glow.scale.set(4.2, 4.2, 1)
  group.add(glow)
  return group
}

const createAuraFrame = () => {
  const group = new THREE.Group()
  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0xf0ae32,
    emissive: 0xa84d06,
    emissiveIntensity: 0.85,
    metalness: 0.7,
    roughness: 0.2,
  })
  const lightMaterial = new THREE.MeshBasicMaterial({
    color: 0xffca52,
    transparent: true,
    opacity: 0.78,
    blending: THREE.AdditiveBlending,
  })

  const outerFrame = new THREE.Mesh(new THREE.TorusGeometry(2.78, 0.075, 12, 180), frameMaterial)
  const innerFrame = new THREE.Mesh(new THREE.TorusGeometry(2.62, 0.022, 8, 160), lightMaterial)
  group.add(outerFrame, innerFrame)

  for (let index = 0; index < 32; index += 1) {
    const angle = (index / 32) * Math.PI * 2
    const primary = index % 4 === 0
    const secondary = index % 2 === 0
    const length = primary ? 1.25 : secondary ? 1.08 : 0.92
    const width = primary ? 0.07 : secondary ? 0.05 : 0.036
    const radius = 2.82 + length / 2
    const spike = new THREE.Mesh(
      new THREE.ConeGeometry(width, length, primary ? 10 : 8),
      primary ? frameMaterial : lightMaterial,
    )
    spike.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, -0.18)
    spike.rotation.z = angle - Math.PI / 2
    group.add(spike)
  }

  const gemMaterial = new THREE.MeshStandardMaterial({
    color: 0xe85d18,
    emissive: 0x9e2605,
    emissiveIntensity: 1.2,
    metalness: 0.22,
    roughness: 0.2,
  })
  for (let index = 0; index < 8; index += 1) {
    const angle = (index / 8) * Math.PI * 2
    const ornament = new THREE.Mesh(new THREE.OctahedronGeometry(0.13), gemMaterial)
    ornament.position.set(Math.cos(angle) * 2.78, Math.sin(angle) * 2.78, 0.02)
    ornament.rotation.z = angle
    group.add(ornament)
  }

  group.position.z = -0.32
  group.rotation.z = Math.PI / 32
  return group
}

const resize = () => {
  if (!host.value || !renderer || !camera) return
  const { width, height } = host.value.getBoundingClientRect()
  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  if (reduceMotion && scene) renderer.render(scene, camera)
}

const animate = (time: number) => {
  if (disposed || !renderer || !scene || !camera || !energySystem) return
  const delta = Math.min((time - lastTime) / 1000, 0.05)
  lastTime = time
  elapsed += delta

  autoRotation += delta * 0.2
  energySystem.rotation.y += (autoRotation + pointerX - energySystem.rotation.y) * 0.035
  energySystem.rotation.x += (-pointerY * 0.5 - energySystem.rotation.x) * 0.035
  energySystem.rotation.z = Math.sin(elapsed * 0.45) * 0.035
  innerRing!.rotation.z += delta * 0.38
  outerRing!.rotation.z -= delta * 0.24
  shell!.rotation.y += delta * 0.16

  const pulse = 1 + Math.sin(elapsed * 2.7) * 0.055
  core!.scale.setScalar(pulse)
  shell!.scale.setScalar(1 + Math.sin(elapsed * 1.9) * 0.025)

  if (time - lastLightningRefresh > 145) {
    refreshLightning()
    lastLightningRefresh = time
  }

  renderer.render(scene, camera)
  frame = window.requestAnimationFrame(animate)
}

const setRendering = (shouldRender: boolean) => {
  if (disposed) return
  if (reduceMotion) {
    if (shouldRender && renderer && scene && camera) renderer.render(scene, camera)
    return
  }
  if (shouldRender && frame === 0) {
    lastTime = performance.now()
    frame = window.requestAnimationFrame(animate)
  } else if (!shouldRender && frame !== 0) {
    window.cancelAnimationFrame(frame)
    frame = 0
  }
}

onMounted(() => {
  if (!host.value) return
  try {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(0, 0, 10.4)

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.35
    host.value.appendChild(renderer.domElement)

    energySystem = createEnergySystem()
    auraFrame = createAuraFrame()
    scene.add(auraFrame, energySystem)

    const ambient = new THREE.HemisphereLight(0xfff4cf, 0x4c2a0b, 2.4)
    const key = new THREE.PointLight(0xfff0b1, 30, 14)
    key.position.set(2.5, 3, 4)
    const energyLight = new THREE.PointLight(0xff9d16, 35, 10)
    energyLight.position.set(0, 0, 2)
    scene.add(ambient, key, energyLight)

    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host.value)
    visibilityObserver = new IntersectionObserver(
      ([entry]) => setRendering(Boolean(entry?.isIntersecting)),
      {
        rootMargin: '100px',
      },
    )
    visibilityObserver.observe(host.value)
    resize()
    refreshLightning()
    isReady.value = true
    setRendering(true)
  } catch {
    hasWebGL.value = false
  }
})

onBeforeUnmount(() => {
  disposed = true
  window.cancelAnimationFrame(frame)
  resizeObserver?.disconnect()
  visibilityObserver?.disconnect()
  if (scene) {
    scene.traverse((object) => {
      if (
        object instanceof THREE.Mesh ||
        object instanceof THREE.Points ||
        object instanceof THREE.Line ||
        object instanceof THREE.Sprite
      ) {
        object.geometry?.dispose()
        const materials = Array.isArray(object.material) ? object.material : [object.material]
        materials.forEach((material) => {
          if (material instanceof THREE.SpriteMaterial) material.map?.dispose()
          material.dispose()
        })
      }
    })
  }
  renderer?.forceContextLoss()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template>
  <button
    ref="host"
    type="button"
    class="raphael-scene"
    aria-label="Interact with Raphael energy core"
    @pointermove="onPointerMove"
    @click="emit('activate')"
  >
    <div v-if="!isReady || !hasWebGL" class="orb-fallback" aria-hidden="true">
      <span></span>
    </div>
    <div class="interaction-hint">Move to bend the energy · Click to talk</div>
  </button>
</template>

<style scoped>
.raphael-scene {
  position: relative;
  width: min(100%, 720px);
  min-height: 500px;
  aspect-ratio: 1;
  margin-inline: auto;
  border: 0;
  cursor: pointer;
  isolation: isolate;
  background: transparent;
}
.raphael-scene :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
}
.raphael-label {
  position: absolute;
  right: 5%;
  bottom: 17%;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  border-radius: 999px;
  padding: 0.6rem 0.9rem;
  color: #705734;
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.raphael-label strong {
  color: #422e16;
}
.raphael-label__orb {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: #fff5b7;
  box-shadow:
    0 0 6px #fff,
    0 0 18px #ee8a13;
}
.interaction-hint {
  position: absolute;
  bottom: 2%;
  left: 50%;
  color: #8a7455;
  font-family: 'Space Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transform: translateX(-50%);
  white-space: nowrap;
}
.orb-fallback {
  position: absolute;
  inset: 25%;
  border: 2px solid #f4bb47;
  border-radius: 50%;
  background: radial-gradient(circle at 42% 36%, #fff 0 5%, #fff0a6 18%, #ffc13b 48%, #bd5007 78%);
  box-shadow:
    0 0 45px #ed9318,
    0 0 100px rgba(237, 147, 24, 0.55);
}
.orb-fallback::before,
.orb-fallback::after {
  position: absolute;
  inset: -26%;
  border: 1px dashed rgba(220, 132, 12, 0.7);
  border-radius: 50%;
  content: '';
  transform: rotate(28deg);
}
.orb-fallback::after {
  inset: -12%;
  transform: rotate(-42deg);
}
.orb-fallback span {
  position: absolute;
  inset: 40%;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 20px white;
}
@media (max-width: 640px) {
  .raphael-scene {
    width: 100%;
    min-height: 0;
    aspect-ratio: 1;
  }
  .raphael-label {
    right: 0;
    bottom: 16%;
  }
  .interaction-hint {
    display: none;
  }
}
</style>
