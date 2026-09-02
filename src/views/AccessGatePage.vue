<script setup lang="ts">
import { UiCard } from '@meddleware/ui'
</script>

<template>
  <div class="feature-page">
    <h1>🔐 Access Gate</h1>

    <UiCard class="section">
      <h2>Overview</h2>
      <p>
        Access Gate is an on-chain NFT access control system on Sui. Operators deploy a gate
        smart contract that issues soulbound or transferable NFT passes; the gate enforces a
        platform commission (20 bps) on every pass purchase, routed directly on-chain. The
        Meddleware Access Gate console lets you create gates, configure pricing, and monitor
        your gate's activity — all from a browser wallet, with no backend required.
      </p>
    </UiCard>

    <UiCard class="section">
      <h2>Launch</h2>
      <p>Use the hosted Meddleware Access Gate console — no installation required.</p>
      <a
        href="https://sui-access-gate.meddleware.co.uk"
        target="_blank"
        rel="noopener"
        class="launch-btn"
      >
        Open Access Gate →
      </a>
    </UiCard>

    <UiCard class="section section--secondary">
      <h2>White-label</h2>
      <p>
        Deploy a branded version of the Access Gate console for your own project. The
        <code>access-gate-ui</code> Docker image is a standalone Vue 3 SPA — run it behind
        your own subdomain and point users at your specific gate ID. The commission enforcement
        is in the smart contract, so any gate created through your interface still routes 20 bps
        to Meddleware automatically.
      </p>
      <p class="note">
        Detailed deployment instructions will be available at <code>dev.meddleware.co.uk</code>.
      </p>
    </UiCard>
  </div>
</template>

<style scoped>
.feature-page { max-width: 760px; }
h1 { margin-top: 0; }

.section { margin-bottom: 1.25rem; }
.section h2 { margin-top: 0; }

.section--secondary { opacity: 0.9; }
.section--secondary h2 { font-size: 1rem; }

.launch-btn {
  display: inline-block;
  margin-top: 0.25rem;
  padding: 0.55rem 1.2rem;
  border-radius: var(--mw-radius, 10px);
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
.launch-btn:hover { opacity: 0.88; }

code {
  font-size: 0.85em;
  background: color-mix(in srgb, currentColor 10%, transparent);
  padding: 0.1em 0.35em;
  border-radius: 4px;
}

.note {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--muted);
}
</style>
