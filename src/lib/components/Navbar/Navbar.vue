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
      <div class="flex *:px-3.5 *:py-3.5 *:inline-flex *:items-center *:gap-x-1.5 *:relative">
        <button class="lg:hidden block">
          <IconMenu size="19" />
        </button>
        <div v-for="root in navItems" class="group/items group/topnav *:contents">
          <div v-if="root.link">
            <a :href="root.link" class="inline-flex items-center gap-x-1.5">
              <span class="group-hover/topnav:text-kuro-lavender-300">{{ root.text }}</span>
              <IconChevronDown
                v-if="root.subitems"
                size="19"
                class="group-hover/topnav:rotate-180 transform-gpu transition-transform"
              />
            </a>
            <NavbarSubItem v-show="root.subitems" :items="root.subitems" />
          </div>
          <div v-else>
            <span class="cursor-default group-hover/topnav:text-kuro-lavender-300">{{
              root.text
            }}</span>
            <IconChevronDown
              v-if="root.subitems"
              size="19"
              class="group-hover/topnav:rotate-180 transform-gpu transition-transform"
            />
            <NavbarSubItem v-if="root.subitems" :items="root.subitems" />
          </div>
        </div>
        <button class="hover:text-kuro-lavender-400">
          <IconSearch size="19" />
        </button>
      </div>
    </div>
  </nav>
</template>
