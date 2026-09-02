<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type StatusLevel = 'ok' | 'degraded' | 'error'

const status = ref<StatusLevel>('ok')
const label = ref('All systems operational')
let timer: ReturnType<typeof setInterval> | null = null

async function fetchStatus(): Promise<void> {
  try {
    const res = await fetch('https://status.meddleware.co.uk/api/status')
    if (!res.ok) throw new Error('non-2xx')
    const data = (await res.json()) as { status?: string }
    if (data.status === 'ok') {
      status.value = 'ok'
      label.value = 'All systems operational'
    } else {
      status.value = 'degraded'
      label.value = 'Degraded'
    }
  } catch {
    status.value = 'error'
    label.value = 'Status unavailable'
  }
}

onMounted(() => {
  fetchStatus()
  timer = setInterval(fetchStatus, 60_000)
})

onUnmounted(() => {
  if (timer !== null) clearInterval(timer)
})
</script>

<template>
  <a
    href="https://status.meddleware.co.uk"
    target="_blank"
    rel="noopener"
    class="status-widget"
    :class="`status-widget--${status}`"
    :title="`Platform status: ${label}`"
  >
    <span class="status-widget__dot" aria-hidden="true" />
    <span class="status-widget__label">{{ label }}</span>
  </a>
</template>

<style scoped>
.status-widget {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.8rem;
  opacity: 0.85;
}
.status-widget:hover { opacity: 1; }

.status-widget__dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-widget--ok .status-widget__dot       { background: #3fb950; }
.status-widget--degraded .status-widget__dot { background: #d29922; }
.status-widget--error .status-widget__dot    { background: #f85149; }
</style>
