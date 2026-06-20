---
name: kleros-design
description: Use this skill to generate well-branded interfaces and assets for Kleros, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts:
- Tokens + components live under `tokens/`, `components/`, `assets/`, `ui_kits/`. The global CSS entry is `styles.css`; components are bundled to `_ds_bundle.js` on the `window.KlerosDesignSystem_398995` namespace.
- Brand: "Decentralized Justice." Purple `#9013FE` at the core, cyan `#27CDFE` for actions, deep-purple `#220050`/`#1B003F` surfaces. Type is Urbanist (+ Open Sans for prose). 8px spacing, 16px card radius, pill buttons.
- Add class `.k-dark` to a container for the deep-purple context.
- Icons render via `<Icon name="…" />`; the Kleros mark via `<Logo variant="symbol" />`.
- Voice: mission-first, sentence case, no emoji, no exclamation, concrete proof over hype.
