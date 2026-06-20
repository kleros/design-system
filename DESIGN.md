# Kleros Design System — DESIGN.md

> **Decentralized Justice.** A code-first design system for **Kleros**, a decentralized
> arbitration protocol that resolves disputes in the onchain economy. Disputes are settled by
> randomly-selected, economically-incentivized jurors who stake the protocol token **PNK**.

This document is the at-a-glance design language: the principles, tokens, and rules you need to
produce on-brand Kleros interfaces and assets. For the full component API see `readme.md`.

---

## 1. Brand principles

| Principle | What it means in practice |
|---|---|
| **Mission-first** | Lead with the idea ("Decentralized Justice"), not the feature. Short, declarative noun phrases. |
| **Credible, not hyped** | Explain crypto plainly. Prove with real numbers and real partners. No exclamation marks, no emoji, no slang. |
| **Purple at the core, blue on the details** | Brand identity is purple; the action/accent layer is cyan-blue. |
| **Dark, gem-like, crystalline** | Deep-purple surfaces, the polyhedron mark, cyan/purple glows. Cool and precise. |
| **Builder-facing** | "You/imperative" for tasks ("Become a Juror", "Enter Court"); "We/Kleros" for the protocol. |

---

## 2. Voice & tone

- **Casing:** Sentence case for headings and UI. `UPPERCASE` + wide tracking only for small brand
  labels ("SECURED BY KLEROS", eyebrows).
- **Headlines:** noun phrases — *"Reimagining justice for the digital age"*, *"Powering trust
  across the Web3 ecosystem"*, *"Our product portfolio"*.
- **CTAs:** verbs — *Enter Court*, *Get started*, *Buy PNK*, *Read our Yellow Paper*.
- **Proof over adjectives:** *"> $1.2M distributed"*, *"Disputes are resolved by randomly selected
  jurors"*, named products (Court, Escrow, Curate, Scout, Proof of Humanity, Vea, SafeSnap).
- **Never:** emoji, exclamation marks, hype words, ALL-CAPS sentences.

---

## 3. Colour

### Brand
| Token | Hex | Use |
|---|---|---|
| `--k-purple` | `#9013FE` | Primary brand purple — identity |
| `--k-purple-2` | `#9747FF` | Most-used purple accent |
| `--k-blue` | `#27CDFE` | **Primary action / CTA** (cyan) |
| `--k-blue-2` | `#7CE2FF` | Secondary blue |
| `--k-blue-link` | `#009AFF` | Links, checked controls |

### Deep-purple surfaces (the signature dark context)
| Token | Hex | Use |
|---|---|---|
| `--k-bg-1` | `#220050` | Primary dark surface |
| `--k-bg-2` | `#1B003F` | Deeper dark |
| `--k-bg-3` | `#27005C` | Raised dark surface |

Ink on dark: `#FFFFFF` → `#DAF0FF` → `#BECCE5`; hairline borders `#42498F`.

### Light neutrals
Surfaces `#FFFFFF` / `#FAFAFA` / `#F5F7FB`; ink `#333333` → `#666666` → `#999999`; border `#E5E5E5`.

### Semantic
Success `#00C42B` · Error `#F60C36` · Warning `#C8B100` · Info `#009AFF` (each with a soft tint bg).

### Theming
Default tokens are the **light** context. Add class **`.k-dark`** to any container to flip semantic
tokens (`--color-bg`, `--text-primary`, `--color-accent`, …) to the deep-purple context. Most
marketing hero/feature sections are `.k-dark`.

---

## 4. Typography

- **Urbanist** — primary typeface for everything (UI, headings, body). Geometric, friendly, modern.
  Weights: Regular 400 · Medium 500 · SemiBold 600.
- **Open Sans** — long-form editorial prose (research, docs, blog).
- Both are exact **Google Fonts** matches (no substitution).

