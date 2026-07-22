<script setup lang="ts">
import { Bot, Sparkles, X } from 'lucide-vue-next'
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)
const closeButton = ref<HTMLButtonElement | null>(null)

const open = async () => {
  isOpen.value = true
  await nextTick()
  closeButton.value?.focus()
}

const close = () => {
  isOpen.value = false
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  window.addEventListener('open-assistant', open)
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('open-assistant', open)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <button
    v-if="!isOpen"
    type="button"
    class="raphael-launcher"
    aria-label="Open Raphael AI assistant preview"
    @click="open"
  >
    <span class="raphael-launcher__ring"></span>
    <span class="raphael-launcher__core"></span>
    <small>AI</small>
  </button>

  <Transition name="assistant-panel">
    <aside v-if="isOpen" class="assistant" aria-label="Raphael AI assistant preview">
      <header>
        <div class="assistant-identity">
          <span class="assistant-avatar"><i></i></span>
          <div>
            <strong>RAPHAEL</strong><small><i></i> AI portfolio assistant · Coming soon</small>
          </div>
        </div>
        <button ref="closeButton" type="button" aria-label="Close assistant" @click="close">
          <X :size="20" />
        </button>
      </header>

      <div class="assistant-body">
        <div class="assistant-system">
          <Sparkles :size="15" />
          <span>Coming soon · Currently in development</span>
        </div>

        <div class="assistant-message">
          <span><Bot :size="15" /></span>
          <p>
            Hello. I am Raphael, Thaariq's portfolio assistant. I am still in development, so chat
            is not available yet. Soon I will help you explore his projects, experience, and skills.
          </p>
        </div>
      </div>
      <p class="assistant-footnote">Raphael AI · Coming soon</p>
    </aside>
  </Transition>
</template>

<style scoped>
.raphael-launcher {
  position: fixed;
  z-index: 55;
  right: 1.25rem;
  bottom: 1.25rem;
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  overflow: visible;
  border: 1px solid rgba(255, 225, 158, 0.9);
  border-radius: 50%;
  background: radial-gradient(circle, #fffbe0 4%, #ffc54e 38%, #c75908 100%);
  box-shadow:
    0 0 22px rgba(225, 130, 14, 0.48),
    0 14px 36px rgba(98, 61, 12, 0.22);
}
.raphael-launcher__ring {
  position: absolute;
  inset: -7px;
  border: 1px dashed rgba(205, 120, 12, 0.55);
  border-radius: 50%;
  animation: assistant-orbit 9s linear infinite;
}
.raphael-launcher__core {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 12px white;
}
.raphael-launcher small {
  position: absolute;
  top: -8px;
  right: -8px;
  border: 1px solid #fff4d7;
  border-radius: 999px;
  padding: 0.12rem 0.3rem;
  color: #fff7e8;
  background: #6f3707;
  font-family: 'Space Mono', monospace;
  font-size: 0.45rem;
  font-weight: 700;
}
.assistant {
  position: fixed;
  z-index: 70;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  width: min(410px, calc(100vw - 2rem));
  height: auto;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.92);
  border-radius: 1.6rem;
  color: #2b2016;
  background: rgba(255, 251, 240, 0.96);
  box-shadow: 0 30px 100px rgba(83, 50, 8, 0.28);
  backdrop-filter: blur(22px);
  flex-direction: column;
}
.assistant > header {
  display: flex;
  min-height: 70px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(151, 105, 34, 0.14);
  padding: 0.8rem;
}
.assistant-identity {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.assistant-avatar {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(circle, #fffbd5 5%, #ffc34c 42%, #cb5b08 100%);
  box-shadow: 0 0 18px rgba(229, 135, 17, 0.4);
}
.assistant-avatar > i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 9px white;
}
.assistant-identity > div {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.assistant-identity strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
}
.assistant-identity small {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #8c785d;
  font-size: 0.58rem;
}
.assistant-identity small i {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: #e1a335;
}
.assistant > header > button {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 50%;
  color: #6f5d48;
  background: transparent;
}
.assistant > header > button:hover {
  background: rgba(218, 144, 28, 0.1);
}
.assistant-body {
  padding: 1.1rem;
}
.assistant-system {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid rgba(218, 145, 29, 0.18);
  border-radius: 0.8rem;
  padding: 0.65rem 0.75rem;
  color: #966117;
  background: #fff2cf;
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem;
  text-transform: uppercase;
}
.assistant-message {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  margin-top: 1.1rem;
}
.assistant-message > span {
  display: grid;
  width: 28px;
  height: 28px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  color: #fff8e7;
  background: #c97912;
}
.assistant-message p {
  border: 1px solid rgba(151, 105, 34, 0.13);
  border-radius: 0.35rem 1rem 1rem;
  padding: 0.8rem 0.9rem;
  color: #5d4d3a;
  background: white;
  font-size: 0.82rem;
  line-height: 1.6;
}
.assistant-footnote {
  padding: 0.5rem 1rem 0.75rem;
  color: #a09079;
  font-size: 0.55rem;
  text-align: center;
}
.assistant-panel-enter-active,
.assistant-panel-leave-active {
  transition:
    opacity 240ms ease,
    transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
}
.assistant-panel-enter-from,
.assistant-panel-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
}
@keyframes assistant-orbit {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 520px) {
  .assistant {
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    border-radius: 1.4rem 1.4rem 0 0;
  }
  .raphael-launcher {
    right: 0.9rem;
    bottom: 0.9rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .raphael-launcher__ring {
    animation: none;
  }
  .assistant-panel-enter-active,
  .assistant-panel-leave-active {
    transition: none;
  }
}
</style>
