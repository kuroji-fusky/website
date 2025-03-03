<h1 align="center">
  <a href="https://kurojifusky.com">kurojifusky.com</a>
</h1>

The source code of `kurojifusky.com` and `fusky.pet`, written in Astro and Svelte.

## APIs used

- Contentful
- Google Sheets API
- YouTube Data v3 API

## Running the abominations locally

### Prerequisties

- Node.js v21 or higher (LTS recommended)
- pnpm

### Setup and installation

This repo contains submodules and clone it with the following along with its corresponding submodules:

```console
git clone https://github.com/kurojifusky/kurojifusky.com --recurse-submodules
cd kurojifusky.com
```

Install dependencies with `pnpm`:

```console
pnpm install # or pnpm i
```

### Starting the dev server

**For `kurojifusky.com`**

```
# Dev server
pnpm run dev # or pnpm run dev:kuro
```

**For `fusky.pet`**

```
# Dev server
pnpm run dev:fp
```

**Housekeeping**

```console
# Clean node_modules; dev leftovers such as .astro, .turbo
pnpm run cleanup
```

```console
# Linting
pnpm run lint

# Format and fix code conventions
pnpm run lint:fix
```

## Copyright

© 2021-2025 Kerby Keith Aquino