**Scale** (px): `96 / 64 / 48 / 32 / 24 / 18 / 16 / 14 / 12`. Display & headings set in **Medium**
with tight tracking (`-0.02em`) and tight leading (~1.04–1.25). Body 16 / 1.5; prose 16 / 1.6.

Helpers: `.k-display-1` `.k-display-2` `.k-h1 … .k-h3` `.k-body` `.k-prose` `.k-eyebrow`.

---

## 5. Spacing & layout

- **8px base unit** — every spacing value is a multiple of 8. In-use scale: `8 · 16 · 24 · 32 · 48
  · 64`; expansion: `80 · 96 · 128 · 160 · 192`.
- **Grid:** Responsive 2× Fluid **24-column** grid. Container max **1440px**, content **1184px**,
  gutter **32px**, navbar height **80px**.

---

## 6. Shape, elevation & motion

- **Radii:** cards **16px**, inputs/buttons-secondary **8px**, small **4px**, buttons & pills
  **fully rounded (300px)**.
- **Cards:** white surface, 1px `#E5E5E5` border, 16px radius, soft low-opacity shadow
  (`0 2px 8px rgba(0,0,0,.06)`). Interactive cards lift `-3px` with a deeper shadow.
- **Shadows** are soft and low-opacity; on dark they cast with deep violet.
- **Gradients:** signature **purple → blue** (`--gradient-brand`) for hero CTAs and headline text;
  radial **`--gradient-hero`** and linear **`--gradient-dark`** for deep-purple backgrounds.
- **Motion:** restrained `~.16s ease`. Hover = lighter/tinted wash; press = 1px nudge down; focus =
  3px soft accent/purple ring; disabled = 40% opacity. No bounces, no looping decoration.

---

## 7. Iconography & marks

- Render glyphs with **`<Icon name="…" size={…} />`**; single-colour icons paint in `currentColor`.
- Two scales: **16px** functional UI glyphs (Check, Menu, Chevron, Mail, Close, Gavel, Coins, Globe,
  PNK) and larger **90px** brand "feature" icons (Juror, Vote, Governance, Curator, Transparency,
  Incentives, Reward, Collective, Report, Document).
- The **Kleros symbol** (polyhedron) is a brand mark — use `<Logo variant="symbol" />`, never a
  hand-drawn substitute. Logos & badges ("Secured by / Built by Kleros") live in `assets/`.
- **No emoji. No icon font.**

---

## 8. Components

`window.KlerosDesignSystem_398995` exposes:

**Core** — Button (primary · brand-gradient · secondary · tertiary · ghost; sm/md/lg), IconButton,
Input, Textarea, Checkbox, Radio, Switch, Tag (pill / use-case selector), Badge, Card (+CardBody),
Tabs, Select, Avatar.
**Brand** — Logo (wordmark + symbol, `currentColor`).
**Navigation** — Navbar, Footer (website chrome; place inside `.k-dark`).
**Icons** — `Icon` + extracted glyph set.

Buttons are pill-shaped: **primary = cyan**, **brand = purple→blue gradient** (hero CTAs),
secondary = outline (flips white on dark), tertiary = accent-text, ghost = subtle.

---

## 9. Using it

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Logo, Icon, Navbar, Footer } = window.KlerosDesignSystem_398995;
</script>
```

Wrap deep-purple sections in `<div class="k-dark">…</div>` so semantic colour tokens flip.

---

## 10. Sources

- **Figma — "Website Redesign 2024"** (brand page, type/spacing specimens, components, icons, logos,
  homepage) — primary source of truth.
- **GitHub — [kleros/ui-components-library](https://github.com/kleros/ui-components-library)** — the
  production React library behind the **Court** dApp. *Not yet imported* — connect it to build a
  faithful Court app UI kit and reconcile production tokens.
- **Brand assets:** <https://kleros.io/brand-assets>

*Substitution flag: none — Urbanist and Open Sans are exact Google Fonts.*
