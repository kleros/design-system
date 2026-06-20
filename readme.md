# Kleros Design System

A code-first design system for **Kleros** — a decentralized arbitration protocol that
resolves disputes in the onchain economy. Disputes are settled by randomly-selected,
economically-incentivized jurors who stake the protocol token **PNK**. The brand voice is
**confident, plain-spoken and mission-driven**: "Decentralized Justice."

This project is the single source of truth for building Kleros-branded interfaces and
assets — marketing screens, product mocks, decks and throwaway prototypes.

---

## Sources used to build this system

- **Figma — "Website Redesign 2024"** (attached as a virtual file). Brand page, type/spacing
  specimens, components, icons, logos and the homepage were extracted from here. It is the
  primary source of truth for tokens and components.
- **Uploaded logos** — `Kleros logo_updated_white.svg`, `…white square.svg` (in `uploads/`).
- **GitHub — [kleros/ui-components-library](https://github.com/kleros/ui-components-library)** —
  the production React component library powering the Kleros **Court** dApp. *Not yet imported*
  (GitHub was not connected during the build). Connect it to author a faithful Court app UI kit
  and to reconcile production token values. Explore this repo for deeper component fidelity.
- **Brand assets reference:** <https://kleros.io/brand-assets>

---

## Content fundamentals (voice & tone)

- **Mission-first, declarative.** Headlines are short noun phrases: "Decentralized Justice",
  "Reimagining justice for the digital age", "Powering trust across the Web3 ecosystem".
- **Sentence case** for headings and UI; **UPPERCASE + wide tracking** only for small brand
  labels ("SECURED BY KLEROS", eyebrows).
- **"You" / imperative** for CTAs and tasks ("Become a Juror", "Buy PNK", "Enter Court",
  "Read our Yellow Paper"). **"We/Kleros"** when describing the protocol.
- **Plain, technical-but-accessible.** Explains crypto concepts without hype: "Disputes are
  resolved by randomly selected jurors." Avoids exclamation marks and emoji entirely.
- **Concrete proof** over adjectives — real figures ("> $1.2M distributed"), real partners,
  real product names (Court, Escrow, Curate, Scout, Proof of Humanity, Vea, SafeSnap).
- **No emoji. No exclamation. No slang.** Tone is calm, credible, builder-facing.

## Visual foundations

- **Colour.** "Purple at the core, blue on details." Brand **purple `#9013FE`** carries identity;
  **cyan/blue `#27CDFE`** is the action/CTA accent. Deep-purple **`#220050` / `#1B003F`** are the
  signature dark surfaces — most hero and feature sections are dark purple with white/`#DAF0FF`
  text. Light sections use `#FFFFFF`/`#FAFAFA` with `#333`/`#666` ink.
- **Type.** **Urbanist** everywhere (Regular 400 / Medium 500 / SemiBold 600) — geometric,
  friendly, modern. **Open Sans** for long-form editorial prose. Display sizes are large and set
  in Medium with tight tracking. Scale: 96 / 64 / 48 / 32 / 24 / 16 / 14.
- **Spacing.** 8px base unit; everything is a multiple of 8. Horizontal layout on a Responsive 2×
  Fluid 24-grid, 1440 max width, 1184 content width.
- **Shape.** Cards use a **16px radius** + soft low-opacity shadow (`rgba(0,0,0,0.06)`). Buttons
  and pills are **fully rounded** (300px radius). Inputs use 8px radius.
- **Backgrounds.** Deep-purple gradients (`--gradient-hero` radial, `--gradient-dark` linear),
  the signature **purple→blue gradient** for hero CTAs and headline text, and faint polyhedron
  symbol watermarks. Full-bleed PNG wallpapers exist in `assets/backgrounds/`.
- **Motion.** Restrained. Soft `~.16s ease` transitions on hover; cards lift `-3px` with a
  deeper shadow; product rows nudge sideways with a purple glow. No bounces, no looping decor.
- **States.** Hover = lighter/tinted fill or accent-tinted wash; press = 1px nudge down; focus =
  3px soft ring in the accent/purple. Disabled = 40% opacity.
- **Imagery vibe.** Cool, dark, gem-like — the polyhedron mark, crystalline line-art, deep-violet
  product mockups. Glows are cyan or purple.

## Iconography

- Icons are extracted from the Figma file into **`assets/icons/icon-data.js`** and rendered with
  the **`<Icon name="…" size={…} />`** React component (`assets/icons/Icon.jsx`). Single-colour
  glyphs paint with `currentColor`, so set CSS `color` to theme them.
- Two scales coexist: **16px functional UI glyphs** (Check, Menu, Chevron, Mail, Close, Gavel,
  Coins, Globe, PNK) and larger **90px brand "feature" icons** (Juror, Vote, Governance, Curator,
  Transparency, Incentives, Reward, Collective, Challenge, Report, Document) used on feature cards.
- No emoji, no icon font. The **Kleros symbol** (polyhedron) is a brand mark, available via the
  `Logo` component (`variant="symbol"`) and as SVG in `assets/logos/`.
- Partner/product logos and badges ("Secured by / Built by Kleros") live in `assets/brand/` and
  `assets/logos/`. Substitution flag: **none** — Urbanist and Open Sans are exact Google Fonts.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry (imports only). Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css`.
- Theme: default tokens = light context; add class **`.k-dark`** to any container for the
  deep-purple context (most marketing sections).

**Components** (`window.KlerosDesignSystem_398995`)
- `components/core/` — Button, IconButton, Input, Textarea, Checkbox, Radio, Switch, Tag, Badge,
  Card (+CardBody), Tabs, Select, Avatar.
- `components/brand/` — Logo (wordmark + symbol, currentColor).
- `components/navigation/` — Navbar, Footer (website chrome; place in `.k-dark`).
- `assets/icons/` — Icon component + 23 extracted glyphs.

**UI kits**
- `ui_kits/website/` — Kleros marketing homepage (hero, trusted-by, feature row, interactive
  ecosystem use-case selector, participate CTA, product portfolio, footer).

**Guidelines**
- `guidelines/cards/` — foundation specimen cards shown in the Design System tab.

**Assets** — `assets/logos/`, `assets/brand/`, `assets/backgrounds/`, `assets/mockups/`, `assets/icons/`.

---

## Using it

Link the CSS and load the bundle, then read components off the namespace:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Logo, Icon } = window.KlerosDesignSystem_398995;
</script>
```

Wrap deep-purple sections in `<div class="k-dark">…</div>` so semantic colour tokens flip.
