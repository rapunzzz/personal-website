<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AssistantPanel from '@/components/formal/AssistantPanel.vue'
import Navbar from '@/components/formal/Navbar.vue'

const route = useRoute()
const isImmersive = computed(() => route.meta.immersive === true)
const portalActive = ref(false)
</script>

<template>
  <Navbar v-if="!isImmersive && !portalActive" />
  <RouterView v-slot="{ Component, route: currentRoute }">
    <Transition
      name="portal"
      mode="out-in"
      @before-leave="portalActive = true"
      @after-enter="portalActive = false"
    >
      <component :is="Component" :key="currentRoute.path" />
    </Transition>
  </RouterView>
  <AssistantPanel v-if="!isImmersive && !portalActive" />
  <div
    class="portal-overlay"
    :class="{ 'portal-overlay--active': portalActive }"
    aria-hidden="true"
  >
    <span></span><i></i>
  </div>
</template>

<style>
.portal-overlay {
  position: fixed;
  z-index: 999;
  inset: 0;
  display: grid;
  opacity: 0;
  place-items: center;
  overflow: hidden;
  background: rgba(19, 11, 5, 0.08);
  pointer-events: none;
}

.portal-overlay span,
.portal-overlay i {
  position: absolute;
  width: 12vmax;
  height: 12vmax;
  border: 3px solid #f2ad39;
  border-radius: 50%;
  box-shadow:
    0 0 30px #ee951d,
    0 0 100px rgba(238, 149, 29, 0.75),
    inset 0 0 35px rgba(255, 207, 102, 0.5);
}

.portal-overlay::before {
  position: absolute;
  width: 28vmax;
  height: 28vmax;
  opacity: 0;
  background: repeating-conic-gradient(
    from 0deg,
    rgba(255, 207, 102, 0.75) 0 1.2deg,
    transparent 1.2deg 10deg
  );
  clip-path: circle(50%);
  content: '';
}

.portal-overlay i {
  width: 6vmax;
  height: 6vmax;
  border-color: #fff2b9;
}

.portal-overlay--active {
  animation: portal-overlay-flash 1.65s ease-in-out both;
}

.portal-overlay--active span {
  animation: portal-ring-expand 1.65s cubic-bezier(0.7, 0, 0.2, 1) both;
}

.portal-overlay--active i {
  animation: portal-core-expand 1.65s cubic-bezier(0.7, 0, 0.2, 1) both;
}

.portal-overlay--active::before {
  animation: portal-rays-expand 1.65s cubic-bezier(0.7, 0, 0.2, 1) both;
}

.portal-leave-active {
  transition:
    opacity 0.65s ease,
    filter 0.65s ease,
    transform 0.65s ease;
}

.portal-leave-to {
  opacity: 0;
  filter: blur(12px) brightness(1.8);
  transform: scale(0.94);
}

.portal-enter-active {
  transition:
    clip-path 1s cubic-bezier(0.16, 1, 0.3, 1),
    filter 1s ease,
    opacity 0.8s ease;
}

.portal-enter-from {
  opacity: 0;
  clip-path: circle(0 at 50% 50%);
  filter: brightness(2.2);
}

.portal-enter-to {
  opacity: 1;
  clip-path: circle(150% at 50% 50%);
  filter: brightness(1);
}

@keyframes portal-overlay-flash {
  0% {
    opacity: 0;
  }
  28%,
  68% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes portal-ring-expand {
  0% {
    opacity: 0;
    transform: scale(0.1) rotate(0);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(18) rotate(150deg);
  }
}

@keyframes portal-core-expand {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  38% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(30);
  }
}

@keyframes portal-rays-expand {
  0% {
    opacity: 0;
    transform: scale(0.1) rotate(-40deg);
  }
  32% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    transform: scale(7) rotate(80deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .portal-overlay--active,
  .portal-overlay--active span,
  .portal-overlay--active i,
  .portal-overlay--active::before {
    animation: none;
  }
  .portal-leave-active,
  .portal-enter-active {
    transition: opacity 0.01ms;
  }
}
</style>
