<script setup lang="ts">
import { UiCard } from '@meddleware/ui'
</script>

<template>
  <div class="feature-page">
    <h1>🗄 Walrus</h1>

    <UiCard class="section">
      <h2>Overview</h2>
      <p>
        Walrus is a decentralised blob storage network built on Sui. The Meddleware Walrus app
        lets you upload arbitrary files, manage your owned blobs, and extend their storage lifetime
        — all from your browser wallet. Access is controlled by an on-chain NFT gate: the relay tip
        is paid only after gate verification, keeping the relay open to legitimate holders while
        preventing spam.
      </p>
    </UiCard>

    <UiCard class="section">
      <h2>Launch</h2>
      <p>Use the hosted Meddleware Walrus app — no installation required.</p>
      <a
        href="https://sui-walrus.meddleware.co.uk"
        target="_blank"
        rel="noopener"
        class="launch-btn"
      >
        Open Walrus →
      </a>
    </UiCard>

    <UiCard class="section section--secondary">
      <h2>White-label</h2>
      <p>
        Run your own branded Walrus upload experience. The <code>walrus-ui</code> Docker image
        accepts VITE build args baked at build time — set your relay URL, network, and access
        gate IDs, then deploy the image behind your own subdomain.
      </p>
      <p>
        You will also need your own NFT gate (deployed via Access Gate) and a running relay
        Worker (nft-gate Cloudflare Worker pointing at a Walrus upload relay origin). The
        commission enforcement (20 bps) is hard-coded in the
        <code>@meddleware/walrus-relay</code> library constants and applies to all relays,
        regardless of who operates them.
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
