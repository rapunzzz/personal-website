<script setup lang="ts">
import { labProjects, projects } from '@/data/portfolio'
import { LockKeyhole, Radio } from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const selectedIndex = ref(0)
const cycleKey = ref(0)
const isPaused = ref(false)
const selectedProject = computed(() => projects[selectedIndex.value]!)
let autoplayTimer: number | undefined

const stopAutoplay = () => {
  if (autoplayTimer) window.clearTimeout(autoplayTimer)
  autoplayTimer = undefined
}

const startAutoplay = () => {
  stopAutoplay()
  if (isPaused.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  autoplayTimer = window.setTimeout(() => {
    selectedIndex.value = (selectedIndex.value + 1) % projects.length
    cycleKey.value += 1
    startAutoplay()
  }, 6500)
}

const selectProject = (index: number) => {
  selectedIndex.value = index
  cycleKey.value += 1
  startAutoplay()
}

const pauseAutoplay = () => {
  isPaused.value = true
  stopAutoplay()
}

const resumeAutoplay = () => {
  isPaused.value = false
  startAutoplay()
}

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)
</script>

<template>
  <section
    id="projects"
    class="section-space projects-section"
    :class="{ 'projects-section--paused': isPaused }"
    @focusin="pauseAutoplay"
    @focusout="resumeAutoplay"
  >
    <div class="page-shell">
      <div class="projects-heading" data-reveal>
        <div>
          <p class="eyebrow">03 / Pick a transmission</p>
          <h2 class="section-title text-balance">Choose a project. I'll open the full story.</h2>
        </div>
        <p>
          Each signal contains a different side of how I explore, design, and build. Select one to
          change the transmission below.
        </p>
      </div>

      <div
        class="project-selector"
        role="tablist"
        aria-label="Choose a project"
        data-project-card
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
      >
        <button
          v-for="(project, index) in projects"
          :id="`project-tab-${index}`"
          :key="project.title"
          type="button"
          role="tab"
          :aria-selected="selectedIndex === index"
          :aria-controls="`project-panel-${index}`"
          :class="{ 'project-option--active': selectedIndex === index }"
          @click="selectProject(index)"
        >
          <span class="option-number">0{{ index + 1 }}</span>
          <span class="option-image"><img :src="project.image" alt="" loading="lazy" /></span>
          <span class="option-copy">
            <small>{{ project.eyebrow }}</small>
            <strong>{{ project.title }}</strong>
          </span>
          <span class="option-progress" aria-hidden="true">
            <i v-if="selectedIndex === index" :key="`${cycleKey}-${index}`"></i>
          </span>
        </button>
      </div>

      <Transition name="project-swap" mode="out-in">
        <article
          :id="`project-panel-${selectedIndex}`"
          :key="selectedProject.title"
          role="tabpanel"
          :aria-labelledby="`project-tab-${selectedIndex}`"
          aria-live="polite"
          class="project-detail glass-panel"
          :class="{ 'project-detail--reverse': selectedIndex % 2 === 1 }"
          data-project-detail
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
        >
          <div class="project-detail-visual">
            <img
              :src="selectedProject.image"
              :alt="`${selectedProject.title} application interface`"
            />
            <div class="visual-overlay"></div>
            <span class="status-badge">
              <Radio v-if="selectedProject.live" :size="13" />
              <LockKeyhole v-else :size="13" />
              {{ selectedProject.status }}
            </span>
            <span class="visual-index">0{{ selectedIndex + 1 }} / 0{{ projects.length }}</span>
          </div>

          <div class="project-detail-content">
            <p class="project-eyebrow">{{ selectedProject.eyebrow }}</p>
            <h3>{{ selectedProject.title }}</h3>
            <p class="project-description">{{ selectedProject.description }}</p>

            <dl>
              <div>
                <dt>My contribution</dt>
                <dd>{{ selectedProject.contribution }}</dd>
              </div>
              <div>
                <dt>What came out</dt>
                <dd>{{ selectedProject.outcome }}</dd>
              </div>
            </dl>

            <ul aria-label="Technologies used">
              <li v-for="tech in selectedProject.tech" :key="tech">{{ tech }}</li>
            </ul>

            <div class="project-actions">
              <a
                v-if="selectedProject.live"
                :href="selectedProject.live"
                target="_blank"
                rel="noreferrer"
                class="luminous-button"
              >
                Open live project
              </a>
              <span v-else class="project-private">Private project</span>
            </div>
          </div>
        </article>
      </Transition>

      <div class="lab glass-panel" data-reveal>
        <div class="lab-heading">
          <div>
            <span>Rapunzz Lab</span>
            <h3>Small experiments, built for curiosity.</h3>
          </div>
        </div>
        <div class="lab-projects">
          <a
            v-for="project in labProjects"
            :key="project.title"
            :href="project.url"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <strong>{{ project.title }}</strong
              ><span>{{ project.description }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  position: relative;
}
.projects-heading {
  display: grid;
  align-items: end;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 3rem;
}
.projects-heading > p {
  padding-bottom: 0.5rem;
  color: #786a56;
  font-size: 1rem;
  line-height: 1.7;
}

