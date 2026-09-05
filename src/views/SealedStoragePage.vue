<script setup lang="ts">
import { UiCard } from '@meddleware/ui'
</script>

<template>
  <div class="feature-page">
    <h1>🔒 Sealed Storage <span class="badge">Testnet · mainnet pending</span></h1>

    <UiCard class="section">
      <h2>Overview</h2>
      <p>
        Sealed Storage composes three primitives into one: encrypt a file in your browser with
        <strong>Seal</strong> (threshold identity-based encryption), store the ciphertext on
        <strong>Walrus</strong>, and gate decryption with an on-chain <strong>access policy</strong>.
        Decryption keys are released by a committee of independent key servers only when the policy is
        satisfied — no server ever holds your data or keys. Policies are modular: gate on an
        <strong>access-gate NFT</strong>, a <strong>time-lock</strong>, and more over time.
      </p>
    </UiCard>

    <UiCard class="section">
      <h2>Launch</h2>
      <p>Use the hosted Meddleware Sealed Storage app (testnet).</p>
      <a
        href="https://sui-seal.meddleware.co.uk"
        target="_blank"
        rel="noopener"
        class="launch-btn"
      >
        Open Sealed Storage →
      </a>
      <p class="note">
        Mainnet is pending: Seal committee mode is currently testnet-only. The app will enable mainnet
        automatically once it ships.
      </p>
    </UiCard>

    <UiCard class="section section--secondary">
      <h2>White-label</h2>
      <p>
        Deploy your own branded Sealed Storage with the <code>seal-ui</code> Docker image: set your
        network, policy package, key-server committee, and Walrus endpoints via build-time VITE args.
        The policy contracts (<code>seal-policies-sui</code>) and client
        (<code>@meddleware/seal-client</code>) are reusable — add your own policy type as a drop-in
        Move module + client provider.
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

.badge {
  font-size: 0.6em;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.2em 0.6em;
  border-radius: 999px;
  background: color-mix(in srgb, var(--gold, #d29922) 22%, transparent);
  color: var(--text);
}

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
