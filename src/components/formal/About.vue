<script setup lang="ts">
import { profile, skillGroups, skills } from '@/data/portfolio'
import { Braces, Database, Layers3 } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const icons = [Layers3, Braces, Database]
const marqueeTrack = ref<HTMLElement | null>(null)
const primarySet = ref<HTMLElement | null>(null)
let frame = 0
let setWidth = 0
let offset = 0
let lastTime = 0
let targetSpeed = 42
let currentSpeed = 42
let resizeObserver: ResizeObserver | undefined

const animateMarquee = (time: number) => {
  if (!marqueeTrack.value || !setWidth) {
    frame = window.requestAnimationFrame(animateMarquee)
    return
  }

  const delta = Math.min((time - lastTime) / 1000, 0.05)
  lastTime = time
  currentSpeed += (targetSpeed - currentSpeed) * Math.min(delta * 5, 1)
  offset -= currentSpeed * delta

  if (offset <= -setWidth) offset += setWidth
  marqueeTrack.value.style.transform = `translate3d(${offset}px, 0, 0)`
  frame = window.requestAnimationFrame(animateMarquee)
}

const slowMarquee = () => {
  targetSpeed = 14
}

const resumeMarquee = () => {
  targetSpeed = 42
}

onMounted(() => {
  if (!primarySet.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const measure = () => {
    setWidth = primarySet.value?.offsetWidth ?? 0
    if (setWidth && offset <= -setWidth) offset %= setWidth
  }
  resizeObserver = new ResizeObserver(measure)
  resizeObserver.observe(primarySet.value)
  measure()
  lastTime = performance.now()
  frame = window.requestAnimationFrame(animateMarquee)
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(frame)
  resizeObserver?.disconnect()
})
</script>

<template>
  <section id="about" class="section-space about-section">
    <div class="page-shell">
      <div class="about-heading" data-reveal>
        <div>
          <p class="eyebrow">01 / The human behind Rapunzz</p>
          <h2 class="section-title text-balance">Part builder, part explorer, always curious.</h2>
        </div>
        <p>
          I enjoy discovering how things work, then remixing what I learn into experiences that feel
          useful, expressive, and a little unexpected. Code is one of my favorite playgrounds.
        </p>
      </div>

      <div class="philosophy glass-panel" data-reveal>
        <div class="philosophy-index">Personal note</div>
        <blockquote>
          “I don't just want to ship screens. I want every project to carry a small piece of how I
          think, learn, and play.”
        </blockquote>
        <div class="philosophy-signature">
          <div>
            <strong>Thaariq / Rapunzz</strong><span>{{ profile.role }}</span>
          </div>
        </div>
      </div>

      <div class="skills-intro" data-reveal>
        <p class="eyebrow">Things I play with</p>
        <h3>Skills in one continuous orbit.</h3>
        <p>Move closer and the stream slows down.</p>
      </div>
    </div>

    <div class="skills-runway" aria-label="Technical skills">
      <ul class="sr-only">
        <li v-for="skill in skills" :key="skill.name">{{ skill.name }}</li>
      </ul>
      <div
        class="orbital-ribbon"
        aria-hidden="true"
        @mouseenter="slowMarquee"
        @mouseleave="resumeMarquee"
      >
        <div ref="marqueeTrack" class="orbital-track">
          <div ref="primarySet" class="marquee-set">
            <div v-for="skill in skills" :key="`primary-${skill.name}`" class="skill-card">
              <span class="skill-icon"><img :src="skill.icon" alt="" /></span>
              <strong>{{ skill.name }}</strong>
            </div>
          </div>
          <div class="marquee-set">
            <div v-for="skill in skills" :key="`clone-${skill.name}`" class="skill-card">
              <span class="skill-icon"><img :src="skill.icon" alt="" /></span>
              <strong>{{ skill.name }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-shell">
      <div class="capabilities-heading" data-reveal>
        <p class="eyebrow">How I build</p>
        <p>
          Different tools, one connected process from idea to something people can actually use.
        </p>
      </div>

      <div class="capability-grid">
        <article
          v-for="(group, index) in skillGroups"
          :key="group.title"
          class="capability-card glass-panel"
          data-capability-card
        >
          <div class="capability-icon"><component :is="icons[index]" :size="21" /></div>
          <span>0{{ index + 1 }}</span>
          <h3>{{ group.title }}</h3>
          <p>{{ group.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
}
.about-heading {
  display: grid;
  align-items: end;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 4rem;
}
.about-heading > p {
  padding-bottom: 0.5rem;
  color: #746655;
  font-size: 1.05rem;
  line-height: 1.75;
}
.philosophy {
  display: grid;
  align-items: center;
  margin-top: 4rem;
  border-radius: 2rem;
  padding: clamp(1.5rem, 4vw, 3rem);
  grid-template-columns: 0.25fr 1.5fr auto;
  gap: 2rem;
  transform: rotate(-1deg);
}
.philosophy-index {
  color: #a47735;
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
blockquote {
  max-width: 760px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.45;
}
.philosophy-signature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.philosophy-signature img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: contain;
  background: linear-gradient(135deg, #fff2c8, #e8d6b3);
}
.philosophy-signature div {
  display: flex;
  flex-direction: column;
}
.philosophy-signature strong {
  font-size: 0.8rem;
}
.philosophy-signature span {
  color: #88765f;
  font-size: 0.7rem;
}
.skills-intro {
  margin-top: 8rem;
  text-align: center;
}
.skills-intro .eyebrow {
  justify-content: center;
}
.skills-intro h3 {
  margin-top: 0.8rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.7rem);
  letter-spacing: -0.05em;
}
.skills-intro > p:last-child {
  margin-top: 0.6rem;
  color: #947f61;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  text-transform: uppercase;
}
.skills-runway {
  width: 108vw;
  margin: 3.5rem 0 2rem -4vw;
  padding-block: 3rem;
}
.orbital-ribbon {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-block: 2.6rem;
  transform: rotate(-2.2deg);
}
.orbital-track {
  display: flex;
  width: max-content;
  will-change: transform;
}
.marquee-set {
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  padding-right: 1rem;
}
.skill-card {
  position: relative;
  display: flex;
  width: 176px;
  min-width: 176px;
  height: 70px;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid rgba(190, 127, 31, 0.28);
  border-radius: 1.15rem;
  padding: 0.7rem 0.9rem;
  background: linear-gradient(145deg, rgba(255, 253, 246, 0.9), rgba(255, 240, 204, 0.82));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    0 12px 28px rgba(106, 68, 16, 0.12);
  backdrop-filter: blur(12px);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}
.skill-card:nth-child(4n + 1) {
  transform: translateY(-12px) rotate(-1.5deg);
}
.skill-card:nth-child(4n + 2) {
  transform: translateY(7px) rotate(1deg);
}
.skill-card:nth-child(4n + 3) {
  transform: translateY(-4px) rotate(0.6deg);
}
.skill-card:nth-child(4n) {
  transform: translateY(11px) rotate(-0.8deg);
}
.skill-card:hover {
  box-shadow: 0 18px 40px rgba(179, 109, 15, 0.18);
  transform: translateY(-7px) scale(1.035);
}
.skill-icon {
  display: grid;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 0.8rem;
  background: #f8eedc;
}
.skill-icon img {
  width: 25px;
  height: 25px;
  object-fit: contain;
}
.skill-card strong {
  color: #45341f;
  font-size: 0.86rem;
}
.capabilities-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 7rem;
  gap: 2rem;
}
.capabilities-heading > p:last-child {
  max-width: 460px;
  color: #766953;
  text-align: right;
}
.capability-grid {
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.capability-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  padding: 1.6rem;
  transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
}
.capability-card:nth-child(2) {
  transform: translateY(2rem);
}
.capability-card:hover {
  transform: translateY(-0.5rem) rotate(-1deg);
}
.capability-card:nth-child(2):hover {
  transform: translateY(1.5rem) rotate(1deg);
}
.capability-card::after {
  position: absolute;
  right: -3rem;
  bottom: -5rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  filter: blur(15px);
  content: '';
}
.capability-card > span {
  position: absolute;
  top: 1.65rem;
  right: 1.65rem;
  color: #a68d68;
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
}
.capability-icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(213, 138, 25, 0.2);
  border-radius: 0.9rem;
  color: #ad6b0b;
  background: rgba(255, 243, 211, 0.9);
}
.capability-card h3 {
  margin-top: 2.1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.45rem;
  letter-spacing: -0.04em;
  text-transform: capitalize;
}
.capability-card > p {
  margin-top: 0.75rem;
  color: #746957;
  font-size: 0.88rem;
  line-height: 1.65;
}
@media (max-width: 900px) {
  .about-heading {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .philosophy {
    grid-template-columns: 1fr;
  }
  .philosophy-index {
    display: none;
  }
  .capability-grid {
    grid-template-columns: 1fr;
  }
  .capability-card:nth-child(2) {
    transform: none;
  }
}
@media (max-width: 640px) {
  .philosophy {
    transform: none;
  }
  .philosophy-signature {
    align-items: flex-start;
    flex-direction: column;
  }
  .skills-runway {
    width: 120vw;
    margin-left: -10vw;
  }
  .skill-card {
    width: 158px;
    min-width: 158px;
    height: 72px;
  }
  .capabilities-heading {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 5rem;
  }
  .capabilities-heading > p:last-child {
    text-align: left;
  }
}
@media (prefers-reduced-motion: reduce) {
  .orbital-track {
    transform: none !important;
  }
}
</style>
