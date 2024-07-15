<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"

import logoLetter from "../../icons/logo-brand.svg?raw"
import NavbarSubItem from "./NavbarSubItem.vue"

import { navItems } from "./Navbar.constants"
import { IconChevronDown, IconMenu, IconSearch } from "@iconify-prerendered/vue-lucide"

defineProps<{
  pathCrumbs?: string
}>()

const isNavExpanded = ref(false)

const handleMobileThingy = () => {
  const isViewportMobile = window.matchMedia("(max-width: 768px)").matches
  const isNavEx = isNavExpanded.value

  if (isViewportMobile) {
    if (!isNavEx) isNavExpanded.value = true
  }

  if (!isViewportMobile && isNavEx) {
    isNavExpanded.value = false
  }
}

onMounted(() => {
  window.addEventListener("resize", handleMobileThingy)
})
onUnmounted(() => {
  window.removeEventListener("resize", handleMobileThingy)
})
</script>

<template>
  <nav class="z-10 py-2 sticky top-0 bg-kuro-dark2">
    <div class="mx-auto flex justify-between items-center px-8 max-w-screen-2xl">
      <div class="flex items-center gap-x-2">
        <a href="/" title="Home page">
          <div class="h-[1.825rem]" v-html="logoLetter" />
        </a>
        <span>{{ pathCrumbs }}</span>
      </div>
      <div class="flex [&_button]:px-3.5 [&_button]:py-3.5 hover:[&_button]:text-kuro-lavender-400">
        <button class="md:hidden block" @click="isNavExpanded = !isNavExpanded">
          <IconMenu height="19" width="19" />
        </button>
        <div
          :class="[
            'flex flex-col absolute top-14 inset-x-0 h-screen bg-kuro-dark2 md:relative md:contents *:px-3.5 *:py-3.5 *:inline-flex *:items-center *:gap-x-1.5 *:relative',
            isNavExpanded ? 'invisible' : 'visible'
          ]"
        >
          <div v-for="root in navItems" class="group/items group/topnav flex flex-col !items-start">
            <template v-if="root.link">
              <a :href="root.link" class="inline-flex items-center gap-x-1.5">
                <span class="md:group-hover/topnav:text-kuro-lavender-300">{{ root.text }}</span>
                <IconChevronDown
                  v-if="root.subitems"
                  size="19"
                  class="group-hover/topnav:rotate-180 transform-gpu transition-transform"
                />
              </a>
              <NavbarSubItem v-show="root.subitems" :items="root.subitems" />
            </template>
            <template v-else>
              <div class="flex items-center gap-x-1.5">
                <span class="cursor-default md:group-hover/topnav:text-kuro-lavender-300">
                  {{ root.text }}
                </span>
                <IconChevronDown
                  v-if="root.subitems"
                  height="19"
                  width="19"
                  class="md:group-hover/topnav:rotate-180 transform-gpu transition-transform"
                />
              </div>
              <NavbarSubItem v-if="root.subitems" :items="root.subitems" />
            </template>
          </div>
        </div>
        <button>
          <IconSearch height="19" width="19" />
        </button>
      </div>
    </div>
  </nav>
</template>
