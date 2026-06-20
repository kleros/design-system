# Website UI kit — Kleros marketing homepage

A faithful recreation of the Kleros marketing homepage, composed entirely from this design
system's primitives.

- **`index.html`** — assembles the full page and renders it at 1440px. Open this.
- **`sections.jsx`** — the homepage sections (PromoBar, Hero, TrustedBy, Reimagining,
  Ecosystem, Participate, Portfolio), exported to `window`. Reuses `Navbar`/`Footer` from the
  bundle.

Sections, in order:
1. **Promo bar** — gradient announcement strip.
2. **Navbar** — logo, menu, "Enter Court" CTA (white-on-dark; sits in the dark hero band).
3. **Hero** — gradient "Decentralized Justice" headline on a deep-purple radial.
4. **Trusted by** — partner row.
5. **Reimagining justice** — three feature cards on light grey.
6. **Powering trust across Web3** — dark section with an **interactive use-case selector**
   (click the pills to focus a card).
7. **Start participating** — Become a Juror / Curator + Buy-PNK CTA band.
8. **Product portfolio** — Court, Escrow, Curate, Scout, Proof of Humanity, Vea, SafeSnap.
9. **Footer**.

### Not yet built — Court dApp
The Kleros **Court** application (the product behind "Enter Court") is powered by
[kleros/ui-components-library](https://github.com/kleros/ui-components-library). Connect that
GitHub repo to build a faithful Court app UI kit; it was not available during this build, so it
was intentionally omitted rather than fabricated from screenshots.