.project-selector {
  display: grid;
  margin-top: 3.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}
.project-selector button {
  position: relative;
  display: grid;
  min-width: 0;
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(151, 105, 34, 0.15);
  border-radius: 1.25rem;
  padding: 0.65rem 0.65rem 0.8rem;
  color: #45341f;
  background: rgba(255, 253, 247, 0.68);
  grid-template-columns: auto 58px 1fr;
  gap: 0.75rem;
  text-align: left;
  transition:
    border-color 220ms ease,
    background-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;
}
.project-selector button:hover {
  border-color: rgba(213, 138, 25, 0.5);
  background: #fffaf0;
  transform: translateY(-4px);
}
.project-selector .project-option--active {
  border-color: #d58a19;
  background: #fff8e7;
  box-shadow: 0 12px 32px rgba(159, 99, 17, 0.14);
  transform: translateY(-4px);
}
.option-number {
  color: #a68c67;
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
}
.option-image {
  width: 58px;
  height: 58px;
  overflow: hidden;
  border-radius: 0.85rem;
  background: #f5ead4;
}
.option-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.option-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
}
.option-copy small {
  overflow: hidden;
  color: #9c7d50;
  font-family: 'Space Mono', monospace;
  font-size: 0.52rem;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}
.option-copy strong {
  overflow: hidden;
  margin-top: 0.2rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.option-progress {
  position: absolute;
  right: 0.7rem;
  bottom: 0.35rem;
  left: 0.7rem;
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(151, 105, 34, 0.12);
}
.option-progress i {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #d8790d, #ffd469);
  transform-origin: left;
  animation: slide-progress 6.5s linear forwards;
}
.projects-section--paused .option-progress i {
  animation-play-state: paused;
}

.project-detail {
  display: grid;
  min-height: 590px;
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 2rem;
  grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
}
.project-detail--reverse .project-detail-visual {
  order: 2;
}
.project-detail--reverse .project-detail-content {
  order: 1;
}
.project-detail-visual {
  position: relative;
  min-width: 0;
  min-height: 0;
  align-self: center;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: linear-gradient(145deg, #fff0c8, #ead8b7);
}
.project-detail-visual img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
.visual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(213, 138, 25, 0.16));
  pointer-events: none;
}
.status-badge,
.visual-index {
  position: absolute;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.86);
  border-radius: 999px;
  color: #6e4c1e;
  background: rgba(255, 253, 247, 0.86);
  backdrop-filter: blur(12px);
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
}
.status-badge {
  top: 1rem;
  left: 1rem;
  gap: 0.35rem;
  padding: 0.45rem 0.7rem;
}
.visual-index {
  right: 1rem;
  bottom: 1rem;
  padding: 0.45rem 0.65rem;
}
.project-detail-content {
  display: flex;
  min-width: 0;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.6rem, 4vw, 3.5rem);
}
.project-eyebrow {
  color: #a46710;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.project-detail h3 {
  margin-top: 0.75rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  letter-spacing: -0.06em;
  line-height: 1;
}
.project-description {
  margin-top: 1.2rem;
  color: #746753;
  line-height: 1.75;
}
.project-detail dl {
  width: 100%;
  margin-top: 1.5rem;
}
.project-detail dl > div {
  display: grid;
  border-top: 1px solid rgba(151, 105, 34, 0.15);
  padding-block: 0.8rem;
  grid-template-columns: 110px 1fr;
  gap: 1rem;
}
dt {
  color: #88775e;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
}
dd {
  color: #654f35;
  font-size: 0.78rem;
  line-height: 1.55;
}
.project-detail ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.25rem;
  list-style: none;
}
.project-detail li {
  border-radius: 999px;
  padding: 0.35rem 0.6rem;
  color: #6e5431;
  background: #fff2d3;
  font-size: 0.65rem;
  font-weight: 700;
}
.project-actions {
  margin-top: 1.75rem;
}
.project-private {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  border: 1px solid rgba(151, 105, 34, 0.16);
  border-radius: 999px;
  padding-inline: 0.9rem;
  color: #83735e;
  background: rgba(244, 235, 217, 0.7);
  font-size: 0.72rem;
  font-weight: 700;
}

