<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-vue-next'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  isSubmitting.value = true

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500))

  console.log('Form submitted:', formData.value)
  submitSuccess.value = true
  isSubmitting.value = false

  // Reset form after 3 seconds
  setTimeout(() => {
    formData.value = { name: '', email: '', message: '' }
    submitSuccess.value = false
  }, 3000)
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kurniathaariq55@gmail.com',
    href: 'mailto:kurniathaariq55@gmail.com',
    accentColor: 'bg-nb-coral',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 851 564 328 71',
    href: 'tel:+6285156432871',
    accentColor: 'bg-nb-green',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Depok, Indonesia',
    href: '#',
    accentColor: 'bg-nb-blue',
  },
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/rapunzzz',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thaariqkurnia',
  },
]
</script>

<template>
  <section
    id="contact"
    class="relative bg-nb-white py-16 sm:py-24 border-b-[3px] border-nb-black"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      <!-- Header -->
      <div class="mb-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <div
            class="inline-block bg-nb-yellow border-[3px] border-nb-black px-4 py-2 mb-6"
            style="box-shadow: #000000 3px 3px 0px 0px"
          >
            <span class="font-space-mono text-sm font-bold text-nb-black">04 //</span>
          </div>
          <h2 class="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-nb-black leading-tight">
            Let's <span class="bg-nb-yellow px-2 border-[2px] border-nb-black inline-block">Connect</span>
          </h2>
        </div>
      </div>

      <div class="grid gap-8 lg:grid-cols-5">
        <!-- Contact Information Cards -->
        <div class="lg:col-span-2 space-y-6">
          <div
            v-for="(info, index) in contactInfo"
            :key="info.label"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 400 + index * 150,
              },
            }"
          >
            <a
              :href="info.href"
              :class="[
                'block bg-nb-white border-[3px] border-nb-black p-5 transition-all',
                info.href !== '#'
                  ? 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer'
                  : 'cursor-default',
              ]"
              style="box-shadow: #000000 5px 5px 0px 0px"
            >
              <div class="flex items-center gap-4">
                <div
                  :class="[
                    info.accentColor,
                    'w-12 h-12 border-[3px] border-nb-black flex items-center justify-center flex-shrink-0',
                  ]"
                >
                  <component :is="info.icon" :size="20" class="text-nb-black" />
                </div>
                <div class="min-w-0">
                  <h3 class="font-space-grotesk font-bold text-xs uppercase tracking-wider text-nb-gray-dark mb-0.5">
                    {{ info.label }}
                  </h3>
                  <p class="font-inter font-medium text-base text-nb-black break-words">
                    {{ info.value }}
                  </p>
                </div>
              </div>
            </a>
          </div>

          <!-- CTA Card with Mascot -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 850,
              },
            }"
          >
            <div
              class="bg-nb-black border-[3px] border-nb-black p-6"
              style="box-shadow: #FFD23F 5px 5px 0px 0px"
            >
              <div class="flex items-start gap-4">
                <img
                  src="/images/mascot-waving.png"
                  alt="Mascot waving"
                  class="w-16 h-16 object-contain flex-shrink-0"
                />
                <div>
                  <h3 class="font-space-grotesk font-bold text-lg text-nb-white mb-2">
                    Always Open for Opportunities
                  </h3>
                  <p class="font-inter text-sm text-nb-gray-vlight leading-relaxed">
                    Whether it's a project, collaboration, or just saying hi. I respond within 24 hours!
                  </p>
                </div>
              </div>

              <!-- Social links -->
              <div class="flex gap-3 mt-5">
                <a
                  v-for="social in socialLinks"
                  :key="social.label"
                  :href="social.href"
                  target="_blank"
                  rel="noreferrer"
                  :aria-label="social.label"
                  class="w-10 h-10 bg-nb-white border-[2px] border-nb-white flex items-center justify-center text-nb-black transition-all hover:bg-nb-yellow"
                >
                  <component :is="social.icon" :size="18" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <form
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 600,
              },
            }"
            @submit="handleSubmit"
            class="bg-nb-white border-[3px] border-nb-black p-6 sm:p-8"
            style="box-shadow: #000000 8px 8px 0px 0px"
          >
            <div class="space-y-6">
              <!-- Name Input -->
              <div>
                <label for="contact-name" class="block font-space-grotesk font-bold text-sm text-nb-black mb-2 uppercase tracking-wide">
                  Your Name <span class="text-nb-coral">*</span>
                </label>
                <input
                  id="contact-name"
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="King Rapunzz"
                  class="w-full font-inter text-base bg-nb-white text-nb-black px-4 py-3 border-[3px] border-nb-black placeholder:text-nb-gray-light focus:outline-none transition-all"
                  style="box-shadow: #000000 3px 3px 0px 0px"
                />
              </div>

              <!-- Email Input -->
              <div>
                <label for="contact-email" class="block font-space-grotesk font-bold text-sm text-nb-black mb-2 uppercase tracking-wide">
                  Email Address <span class="text-nb-coral">*</span>
                </label>
                <input
                  id="contact-email"
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="rapunzz@example.com"
                  class="w-full font-inter text-base bg-nb-white text-nb-black px-4 py-3 border-[3px] border-nb-black placeholder:text-nb-gray-light focus:outline-none transition-all"
                  style="box-shadow: #000000 3px 3px 0px 0px"
                />
              </div>

              <!-- Message Textarea -->
              <div>
                <label for="contact-message" class="block font-space-grotesk font-bold text-sm text-nb-black mb-2 uppercase tracking-wide">
                  Your Message <span class="text-nb-coral">*</span>
                </label>
                <textarea
                  id="contact-message"
                  v-model="formData.message"
                  rows="5"
                  required
                  placeholder="Tell me about your project or just say hi!"
                  class="w-full font-inter text-base bg-nb-white text-nb-black px-4 py-3 border-[3px] border-nb-black placeholder:text-nb-gray-light focus:outline-none resize-both transition-all"
                  style="box-shadow: #000000 3px 3px 0px 0px"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting || submitSuccess"
                class="w-full flex items-center justify-center gap-2 bg-nb-black text-nb-white font-space-grotesk font-bold text-base px-6 py-4 border-[3px] border-nb-black transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                :style="submitSuccess ? 'box-shadow: #88D498 5px 5px 0px 0px' : 'box-shadow: #FF6B6B 5px 5px 0px 0px'"
              >
                <span
                  v-if="!isSubmitting && !submitSuccess"
                  class="flex items-center gap-2"
                >
                  SEND MESSAGE
                  <Send :size="18" />
                </span>
                <span v-else-if="isSubmitting" class="flex items-center gap-2">
                  <svg
                    class="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  SENDING...
                </span>
                <span v-else class="flex items-center gap-2">
                  ✓ MESSAGE SENT!
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-nb-black border-t-[3px] border-nb-black py-8">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="font-space-mono text-sm text-nb-gray-vlight">
          &copy; {{ new Date().getFullYear() }} Thaariq Kurnia Spama. Built with 💛
        </p>
        <div class="flex items-center gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
            :aria-label="social.label"
            class="w-8 h-8 bg-nb-white border-[2px] border-nb-white flex items-center justify-center text-nb-black transition-all hover:bg-nb-yellow"
          >
            <component :is="social.icon" :size="14" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
