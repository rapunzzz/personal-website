<script setup lang="ts">
import About from '@/components/formal/About.vue'
import Contact from '@/components/formal/Contact.vue'
import Experience from '@/components/formal/Experience.vue'
import Hero from '@/components/formal/Hero.vue'
import Project from '@/components/formal/Project.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const root = ref<HTMLElement | null>(null)
let context: gsap.Context | undefined

onMounted(() => {
  if (!root.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  context = gsap.context(() => {
    gsap.to('.scroll-progress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
    })

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 36,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 84%', once: true },
      })
    })

    gsap.from('[data-capability-card]', {
      opacity: 0,
      y: 42,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '[data-capability-card]', start: 'top 82%', once: true },
    })

    gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 ? 80 : -80,
        rotate: index % 2 ? 1.5 : -1.5,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 84%', once: true },
      })
    })

    gsap.utils
      .toArray<HTMLElement>('[data-project-card], [data-project-detail]')
      .forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          rotate: index % 2 ? 3 : -3,
          scale: 0.92,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 82%', once: true },
        })
      })

    gsap.from('.contact-orb', {
      scale: 0.1,
      rotate: -90,
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'center center', scrub: 1 },
    })
  }, root.value)
})

onBeforeUnmount(() => {
  context?.revert()
})
</script>

<template>
  <main id="main-content" ref="root">
    <div class="scroll-progress" aria-hidden="true"></div>
    <Hero />
    <About />
    <Experience />
    <Project />
    <Contact />
  </main>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  z-index: 80;
  top: 0;
  right: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #d6750c, #ffd96d, #d6750c);
  box-shadow: 0 0 14px rgba(230, 140, 18, 0.7);
  transform: scaleX(0);
  transform-origin: left;
}
</style>