.project-swap-enter-active,
.project-swap-leave-active {
  transition:
    opacity 260ms ease,
    transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
}
.project-swap-enter-from {
  opacity: 0;
  transform: translateY(28px) scale(0.98);
}
.project-swap-leave-to {
  opacity: 0;
  transform: translateY(-18px) scale(0.985);
}

@keyframes slide-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.lab {
  display: grid;
  align-items: center;
  margin-top: 5rem;
  border-radius: 1.6rem;
  padding: 1.5rem;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 2rem;
}
.lab-heading {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.lab-icon {
  display: grid;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 1rem;
  color: #a66810;
  background: #fff1ce;
}
.lab-heading span {
  color: #806b4d;
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.lab-heading h3 {
  margin-top: 0.2rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
}
.lab-projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}
.lab-projects a {
  display: flex;
  min-height: 88px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid rgba(151, 105, 34, 0.15);
  border-radius: 1rem;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.55);
  transition:
    border-color 180ms ease,
    transform 180ms ease;
}
.lab-projects a:hover {
  border-color: rgba(213, 138, 25, 0.48);
  transform: translateY(-2px);
}
.lab-projects a div {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.lab-projects strong {
  font-size: 0.86rem;
}
.lab-projects span {
  color: #8a7961;
  font-size: 0.68rem;
}

@media (max-width: 1000px) {
  .projects-heading {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .project-selector {
    grid-template-columns: 1fr;
  }
  .project-selector button {
    grid-template-columns: auto 64px 1fr;
  }
  .project-detail {
    grid-template-columns: 1fr;
  }
  .project-detail-visual,
  .project-detail--reverse .project-detail-visual {
    order: 1;
    min-height: 0;
  }
  .project-detail-content,
  .project-detail--reverse .project-detail-content {
    order: 2;
  }
  .lab {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .project-selector {
    margin-top: 2.25rem;
  }
  .project-selector button {
    grid-template-columns: auto 52px 1fr;
  }
  .option-image {
    width: 52px;
    height: 52px;
  }
  .project-detail {
    min-height: 0;
    border-radius: 1.4rem;
  }
  .project-detail-visual {
    min-height: 0;
    aspect-ratio: 16 / 9;
  }
  .project-detail-content {
    padding: 1.35rem;
  }
  .project-detail h3 {
    font-size: 2.6rem;
  }
  .project-detail dl > div {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }
  .project-actions,
  .project-actions > * {
    width: 100%;
  }
  .lab-projects {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 390px) {
  .option-number {
    display: none;
  }
  .project-selector button {
    grid-template-columns: 48px 1fr;
  }
  .option-image {
    width: 48px;
    height: 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .option-progress i {
    animation: none;
    transform: scaleX(1);
  }
}
</style>
