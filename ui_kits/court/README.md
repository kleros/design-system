# Court dApp UI kit — Juror Dashboard

A faithful re-skin of the **Kleros Court v2** juror *Dashboard*, composed entirely from this
design system's primitives + tokens. The whole app shell runs in the signature deep-purple
**`.k-dark`** context (Court's default look).

- **`index.html`** — assembles the dashboard at 1440×900. Open this.
- **`sections.jsx`** — the dashboard sections, exported to `window`. Reuses `Button`, `IconButton`,
  `Tag`, `Card`, `Badge`, `Avatar`, `Icon`, `Logo`, `Input` from the bundle.

Sections, top to bottom:
1. **Top bar** — Court brand mark, primary nav (Cases / Courts / Dashboard / Get PNK), search,
   chain pill, theme toggle, wallet (`juror.eth` + avatar).
2. **Dashboard header** — connected juror: avatar, ENS, truncated address, juror level, courts
   staked; *Claim rewards* + *Stake PNK* actions.
3. **Juror stats** — four cards: Total staked (PNK), Coherent votes (%), Rewards earned
   (ETH + PNK), Resolved disputes.
4. **Courts you've staked in** — per-court stake with a brand-gradient share bar.
5. **My cases** — `Tag` filter pills (All / In progress / Resolved) over a 3-up grid of case
   cards. Each card shows dispute id, court, the question, a **period `Badge`**
   (Evidence/Commit/Voting/Appeal/Execution/Resolved), reward, deadline, and a period-aware CTA.
6. **Footer** — slim app chrome.

### Token reconciliation note
Built against this mirror's `--k-*` tokens (the marketing brand palette). The production
[kleros/ui-components-library](https://github.com/kleros/ui-components-library) uses its own
`--klerosUIComponents*` token names. The two **dark** palettes already line up almost exactly
(bg `#220050`/`#1B003F`, ink `#DAF0FF`/`#BECCE5`, hairline `#42498F`); the main light-theme deltas
are brand purple (`#9013FE` here vs `#4d00b4` there) and primary action blue (cyan `#27CDFE` here
vs `#009AFF` there). A full `--klerosUIComponents* ↔ --k-*` map is the natural next step to make
this kit production-accurate.
