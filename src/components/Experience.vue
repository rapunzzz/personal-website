<script setup lang="ts">
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-vue-next'

const experiences = [
  {
    title: 'Staff of Business-IT Case Competition',
    company: 'Compfest',
    period: 'Apr 2024 - Oct 2024',
    type: 'Organizations',
    description:
      'Successfully reached out to and facilitated the registration of 50+ high school teams and 80+ university teams for the Business-IT Case Competition, ensuring a smooth onboarding experience and serving as the main point of contact throughout the event.',
  },
  {
    title: 'Staff of Equipment and Support',
    company: 'Pesta Rakyat Komputer (PERAK)',
    period: 'Mar 2023 - Sep 2023',
    type: 'Organizations',
    description:
      'Assisted with event preparation and logistics, including organizing equipment, preparing materials before the event, and helping with clean-up and equipment handling after the event to ensure smooth operations.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Panasonic Manufacturing Indonesia',
    period: 'Sep 2025 - Present',
    type: 'Internship',
    description:
      'Developing a Labor Cost Control System that processes Excel-based business plans and calculates monthly labor needs using SUT data to improve planning accuracy and cost efficiency, while supporting team productivity by assisting with IT-related technical challenges and troubleshooting tasks.',
  },
]

const education = [
  {
    degree: 'Bachelor of Information Systems',
    institution: 'University of Indonesia',
    location: 'Depok, Indonesia',
    period: '2022 - Present',
  },
  {
    degree: 'High School of Natural Science',
    institution: 'MAN 2 Kudus',
    location: 'Kudus, Indonesia',
    period: '2019 - 2022',
  },
]
</script>

<template>
  <section
    id="experience"
    class="relative min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-white py-20"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full opacity-10 blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 -right-20 w-96 h-96 bg-purple-400 rounded-full opacity-10 blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
    </div>

    <div class="container relative z-10 mx-auto px-4">
      <!-- Header -->
      <div class="mb-20 text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          :visible-once="false"
          class="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl"
        >
          Experience &
          <span class="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
            >Education</span
          >
        </h2>

        <div
          v-motion
          :initial="{ opacity: 0, scaleX: 0 }"
          :enter="{ opacity: 1, scaleX: 1, transition: { duration: 600, delay: 200 } }"
          class="mx-auto h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
        ></div>
      </div>

      <!-- Content - Two Columns -->
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- LEFT SIDE – EXPERIENCE -->
          <div class="space-y-8">
            <div
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 300 } }"
              :visible-once="false"
              class="flex items-center gap-3 mb-8"
            >
              <div class="p-3 bg-purple-600 rounded-xl shadow-lg">
                <Briefcase class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>

            <div
              v-for="(value, index) in experiences"
              :key="value.title"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 400 + index * 100 } }"
              :visible-once="false"
              class="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-purple-200"
            >
              <!-- Gradient overlay on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-100/0 group-hover:from-purple-50/50 group-hover:to-purple-100/30 transition-all duration-300 rounded-2xl"
              ></div>

              <div class="relative">
                <!-- Type Badge -->
                <div class="mb-4">
                  <span
                    class="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold"
                  >
                    {{ value.type }}
                  </span>
                </div>

                <!-- Title -->
                <h4
                  class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors"
                >
                  {{ value.title }}
                </h4>

                <!-- Company & Period -->
                <div class="space-y-2 mb-4">
                  <p class="flex items-center gap-2 text-gray-700 font-medium">
                    <Briefcase class="w-4 h-4 text-purple-600" />
                    {{ value.company }}
                  </p>
                  <p class="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar class="w-4 h-4 text-purple-600" />
                    {{ value.period }}
                  </p>
                </div>

                <!-- Description -->
                <p class="text-gray-600 leading-relaxed">
                  {{ value.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDE – EDUCATION TIMELINE -->
          <div class="relative">
            <div
              v-motion
              :initial="{ opacity: 0, x: 30 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 300 } }"
              :visible-once="false"
              class="flex items-center gap-3 mb-8"
            >
              <div class="p-3 bg-purple-600 rounded-xl shadow-lg">
                <GraduationCap class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <!-- Timeline Line -->
            <div
              v-motion
              :initial="{ opacity: 0, scaleY: 0 }"
              :enter="{ opacity: 1, scaleY: 1, transition: { duration: 800, delay: 400 } }"
              :visible-once="false"
              class="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-200 origin-top"
            ></div>

            <!-- Cards -->
            <div
              v-for="(value, index) in education"
              :key="value.degree"
              v-motion
              :initial="{ opacity: 0, x: 30 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 500 + index * 150 } }"
              :visible-once="false"
              class="relative pl-20 pb-12 last:pb-0"
            >
              <!-- Timeline Dot -->
              <div
                class="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-purple-400 shadow-lg ring-4 ring-white ring-offset-2"
              >
                <GraduationCap :size="20" class="text-white" />
              </div>

              <!-- Card -->
              <div
                class="group rounded-2xl bg-white border border-gray-100 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-purple-200 overflow-hidden relative"
              >
                <!-- Gradient overlay on hover -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-100/0 group-hover:from-purple-50/50 group-hover:to-purple-100/30 transition-all duration-300"
                ></div>

                <div class="relative">
                  <!-- Degree -->
                  <h4
                    class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors"
                  >
                    {{ value.degree }}
                  </h4>

                  <!-- Institution & Details -->
                  <div class="space-y-2">
                    <p class="text-gray-700 font-medium">
                      {{ value.institution }}
                    </p>
                    <p class="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin class="w-4 h-4 text-purple-600" />
                      {{ value.location }}
                    </p>
                    <p class="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar class="w-4 h-4 text-purple-600" />
                      {{ value.period }}
                    </p>
                  </div>
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
@keyframes pulse {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.15;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
