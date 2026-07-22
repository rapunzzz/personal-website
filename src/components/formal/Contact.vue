<script setup lang="ts">
import { profile } from '@/data/portfolio'
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-vue-next'
import { computed, ref } from 'vue'

const name = ref('')
const message = ref('')
const mailtoLink = computed(() => {
  const subject = encodeURIComponent(`Portfolio inquiry from ${name.value || 'a website visitor'}`)
  const body = encodeURIComponent(`${message.value}\n\nFrom: ${name.value}`)
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
})
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-orb" aria-hidden="true"></div>
    <div class="page-shell section-space">
      <div class="contact-heading" data-reveal>
        <p class="eyebrow">04 / Open channel</p>
        <h2 class="section-title text-balance">Reached the edge of my little universe?</h2>
        <p>Leave a signal. I would love to hear yours.</p>
      </div>

      <div class="contact-layout">
        <div class="contact-details" data-reveal>
          <p>
            Whether you came for the projects, the glowing companion, or simple curiosity, the
            channel stays open for opportunities, collaborations, and unexpected ideas.
          </p>
          <a :href="`mailto:${profile.email}`" class="contact-link">
            <span><Mail :size="18" /></span>
            <div>
              <small>Email</small><strong>{{ profile.email }}</strong>
            </div>
          </a>
          <div class="contact-link contact-link--static">
            <span><MapPin :size="18" /></span>
            <div>
              <small>Based in</small><strong>{{ profile.location }}</strong>
            </div>
          </div>
          <div class="contact-socials">
            <a :href="profile.github" target="_blank" rel="noreferrer"
              ><Github :size="17" /> GitHub</a
            >
            <a :href="profile.linkedin" target="_blank" rel="noreferrer"
              ><Linkedin :size="17" /> LinkedIn</a
            >
          </div>
        </div>

        <form class="contact-composer glass-panel" data-reveal @submit.prevent>
          <div class="composer-header">
            <div><MessageCircle :size="20" /><span>Compose an introduction</span></div>
            <small>Opens your email app</small>
          </div>
          <label for="contact-name">Your name</label>
          <input
            id="contact-name"
            v-model="name"
            type="text"
            placeholder="How should I address you?"
            required
          />
          <label for="contact-message">What would you like to discuss?</label>
          <textarea
            id="contact-message"
            v-model="message"
            rows="5"
            placeholder="A role, project, collaboration, or a simple hello..."
            required
          ></textarea>
          <a
            :href="mailtoLink"
            class="luminous-button"
            :aria-disabled="!name || !message"
            @click="(!name || !message) && $event.preventDefault()"
          >
            Continue in email <ArrowUpRight :size="18" />
          </a>
        </form>
      </div>
    </div>

    <footer>
      <div class="page-shell footer-layout">
        <div>
          <strong>RAPUNZZ<span>.</span></strong>
          <p>Curiosity turned into pixels.</p>
        </div>
        <p>
          © {{ new Date().getFullYear() }} {{ profile.name }}. Designed and built with intention.
        </p>
        <a href="#home">Back to top <ArrowUp :size="15" /></a>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(250, 241, 218, 0.48), #fbf7ed);
}
.contact-orb {
  position: absolute;
  right: -18rem;
  bottom: 10rem;
  width: 38rem;
  height: 38rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.9) 0 3%,
    rgba(255, 201, 80, 0.24) 25%,
    rgba(213, 138, 25, 0.1) 48%,
    transparent 70%
  );
  filter: blur(2px);
}
.contact-heading {
  text-align: center;
}
.contact-heading .eyebrow {
  justify-content: center;
}
.contact-heading .section-title {
  margin-inline: auto;
}
.contact-heading > p:last-child {
  margin-top: 1.5rem;
  color: #9a681e;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.3rem, 2.5vw, 2rem);
}
.contact-layout {
  position: relative;
  display: grid;
  align-items: start;
  max-width: 1050px;
  margin: 5rem auto 0;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(2rem, 6vw, 5rem);
}
.contact-details > p {
  margin-bottom: 2rem;
  color: #746754;
  font-size: 1rem;
  line-height: 1.8;
}
.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid rgba(151, 105, 34, 0.15);
  padding-block: 1rem;
}
.contact-link > span {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 50%;
  color: #ad6a0a;
  background: rgba(255, 241, 207, 0.82);
}
.contact-link div {
  display: flex;
  min-width: 0;
  flex-direction: column;
}
.contact-link small {
  color: #897b67;
  font-size: 0.68rem;
}
.contact-link strong {
  overflow-wrap: anywhere;
  font-size: 0.88rem;
}
.contact-socials {
  display: flex;
  gap: 0.65rem;
  margin-top: 1.5rem;
}
.contact-socials a {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding-inline: 0.9rem;
  color: #6f5d43;
  background: rgba(255, 255, 255, 0.7);
  font-size: 0.78rem;
  font-weight: 700;
}
.contact-composer {
  display: flex;
  border-radius: 1.7rem;
  padding: clamp(1.25rem, 4vw, 2rem);
  flex-direction: column;
}
.composer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
.composer-header > div {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: #a9670d;
}
.composer-header span {
  color: #4c3821;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
}
.composer-header small {
  color: #958671;
  font-size: 0.65rem;
}
.contact-composer label {
  margin: 0.7rem 0 0.45rem;
  color: #75654e;
  font-size: 0.72rem;
  font-weight: 700;
}
.contact-composer input,
.contact-composer textarea {
  width: 100%;
  border: 1px solid rgba(151, 105, 34, 0.18);
  border-radius: 0.9rem;
  outline: 0;
  padding: 0.85rem 1rem;
  color: #251d16;
  background: rgba(255, 255, 255, 0.72);
  resize: vertical;
}
.contact-composer input:focus,
.contact-composer textarea:focus {
  border-color: #d58a19;
  box-shadow: 0 0 0 3px rgba(213, 138, 25, 0.12);
}
.contact-composer .luminous-button {
  align-self: flex-start;
  margin-top: 1.25rem;
}
.contact-composer .luminous-button[aria-disabled='true'] {
  cursor: not-allowed;
  opacity: 0.45;
}
footer {
  position: relative;
  border-top: 1px solid rgba(151, 105, 34, 0.14);
  padding-block: 2rem;
  background: rgba(255, 255, 255, 0.45);
}
.footer-layout {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
}
.footer-layout > div strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
}
.footer-layout > div strong span {
  color: #d58a19;
}
.footer-layout > div p,
.footer-layout > p {
  color: #8f806a;
  font-size: 0.66rem;
}
.footer-layout > p {
  text-align: center;
}
.footer-layout > a {
  display: inline-flex;
  align-items: center;
  justify-self: end;
  gap: 0.35rem;
  color: #99651d;
  font-size: 0.72rem;
  font-weight: 700;
}
@media (max-width: 800px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
  .footer-layout {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-layout > a {
    justify-self: center;
  }
}
@media (max-width: 520px) {
  .composer-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.3rem;
  }
  .contact-socials {
    flex-direction: column;
  }
  .contact-socials a {
    justify-content: center;
  }
  .contact-composer .luminous-button {
    width: 100%;
  }
}
</style>
