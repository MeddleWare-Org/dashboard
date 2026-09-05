<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import {
  AppHeader, AppSidebar,
  ColorModeControl, SidebarItem, StatusWidget,
  useColorMode,
} from '@meddleware/ui'

const { mode, set } = useColorMode('dark')
const route = useRoute()

const isWalrus = computed(() => route.path === '/walrus')
const isAccessGate = computed(() => route.path === '/access-gate')
const isSealedStorage = computed(() => route.path === '/sealed-storage')
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
        <router-link to="/sealed-storage" custom v-slot="{ navigate }">
          <SidebarItem label="Sealed Storage" icon="🔒" :active="isSealedStorage" @click="navigate" />
        </router-link>
      </nav>
    </AppSidebar>

    <main class="app-shell__main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  display: grid;
  grid-template-columns: var(--mw-sidebar-width, 240px) 1fr;
  grid-template-rows: var(--mw-header-height, 56px) 1fr;
  height: 100vh;
  overflow: hidden;
}

.app-shell__header {
  grid-column: 1 / -1;
}

.app-shell__sidebar {
  height: 100%;
  overflow-y: auto;
}

.app-shell__main {
  overflow: hidden;
  height: 100%;
}

.brand-mark {
  color: var(--gold);
}
</style>
