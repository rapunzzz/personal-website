<script setup lang="ts">
import { education, experiences } from '@/data/portfolio'
import { GraduationCap, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <section id="experience" class="section-space experience-section">
    <div class="experience-light" aria-hidden="true"></div>
    <div class="page-shell">
      <div data-reveal>
        <p class="eyebrow">02 / Signal timeline</p>
        <h2 class="section-title text-balance">
          Learning through systems, teams, and real constraints.
        </h2>
      </div>

      <div class="experience-layout">
        <div class="timeline" data-timeline>
          <article v-for="experience in experiences" :key="experience.title" class="timeline-item">
            <div class="timeline-node"><span></span></div>
            <div class="timeline-period">{{ experience.period }}</div>
            <div class="timeline-content glass-panel">
              <span>{{ experience.type }}</span>
              <h3>{{ experience.title }}</h3>
              <h4>{{ experience.company }}</h4>
              <p>{{ experience.description }}</p>
              <div><Sparkles :size="15" /> {{ experience.impact }}</div>
            </div>
          </article>
        </div>

        <aside class="education-panel glass-panel" data-reveal>
          <div class="education-heading"><GraduationCap :size="22" /><span>Education</span></div>
          <article v-for="item in education" :key="item.degree">
            <span>{{ item.period }}</span>
            <h3>{{ item.degree }}</h3>
            <p>{{ item.institution }}</p>
            <small>{{ item.location }}</small>
          </article>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  position: relative;
  overflow: hidden;
  background: rgba(249, 239, 216, 0.5);
}
.experience-light {
  position: absolute;
  top: 10%;
  right: -10rem;
  width: 32rem;
  height: 32rem;
  border-radius: 50%;
  background: rgba(242, 178, 61, 0.18);
  filter: blur(100px);
}
.experience-layout {
  position: relative;
  display: grid;
  align-items: start;
  margin-top: 5rem;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.65fr);
  gap: clamp(2rem, 6vw, 6rem);
}
.timeline {
  position: relative;
}
.timeline::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 6px;
  width: 1px;
  background: linear-gradient(#d58a19, rgba(213, 138, 25, 0.08));
  content: '';
  transform-origin: top;
}
.timeline-item {
  position: relative;
  display: grid;
  padding-bottom: 2.5rem;
  padding-left: 2.25rem;
  grid-template-columns: 130px 1fr;
  gap: 1rem;
}
.timeline-node {
  position: absolute;
  top: 0.3rem;
  left: 0;
  display: grid;
  width: 13px;
  height: 13px;
  place-items: center;
  border: 1px solid #5bb9ed;
  border-radius: 50%;
  background: #fff5d8;
  box-shadow: 0 0 18px rgba(229, 161, 43, 0.55);
}
.timeline-node span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #d58a19;
}
.timeline-period {
  padding-top: 0.95rem;
  color: #658198;
  font-family: 'Space Mono', monospace;
  font-size: 0.67rem;
  line-height: 1.5;
}
.timeline-content {
  border-radius: 1.4rem;
  padding: 1.5rem;
}
.timeline-content > span {
  color: #a9680d;
  font-family: 'Space Mono', monospace;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.timeline-content h3 {
  margin-top: 0.6rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.35rem;
  letter-spacing: -0.035em;
}
.timeline-content h4 {
  margin-top: 0.15rem;
  color: #52718b;
  font-size: 0.85rem;
  font-weight: 600;
}
.timeline-content p {
  margin-top: 1rem;
  color: #61788d;
  font-size: 0.88rem;
  line-height: 1.7;
}
.timeline-content > div {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  margin-top: 1rem;
  color: #a5660d;
  font-size: 0.75rem;
  font-weight: 700;
}
.timeline-content > div svg {
  flex: 0 0 auto;
  margin-top: 0.1rem;
}
.education-panel {
  position: sticky;
  top: 7rem;
  border-radius: 1.6rem;
  padding: 1.5rem;
}
.education-heading {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: #a56811;
}
.education-heading span {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.education-panel article {
  border-bottom: 1px solid rgba(151, 105, 34, 0.14);
  padding-block: 1.5rem;
}
.education-panel article > span {
  color: #6b86a0;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
}
.education-panel h3 {
  margin-top: 0.45rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
}
.education-panel article p {
  margin-top: 0.25rem;
  color: #577188;
  font-size: 0.85rem;
}
.education-panel small {
  color: #8294a6;
  font-size: 0.72rem;
}
.learning-note {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding-top: 1.5rem;
}
.learning-note img {
  width: 58px;
  height: 58px;
  flex: 0 0 auto;
  border-radius: 1rem;
  object-fit: contain;
  background: linear-gradient(135deg, #e5faff, #e6e5ff);
}
.learning-note p {
  color: #668096;
  font-size: 0.74rem;
  line-height: 1.55;
}
.learning-note strong {
  color: #26465f;
  font-size: 0.8rem;
}
@media (max-width: 900px) {
  .experience-layout {
    grid-template-columns: 1fr;
  }
  .education-panel {
    position: static;
  }
}
@media (max-width: 600px) {
  .timeline-item {
    padding-left: 1.75rem;
    grid-template-columns: 1fr;
  }
  .timeline-period {
    padding-top: 0;
  }
}
</style>
