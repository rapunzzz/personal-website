<script setup lang="ts">
import { Github, Linkedin, ArrowDown } from 'lucide-vue-next'

const name = 'Thaariq Kurnia Spama'
const letters = name.split('')

const handleClick = (e: MouseEvent, href: string) => {
  e.preventDefault()

  const id = href.replace('#', '')
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section id="home" class="relative min-h-screen overflow-hidden">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]"
      ></div>
    </div>

    <!-- Floating decorative elements -->
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
    ></div>
    <div
      class="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
    ></div>
    <div
      class="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
    ></div>

    <div class="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
      <div class="mx-auto w-full max-w-5xl text-center">
        <!-- Greeting -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 100 },
          }"
          :visible-once="false"
          class="mb-4 text-lg text-gray-600 sm:text-xl"
        >
          Hi, I'm
        </p>

        <!-- Name with letter animation -->
        <h1 class="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
          <span
            v-for="(letter, index) in letters"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 50, rotateX: -90 }"
            :enter="{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 200 + index * 40,
              },
            }"
            :visible-once="false"
            :class="[
              'inline-block',
              letter === ' ' ? 'w-4' : '',
              index < 7 || index >= 14 ? 'text-yellow-600' : 'text-gray-800',
            ]"
          >
            {{ letter === ' ' ? '\u00A0' : letter }}
          </span>
        </h1>

        <!-- Role with gradient -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 600, delay: 1200 },
          }"
          :visible-once="false"
          class="mb-8"
        >
          <p
            class="inline-block text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent sm:text-3xl"
          >
            Full-Stack Developer
          </p>
        </div>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 1400 },
          }"
          class="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl"
        >
          Building full-stack systems with clean backend logic and well-structured APIs, designed to
          solve real problems with practical, scalable solutions.
        </p>

        <!-- CTA Buttons -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 1600 },
          }"
          :visible-once="false"
          class="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            @click="(e: MouseEvent) => handleClick(e, '#projects')"
            class="group inline-flex items-center gap-2 rounded-full bg-yellow-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-yellow-700 hover:shadow-xl hover:scale-105"
          >
            View My Work
            <ArrowDown :size="18" class="transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#contact"
            @click="(e: MouseEvent) => handleClick(e, '#contact')"
            class="inline-flex items-center gap-2 rounded-full border-2 border-yellow-600 bg-white px-8 py-4 text-base font-semibold text-yellow-600 transition-all hover:bg-yellow-50 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <!-- Social Links -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 1800 },
          }"
          :visible-once="false"
          class="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/rapunzzz"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            class="group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-700 transition-all hover:border-yellow-600 hover:text-yellow-600 hover:scale-110 hover:shadow-lg"
          >
            <Github :size="22" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/thaariqkurnia"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            class="group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-700 transition-all hover:border-yellow-600 hover:text-yellow-600 hover:scale-110 hover:shadow-lg"
          >
            <Linkedin :size="22" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
