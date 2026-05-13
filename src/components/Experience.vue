<script setup lang="ts">
const experiences = [
  {
    title: 'Staff of Business-IT Case Competition',
    company: 'Compfest',
    period: 'Apr 2024 - Oct 2024',
    type: 'Organizations',
    description:
      'Successfully reached out to and facilitated the registration of 50+ high school teams and 80+ university teams for the Business-IT Case Competition, ensuring a smooth onboarding experience and serving as the main point of contact throughout the event.',
    accentColor: 'bg-nb-yellow',
  },
  {
    title: 'Staff of Equipment and Support',
    company: 'Pesta Rakyat Komputer (PERAK)',
    period: 'Mar 2023 - Sep 2023',
    type: 'Organizations',
    description:
      'Assisted with event preparation and logistics, including organizing equipment, preparing materials before the event, and helping with clean-up and equipment handling after the event to ensure smooth operations.',
    accentColor: 'bg-nb-blue',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Panasonic Manufacturing Indonesia',
    period: 'Sep 2025 - Present',
    type: 'Internship',
    description:
      'Developing a Labor Cost Control System that processes Excel-based business plans and calculates monthly labor needs using SUT data to improve planning accuracy and cost efficiency, while supporting team productivity by assisting with IT-related technical challenges and troubleshooting tasks.',
    accentColor: 'bg-nb-coral',
  },
]

const education = [
  {
    degree: 'Bachelor of Information Systems',
    institution: 'University of Indonesia',
    location: 'Depok, Indonesia',
    period: '2022 - Present',
    accentColor: 'bg-nb-green',
  },
  {
    degree: 'High School of Natural Science',
    institution: 'MAN 2 Kudus',
    location: 'Kudus, Indonesia',
    period: '2019 - 2022',
    accentColor: 'bg-nb-cyan',
  },
]
</script>

<template>
  <section
    id="experience"
    class="relative bg-nb-white py-16 sm:py-24 border-b-[3px] border-nb-black"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      <!-- Header -->
      <div class="mb-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        >
          <div
            class="inline-block bg-nb-blue border-[3px] border-nb-black px-4 py-2 mb-6"
            style="box-shadow: #000000 3px 3px 0px 0px"
          >
            <span class="font-space-mono text-sm font-bold text-nb-black">02 //</span>
          </div>
          <h2 class="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-nb-black leading-tight">
            Experience &
            <span class="bg-nb-yellow px-2 border-[2px] border-nb-black inline-block">Education</span>
          </h2>
        </div>
      </div>

      <!-- Content - Two Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- LEFT SIDE – EXPERIENCE -->
        <div class="space-y-6">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 300 } }"
            class="mb-8"
          >
            <h3 class="font-space-grotesk font-bold text-2xl text-nb-black flex items-center gap-3">
              <span
                class="w-10 h-10 bg-nb-black flex items-center justify-center text-nb-white font-space-mono text-sm border-[3px] border-nb-black"
              >💼</span>
              Work Experience
            </h3>
          </div>

          <div
            v-for="(value, index) in experiences"
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 400 + index * 100 } }"
            class="relative"
          >
            <div
              class="bg-nb-white border-[3px] border-nb-black p-6 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              style="box-shadow: #000000 5px 5px 0px 0px"
            >
              <!-- Type Badge -->
              <div class="mb-4">
                <span
                  :class="[value.accentColor, 'inline-block font-space-grotesk font-bold text-xs px-3 py-1 border-[2px] border-nb-black text-nb-black uppercase tracking-wide']"
                >
                  {{ value.type }}
                </span>
              </div>

              <!-- Title -->
              <h4 class="font-space-grotesk text-xl font-bold text-nb-black mb-3">
                {{ value.title }}
              </h4>

              <!-- Company & Period -->
              <div class="space-y-1 mb-4">
                <p class="font-inter text-base font-medium text-nb-black flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-nb-coral inline-block"></span>
                  {{ value.company }}
                </p>
                <p class="font-space-mono text-sm text-nb-gray-dark">
                  {{ value.period }}
                </p>
              </div>

              <!-- Description -->
              <p class="font-inter text-base text-nb-gray-dark leading-relaxed">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE – EDUCATION -->
        <div class="space-y-6">
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 300 } }"
            class="mb-8"
          >
            <h3 class="font-space-grotesk font-bold text-2xl text-nb-black flex items-center gap-3">
              <span
                class="w-10 h-10 bg-nb-black flex items-center justify-center text-nb-white font-space-mono text-sm border-[3px] border-nb-black"
              >🎓</span>
              Education
            </h3>
          </div>

          <div
            v-for="(value, index) in education"
            :key="value.degree"
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 500 + index * 150 } }"
            class="relative"
          >
            <div
              class="bg-nb-white border-[3px] border-nb-black overflow-hidden transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              style="box-shadow: #000000 5px 5px 0px 0px"
            >
              <!-- Accent bar at top -->
              <div :class="[value.accentColor, 'w-full h-[6px]']"></div>

              <div class="p-6">
              <!-- Degree -->
              <h4 class="font-space-grotesk text-xl font-bold text-nb-black mb-3">
                {{ value.degree }}
              </h4>

              <!-- Institution -->
              <p class="font-inter text-base font-medium text-nb-black mb-2">
                {{ value.institution }}
              </p>

              <!-- Location & Period -->
              <div class="flex flex-wrap gap-4">
                <span class="font-space-mono text-sm text-nb-gray-dark flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 bg-nb-blue inline-block"></span>
                  {{ value.location }}
                </span>
                <span class="font-space-mono text-sm text-nb-gray-dark flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 bg-nb-yellow inline-block"></span>
                  {{ value.period }}
                </span>
              </div>
            </div>
          </div>
          </div>

          <!-- Mascot card -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 800 } }"
            class="relative mt-8"
          >
            <div
              class="bg-nb-yellow border-[3px] border-nb-black p-6 flex items-center gap-4"
              style="box-shadow: #000000 5px 5px 0px 0px"
            >
              <img
                src="/images/mascot-coding.png"
                alt="Mascot coding"
                class="w-20 h-20 object-contain"
              />
              <div>
                <p class="font-space-grotesk font-bold text-base text-nb-black mb-1">
                  Always learning!
                </p>
                <p class="font-inter text-sm text-nb-black">
                  Currently exploring new tech stacks and building cool stuff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
