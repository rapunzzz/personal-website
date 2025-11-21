<script setup lang="ts">
import { ref } from 'vue'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const projects = [
  {
    title: '70e-Con',
    description:
      'A Learning Management System designed to support students in managing courses, tracking academic rankings, and evaluating performance effectively.',
    image: '/images/70econ.png',
    tech: ['Next.js', 'Express.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL'],
    github: '#',
    live: 'https://70e-con.vercel.app/',
    featured: false,
  },
  {
    title: 'PacilFlix',
    description:
      'A simplified movie streaming application featuring movie listings, trailers, and subscription management.',
    image: '/images/PacilFlix.png',
    tech: ['Django', 'Python', 'SQLite'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'HistorySphere',
    description:
      'An Educational Application designed to help users learn history in an interactive and engaging way.',
    image: '/images/HistorySphere.png',
    tech: ['Figma'],
    github: '#',
    live: '#',
    featured: false,
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
</script>

<template>
  <section
    id="projects"
    class="relative min-h-screen bg-gradient-to-b from-purple-50 to-white py-20"
  >
    <div class="container relative z-10 mx-auto px-4">
      <!-- Header -->
      <div class="mb-16 text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          :visible-once="false"
          class="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl"
        >
          My <span class="text-purple-600">Projects</span>
        </h2>
        <div
          v-motion
          :initial="{ opacity: 0, scaleX: 0 }"
          :enter="{ opacity: 1, scaleX: 1, transition: { duration: 600, delay: 200 } }"
          :visible-once="false"
          class="mx-auto h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
        ></div>
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
          :visible-once="false"
          class="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          <!-- Featured Badge -->
          <div
            v-if="project.featured"
            class="absolute top-4 right-4 z-20 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-3 py-1 text-xs font-bold text-white shadow-lg"
          >
            ⭐ Featured
          </div>

          <!-- Image Container -->
          <div
            class="relative aspect-video overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            <!-- Quick Action Buttons on Image -->
            <div
              class="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-600 shadow-lg transition-transform hover:scale-110"
              >
                <ExternalLink :size="16" />
                View Live
              </a>
              <a
                v-if="project.github !== '#'"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center rounded-full bg-gray-900 p-3 text-white shadow-lg transition-transform hover:scale-110"
              >
                <Github :size="18" />
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3
              class="mb-3 text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors"
            >
              {{ project.title }}
            </h3>
            <p class="mb-4 text-gray-600 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="mb-5 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 transition-colors hover:bg-purple-200"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Decorative gradient border on hover -->
          <div
            class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400 transition-colors pointer-events-none"
          ></div>
        </div>
      </div>

      <!-- Fun Projects Button -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 900 } }"
        :visible-once="false"
        class="mt-12 text-center"
      >
        <button
          @click="toggleFunProjects"
          class="inline-flex items-center gap-2 rounded-full border-2 border-purple-600 bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
        >
          <span v-if="!showFunProjects">Want to see my fun projects?</span>
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
          <div class="mx-auto max-w-7xl px-4">
            <!-- Enhanced Project Info Header with Gradient -->
            <div class="mb-8 text-center relative">
              <div class="inline-block relative">
                <h3
                  class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-3 animate-gradient"
                >
                  {{ funProjects[currentProjectIndex]?.title }}
                </h3>
                <div
                  class="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full animate-gradient"
                ></div>
              </div>
              <p class="text-gray-600 mt-4 text-lg">
                {{ funProjects[currentProjectIndex]?.description }}
              </p>
              <a
                :href="funProjects[currentProjectIndex]?.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <ExternalLink :size="18" />
                Open in new tab
              </a>
            </div>

            <!-- Carousel Container - Optimized Size -->
            <div
              class="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-2 md:p-4"
            >
              <!-- Navigation Buttons -->
              <button
                @click="prevProject"
                class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 p-2 md:p-3 shadow-xl transition-all hover:bg-white hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="funProjects.length <= 1"
              >
                <ChevronLeft :size="20" class="text-purple-600 md:w-6 md:h-6" />
              </button>

              <button
                @click="nextProject"
                class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/95 p-2 md:p-3 shadow-xl transition-all hover:bg-white hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="funProjects.length <= 1"
              >
                <ChevronRight :size="20" class="text-purple-600 md:w-6 md:h-6" />
              </button>

              <!-- iframe Viewer - Better responsive sizing -->
              <div
                class="relative bg-white rounded-xl overflow-hidden shadow-inner iframe-container"
              >
                <iframe
                  :key="currentProjectIndex"
                  :src="funProjects[currentProjectIndex]?.url"
                  class="w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  title="Project Preview"
                ></iframe>
              </div>

              <!-- Dots Indicator with Animation -->
              <div class="flex justify-center gap-2 mt-4 mb-2">
                <button
                  v-for="(project, index) in funProjects"
                  :key="index"
                  @click="currentProjectIndex = index"
                  :class="[
                    'h-2.5 rounded-full transition-all duration-300',
                    currentProjectIndex === index
                      ? 'w-10 bg-gradient-to-r from-purple-600 to-pink-500 shadow-md'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400',
                  ]"
                  :title="project.title"
                ></button>
              </div>
            </div>

            <!-- Project Counter with Style -->
            <div class="mt-4 text-center">
              <span
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-sm font-semibold text-gray-700"
              >
                <span
                  class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse"
                ></span>
                {{ currentProjectIndex + 1 }} / {{ funProjects.length }}
              </span>
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

/* Animated gradient */
@keyframes gradient {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}
</style>
