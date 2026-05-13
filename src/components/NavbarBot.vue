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
const isMobileMenuOpen = ref(false)

const handleClick = (e: MouseEvent, href: string) => {
  e.preventDefault()
  isMobileMenuOpen.value = false

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
  <!-- Top Navigation Bar -->
  <nav
    id="main-nav"
    class="fixed top-0 left-0 w-full z-50 bg-nb-white border-b-[3px] border-nb-black"
    style="box-shadow: #000000 0px 4px 0px 0px"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex items-center justify-between h-[68px]">
        <!-- Logo -->
        <a
          href="#home"
          @click="(e: MouseEvent) => handleClick(e, '#home')"
          class="font-syne font-extrabold text-xl sm:text-2xl tracking-tight text-nb-black hover:text-nb-coral transition-colors"
        >
          THAARIQ<span class="text-nb-coral">.</span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="(e: MouseEvent) => handleClick(e, item.href)"
            :class="[
              'font-space-grotesk font-bold text-sm px-4 py-2 border-[3px] transition-all',
              activeSection === item.href.replace('#', '')
                ? 'bg-nb-yellow border-nb-black text-nb-black'
                : 'bg-transparent border-transparent text-nb-black hover:border-nb-black',
            ]"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden w-12 h-12 border-[3px] border-nb-black flex items-center justify-center hover:bg-nb-yellow transition-colors"
          aria-label="Toggle menu"
        >
          <div class="flex flex-col gap-1.5" v-if="!isMobileMenuOpen">
            <span class="w-5 h-[3px] bg-nb-black block"></span>
            <span class="w-5 h-[3px] bg-nb-black block"></span>
            <span class="w-5 h-[3px] bg-nb-black block"></span>
          </div>
          <span v-else class="font-syne font-extrabold text-lg">✕</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-nb-white border-t-[3px] border-nb-black"
    >
      <div class="flex flex-col">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click="(e: MouseEvent) => handleClick(e, item.href)"
          :class="[
            'font-space-grotesk font-bold text-lg px-6 py-4 border-b-[3px] border-nb-black transition-all',
            activeSection === item.href.replace('#', '')
              ? 'bg-nb-yellow text-nb-black'
              : 'bg-nb-white text-nb-black hover:bg-nb-yellow',
          ]"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>
