<script setup lang="ts">
import { Github, Linkedin, ArrowDown } from 'lucide-vue-next'

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
  <section id="home" class="relative min-h-screen bg-nb-white overflow-hidden pt-[68px]">
    <!-- Decorative background shapes -->
    <div
      class="absolute top-24 right-8 w-32 h-32 bg-nb-yellow border-[3px] border-nb-black rotate-12 hidden lg:block"
      style="box-shadow: #000000 5px 5px 0px 0px"
    ></div>
    <div
      class="absolute top-48 left-12 w-20 h-20 bg-nb-coral border-[3px] border-nb-black -rotate-6 hidden lg:block"
      style="box-shadow: #000000 3px 3px 0px 0px"
    ></div>
    <div
      class="absolute bottom-32 right-24 w-16 h-16 bg-nb-blue border-[3px] border-nb-black rotate-45 hidden lg:block"
      style="box-shadow: #000000 3px 3px 0px 0px"
    ></div>
    <div
      class="absolute bottom-48 left-24 w-24 h-24 bg-nb-green border-[3px] border-nb-black rotate-12 hidden lg:block"
      style="box-shadow: #000000 5px 5px 0px 0px"
    ></div>
    <div
      class="absolute top-[60%] right-[15%] w-12 h-12 bg-nb-cyan border-[3px] border-nb-black -rotate-12 hidden lg:block"
    ></div>

    <!-- Main content -->
    <div
      class="relative z-10 flex min-h-[calc(100vh-68px)] items-center justify-center px-4 sm:px-6 lg:px-12 py-12"
    >
      <div class="max-w-[1440px] w-full mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left side: Text content -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -40 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
          >
            <!-- Greeting badge -->
            <div
              class="inline-block bg-nb-yellow border-[3px] border-nb-black px-4 py-2 mb-6"
              style="box-shadow: #000000 3px 3px 0px 0px"
            >
              <span class="font-space-mono text-sm font-bold text-nb-black"> Hi, I'm </span>
            </div>

            <!-- Name -->
            <h1
              class="font-syne font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight text-nb-black mb-4"
            >
              THAARIQ
              <br />
              <span class="text-nb-coral">KURNIA</span>
              <br />
              SPAMA
            </h1>

            <!-- Role -->
            <div
              class="inline-block bg-nb-black px-5 py-2 mb-8"
              style="box-shadow: #ff6b6b 5px 5px 0px 0px"
            >
              <p
                class="font-space-grotesk font-bold text-lg sm:text-xl text-nb-white tracking-wide"
              >
                FULL-STACK DEVELOPER
              </p>
            </div>

            <!-- Description -->
            <p
              class="font-space-grotesk font-medium text-lg sm:text-xl text-nb-black max-w-xl mb-10 leading-relaxed"
            >
              Building full-stack systems with clean backend logic and well-structured APIs,
              designed to solve real problems with practical, scalable solutions.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                @click="(e: MouseEvent) => handleClick(e, '#projects')"
                class="inline-flex items-center gap-2 bg-nb-yellow text-nb-black font-space-grotesk font-bold text-base px-6 py-3 border-[3px] border-nb-black transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                style="box-shadow: #000000 5px 5px 0px 0px"
              >
                View My Work
                <ArrowDown :size="18" />
              </a>
              <a
                href="#contact"
                @click="(e: MouseEvent) => handleClick(e, '#contact')"
                class="inline-flex items-center gap-2 bg-nb-white text-nb-black font-space-grotesk font-bold text-base px-6 py-3 border-[3px] border-nb-black transition-all hover:bg-nb-black hover:text-nb-white"
              >
                Get In Touch
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-3">
              <a
                href="https://github.com/rapunzzz"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                class="w-12 h-12 border-[3px] border-nb-black flex items-center justify-center bg-nb-white text-nb-black transition-all hover:bg-nb-black hover:text-nb-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                style="box-shadow: #000000 3px 3px 0px 0px"
              >
                <Github :size="20" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/thaariqkurnia"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                class="w-12 h-12 border-[3px] border-nb-black flex items-center justify-center bg-nb-white text-nb-black transition-all hover:bg-nb-blue hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                style="box-shadow: #000000 3px 3px 0px 0px"
              >
                <Linkedin :size="20" aria-hidden="true" />
              </a>
            </div>
          </div>

          <!-- Right side: Mascot Character -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 40, rotate: 5 }"
            :enter="{
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: { type: 'spring', stiffness: 80, damping: 12, delay: 600 },
            }"
            class="flex justify-center items-center"
          >
            <div class="relative">
              <!-- Mascot card container -->
              <div
                class="relative bg-nb-offwhite border-[3px] border-nb-black p-6 sm:p-8"
                style="box-shadow: #000000 8px 8px 0px 0px"
              >
                <img
                  src="/images/mascot-sitting.png"
                  alt="Developer mascot character sitting with a laptop"
                  class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
                />

                <!-- Floating speech bubble -->
                <div
                  class="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-nb-yellow border-[3px] border-nb-black px-4 py-2 rotate-3"
                  style="box-shadow: #000000 3px 3px 0px 0px"
                >
                  <span
                    class="font-space-mono text-xs sm:text-sm font-bold text-nb-black whitespace-nowrap"
                  >
                    &lt;/&gt; Let's build!
                  </span>
                </div>

                <!-- Floating code block -->
                <div
                  class="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-nb-black border-[3px] border-nb-black px-3 py-1.5 -rotate-2"
                  style="box-shadow: #ff6b6b 3px 3px 0px 0px"
                >
                  <span class="font-space-mono text-xs text-nb-green"> const dev = "rapunzz" </span>
                </div>
              </div>

              <!-- Background accent shapes behind mascot -->
              <div
                class="absolute -z-10 -top-4 -left-4 w-full h-full bg-nb-coral border-[3px] border-nb-black"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom border strip -->
    <div class="absolute bottom-0 left-0 w-full h-[3px] bg-nb-black"></div>
  </section>
</template>
