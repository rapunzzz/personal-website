<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const now = ref(new Date())
let clockTimer = 0

const time = computed(() =>
  now.value.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
)
const date = computed(() =>
  now.value.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
)

onMounted(() => {
  clockTimer = window.setInterval(() => (now.value = new Date()), 1000)
})
onBeforeUnmount(() => window.clearInterval(clockTimer))
</script>

<template>
  <main class="gateway">
    <div class="gateway-grid" aria-hidden="true"></div>
    <div class="gateway-lines" aria-hidden="true"></div>

    <header class="gateway-status">
      <span>RAPUNZZ // PERSONAL INTERFACE</span>
      <span>RAPHAEL CORE DETECTED</span>
    </header>

    <section class="gateway-content">
      <div class="gateway-clock">
        <strong>{{ time }}</strong>
        <span>{{ date }}</span>
      </div>

      <div class="gateway-core" aria-hidden="true">
        <i class="gateway-core__spikes"></i>
        <i class="gateway-core__ring"></i>
        <i class="gateway-core__orb"></i>
      </div>

      <p>Thaariq Kurnia Spama presents</p>
      <h1>RAPUNZZ<span>.</span></h1>
      <small>An interactive memory archive guided by Raphael.</small>

      <RouterLink to="/world" class="gateway-enter">
        Enter the archive <ArrowRight :size="20" />
      </RouterLink>
    </section>

    <footer>
      <span>INSTANCE 01</span><span>TAKE YOUR TIME</span><span>SCROLL IS NOT REQUIRED</span>
    </footer>
  </main>
</template>

