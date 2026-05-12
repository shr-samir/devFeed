# DevFeed

A clean, unified feed for developers. Hacker News, Dev.to, GitHub Trending, and Reddit — aggregated into one place you can read, save, and come back to offline.

> Built as a React Native learning project from first principles — covering architecture, data flow, performance, component design, and production tooling.

---

## The Problem

Dev news is fragmented. Staying current means juggling tabs across Hacker News, Dev.to, GitHub Trending, Reddit, and newsletters — context-switching just to read. DevFeed pulls it all into one feed, lets you bookmark what matters, and keeps it readable even when you're offline.

---

## Features

- **Unified feed** — Articles from Hacker News, Dev.to, GitHub Trending, and Reddit in one scrollable list
- **Bookmarks** — Save articles with instant feedback via optimistic updates
- **Offline support** — Stale cache keeps the feed readable without a connection
- **Auth** — Persistent login that survives app restarts
- **Skeleton loaders** — Smooth loading states, never a blank screen
- **Pull to refresh** — Always in sync when you want it

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Expo (Managed) + Expo Router |
| Language | TypeScript (strict) |
| State — Server | TanStack Query |
| State — Client | Zustand + AsyncStorage |
| Lists | FlashList (Shopify) |
| Animations | Reanimated 3 |
| HTTP | Axios |
| Linting + Format | Biome |
| Builds | EAS Build |

---

## Project Status

> 🚧 In active development — tracking progress against a 7-day curriculum.

- [x] Project scaffold & design token system
- [x] Tooling — Biome, Husky, path aliases, strict TypeScript
- [ ] Auth flow — login, register, persistent session, auth gate
- [ ] Feed screen — infinite scroll with FlashList + TanStack Query
- [ ] Article detail screen
- [ ] Bookmarks — optimistic updates + offline persistence
- [ ] Offline banner + network status handling
- [ ] Skeleton loaders + Reanimated 3 animations
- [ ] Error boundaries + empty states
- [ ] Accessibility pass
- [ ] EAS production build

---

## Architecture

Hybrid modular structure — each feature module is fully self-contained with its own components, hooks, store, API, and types. The `app/` directory handles routing only. Anything used by two or more modules lives in `shared/`.

```
src/
  app/                        ← Expo Router (routing ONLY, no logic)
    (auth)/
      login.tsx
      register.tsx
    (tabs)/
      index.tsx               ← feed tab
      bookmarks.tsx
      profile.tsx
    _layout.tsx
  modules/                    ← each feature is a self-contained module
    feed/
      components/             ← FeedCard, FeedList, FeedSkeleton
      hooks/                  ← useFeed, useFeedFilters
      store/                  ← Zustand slice for feed
      api/                    ← feed API calls only
      types/                  ← feed-specific types
      utils/                  ← feed-specific helpers
      index.ts                ← public API — export only what's needed
    auth/
      components/             ← LoginForm, RegisterForm
      hooks/                  ← useAuth
      store/                  ← authStore
      api/                    ← authApi
      types/
      index.ts
    bookmarks/
      components/
      hooks/
      store/
      api/
      types/
      index.ts
    profile/
      components/
      hooks/
      store/
      api/
      types/
      index.ts
  shared/                     ← only what's used by 2+ modules
    components/
      ui/                     ← Button, Text, Card, Input, Skeleton
      layout/                 ← Screen, Header, TabBar
    hooks/                    ← useDebounce, useAppState, useTheme
    lib/                      ← axios instance, queryClient, mmkv
    stores/                   ← global app store (theme, session)
    constants/                ← theme.ts, spacing.ts, routes.ts
    types/                    ← global types, API response shapes
    utils/                    ← formatDate, truncate, cn()
  assets/
    fonts/
    images/
    icons/
```

### Key design decisions

**`app/` is routes, nothing else.** No business logic, no API calls, no store access lives in the router files. They import from modules and render.

**Each module owns its boundaries.** A module's `index.ts` is its public API — internal components, hooks, and store slices are not importable from outside the module directly. Cross-module imports go through `index.ts` only.

**`shared/` has a strict rule.** Nothing moves to `shared/` until it's genuinely needed by two or more modules. Premature sharing is just coupling with a better name.

---

## Getting Started

```bash
git clone https://github.com/shr-samir/devfeed.git
cd devfeed
npm install
npx expo start
```

Requires Node 18+. Copy `.env.example` to `.env` and fill in your API base URL.

---

## License

MIT
