<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import {
  AppHeader, AppSidebar, AppFooter,
  ColorModeControl, SidebarItem,
  useColorMode,
} from '@meddleware/ui'
import StatusWidget from './components/StatusWidget.vue'

const { mode, set } = useColorMode('dark')
const route = useRoute()
const year = new Date().getFullYear()

const isWalrus = computed(() => route.path === '/walrus')
const isAccessGate = computed(() => route.path === '/access-gate')
</script>

<template>
  <div class="app-shell">
    <AppHeader class="app-shell__header" variant="dark">
      <template #brand>
        <span class="brand-mark" aria-hidden="true">◆</span>
        <span>Meddleware</span>
      </template>
      <template #actions>
        <StatusWidget />
        <ColorModeControl :model-value="mode" @update:model-value="set" />
      </template>
    </AppHeader>

    <AppSidebar class="app-shell__sidebar" variant="dark">
      <nav aria-label="Tools">
        <router-link to="/walrus" custom v-slot="{ navigate }">
          <SidebarItem label="Walrus" icon="🗄" :active="isWalrus" @click="navigate" />
        </router-link>
        <router-link to="/access-gate" custom v-slot="{ navigate }">
          <SidebarItem label="Access Gate" icon="🔐" :active="isAccessGate" @click="navigate" />
        </router-link>
      </nav>
    </AppSidebar>

    <main class="app-shell__main">
      <RouterView />
    </main>

    <AppFooter class="app-shell__footer" variant="transparent">
      <span>&copy; {{ year }} Meddleware</span>
    </AppFooter>
  </div>
</template>

<style scoped>
.brand-mark {
  color: var(--gold);
}
</style>
