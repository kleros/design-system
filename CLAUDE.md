# Kleros Design System

Work style: telegraph; noun-phrases ok; drop filler/grammar; min tokens

## Git

Commits require GPG passphrase (interactive — will hang). Always use `git -c commit.gpgsign=false commit` and append `Co-Authored-By: Claude <noreply@anthropic.com>` to commit messages.

## Project

Local mirror of claude.ai/design project `398995a4-82e3-4228-9382-166b93e0b371` ("Kleros Design System"). Sync via `DesignSync` MCP tool (claude_design connector) + `/design-sync` skill — incremental, never wholesale-replace. Namespace `window.KlerosDesignSystem_398995`. Canonical docs: `readme.md` + `DESIGN.md` — don't duplicate into here.

`DesignSync get_file` caps at 256 KiB → 3 large PNGs (`assets/backgrounds/bg-home.png`, `bg-brand-assets.png`, `assets/mockups/court-v2-mockup-1.png`) won't pull via MCP; source from `~/Downloads/Kleros Design System/` or kleros.io/brand-assets.

Not built: Court dApp UI kit — connect github.com/kleros/ui-components-library to author it + reconcile prod tokens.

## Preview

`python3 -m http.server` from repo root → open `/ui_kits/website/index.html` (or `contact.html`). Pulls React+Babel from unpkg → needs network.

