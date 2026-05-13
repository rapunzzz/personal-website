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

// Accent colors for skill cards cycling
const accentColors = ['bg-nb-yellow', 'bg-nb-coral', 'bg-nb-blue', 'bg-nb-green', 'bg-nb-cyan', 'bg-nb-orange']
const getAccentColor = (index: number) => accentColors[index % accentColors.length]
</script>

<template>
  <section id="about" class="relative bg-nb-offwhite py-16 sm:py-24 border-b-[3px] border-nb-black">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      <!-- Header -->
      <div class="mb-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <div
            class="inline-block bg-nb-coral border-[3px] border-nb-black px-4 py-2 mb-6"
            style="box-shadow: #000000 3px 3px 0px 0px"
          >
            <span class="font-space-mono text-sm font-bold text-nb-black">01 //</span>
          </div>
          <h2 class="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-nb-black leading-tight">
            About <span class="text-nb-coral">Me</span>
          </h2>
        </div>
      </div>

      <!-- About Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
        <!-- Mascot Side -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 200 } }"
          class="lg:col-span-2 flex justify-center lg:justify-start"
        >
          <div class="relative">
            <div
              class="bg-nb-white border-[3px] border-nb-black p-6"
              style="box-shadow: #000000 8px 8px 0px 0px"
            >
              <img
                src="/images/mascot-waving.png"
                alt="Developer mascot waving hello"
                class="w-48 h-48 sm:w-64 sm:h-64 object-contain mx-auto"
              />
            </div>
            <!-- Accent behind -->
            <div class="absolute -z-10 -bottom-3 -right-3 w-full h-full bg-nb-yellow border-[3px] border-nb-black"></div>
          </div>
        </div>

        <!-- Text Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 300 } }"
          class="lg:col-span-3"
        >
          <div
            class="bg-nb-white border-[3px] border-nb-black p-6 sm:p-8"
            style="box-shadow: #000000 8px 8px 0px 0px"
          >
            <p class="font-space-grotesk text-lg sm:text-xl font-medium text-nb-black mb-6 leading-relaxed">
              I'm currently a
              <span
                class="inline bg-nb-yellow px-1 border-[2px] border-nb-black font-bold"
              >fourth-year Information Systems student</span>
              at the University of Indonesia, passionate about transforming innovative ideas into
              impactful digital solutions.
            </p>
            <p class="font-space-grotesk text-lg sm:text-xl font-medium text-nb-black leading-relaxed">
              I'm especially interested in
              <span
                class="inline bg-nb-coral px-1 border-[2px] border-nb-black font-bold"
              >Software Engineering</span>—from shaping
              system architectures to building APIs and managing databases. I love creating
              systems that are scalable, reliable, and truly useful.
            </p>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          class="mb-12"
        >
          <h3 class="font-space-grotesk font-bold text-2xl sm:text-[32px] text-nb-black mb-3">
            Technical <span class="bg-nb-yellow px-2 border-[2px] border-nb-black inline-block">Skills</span>
          </h3>
          <p class="font-inter text-lg text-nb-gray-dark">
            Programming languages, frameworks, and databases I've learned so far.
          </p>
        </div>

        <div class="space-y-6">
          <!-- First Row - Left to Right -->
          <div class="relative overflow-hidden">
            <div class="flex gap-4 my-2 animate-scroll-left" style="width: fit-content">
              <div
                v-for="(skill, index) in [...firstHalf, ...firstHalf]"
                :key="`row1-${index}`"
                class="group flex-shrink-0 bg-nb-white border-[3px] border-nb-black px-5 py-3 transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none cursor-default"
                style="box-shadow: #000000 3px 3px 0px 0px"
              >
                <div class="flex items-center gap-3">
                  <div
                    :class="[getAccentColor(index % firstHalf.length), 'w-10 h-10 border-[2px] border-nb-black flex items-center justify-center']"
                  >
                    <img :src="skill.icon" alt="" class="w-6 h-6" />
                  </div>
                  <h4 class="font-space-grotesk text-base font-bold text-nb-black whitespace-nowrap">
                    {{ skill.name }}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Second Row - Right to Left -->
          <div class="relative overflow-hidden">
            <div class="flex gap-4 my-2 animate-scroll-right" style="width: fit-content">
              <div
                v-for="(skill, index) in [...secondHalf, ...secondHalf]"
                :key="`row2-${index}`"
                class="group flex-shrink-0 bg-nb-white border-[3px] border-nb-black px-5 py-3 transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none cursor-default"
                style="box-shadow: #000000 3px 3px 0px 0px"
              >
                <div class="flex items-center gap-3">
                  <div
                    :class="[getAccentColor((index + 3) % secondHalf.length), 'w-10 h-10 border-[2px] border-nb-black flex items-center justify-center']"
                  >
                    <img :src="skill.icon" alt="" class="w-6 h-6" />
                  </div>
                  <h4 class="font-space-grotesk text-base font-bold text-nb-black whitespace-nowrap">
                    {{ skill.name }}
                  </h4>
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
