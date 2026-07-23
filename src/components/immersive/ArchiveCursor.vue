<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const enabled = ref(false)
const visible = ref(false)
const interactive = ref(false)
const pressed = ref(false)
const lens = ref<HTMLElement | null>(null)
const aura = ref<HTMLElement | null>(null)
const bursts = ref<Array<{ id: number; x: number; y: number }>>([])

let frame = 0
let burstId = 0
let targetX = -100
let targetY = -100
let lensX = -100
let lensY = -100
let auraX = -100
let auraY = -100
const burstTimers = new Set<number>()

const isInteractiveTarget = (target: EventTarget | null) =>
  target instanceof Element && Boolean(target.closest('a, button, [role="button"], input'))

const render = () => {
  lensX += (targetX - lensX) * 0.34
  lensY += (targetY - lensY) * 0.34
  auraX += (targetX - auraX) * 0.13
  auraY += (targetY - auraY) * 0.13

  if (lens.value) lens.value.style.transform = `translate3d(${lensX}px, ${lensY}px, 0)`
  if (aura.value) aura.value.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`
  frame = window.requestAnimationFrame(render)
}

const onPointerMove = (event: PointerEvent) => {
  targetX = event.clientX
  targetY = event.clientY
  visible.value = true
}

const onPointerOver = (event: PointerEvent) => {
  interactive.value = isInteractiveTarget(event.target)
}

const onPointerDown = (event: PointerEvent) => {
  pressed.value = true
  if (isInteractiveTarget(event.target)) return

  const id = ++burstId
  bursts.value.push({ id, x: event.clientX, y: event.clientY })
  const timer = window.setTimeout(() => {
    bursts.value = bursts.value.filter((burst) => burst.id !== id)
    burstTimers.delete(timer)
  }, 720)
  burstTimers.add(timer)
}

const onPointerUp = () => {
  pressed.value = false
}

const onPointerLeave = () => {
  visible.value = false
  pressed.value = false
}

onMounted(async () => {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!canHover || reduceMotion) return

  enabled.value = true
  document.documentElement.classList.add('archive-cursor-active')
  await nextTick()

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerover', onPointerOver, { passive: true })
  window.addEventListener('pointerdown', onPointerDown, { passive: true })
  window.addEventListener('pointerup', onPointerUp, { passive: true })
  document.documentElement.addEventListener('mouseleave', onPointerLeave)
  frame = window.requestAnimationFrame(render)
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(frame)
  burstTimers.forEach((timer) => window.clearTimeout(timer))
  burstTimers.clear()
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerover', onPointerOver)
  window.removeEventListener('pointerdown', onPointerDown)
  window.removeEventListener('pointerup', onPointerUp)
  document.documentElement.removeEventListener('mouseleave', onPointerLeave)
  document.documentElement.classList.remove('archive-cursor-active')
})
</script>

<template>
  <div
    v-if="enabled"
    class="archive-cursor"
    :class="{
      'archive-cursor--visible': visible,
      'archive-cursor--interactive': interactive,
      'archive-cursor--pressed': pressed,
    }"
    aria-hidden="true"
  >
    <span ref="aura" class="archive-cursor__aura"></span>
    <span
      v-for="burst in bursts"
      :key="burst.id"
      class="archive-cursor__burst"
      :style="{ left: `${burst.x}px`, top: `${burst.y}px` }"
    >
      <i v-for="index in 8" :key="index"></i>
      <b></b>
    </span>
    <span ref="lens" class="archive-cursor__lens"><i></i></span>
  </div>
</template>

<style scoped>
:global(html.archive-cursor-active),
:global(html.archive-cursor-active *) {
  cursor: none !important;
}

.archive-cursor {
  position: fixed;
  z-index: 900;
  inset: 0;
  opacity: 0;
  overflow: hidden;
  transition: opacity 180ms ease;
  pointer-events: none;
}

.archive-cursor--visible {
  opacity: 1;
}

.archive-cursor__aura,
.archive-cursor__lens {
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  will-change: transform;
}

.archive-cursor__aura {
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  opacity: 0.72;
  background: radial-gradient(
    circle,
    rgba(242, 170, 49, 0.14),
    rgba(220, 104, 7, 0.04) 42%,
    transparent 70%
  );
  filter: blur(4px);
}

.archive-cursor__burst {
  position: fixed;
  width: 0;
  height: 0;
  filter: drop-shadow(0 0 7px rgba(255, 181, 48, 0.95));
}

.archive-cursor__burst::before {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff8cf;
  box-shadow:
    0 0 12px #fff5bd,
    0 0 34px #f3a526,
    0 0 70px rgba(224, 100, 6, 0.85);
  content: '';
  animation: archive-core-flash 620ms ease-out both;
  transform: translate(-50%, -50%);
}

.archive-cursor__burst i {
  --angle: 0deg;
  --length: 46px;
  position: absolute;
  bottom: 0;
  left: -3px;
  width: 7px;
  height: var(--length);
  background: linear-gradient(to top, #fffbdc, #ffc44d 62%, rgba(224, 94, 5, 0));
  clip-path: polygon(
    40% 100%,
    100% 76%,
    55% 70%,
    92% 49%,
    45% 42%,
    72% 19%,
    28% 0,
    0 28%,
    35% 35%,
    5% 58%,
    48% 64%,
    12% 83%
  );
  transform: rotate(var(--angle));
  transform-origin: 50% 100%;
  animation: archive-lightning-strike 640ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.archive-cursor__burst i:nth-child(1) {
  --angle: 0deg;
  --length: 54px;
}
.archive-cursor__burst i:nth-child(2) {
  --angle: 47deg;
  --length: 38px;
}
.archive-cursor__burst i:nth-child(3) {
  --angle: 88deg;
  --length: 49px;
}
.archive-cursor__burst i:nth-child(4) {
  --angle: 137deg;
  --length: 35px;
}
.archive-cursor__burst i:nth-child(5) {
  --angle: 181deg;
  --length: 57px;
}
.archive-cursor__burst i:nth-child(6) {
  --angle: 226deg;
  --length: 42px;
}
.archive-cursor__burst i:nth-child(7) {
  --angle: 273deg;
  --length: 51px;
}
.archive-cursor__burst i:nth-child(8) {
  --angle: 318deg;
  --length: 37px;
}

.archive-cursor__burst b {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 212, 119, 0.86);
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(239, 150, 27, 0.72);
  animation: archive-shockwave 680ms ease-out both;
  transform: translate(-50%, -50%);
}

.archive-cursor__lens {
  width: 44px;
  height: 44px;
  margin: -22px 0 0 -22px;
  border: 1px solid rgba(255, 216, 137, 0.68);
  background: rgba(255, 211, 118, 0.07);
  box-shadow:
    0 0 16px rgba(234, 148, 28, 0.32),
    inset 0 0 12px rgba(255, 225, 166, 0.12);
  backdrop-filter: blur(3px) brightness(1.2);
  transition:
    width 180ms ease,
    height 180ms ease,
    margin 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;
}

.archive-cursor__lens::before,
.archive-cursor__lens::after {
  position: absolute;
  background: rgba(255, 216, 137, 0.42);
  content: '';
}

.archive-cursor__lens::before {
  width: 58px;
  height: 1px;
}

.archive-cursor__lens::after {
  width: 1px;
  height: 58px;
}

.archive-cursor__lens i {
  z-index: 1;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #fff4c1;
  box-shadow:
    0 0 8px #fff4c1,
    0 0 18px #e78d16;
}

.archive-cursor--interactive .archive-cursor__lens {
  width: 62px;
  height: 62px;
  margin: -31px 0 0 -31px;
  border-color: rgba(255, 224, 158, 0.88);
  background: rgba(239, 161, 48, 0.13);
}

.archive-cursor--interactive .archive-cursor__lens::before {
  width: 76px;
}

.archive-cursor--interactive .archive-cursor__lens::after {
  height: 76px;
}

.archive-cursor--pressed .archive-cursor__lens {
  width: 34px;
  height: 34px;
  margin: -17px 0 0 -17px;
  background: rgba(255, 190, 74, 0.28);
}

@keyframes archive-lightning-strike {
  0% {
    opacity: 0;
    transform: rotate(var(--angle)) scaleY(0.12);
  }
  12% {
    opacity: 1;
  }
  48% {
    opacity: 0.92;
    transform: rotate(var(--angle)) scaleY(1);
  }
  100% {
    opacity: 0;
    transform: rotate(var(--angle)) scaleY(1.28);
  }
}

@keyframes archive-core-flash {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.35);
  }
  35% {
    opacity: 0.95;
    transform: translate(-50%, -50%) scale(1.25);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.1);
  }
}

@keyframes archive-shockwave {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%) scale(0.2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(4.8);
  }
}

@media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
  .archive-cursor {
    display: none;
  }
}
</style>
