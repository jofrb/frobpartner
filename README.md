# Fröb Partner

Website for Fröb Partner — equipment rental in the Norrbotten area.
Live at [frobpartner.se](https://frobpartner.se).

## Stack

- Next.js 16 (static export)
- Tailwind CSS v4
- Deployed to GitHub Pages via GitHub Actions

## Dev

Requires [Nix](https://nixos.org). Enter the dev shell:

```bash
nix develop
```

Then start the dev server:

```bash
npm install
npm run dev
```

## Formatting

[Prettier](https://prettier.io) is enforced in CI. Run locally with:

```bash
npm run format
```

## Deploy

Merges to `main` automatically deploy via the [deploy workflow](.github/workflows/deploy.yml).
