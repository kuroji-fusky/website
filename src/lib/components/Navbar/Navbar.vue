<script setup lang="ts">
import logoLetter from "../icons/logo-brand.svg?raw"
import NavbarSubItem from "./NavbarSubItem.vue"

import { navItems } from "./Navbar.constants"
import { IconChevronDown, IconMenu, IconSearch } from "@iconify-prerendered/vue-lucide"

defineProps<{
  pathCrumbs?: string
}>()
</script>

<template>
  <nav class="z-10 py-2 sticky top-0 bg-kuro-dark2">
    <div class="mx-auto flex justify-between items-center px-8 max-w-screen-2xl">
      <div class="flex items-center gap-x-2">
        <a href="/">
          <span id="kuro-logo-label" class="sr-only" translate="no">Kuro logo</span>
          <div class="h-7" aria-labelledby="kuro-logo-label" v-html="logoLetter" />
        </a>
        <span>{{ pathCrumbs }}</span>
      </div>
      <div class="flex [&_button]:px-3.5 [&_button]:py-3.5">
        <button class="lg:hidden block">
          <IconMenu height="19" width="19" />
        </button>
        <div
          class="flex flex-col absolute top-14 inset-x-0 bg-kuro-dark2 lg:relative lg:contents *:px-3.5 *:py-3.5 *:inline-flex *:items-center *:gap-x-1.5 *:relative"
        >
          <div v-for="root in navItems" class="lg:group/items lg:group/topnav">
            <template v-if="root.link">
              <a :href="root.link" class="inline-flex items-center gap-x-1.5">
                <span class="group-hover/topnav:text-kuro-lavender-300">{{ root.text }}</span>
                <IconChevronDown
                  v-if="root.subitems"
                  size="19"
                  class="group-hover/topnav:rotate-180 transform-gpu transition-transform"
                />
              </a>
              <NavbarSubItem v-show="root.subitems" :items="root.subitems" />
            </template>
            <template v-else>
              <div class="inline-flex items-center gap-x-1.5">
                <span class="cursor-default lg:group-hover/topnav:text-kuro-lavender-300">
                  {{ root.text }}
                </span>
                <IconChevronDown
                  v-if="root.subitems"
                  height="19"
                  width="19"
                  class="lg:group-hover/topnav:rotate-180 transform-gpu transition-transform"
                />
              </div>
              <NavbarSubItem v-if="root.subitems" :items="root.subitems" />
            </template>
          </div>
        </div>
        <button class="hover:text-kuro-lavender-400">
          <IconSearch height="19" width="19" />
        </button>
      </div>
    </div>
  </nav>
</template>
