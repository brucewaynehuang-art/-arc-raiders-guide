# Rustwatch — ARC Raiders Guide

An Astro static site for an ARC Raiders guide, populated with real game data
researched in September 2026.

## What's filled in

All nine navigation sections are built with real, sourced content:

- **Home** — section hub, map quick-pick table, current game state
- **Getting Started** — core loop, pre-raid checklist, first-week priorities
- **Maps** — all six maps (Dam Battlegrounds, Buried City, Spaceport, Blue Gate,
  Stella Montis, Riven Tides), map conditions explained, "which map for which
  goal" table. Individual map pages generate from a dynamic route.
- **Weapons** — full S/A/B/C tier list with ~19 weapons, crafting costs,
  blueprint requirements, patch history
- **Skills & Loadouts** — all three trees broken down, spending order by level,
  four build templates, expedition skill points
- **Workshop & Crafting** — blueprint gating, material priority table, build order
- **ARC Enemies** — 12-entry database with weak points, grenade counters, armor
  colour system, boss strategies
- **Seasons & Updates** — 10-entry patch timeline from launch through Frozen Trail
- **FAQ** — 15 questions targeting real long-tail search queries

## The data file

`src/data/game.js` holds all map, weapon, enemy and skill data. The weapons
page, enemies page, maps pages and homepage all read from it. **After a balance
patch, edit that one file and every page updates.** This is deliberate — it
makes patch-day turnaround a five-minute job instead of a rewrite.

## What still needs your hands

Three sections carry an explicit author note in the page itself:

1. **Map loot routes and extraction points** (`src/pages/maps/[slug].astro`) —
   deliberately left unwritten. Specific extraction point names and loot
   coordinates change per patch, and publishing invented ones destroys reader
   trust permanently. Verify in-game or against a live interactive map.
2. **Full crafting recipe costs** (`workshop`) — only the well-documented ones
   (Ferro: 5 metal + 2 rubber) are stated. Verify the rest in-game.
3. **Every number before launch** — weapon stats, patch versions and dates here
   were researched from public coverage, not from the game client. Spot-check
   against official patch notes at arcraiders.com/news before you publish.

## Running locally

```bash
npm install
npm run dev
```

Opens at http://localhost:4321.

## Deploying

Push to GitHub, connect to Vercel or Netlify. Both auto-detect Astro.

## Before you go live

- Set your real domain in `astro.config.mjs` (currently a placeholder)
- Add a sitemap: `npx astro add sitemap`
- Replace the "Rustwatch" name and logo if you want something else
- The footer disclaimer is already in place — keep it. This is an unofficial
  fan site and should say so.
- Do not use official ARC Raiders art or screenshots without checking Embark's
  content policy. Take your own screenshots in-game.
