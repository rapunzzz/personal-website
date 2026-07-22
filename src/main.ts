import './styles/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const setDocumentMode = (path: string) => {
  const immersive = path === '/' || path.startsWith('/world')
  document.documentElement.dataset.mode = immersive ? 'immersive' : 'formal'
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', immersive ? '#120C08' : '#FBF7ED')
}

router.afterEach((to) => setDocumentMode(to.path))

void router.isReady().then(() => {
  setDocumentMode(router.currentRoute.value.path)
  app.mount('#app')
})
