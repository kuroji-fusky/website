import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './routes'
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

// Fortnite awesome
library.add(fas)
library.add(far)
library.add(fab)
dom.watch()

class RoadmapWrapper extends HTMLElement {
  constructor() {
    super()
  }
}

customElements.define('skep-roadmap-wrapper', RoadmapWrapper)

createApp(App)
  .use(router)
  .use(createMetaManager())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#skepfuskyPortfolioRoot')
