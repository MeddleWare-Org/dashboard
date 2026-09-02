# CLAUDE.md — @meddleware/dashboard

## What this app is

A Vue 3 + Vite SPA serving as the Meddleware tools hub at `sui.meddleware.co.uk`. It lists
the hosted services (Walrus, Access Gate) and provides a white-label deploy overview for each.

## Architectural invariants

- **No wallet connection.** The dashboard is read-only — no Sui RPC calls, no signing.
- **No accounting logic.** Financial truth lives on-chain; this app is purely informational.
- **Thin feature pages.** Each page: overview → Launch link → white-label section. Nothing more.
- **SidebarItem comes from `@meddleware/ui`.** Do not create a local copy.
- **StatusWidget polls `https://status.meddleware.co.uk/api/status` every 60 s** via plain
  `fetch`. No external libraries. Three states: `ok`, `degraded`, `error`.

## Dependency order

`@meddleware/ui ^0.1.3` must be published to npmjs before this image can be built from npm.
For local development:

```bash
cd repos/ui && npm install && npm run build
cd repos/ui && npm link
cd repos/dashboard && npm install && npm link @meddleware/ui
npm run dev
```

## Scope

This dashboard shows only the hosted product and a white-label deploy option. Developer
documentation (self-host guides, library docs, fork-your-own instructions) is intentionally
deferred to a future `dev.meddleware.co.uk` sub-domain. Do not add self-host or library
content here.
