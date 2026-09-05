<script setup lang="ts">
import { UiCard } from '@meddleware/ui'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="home">
    <h1>Meddleware Tools</h1>
    <p class="prose">
      Decentralised storage and smart-contract-powered access control — hosted and ready to use.
    </p>

    <div class="card-grid">
      <UiCard class="tool-card" @click="router.push('/walrus')">
        <h2>🗄 Walrus</h2>
        <p>Upload and manage blobs on Walrus decentralised storage. NFT-gated relay, wallet-connected, no backend required.</p>
        <a
          href="https://sui-walrus.meddleware.co.uk"
          target="_blank"
          rel="noopener"
          class="launch-link"
          @click.stop
        >
          Launch →
        </a>
      </UiCard>

      <UiCard class="tool-card" @click="router.push('/access-gate')">
        <h2>🔐 Access Gate</h2>
        <p>Create and manage NFT-gated access controls on Sui. Commission-enforced on-chain, no server required.</p>
        <a
          href="https://sui-access-gate.meddleware.co.uk"
          target="_blank"
          rel="noopener"
          class="launch-link"
          @click.stop
        >
          Launch →
        </a>
      </UiCard>

      <UiCard class="tool-card" @click="router.push('/sealed-storage')">
        <h2>🔒 Sealed Storage</h2>
        <p>Client-side encrypted, access-gated storage: seal a file, store it on Walrus, and gate decryption on-chain (NFT pass, time-lock, and more). Testnet — mainnet pending.</p>
        <a
          href="https://sui-seal.meddleware.co.uk"
          target="_blank"
          rel="noopener"
          class="launch-link"
          @click.stop
        >
          Launch →
        </a>
      </UiCard>
    </div>
  </div>
</template>

<style scoped>
.home { max-width: 900px; }
h1 { margin-top: 0; }

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.tool-card { cursor: pointer; }
.tool-card h2 { margin-top: 0; }

.launch-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}
.launch-link:hover { text-decoration: underline; }
</style>
