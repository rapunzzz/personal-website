<script setup lang="ts">
import { computed } from 'vue'

const skills = [
  { name: 'React', icon: '/icons/react.png' },
  { name: 'HTML', icon: '/icons/html.png' },
  { name: 'CSS', icon: '/icons/css.png' },
  { name: 'Next.js', icon: '/icons/nextjs.png' },
  { name: 'Vue .js', icon: '/icons/vuejs.png' },
  { name: 'Fiber', icon: '/icons/fibergo.png' },
  { name: 'Express.js', icon: '/icons/express.png' },
  { name: '.NET', icon: '/icons/net.png' },
  { name: 'Django', icon: '/icons/django.png' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
  { name: 'Flutter', icon: '/icons/flutter.png' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
  { name: 'SQLite', icon: '/icons/sqlite.png' },
  { name: 'SQL Server', icon: '/icons/sqlserver.png' },
]

const midpoint = Math.ceil(skills.length / 2)
const firstHalf = computed(() => skills.slice(0, midpoint))
const secondHalf = computed(() => skills.slice(midpoint))
</script>

<template>
  <section id="about" class="relative min-h-screen py-20">
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
          About <span class="text-yellow-600">Me</span>
        </h2>
        <div
          v-motion
          :initial="{ opacity: 0, scaleX: 0 }"
          :enter="{ opacity: 1, scaleX: 1, transition: { duration: 600, delay: 200 } }"
          class="mx-auto h-1 w-24 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"
        ></div>
      </div>

      <!-- About Content -->
      <div class="mx-auto mb-20 max-w-4xl">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          :visible-once="false"
          class="rounded-2xl bg-white p-8 shadow-xl"
        >
          <div class="flex items-start gap-6">
            <div>
              <p class="mb-4 text-lg leading-relaxed text-gray-700">
                I'm currently a
                <span class="font-semibold text-yellow-600"
                  >fourth-year Information Systems student</span
                >
                at the University of Indonesia, passionate about transforming innovative ideas into
                impactful digital solutions.
              </p>
              <p class="text-lg leading-relaxed text-gray-700">
                I’m especially interested in
                <span class="font-semibold text-yellow-600">Software Engineering</span>—from shaping
                system architectures to building APIs and managing databases. I love creating
                systems that are scalable, reliable, and truly useful. I’ve worked across various
                stacks and enjoy learning new tools that help me write better, more efficient
                software.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div>
        <h3
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          :visible-once="false"
          class="mb-4 text-center text-3xl font-bold text-gray-900"
        >
          Technical <span class="text-yellow-600">Skills</span>
        </h3>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
          :visible-once="false"
          class="mb-12 text-center text-lg text-gray-600 flex items-center justify-center gap-2"
        >
          Programming languages, frameworks, and databases I've learned so far.
        </p>

        <div class="space-y-6">
          <!-- First Row - Left to Right -->
          <div class="relative overflow-hidden">
            <div class="flex gap-6 my-2 animate-scroll-left" style="width: fit-content">
              <!-- Double the items for seamless loop -->
              <div
                v-for="(skill, index) in [...firstHalf, ...firstHalf]"
                :key="`row1-${index}`"
                class="group flex-shrink-0 rounded-xl bg-white p-6 shadow-sm border-2 border-dotted transition-all duration-300 hover:border-yellow-400 hover:shadow-md"
              >
                <div class="flex items-center gap-4 mb-3">
                  <img :src="skill.icon" alt="" class="min-w-8 h-8" />
                  <h4 class="text-xl font-bold text-gray-900">{{ skill.name }}</h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Second Row - Right to Left -->
          <div class="relative overflow-hidden">
            <div class="flex gap-6 my-2 animate-scroll-right" style="width: fit-content">
              <!-- Double the items for seamless loop -->
              <div
                v-for="(skill, index) in [...secondHalf, ...secondHalf]"
                :key="`row2-${index}`"
                class="group flex-shrink-0 rounded-xl bg-white p-6 shadow-sm border-2 border-dotted transition-all duration-300 hover:border-yellow-400 hover:shadow-md"
              >
                <div class="flex items-center gap-4 mb-3">
                  <img :src="skill.icon" alt="" class="min-w-8 h-8" />
                  <h4 class="text-xl font-bold text-gray-900">{{ skill.name }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
  will-change: transform;
  display: flex;
}

.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
  will-change: transform;
  display: flex;
}

.animate-scroll-left:hover,
.animate-scroll-right:hover {
  animation-play-state: paused;
}
</style>