<style scoped>
.gateway {
  position: fixed;
  inset: 0;
  display: flex;
  overflow: hidden;
  padding: 1rem clamp(1rem, 4vw, 4rem) 1.5rem;
  color: #f9e9c8;
  background: #120c08;
  flex-direction: column;
  isolation: isolate;
}
.gateway-grid {
  position: absolute;
  z-index: -3;
  inset: 0;
  opacity: 0.4;
  background-image:
    linear-gradient(rgba(245, 183, 75, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 183, 75, 0.08) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: radial-gradient(circle, black, transparent 82%);
}
.gateway-lines {
  position: absolute;
  z-index: -2;
  inset: 10%;
  border: 1px solid rgba(241, 168, 46, 0.22);
  border-radius: 50%;
  box-shadow:
    0 0 120px rgba(220, 116, 8, 0.16),
    inset 0 0 100px rgba(220, 116, 8, 0.1);
}
.gateway-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 218, 145, 0.15);
  padding-bottom: 0.8rem;
  color: #ad9672;
  font-family: 'Space Mono', monospace;
  font-size: 0.56rem;
  letter-spacing: 0.12em;
}
.gateway-content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.gateway-clock {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.gateway-clock strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(4rem, 9vw, 8.5rem);
  letter-spacing: -0.08em;
  line-height: 0.8;
}
.gateway-clock span {
  max-width: 125px;
  color: #e4a53a;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  text-align: left;
  text-transform: uppercase;
}
.gateway-core {
  position: relative;
  display: grid;
  width: 112px;
  height: 112px;
  margin-block: 1.5rem;
  place-items: center;
}
.gateway-core__spikes {
  position: absolute;
  inset: -28px;
  background: repeating-conic-gradient(#e8a437 0 1.4deg, transparent 1.4deg 11.25deg);
  clip-path: polygon(
    50% 0,
    54% 34%,
    69% 4%,
    65% 39%,
    85% 15%,
    73% 44%,
    100% 50%,
    73% 56%,
    85% 85%,
    65% 61%,
    69% 96%,
    54% 66%,
    50% 100%,
    46% 66%,
    31% 96%,
    35% 61%,
    15% 85%,
    27% 56%,
    0 50%,
    27% 44%,
    15% 15%,
    35% 39%,
    31% 4%,
    46% 34%
  );
}
.gateway-core__ring {
  position: absolute;
  inset: 5px;
  border: 3px solid #d88a1c;
  border-radius: 50%;
}
.gateway-core__orb {
  position: absolute;
  inset: 25px;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 32%, white 0 7%, #ffe79e 20%, #f0aa2d 48%, #943904 82%);
  box-shadow:
    0 0 28px #e8921c,
    0 0 65px rgba(225, 125, 12, 0.5);
  animation: gateway-pulse 2.8s ease-in-out infinite;
}
.gateway-content > p {
  color: #bba485;
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.gateway-content h1 {
  margin-top: 0.4rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 7vw, 6rem);
  letter-spacing: -0.07em;
  line-height: 0.9;
}
.gateway-content h1 span {
  color: #eca537;
}
.gateway-content > small {
  margin-top: 0.55rem;
  color: #a99576;
  font-size: 0.72rem;
}
.gateway-enter {
  display: inline-flex;
  min-width: min(100%, 360px);
  min-height: 60px;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1.7rem;
  border: 1px solid #f1b149;
  border-radius: 0.7rem;
  color: #291805;
  background: linear-gradient(135deg, #ffd875, #e49421);
  box-shadow:
    7px 7px 0 #5b2b07,
    0 0 40px rgba(226, 133, 18, 0.2);
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}
.gateway-enter:hover {
  box-shadow:
    3px 3px 0 #5b2b07,
    0 0 50px rgba(226, 133, 18, 0.35);
  transform: translate(4px, 4px);
}
.gateway footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 218, 145, 0.13);
  padding-top: 0.75rem;
  color: #78664d;
  font-family: 'Space Mono', monospace;
  font-size: 0.48rem;
  letter-spacing: 0.1em;
}
@keyframes gateway-pulse {
  50% {
    box-shadow:
      0 0 40px #f2ac35,
      0 0 85px rgba(225, 125, 12, 0.65);
    transform: scale(1.08);
  }
}
@media (max-width: 600px) {
  .gateway {
    padding: 0.75rem 0.75rem 1rem;
  }
  .gateway-lines {
    inset: auto;
    top: 50%;
    left: 50%;
    width: calc(100vw - 1rem);
    height: min(calc(100dvh - 5.5rem), 680px);
    border-color: rgba(241, 168, 46, 0.2);
    border-radius: 1.6rem;
    box-shadow:
      0 0 70px rgba(220, 116, 8, 0.12),
      inset 0 0 70px rgba(220, 116, 8, 0.07);
    transform: translate(-50%, -50%);
  }
  .gateway-status span:last-child,
  .gateway footer span:first-child,
  .gateway footer span:last-child {
    display: none;
  }
  .gateway footer {
    justify-content: center;
  }
  .gateway-content {
    position: relative;
    width: min(100%, 390px);
    max-height: min(680px, calc(100dvh - 6.5rem));
    margin: 0.75rem auto;
    border: 1px solid rgba(246, 185, 77, 0.24);
    border-radius: 1.35rem;
    padding: clamp(0.8rem, 2.2dvh, 1.25rem) 1rem;
    background:
      linear-gradient(90deg, rgba(240, 166, 45, 0.48) 18px, transparent 18px) top left / 52px 1px
        no-repeat,
      linear-gradient(rgba(240, 166, 45, 0.48) 18px, transparent 18px) top left / 1px 52px no-repeat,
      linear-gradient(270deg, rgba(240, 166, 45, 0.48) 18px, transparent 18px) top right / 52px 1px
        no-repeat,
      linear-gradient(rgba(240, 166, 45, 0.48) 18px, transparent 18px) top right / 1px 52px
        no-repeat,
      rgba(22, 14, 8, 0.76);
    box-shadow:
      inset 0 0 42px rgba(210, 111, 8, 0.05),
      0 18px 60px rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(8px);
  }
  .gateway-clock {
    gap: 0.55rem;
    flex-direction: column;
  }
  .gateway-clock strong {
    font-size: clamp(3.2rem, 18vw, 4.5rem);
  }
  .gateway-clock span {
    max-width: none;
    text-align: center;
  }
  .gateway-core {
    width: 88px;
    height: 88px;
    margin-block: clamp(0.8rem, 2.4dvh, 1.2rem);
  }
  .gateway-core__spikes {
    inset: -21px;
  }
  .gateway-core__orb {
    inset: 20px;
  }
  .gateway-content h1 {
    font-size: clamp(2.7rem, 14vw, 3.7rem);
  }
  .gateway-enter {
    min-width: 0;
    width: min(82vw, 280px);
    min-height: 50px;
    gap: 0.5rem;
    margin-top: 1.25rem;
    padding: 0.65rem 0.9rem;
    box-shadow:
      4px 4px 0 #5b2b07,
      0 0 28px rgba(226, 133, 18, 0.18);
    font-size: 0.62rem;
    letter-spacing: 0.07em;
  }
}
@media (max-width: 600px) and (max-height: 680px) {
  .gateway-content {
    margin-block: 0.45rem;
    padding-block: 0.65rem;
  }
  .gateway-clock strong {
    font-size: clamp(2.8rem, 15vw, 3.6rem);
  }
  .gateway-core {
    width: 72px;
    height: 72px;
    margin-block: 0.55rem;
  }
  .gateway-core__spikes {
    inset: -16px;
  }
  .gateway-core__orb {
    inset: 17px;
  }
  .gateway-content h1 {
    font-size: 2.55rem;
  }
  .gateway-enter {
    min-height: 46px;
    margin-top: 0.8rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .gateway-core__orb {
    animation: none;
  }
  .gateway-enter {
    transition: none;
  }
}
</style>
