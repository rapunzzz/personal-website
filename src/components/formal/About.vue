<script setup lang="ts">
import { profile, skillGroups } from '@/data/portfolio'
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
    </div>

    <div class="page-shell technical-index" aria-label="Technical toolkit">
      <header class="technical-index__heading" data-reveal>
        <div>
          <p class="eyebrow">Technical toolkit</p>
          <h3>Tools selected for the work.</h3>
        </div>
        <p>
          A practical stack across interface, application logic, and data. Grouped by where each
          tool contributes most.
        </p>
      </header>

      <div class="technical-index__list">
        <article
          v-for="(group, index) in skillGroups"
          :key="group.title"
          class="technical-row"
          data-capability-card
        >
          <span class="technical-row__index">0{{ index + 1 }}</span>
          <div class="technical-row__summary">
            <h4>{{ group.title }}</h4>
            <p>{{ group.description }}</p>
          </div>
          <ul class="technical-row__tools">
            <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
          </ul>
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
.technical-index {
  margin-top: clamp(6rem, 10vw, 9rem);
}
.technical-index__heading {
  display: grid;
  align-items: end;
  border-bottom: 1px solid rgba(151, 105, 34, 0.22);
  padding-bottom: 1.5rem;
  grid-template-columns: 1fr minmax(280px, 0.7fr);
  gap: 3rem;
}
.technical-index__heading h3 {
  margin-top: 0.75rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  letter-spacing: -0.055em;
  line-height: 1;
}
.technical-index__heading > p {
  color: #766953;
  line-height: 1.7;
}
.technical-row {
  display: grid;
  align-items: start;
  border-bottom: 1px solid rgba(151, 105, 34, 0.18);
  padding-block: 2rem;
  grid-template-columns: 72px minmax(230px, 0.75fr) 1fr;
  gap: clamp(1rem, 3vw, 3rem);
}
.technical-row__index {
  color: #a47c43;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
}
.technical-row__summary h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  letter-spacing: -0.035em;
}
.technical-row__summary p {
  max-width: 390px;
  margin-top: 0.45rem;
  color: #796b58;
  font-size: 0.82rem;
  line-height: 1.65;
}
.technical-row__tools {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem 0.65rem;
  list-style: none;
}
.technical-row__tools li {
  display: inline-flex;
  align-items: center;
  color: #3f3021;
  font-size: clamp(0.82rem, 1.2vw, 0.95rem);
  font-weight: 600;
}
.technical-row__tools li:not(:last-child)::after {
  margin-left: 0.65rem;
  color: #d49a45;
  content: '/';
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
  .technical-index__heading {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .technical-row {
    grid-template-columns: 52px 1fr;
  }
  .technical-row__tools {
    grid-column: 2;
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
  .technical-row {
    padding-block: 1.5rem;
    grid-template-columns: 36px 1fr;
    gap: 0.75rem;
  }
}
</style>
