<script setup lang="ts">
import IntelligenceOrb from '@/components/immersive/IntelligenceOrb.vue'
import { experiences, labProjects, profile, projects, skillGroups } from '@/data/portfolio'
import {
  Archive,
  ArrowLeft,
  BriefcaseBusiness,
  Clock3,
  Code2,
  FlaskConical,
  FolderKanban,
  Mail,
  Sparkles,
  UserRound,
  X,
} from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type ArchivePanel = 'identity' | 'abilities' | 'projects' | 'timeline' | 'lab' | 'contact'

const activePanel = ref<ArchivePanel | null>(null)
const selectedProjectIndex = ref(0)
const consoleText = ref('Archive chamber stable. Select a memory node.')
const now = ref(new Date())
const selectedProject = computed(() => projects[selectedProjectIndex.value]!)
let clockTimer = 0

const nodes: Array<{ id: ArchivePanel; label: string; icon: typeof UserRound }> = [
  { id: 'identity', label: 'Identity', icon: UserRound },
  { id: 'abilities', label: 'Abilities', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'timeline', label: 'Timeline', icon: Clock3 },
  { id: 'lab', label: 'Lab', icon: FlaskConical },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const openPanel = (panel: ArchivePanel) => {
  activePanel.value = panel
  consoleText.value = `${panel.toUpperCase()} memory reconstructed successfully.`
}

const selectProject = (index: number) => {
  selectedProjectIndex.value = index
  consoleText.value = `${projects[index]!.title} record selected.`
}

const touchCore = () => {
  consoleText.value = 'Raphael conversation module remains sealed during development.'
}

onMounted(() => {
  clockTimer = window.setInterval(() => (now.value = new Date()), 1000)
})
onBeforeUnmount(() => {
  window.clearInterval(clockTimer)
})
</script>

<template>
  <main class="archive-world">
    <div class="archive-grid" aria-hidden="true"></div>
    <div class="archive-circuit" aria-hidden="true"></div>

    <header class="archive-topbar">
      <RouterLink to="/" aria-label="Back to gateway"><ArrowLeft :size="17" /> Gateway</RouterLink>
      <div><span></span><strong>RAPHAEL ARCHIVE CHAMBER</strong><small>CORE ONLINE</small></div>
      <time>{{ now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }}</time>
    </header>

    <section class="archive-stage" aria-label="Raphael memory archive">
      <div class="archive-mobile-heading" aria-hidden="true">
        <span><i></i> Core entity online</span>
        <strong>RAPHAEL</strong>
        <small>Archive intelligence / 01</small>
      </div>

      <div class="archive-orb"><IntelligenceOrb @activate="touchCore" /></div>
      <div class="archive-ring archive-ring--one" aria-hidden="true"></div>
      <div class="archive-ring archive-ring--two" aria-hidden="true"></div>

      <div class="memory-orbit">
        <button
          v-for="(node, index) in nodes"
          :key="node.id"
          type="button"
          class="memory-node"
          :class="[`memory-node--${index + 1}`, { active: activePanel === node.id }]"
          @click="openPanel(node.id)"
        >
          <span><component :is="node.icon" :size="20" /></span><strong>{{ node.label }}</strong>
        </button>
      </div>

      <div class="archive-caption">
        <small>Memory interface ready</small>
        <strong>Use the dock to explore</strong>
      </div>
    </section>

    <Transition name="archive-panel">
      <aside v-if="activePanel" class="archive-window" :aria-label="`${activePanel} archive panel`">
        <header>
          <div>
            <Archive :size="18" /><span>MEMORY / {{ activePanel.toUpperCase() }}</span>
          </div>
          <button type="button" aria-label="Close memory panel" @click="activePanel = null">
            <X :size="19" />
          </button>
        </header>

        <div class="archive-window__body">
          <template v-if="activePanel === 'identity'">
            <p class="panel-code">IDENTITY_RECORD.001</p>
            <h1>Thaariq, known here as Rapunzz.</h1>
            <p>{{ profile.about }}</p>
            <blockquote>“{{ profile.philosophy }}”</blockquote>
            <dl class="identity-data">
              <div>
                <dt>Role</dt>
                <dd>{{ profile.role }}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{{ profile.location }}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{{ profile.availability }}</dd>
              </div>
            </dl>
          </template>

          <template v-else-if="activePanel === 'abilities'">
            <p class="panel-code">ABILITY_CLUSTER / 03 FOUND</p>
            <h1>Tools connected by purpose.</h1>
            <article
              v-for="(group, index) in skillGroups"
              :key="group.title"
              class="ability-record"
            >
              <span>0{{ index + 1 }}</span>
              <div>
                <h2>{{ group.title }}</h2>
                <p>{{ group.description }}</p>
                <ul>
                  <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
                </ul>
              </div>
            </article>
          </template>

          <template v-else-if="activePanel === 'projects'">
            <p class="panel-code">PROJECT_MEMORY / SELECT RECORD</p>
            <div class="project-record-tabs">
              <button
                v-for="(project, index) in projects"
                :key="project.title"
                type="button"
                :class="{ active: selectedProjectIndex === index }"
                @click="selectProject(index)"
              >
                0{{ index + 1 }} · {{ project.title }}
              </button>
            </div>
            <div class="project-record-image">
              <img :src="selectedProject.image" :alt="`${selectedProject.title} interface`" />
            </div>
            <h1>{{ selectedProject.title }}</h1>
            <p>{{ selectedProject.description }}</p>
            <ul class="tech-list">
              <li v-for="tech in selectedProject.tech" :key="tech">{{ tech }}</li>
            </ul>
            <a
              v-if="selectedProject.live"
              :href="selectedProject.live"
              target="_blank"
              rel="noreferrer"
              >Launch live record</a
            >
          </template>

          <template v-else-if="activePanel === 'timeline'">
            <p class="panel-code">CHRONOLOGICAL_RECORDS / {{ experiences.length }} FOUND</p>
            <h1>Experience timeline.</h1>
            <article
              v-for="experience in experiences"
              :key="experience.title"
              class="timeline-memory"
            >
              <small>{{ experience.period }}</small>
              <h2>{{ experience.title }}</h2>
              <strong>{{ experience.company }}</strong>
              <p>{{ experience.description }}</p>
            </article>
          </template>

          <template v-else-if="activePanel === 'lab'">
            <p class="panel-code">EXPERIMENTAL_MEMORY / UNSTABLE</p>
            <h1>Built because the idea sounded fun.</h1>
            <a
              v-for="project in labProjects"
              :key="project.title"
              :href="project.url"
              target="_blank"
              rel="noreferrer"
              class="lab-record"
            >
              <Sparkles :size="18" />
              <div>
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
              </div>
            </a>
          </template>

          <template v-else>
            <p class="panel-code">COMMUNICATION_CHANNEL / AVAILABLE</p>
            <h1>Human contact is still recommended.</h1>
            <p>
              Raphael's conversation module is in development, but Rapunzz can be reached directly.
            </p>
            <a :href="`mailto:${profile.email}`" class="contact-record"
              ><Mail :size="18" /> {{ profile.email }}</a
            >
            <a :href="profile.linkedin" target="_blank" rel="noreferrer" class="contact-record"
              >LinkedIn profile</a
            >
            <a :href="profile.github" target="_blank" rel="noreferrer" class="contact-record"
              >GitHub profile</a
            >
          </template>
        </div>
      </aside>
    </Transition>

    <aside class="archive-console" aria-live="polite">
      <span></span>
      <div>
        <small>RAPHAEL // SYSTEM MESSAGE</small>
        <p>{{ consoleText }}</p>
      </div>
    </aside>

    <nav class="archive-dock" aria-label="Archive shortcuts">
      <button
        v-for="node in nodes"
        :key="node.id"
        type="button"
        :aria-label="node.label"
        @click="openPanel(node.id)"
      >
        <component :is="node.icon" :size="20" />
      </button>
      <i></i>
      <RouterLink to="/formal"><BriefcaseBusiness :size="20" /><span>WEB</span></RouterLink>
    </nav>
  </main>
</template>

<style scoped>
.archive-world {
  position: fixed;
  inset: 0;
  overflow: hidden;
  color: #f9e7be;
  background: #130d08;
  isolation: isolate;
}
.archive-grid {
  position: absolute;
  z-index: -3;
  inset: 0;
  opacity: 0.28;
  background-image:
    linear-gradient(rgba(244, 180, 69, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(244, 180, 69, 0.08) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(circle, black, transparent 78%);
}
.archive-circuit {
  position: absolute;
  z-index: -2;
  inset: 8%;
  border: 1px solid rgba(231, 160, 42, 0.12);
  border-radius: 50%;
  box-shadow:
    0 0 100px rgba(212, 112, 8, 0.08),
    inset 0 0 100px rgba(212, 112, 8, 0.05);
}
.archive-topbar {
  position: absolute;
  z-index: 50;
  top: 0.8rem;
  right: 1rem;
  left: 1rem;
  display: grid;
  min-height: 54px;
  align-items: center;
  border: 1px solid rgba(255, 210, 128, 0.18);
  border-radius: 999px;
  padding: 0.35rem 0.55rem;
  background: rgba(24, 15, 8, 0.8);
  backdrop-filter: blur(15px);
  grid-template-columns: 1fr auto 1fr;
}
.archive-topbar > a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #d5b779;
  font-size: 0.7rem;
  font-weight: 700;
}
.archive-topbar > div {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}
.archive-topbar > div > span {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: #ffc44f;
  box-shadow: 0 0 13px #e27809;
}
.archive-topbar strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}
.archive-topbar small {
  color: #9c7b4c;
  font-family: 'Space Mono', monospace;
  font-size: 0.48rem;
}
.archive-topbar time {
  justify-self: end;
  color: #d7a34e;
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
}
.archive-stage {
  position: absolute;
  inset: 4.5rem 0 5.5rem;
  display: grid;
  place-items: center;
}
.archive-orb {
  width: min(52vw, calc(100vh - 16rem), 680px);
}
.archive-orb :deep(.raphael-scene) {
  min-height: 0;
}
.archive-mobile-heading {
  display: none;
}
.archive-ring {
  position: absolute;
  border: 1px solid rgba(234, 166, 51, 0.28);
  border-radius: 50%;
  box-shadow:
    0 0 24px rgba(220, 131, 14, 0.08),
    inset 0 0 24px rgba(220, 131, 14, 0.05);
  pointer-events: none;
}
.archive-ring--one {
  width: min(62vw, calc(100vh - 11rem), 790px);
  aspect-ratio: 1;
}
.archive-ring--two {
  width: min(76vw, calc(100vh - 5rem), 940px);
  aspect-ratio: 1;
  border-style: dashed;
}
.memory-orbit {
  position: absolute;
  width: min(88vw, 1180px);
  height: min(68vh, 680px);
  pointer-events: none;
}
.memory-node {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: #d7bd88;
  background: transparent;
  flex-direction: column;
  transform: translate(-50%, -50%);
  pointer-events: auto;
  will-change: transform;
}
.memory-node > span {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(250, 199, 103, 0.28);
  border-radius: 1rem;
  background: #21150c;
  box-shadow: 0 0 24px rgba(221, 128, 12, 0.1);
  transition:
    background-color 180ms ease,
    transform 180ms ease;
}
.memory-node strong {
  border: 1px solid rgba(250, 199, 103, 0.12);
  border-radius: 999px;
  padding: 0.28rem 0.48rem;
  color: #cdb480;
  background: rgba(28, 18, 11, 0.88);
  backdrop-filter: blur(8px);
  font-family: 'Space Mono', monospace;
  font-size: 0.52rem;
  text-transform: uppercase;
  white-space: nowrap;
}
.memory-node:hover > span,
.memory-node.active > span {
  color: #2d1905;
  background: #efad3e;
  transform: scale(1.08);
}
.memory-node--1 {
  top: 20%;
  left: 8%;
  animation: memory-node-float-x 4.8s ease-in-out infinite alternate;
}
.memory-node--2 {
  top: 50%;
  left: 3%;
  animation: memory-node-float-y 5.4s ease-in-out -1.2s infinite alternate;
}
.memory-node--3 {
  top: 80%;
  left: 8%;
  animation: memory-node-float-x 5.8s ease-in-out -2.4s infinite alternate-reverse;
}
.memory-node--4 {
  top: 20%;
  left: 92%;
  animation: memory-node-float-y 5.1s ease-in-out -0.8s infinite alternate-reverse;
}
.memory-node--5 {
  top: 50%;
  left: 97%;
  animation: memory-node-float-x 5.6s ease-in-out -1.9s infinite alternate;
}
.memory-node--6 {
  top: 80%;
  left: 92%;
  animation: memory-node-float-y 4.9s ease-in-out -3.1s infinite alternate;
}
.archive-caption {
  position: absolute;
  bottom: 7%;
  left: 50%;
  display: none;
  align-items: center;
  flex-direction: column;
  transform: translateX(-50%);
}
.archive-caption small {
  color: #8f754b;
  font-family: 'Space Mono', monospace;
  font-size: 0.48rem;
  text-transform: uppercase;
}
.archive-caption strong {
  margin-top: 0.2rem;
  color: #d9bd83;
  font-size: 0.66rem;
}
.archive-window {
  position: absolute;
  z-index: 40;
  top: 5rem;
  right: 1.25rem;
  bottom: 5.6rem;
  display: flex;
  width: min(470px, calc(100vw - 2.5rem));
  overflow: hidden;
  border: 1px solid rgba(255, 207, 116, 0.22);
  border-radius: 1.5rem;
  background: rgba(24, 15, 8, 0.95);
  box-shadow: -25px 30px 100px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(22px);
  flex-direction: column;
}
.archive-window > header {
  display: flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 211, 130, 0.13);
  padding-inline: 0.8rem;
}
.archive-window > header div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d8a957;
}
.archive-window > header span {
  font-family: 'Space Mono', monospace;
  font-size: 0.56rem;
}
.archive-window > header button {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 50%;
  color: #d5be93;
  background: transparent;
}
.archive-window__body {
  overflow-y: auto;
  padding: 1.4rem;
}
.panel-code {
  color: #b58234 !important;
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem !important;
  text-transform: uppercase;
}
.archive-window__body h1 {
  margin-top: 0.7rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.4rem;
  letter-spacing: -0.05em;
  line-height: 1;
}
.archive-window__body > p {
  margin-top: 1rem;
  color: #b9a787;
  font-size: 0.8rem;
  line-height: 1.65;
}
.archive-window blockquote {
  margin-top: 1.5rem;
  border-left: 2px solid #d59024;
  padding-left: 1rem;
  color: #ebce98;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
}
.identity-data {
  margin-top: 1.5rem;
}
.identity-data > div {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 211, 131, 0.13);
  padding-block: 0.7rem;
  gap: 1rem;
}
.identity-data dt {
  color: #917b58;
  font-size: 0.65rem;
}
.identity-data dd {
  font-size: 0.68rem;
  font-weight: 700;
  text-align: right;
}
.ability-record {
  display: grid;
  margin-top: 0.8rem;
  border: 1px solid rgba(255, 210, 126, 0.13);
  border-radius: 1rem;
  padding: 1rem;
  grid-template-columns: 30px 1fr;
}
.ability-record > span {
  color: #a57d3e;
  font-family: 'Space Mono', monospace;
  font-size: 0.58rem;
}
.ability-record h2,
.timeline-memory h2,
.lab-record h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  text-transform: capitalize;
}
.ability-record p,
.timeline-memory p,
.lab-record p {
  margin-top: 0.35rem;
  color: #a9987b;
  font-size: 0.68rem;
  line-height: 1.55;
}
.ability-record ul,
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.65rem;
  list-style: none;
}
.ability-record li,
.tech-list li {
  border-radius: 999px;
  padding: 0.25rem 0.45rem;
  color: #d3ae6a;
  background: rgba(234, 165, 48, 0.08);
  font-size: 0.56rem;
}
.project-record-tabs {
  display: flex;
  gap: 0.35rem;
  margin-top: 1rem;
  overflow-x: auto;
}
.project-record-tabs button {
  min-height: 36px;
  flex: 0 0 auto;
  border-radius: 999px;
  padding-inline: 0.6rem;
  color: #9f8b69;
  background: #281a0f;
  font-size: 0.6rem;
}
.project-record-tabs button.active {
  color: #2b1907;
  background: #e6a336;
}
.project-record-image {
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 1rem;
  aspect-ratio: 16/9;
  background: #0d0906;
}
.project-record-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.archive-window__body > a:not(.lab-record):not(.contact-record) {
  display: inline-flex;
  margin-top: 1rem;
  border-radius: 999px;
  padding: 0.55rem 0.75rem;
  color: #2b1906;
  background: #e4a238;
  font-size: 0.65rem;
  font-weight: 700;
}
.timeline-memory {
  margin-top: 0.8rem;
  border-left: 1px solid #c47d18;
  padding: 0.8rem 0 0.8rem 1rem;
}
.timeline-memory small {
  color: #a57d40;
  font-family: 'Space Mono', monospace;
  font-size: 0.52rem;
}
.timeline-memory strong {
  color: #d2b47e;
  font-size: 0.62rem;
}
.lab-record {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  margin-top: 0.75rem;
  border: 1px solid rgba(255, 211, 128, 0.14);
  border-radius: 1rem;
  padding: 0.9rem;
  color: #d9a64f;
}
.contact-record {
  display: flex;
  min-height: 46px;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.7rem;
  border: 1px solid rgba(255, 209, 119, 0.14);
  border-radius: 0.8rem;
  padding-inline: 0.75rem;
  color: #d7bd8e;
  font-size: 0.68rem;
}
.archive-console {
  position: absolute;
  z-index: 30;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  width: min(390px, calc(100vw - 9rem));
  min-height: 58px;
  align-items: center;
  gap: 0.65rem;
  border: 1px solid rgba(255, 210, 125, 0.16);
  border-radius: 1rem;
  padding: 0.55rem 0.7rem;
  background: rgba(24, 15, 8, 0.88);
  backdrop-filter: blur(15px);
}
.archive-console > span {
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 3%, #ffc44e 37%, #a73b04 100%);
  box-shadow: 0 0 18px rgba(234, 137, 17, 0.55);
}
.archive-console small {
  color: #a98040;
  font-family: 'Space Mono', monospace;
  font-size: 0.48rem;
}
.archive-console p {
  margin-top: 0.15rem;
  overflow: hidden;
  color: #c9b086;
  font-size: 0.62rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.archive-dock {
  position: absolute;
  z-index: 45;
  bottom: 0.75rem;
  left: 50%;
  display: flex;
  min-height: 62px;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid rgba(255, 211, 127, 0.2);
  border-radius: 1rem;
  padding: 0.4rem;
  background: rgba(26, 16, 9, 0.92);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
  transform: translateX(-50%);
}
.archive-dock button,
.archive-dock a {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 0.7rem;
  color: #c7ae81;
  background: #2a1b10;
}
.archive-dock button:hover {
  color: #2d1906;
  background: #e7a43a;
}
.archive-dock i {
  width: 1px;
  height: 30px;
  margin-inline: 0.25rem;
  background: rgba(255, 216, 144, 0.16);
}
.archive-dock a {
  position: relative;
  color: #2d1906;
  background: #e7a43a;
}
.archive-dock a span {
  position: absolute;
  top: -14px;
  color: #d9b46f;
  font-family: 'Space Mono', monospace;
  font-size: 0.45rem;
}
.archive-panel-enter-active,
.archive-panel-leave-active {
  transition:
    opacity 260ms ease,
    transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
}
.archive-panel-enter-from,
.archive-panel-leave-to {
  opacity: 0;
  transform: translateX(35px);
}
@keyframes memory-node-float-x {
  from {
    transform: translate(-50%, -50%) translateX(-7px);
  }
  to {
    transform: translate(-50%, -50%) translateX(7px);
  }
}
@keyframes memory-node-float-y {
  from {
    transform: translate(-50%, -50%) translateY(-7px);
  }
  to {
    transform: translate(-50%, -50%) translateY(7px);
  }
}
@media (max-width: 900px) {
  .archive-stage {
    inset-inline: 0;
  }
  .archive-orb {
    width: min(72vw, calc(100vh - 14rem), 540px);
  }
  .archive-ring--one {
    width: min(84vw, calc(100vh - 8rem), 650px);
  }
  .archive-ring--two {
    display: none;
  }
  .memory-orbit {
    width: 92vw;
    height: min(64vh, 590px);
  }
  .memory-node strong {
    display: none;
  }
  .archive-caption {
    display: none;
  }
  .archive-console {
    display: none;
  }
}
@media (max-width: 600px) {
  .archive-circuit {
    display: none;
  }
  .archive-topbar {
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
    min-height: 50px;
    grid-template-columns: 1fr auto;
  }
  .archive-topbar > div {
    display: none;
  }
  .archive-window {
    top: 4.25rem;
    right: 0.55rem;
    bottom: 4.75rem;
    width: calc(100vw - 1.1rem);
  }
  .archive-stage {
    inset: auto;
    top: 50%;
    left: 50%;
    width: min(calc(100vw - 1rem), calc(100dvh - 10rem), 430px);
    height: min(calc(100vw - 1rem), calc(100dvh - 10rem), 430px);
    min-width: 0;
    overflow: hidden;
    border: 1px solid rgba(239, 166, 48, 0.25);
    border-radius: 1.35rem;
    background:
      linear-gradient(90deg, rgba(241, 174, 60, 0.5) 20px, transparent 20px) top left / 58px 1px
        no-repeat,
      linear-gradient(rgba(241, 174, 60, 0.5) 20px, transparent 20px) top left / 1px 58px no-repeat,
      linear-gradient(270deg, rgba(241, 174, 60, 0.5) 20px, transparent 20px) bottom right / 58px
        1px no-repeat,
      linear-gradient(0deg, rgba(241, 174, 60, 0.5) 20px, transparent 20px) bottom right / 1px 58px
        no-repeat,
      radial-gradient(circle, rgba(119, 61, 9, 0.14), rgba(17, 11, 7, 0.54) 68%);
    box-shadow:
      inset 0 0 55px rgba(209, 104, 7, 0.07),
      0 24px 70px rgba(0, 0, 0, 0.28);
    transform: translate(-50%, -50%);
  }
  .archive-orb {
    width: 74%;
    max-width: 100%;
    margin-inline: auto;
  }
  .archive-mobile-heading {
    position: absolute;
    z-index: 2;
    top: 0.9rem;
    right: 1rem;
    left: 1rem;
    display: flex;
    align-items: center;
    color: #9b8157;
    text-align: center;
    flex-direction: column;
  }
  .archive-mobile-heading span {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.43rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .archive-mobile-heading span i {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #ffc24d;
    box-shadow: 0 0 9px #d86e08;
  }
  .archive-mobile-heading strong {
    margin-top: 0.25rem;
    color: #f0ca7e;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1rem, 5vw, 1.25rem);
    letter-spacing: 0.16em;
  }
  .archive-mobile-heading small {
    margin-top: 0.1rem;
    color: #725b3a;
    font-family: 'Space Mono', monospace;
    font-size: 0.4rem;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }
  .archive-caption {
    z-index: 2;
    bottom: 0.9rem;
    display: flex;
    width: calc(100% - 2rem);
    border-top: 1px solid rgba(239, 174, 66, 0.15);
    padding-top: 0.65rem;
    text-align: center;
  }
  .archive-caption small {
    font-size: 0.42rem;
    letter-spacing: 0.1em;
  }
  .archive-caption strong {
    margin-top: 0.16rem;
    color: #e1bd76;
    font-family: 'Space Mono', monospace;
    font-size: 0.52rem;
    letter-spacing: 0.04em;
  }
  .archive-ring {
    display: none;
  }
  .memory-node {
    display: none;
  }
  .memory-orbit {
    display: none;
  }
  .archive-dock {
    bottom: 0.5rem;
    display: grid;
    width: calc(100vw - 1rem);
    max-width: 390px;
    min-height: 56px;
    gap: clamp(0.1rem, 0.8vw, 0.3rem);
    padding: 0.3rem;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .archive-dock button,
  .archive-dock a {
    width: 100%;
    max-width: 42px;
    height: 42px;
    min-width: 0;
    justify-self: center;
  }
  .archive-dock i {
    display: none;
  }
  .archive-window__body h1 {
    font-size: 2rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .memory-orbit,
  .memory-node {
    animation: none;
  }
  .archive-panel-enter-active,
  .archive-panel-leave-active {
    transition: none;
  }
}
</style>
