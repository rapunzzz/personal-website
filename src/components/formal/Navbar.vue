<script setup lang="ts">
import { ArrowLeft, Menu, X } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
const activeSection = ref('home')
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
let observer: IntersectionObserver | undefined

const closeMenu = () => {
  isMobileMenuOpen.value = false
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  const sections = ['home', ...navItems.map((item) => item.href.slice(1))]
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) activeSection.value = visible.target.id
    },
    { rootMargin: '-20% 0px -65% 0px' },
  )
  sections.forEach((id) => {
    const section = document.getElementById(id)
    if (section) observer?.observe(section)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <nav class="page-shell nav-shell" aria-label="Primary navigation">
      <a href="#home" class="wordmark" aria-label="Thaariq home" @click="closeMenu">
        RAPUNZZ<span>.</span>
      </a>

      <div class="desktop-nav">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :aria-current="activeSection === item.href.slice(1) ? 'location' : undefined"
        >
          <span v-if="activeSection === item.href.slice(1)" class="active-dot"></span>
          {{ item.name }}
        </a>
      </div>

      <div class="nav-actions">
        <RouterLink to="/world" class="world-link">
          <ArrowLeft :size="15" /> Back to world
        </RouterLink>
        <button
          class="menu-button"
          type="button"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <X v-if="isMobileMenuOpen" :size="21" aria-hidden="true" />
          <Menu v-else :size="21" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <div v-if="isMobileMenuOpen" id="mobile-navigation" class="mobile-nav glass-panel">
      <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
        {{ item.name }}
      </a>
      <RouterLink to="/world" @click="closeMenu"> Back to world </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.skip-link {
  position: fixed;
  z-index: 100;
  top: 0.75rem;
  left: 0.75rem;
  border-radius: 999px;
  padding: 0.65rem 1rem;
  color: white;
  background: #2c2116;
  transform: translateY(-160%);
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  left: 0;
  padding-block: 1rem;
  transition: padding 200ms ease;
}

.site-header--scrolled {
  padding-block: 0.55rem;
}

.nav-shell {
  display: grid;
  min-height: 64px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  padding: 0.45rem 0.55rem 0.45rem 1.25rem;
  background: rgba(255, 252, 243, 0.74);
  box-shadow: 0 14px 42px rgba(113, 75, 21, 0.1);
  backdrop-filter: blur(20px) saturate(150%);
  grid-template-columns: 1fr auto 1fr;
}

.wordmark {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.wordmark span {
  color: #d58a19;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.desktop-nav a {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: #796a57;
  font-size: 0.9rem;
  font-weight: 700;
}

.desktop-nav a:hover,
.desktop-nav a[aria-current='location'] {
  color: #251d16;
}

.active-dot {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: #eca72e;
  box-shadow: 0 0 10px rgba(236, 167, 46, 0.75);
}

.nav-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.4rem;
}

.menu-button,
.world-link {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.world-link {
  gap: 0.35rem;
  padding-inline: 0.8rem;
  color: #925a0d;
  background: rgba(255, 232, 176, 0.58);
  font-size: 0.75rem;
  font-weight: 700;
  transition:
    color 180ms ease,
    background-color 180ms ease;
}

.world-link:hover {
  color: #fffaf0;
  background: #925a0d;
}

.menu-button {
  display: none;
  width: 46px;
  color: #251d16;
  background: rgba(255, 255, 255, 0.8);
}

.mobile-nav {
  width: min(100% - 1.25rem, 420px);
  margin: 0.65rem auto 0;
  overflow: hidden;
  border-radius: 1.5rem;
}

.mobile-nav a,
.mobile-nav button {
  display: flex;
  width: 100%;
  min-height: 54px;
  align-items: center;
  gap: 0.55rem;
  border-bottom: 1px solid rgba(151, 105, 34, 0.13);
  padding-inline: 1.25rem;
  color: #251d16;
  background: transparent;
  font-weight: 700;
}

@media (max-width: 820px) {
  .nav-shell {
    grid-template-columns: 1fr auto;
  }

  .desktop-nav,
  .world-link {
    display: none;
  }

  .menu-button {
    display: inline-flex;
  }
}
</style>
