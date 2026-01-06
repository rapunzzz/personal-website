<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { Mail, Phone, MapPin, Send } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(sectionRef)

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
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 851 564 328 71',
    href: 'tel:+6285156432871',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Depok, Indonesia',
    href: '#',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
]
</script>

<template>
  <section
    id="contact"
    class="relative min-h-screen bg-gradient-to-b from-white to-yellow-50 py-20"
  >
    <!-- Background Decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-yellow-200 opacity-20 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-yellow-300 opacity-20 blur-3xl"
      ></div>
    </div>

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
          Let's <span class="text-yellow-600">Connect</span>
        </h2>
        <div
          v-motion
          :initial="{ opacity: 0, scaleX: 0 }"
          :enter="{ opacity: 1, scaleX: 1, transition: { duration: 600, delay: 200 } }"
          :visible-once="false"
          class="mx-auto h-1 w-24 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"
        ></div>
      </div>

      <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
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
            :visible-once="false"
            class="group"
          >
            <a
              :href="info.href"
              :class="[
                'block rounded-2xl bg-white p-6 shadow-lg transition-all duration-300',
                info.href !== '#' ? 'hover:shadow-2xl hover:-translate-y-1' : 'cursor-default',
              ]"
            >
              <div class="flex items-start gap-4">
                <div
                  :class="[
                    'flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl',
                    info.bgColor,
                  ]"
                >
                  <component :is="info.icon" :size="24" :class="info.color" />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="mb-1 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {{ info.label }}
                  </h3>
                  <p :class="['text-base font-semibold break-words', info.color]">
                    {{ info.value }}
                  </p>
                </div>
              </div>
            </a>
          </div>

          <!-- Additional Info Card -->
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
            :visible-once="false"
            class="rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-400 p-6 text-white shadow-lg"
          >
            <h3 class="mb-3 text-xl font-bold">Always Open for Opportunities</h3>
            <p class="text-sm leading-relaxed opacity-90">
              Whether it's a project, collaboration, or just saying hi. I respond within 24 hours!
              Urgent matters? Mention it upfront!
            </p>
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
            :visible-once="false"
            @submit="handleSubmit"
            class="rounded-2xl bg-white p-8 shadow-xl"
          >
            <div class="space-y-6">
              <!-- Name Input -->
              <div>
                <label for="name" class="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name <span class="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="King Rapunzz"
                  class="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-yellow-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-200"
                />
              </div>

              <!-- Email Input -->
              <div>
                <label for="email" class="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="rapunzz@example.com"
                  class="w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-yellow-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-200"
                />
              </div>

              <!-- Message Textarea -->
              <div>
                <label for="message" class="mb-2 block text-sm font-semibold text-gray-700">
                  Your Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  required
                  placeholder="Tell me about your project or just say hi!"
                  class="w-full resize-none rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-yellow-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-200"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting || submitSuccess"
                class="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-400 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span
                  v-if="!isSubmitting && !submitSuccess"
                  class="flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send :size="18" class="transition-transform group-hover:translate-x-1" />
                </span>
                <span v-else-if="isSubmitting" class="flex items-center justify-center gap-2">
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
                  Sending...
                </span>
                <span v-else class="flex items-center justify-center gap-2"> ✓ Message Sent! </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
