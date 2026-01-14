<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const activeSection = ref('home')

const handleClick = (e: MouseEvent, href: string) => {
  e.preventDefault()

  const id = href.replace('#', '')
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

let observer: IntersectionObserver | null = null

const setupObserver = () => {
  const sectionIds = navItems.map((item) => item.href.replace('#', ''))

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  }

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }

  observer = new IntersectionObserver(observerCallback, observerOptions)

  let foundCount = 0
  sectionIds.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      observer?.observe(element)
      foundCount++
    }
  })

  if (foundCount === 0) {
    setTimeout(setupObserver, 100)
  }
}

onMounted(() => {
  setupObserver()
  setTimeout(setupObserver, 200)
  window.addEventListener('load', setupObserver)
})

onUnmounted(() => {
  window.removeEventListener('load', setupObserver)

  if (observer) {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer?.unobserve(element)
      }
    })

    observer.disconnect()
  }
})
</script>

<template>
  <nav class="fixed bottom-3 left-1/2 -translate-x-1/2 px-2 sm:bottom-8 sm:px-4 z-50">
    <div
      v-motion
      :initial="{ y: 100, opacity: 0 }"
      :enter="{ y: 0, opacity: 1, transition: { duration: 600, delay: 300 } }"
      class="flex items-center justify-center gap-0.5 rounded-full bg-white/90 backdrop-blur-lg px-1.5 py-1.5 shadow-2xl border border-gray-200 sm:gap-2 sm:px-3 sm:py-2"
    >
      <a
        v-for="item in navItems"
        :key="item.name"
        :href="item.href"
        @click="(e) => handleClick(e, item.href)"
        :class="[
          'group relative flex items-center justify-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 text-xs sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm',
          activeSection === item.href.replace('#', '')
            ? 'text-white'
            : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50',
        ]"
      >
        <!-- Active background -->
        <span
          v-if="activeSection === item.href.replace('#', '')"
          class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-lg -z-10 animate-fade-in"
        ></span>

        <!-- Hover indicator -->
        <span
          v-else
          class="absolute inset-0 rounded-full bg-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        ></span>

        <!-- Text -->
        <span class="font-semibold relative z-10 whitespace-nowrap">{{ item.name }}</span>

        <!-- Active dot indicator -->
        <span
          v-if="activeSection === item.href.replace('#', '')"
          class="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white"></span>
        </span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
