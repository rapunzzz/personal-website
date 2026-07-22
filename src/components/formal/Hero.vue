<script setup lang="ts">
import { profile } from '@/data/portfolio'
import { FileDown, Github, Linkedin, Mail } from 'lucide-vue-next'

const cvUrl = '/documents/thaariq-kurnia-cv.pdf'

const facts = [
  { value: 'Full-stack', label: 'Development focus' },
  { value: 'Information Systems', label: 'Academic background' },
  { value: profile.location, label: 'Current location' },
  { value: profile.availability, label: 'Opportunity status' },
]
</script>

<template>
  <section id="home" class="formal-hero">
    <div class="page-shell formal-hero__inner">
      <div class="formal-hero__lead">
        <div class="formal-hero__copy">
          <p class="eyebrow">Full-Stack Developer · {{ profile.location }}</p>
          <h1 class="text-balance">
            I build reliable digital products
            <span>from interface to infrastructure.</span>
          </h1>
          <p class="formal-hero__intro">{{ profile.introduction }}</p>

          <div class="formal-hero__actions">
            <a href="#projects" class="luminous-button"> View selected work </a>
            <a :href="cvUrl" class="quiet-button" target="_blank" rel="noreferrer">
              <FileDown :size="17" aria-hidden="true" /> Download CV
            </a>
          </div>

          <div class="formal-hero__socials">
            <span>Profiles</span>
            <a :href="profile.github" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github :size="18" /> GitHub
            </a>
            <a
              :href="profile.linkedin"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin :size="18" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <dl class="formal-facts">
        <div v-for="fact in facts" :key="fact.label">
          <dt>{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.formal-hero {
  min-height: 100svh;
  padding-block: 9rem 3rem;
  background: #fbf7ed;
}

.formal-hero__inner {
  display: flex;
  min-height: calc(100svh - 12rem);
  justify-content: center;
  flex-direction: column;
}

.formal-hero__copy {
  max-width: 1100px;
}

.formal-hero__lead {
  display: block;
}

.formal-hero h1 {
  max-width: 1080px;
  margin-top: 1.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.5rem, 7.4vw, 7.8rem);
  font-weight: 600;
  letter-spacing: -0.075em;
  line-height: 0.92;
}

.formal-hero h1 span {
  display: block;
  margin-top: 0.08em;
  color: #8e775d;
  font-weight: 500;
}

.formal-hero__intro {
  max-width: 670px;
  margin-top: 2rem;
  color: #6f6253;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.75;
}

.formal-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.formal-hero__contact {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  gap: 0.45rem;
  padding-inline: 0.6rem;
  color: #755e43;
  font-size: 0.8rem;
  font-weight: 700;
}

.formal-hero__socials {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 2.25rem;
}

.formal-hero__socials > span {
  margin-right: 0.25rem;
  color: #917d64;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.formal-hero__socials a {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid rgba(151, 105, 34, 0.16);
  border-radius: 999px;
  padding-inline: 0.75rem;
  color: #6d5a43;
  background: rgba(255, 255, 255, 0.56);
  font-size: 0.7rem;
  font-weight: 700;
  transition:
    color 180ms ease,
    background-color 180ms ease,
    transform 180ms ease;
}

.formal-hero__socials a:hover {
  color: #fffaf0;
  background: #2c2116;
  transform: translateY(-2px);
}

.formal-facts {
  display: grid;
  margin-top: clamp(4rem, 8vw, 7rem);
  border-top: 1px solid rgba(151, 105, 34, 0.16);
  border-bottom: 1px solid rgba(151, 105, 34, 0.16);
  padding-block: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.formal-facts > div {
  display: flex;
  min-width: 0;
  border-right: 1px solid rgba(151, 105, 34, 0.13);
  padding-inline: 1rem;
  flex-direction: column;
}

.formal-facts > div:first-child {
  padding-left: 0;
}

.formal-facts > div:last-child {
  border-right: 0;
}

.formal-facts dt {
  color: #948169;
  font-size: 0.62rem;
}

.formal-facts dd {
  margin-top: 0.2rem;
  overflow: hidden;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 760px) {
  .formal-hero {
    min-height: auto;
    padding-block: 7.5rem 3rem;
  }

  .formal-hero__inner {
    min-height: 0;
  }

  .formal-hero h1 {
    font-size: clamp(3rem, 13vw, 5rem);
  }

  .formal-facts {
    grid-template-columns: repeat(2, 1fr);
  }

  .formal-facts > div {
    border-right: 0;
    padding: 0.75rem;
  }

  .formal-facts > div:first-child {
    padding-left: 0.75rem;
  }
}

@media (max-width: 520px) {
  .formal-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .formal-hero__actions > * {
    width: 100%;
  }

  .formal-hero__contact {
    justify-content: center;
  }

  .formal-hero__socials {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .formal-hero__socials > span {
    width: 100%;
  }

  .formal-facts {
    grid-template-columns: 1fr;
  }
}
</style>
