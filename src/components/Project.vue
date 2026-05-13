<script setup lang="ts">
import { ref } from 'vue'
import { ExternalLink, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-vue-next'

const projects = [
  {
    title: '70e-Con',
    description:
      'A Learning Management System designed to support students in managing courses, tracking academic rankings, and evaluating performance effectively.',
    image: '/images/70econ.png',
    tech: ['Next.js', 'Express.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL'],
    live: 'https://70e-con.vercel.app/',
    featured: false,
    accentColor: 'bg-nb-yellow',
  },
  {
    title: 'PacilFlix',
    description:
      'A simplified movie streaming application featuring movie listings, trailers, and subscription management.',
    image: '/images/PacilFlix.png',
    tech: ['Django', 'Python', 'SQLite'],
    live: '#',
    featured: false,
    accentColor: 'bg-nb-coral',
  },
  {
    title: 'HistorySphere',
    description:
      'An Educational Application designed to help users learn history in an interactive and engaging way.',
    image: '/images/HistorySphere.png',
    tech: ['Figma'],
    live: '#',
    featured: false,
    accentColor: 'bg-nb-blue',
  },
]

const funProjects = [
  {
    title: 'DateMate',
    url: 'https://datemate-fun.netlify.app/',
    description: 'A random date-idea spinner to help you decide fun activities.',
  },
  {
    title: 'XBoothX',
    url: 'https://xboothx.netlify.app/',
    description: 'Interactive photo booth experience',
  },
]

const showFunProjects = ref(false)
const currentProjectIndex = ref(0)

const nextProject = () => {
  currentProjectIndex.value = (currentProjectIndex.value + 1) % funProjects.length
}

const prevProject = () => {
  currentProjectIndex.value =
    (currentProjectIndex.value - 1 + funProjects.length) % funProjects.length
}

const toggleFunProjects = () => {
  showFunProjects.value = !showFunProjects.value
}

// Function to check if link is available
const isLinkAvailable = (url: string) => {
  return url && url !== '#' && url !== ''
}

// Function to handle link click
const handleLiveClick = (url: string, title: string, event: Event) => {
  if (!isLinkAvailable(url)) {
    event.preventDefault()
    alert(
      `🚧 Project "${title}" belum dipublikasikan.\n\nProject ini masih dalam tahap development atau belum tersedia untuk publik.`,
    )
  }
}
</script>

<template>
  <section id="projects" class="relative bg-nb-offwhite py-16 sm:py-24 border-b-[3px] border-nb-black">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      <!-- Header -->
      <div class="mb-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <div
            class="inline-block bg-nb-green border-[3px] border-nb-black px-4 py-2 mb-6"
            style="box-shadow: #000000 3px 3px 0px 0px"
          >
            <span class="font-space-mono text-sm font-bold text-nb-black">03 //</span>
          </div>
          <h2 class="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-nb-black leading-tight">
            My <span class="bg-nb-coral px-2 border-[2px] border-nb-black inline-block text-nb-white">Projects</span>
          </h2>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15, delay: 400 + index * 150 },
          }"
          class="group relative"
        >
          <div
            class="bg-nb-white border-[3px] border-nb-black overflow-hidden transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            style="box-shadow: #000000 8px 8px 0px 0px"
          >
            <!-- Not Available Badge -->
            <div
              v-if="!isLinkAvailable(project.live)"
              class="absolute top-4 left-4 z-20 flex items-center gap-1 bg-nb-black border-[2px] border-nb-black px-3 py-1 text-nb-white font-space-mono text-xs font-bold"
            >
              <AlertCircle :size="12" />
              NOT PUBLIC
            </div>

            <!-- Image Container -->
            <div
              class="relative aspect-video overflow-hidden border-b-[3px] border-nb-black"
              :class="project.accentColor"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover"
              />

              <!-- Overlay on hover -->
              <div
                class="absolute inset-0 bg-nb-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <a
                  :href="project.live"
                  @click="(e) => handleLiveClick(project.live, project.title, e)"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="[
                    'flex items-center gap-2 font-space-grotesk font-bold text-sm px-5 py-2.5 border-[3px] border-nb-black transition-all',
                    isLinkAvailable(project.live)
                      ? 'bg-nb-yellow text-nb-black hover:translate-x-[1px] hover:translate-y-[1px]'
                      : 'bg-nb-gray-dark text-nb-white cursor-not-allowed',
                  ]"
                  style="box-shadow: #000000 3px 3px 0px 0px"
                >
                  <ExternalLink :size="16" />
                  <span v-if="isLinkAvailable(project.live)">View Live</span>
                  <span v-else>Not Available</span>
                </a>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="font-space-grotesk text-2xl font-bold text-nb-black mb-3">
                {{ project.title }}
              </h3>
              <p class="font-inter text-base text-nb-gray-dark leading-relaxed mb-5 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="font-space-mono text-xs font-bold bg-nb-offwhite border-[2px] border-nb-black px-2.5 py-1 text-nb-black"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fun Projects Button -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 900 } }"
        class="mt-16 text-center"
      >
        <button
          @click="toggleFunProjects"
          class="inline-flex items-center gap-2 bg-nb-black text-nb-white font-space-grotesk font-bold text-base px-8 py-3 border-[3px] border-nb-black transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          style="box-shadow: #FF6B6B 5px 5px 0px 0px"
        >
          <span v-if="!showFunProjects">🎮 Want to see my fun projects?</span>
          <span v-else>Hide Fun Projects</span>
        </button>
      </div>

      <!-- Fun Projects Carousel -->
      <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="showFunProjects" class="mt-12">
          <div class="max-w-[1440px] mx-auto">
            <!-- Project Info Header -->
            <div class="mb-8 text-center">
              <h3 class="font-syne font-extrabold text-3xl sm:text-4xl text-nb-black mb-3">
                {{ funProjects[currentProjectIndex]?.title }}
              </h3>
              <p class="font-space-grotesk text-lg text-nb-gray-dark mb-4">
                {{ funProjects[currentProjectIndex]?.description }}
              </p>
              <a
                :href="funProjects[currentProjectIndex]?.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-nb-yellow text-nb-black font-space-grotesk font-bold text-sm px-5 py-2.5 border-[3px] border-nb-black transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                style="box-shadow: #000000 3px 3px 0px 0px"
              >
                <ExternalLink :size="16" />
                Open in new tab
              </a>
            </div>

            <!-- Carousel Container -->
            <div class="relative">
              <div
                class="bg-nb-white border-[3px] border-nb-black p-2 sm:p-4"
                style="box-shadow: #000000 8px 8px 0px 0px"
              >
                <!-- Navigation Buttons -->
                <button
                  @click="prevProject"
                  class="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-nb-white border-[3px] border-nb-black flex items-center justify-center transition-all hover:bg-nb-yellow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  style="box-shadow: #000000 3px 3px 0px 0px"
                  :disabled="funProjects.length <= 1"
                >
                  <ChevronLeft :size="20" class="text-nb-black" />
                </button>

                <button
                  @click="nextProject"
                  class="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-nb-white border-[3px] border-nb-black flex items-center justify-center transition-all hover:bg-nb-yellow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  style="box-shadow: #000000 3px 3px 0px 0px"
                  :disabled="funProjects.length <= 1"
                >
                  <ChevronRight :size="20" class="text-nb-black" />
                </button>

                <!-- iframe Viewer -->
                <div class="bg-nb-offwhite border-[3px] border-nb-black overflow-hidden iframe-container">
                  <iframe
                    :key="currentProjectIndex"
                    :src="funProjects[currentProjectIndex]?.url"
                    class="w-full h-full border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    title="Project Preview"
                  ></iframe>
                </div>
              </div>

              <!-- Dots Indicator -->
              <div class="flex justify-center gap-2 mt-6">
                <button
                  v-for="(project, index) in funProjects"
                  :key="index"
                  @click="currentProjectIndex = index"
                  :class="[
                    'h-3 border-[2px] border-nb-black transition-all',
                    currentProjectIndex === index
                      ? 'w-10 bg-nb-yellow'
                      : 'w-3 bg-nb-white hover:bg-nb-offwhite',
                  ]"
                  :title="project.title"
                ></button>
              </div>

              <!-- Project Counter -->
              <div class="mt-4 text-center">
                <span
                  class="inline-flex items-center gap-2 font-space-mono text-sm font-bold bg-nb-white border-[2px] border-nb-black px-4 py-1.5 text-nb-black"
                >
                  <span class="w-2 h-2 bg-nb-coral border-[1px] border-nb-black"></span>
                  {{ currentProjectIndex + 1 }} / {{ funProjects.length }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
/* Responsive iframe container heights */
.iframe-container {
  height: 60vh;
  min-height: 400px;
}

/* Tablet and up - taller viewport */
@media (min-width: 768px) {
  .iframe-container {
    height: 75vh;
    min-height: 600px;
    max-height: 900px;
  }
}

/* Desktop - maximize viewing area */
@media (min-width: 1024px) {
  .iframe-container {
    height: 80vh;
    min-height: 700px;
    max-height: 1000px;
  }
}
</style>
