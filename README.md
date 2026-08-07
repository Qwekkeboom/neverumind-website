# NeverUMind website

Static, bilingual (Dutch/English) website for the band **NeverUmind** — 50s & 60s rock & roll covers from Leiden.

## Design

"Gig-flyer screenprint" — a two-colour screenprinted poster look: burnt-orange + ink on warm paper, with a halftone dot texture, showbill typography, and a misregistered-print echo on the wordmark. Fully independent of the sibling ANRS site (no shared layout, fonts, or palette).

- **Light mode:** warm paper (`#efe7d2`) + ink (`#1b1410`) + orange (`#d2551b`)
- **Dark mode:** printed on dark stock (`#14100c` + cream ink, orange stays)
- **Fonts:** Oswald (condensed caps display), DM Sans (body), Special Elite (stamps/typewriter)
- **Signature:** showbill hero with a misregistered-print echo (`.bill-name::before`) on the wordmark

The site has **no top header/nav bar** — only a floating theme toggle (top-right) and a footer with nav + language switch.

## Structure

```
index.html          # Dutch (default)
en/index.html       # English (relative paths ../)
404.html            # Custom 404 (served by GitHub Pages)
css/styles.css      # Screenprint design system
js/main.js          # Theme toggle + theme-color sync
assets/favicon.svg  # "NUM" stamp (placeholder until a real logo exists)
robots.txt
sitemap.xml
.nojekyll            # Serve files as-is, skip Jekyll
```

### Sections

Hero (showbill) → About / cast list (`#over` · `#about`) → Music | Shows two-up (`#muziek`+`#optredens` · `#music`+`#shows`) → Repertoire feature band (`#repertoire`) → Contact ticket block (`#contact`) → Footer.

## Deployment

GitHub Pages from `main`. Custom domain: `neverumind.nl`. Repo: `Qwekkeboom/neverumind-website`.

## TODO (placeholders to replace)

- `assets/favicon.svg` — replace with a real logo once the band has one; update OG references.
- `booking@neverumind.nl` — replace with a real booking email (in `index.html`, `en/index.html`).
- Social links (Instagram / Facebook / Spotify / YouTube / TikTok) — point to real profiles (footer + contact).
- Music section — wire in demo embeds once the cover recordings are uploaded (Bandcamp recommended).
- Repertoire — publish a real setlist once finalised.
