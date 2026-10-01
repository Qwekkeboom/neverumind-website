# NeverUMind website

Static, bilingual (Dutch/English) website for the band **NeverUmind** — 50s & 60s rock & roll covers from Leiden.

## Design

"Refined monochrome flyer" — a stripped-back 1950s–60s gig-poster look: solid black ink on light paper (`#f5f5f5`), white cards with 2px black borders, hard offset "letterpress" shadows, and Anton display type set between heavy rules with a ring of flat gray starburst rays behind it. Flat surfaces only — no textures, overlays or stamps. Fully independent of the sibling ANRS site (no shared layout, fonts, or palette).

- **Palette:** black (`#0a0a0a`), white, light gray (`#f5f5f5`) — strictly no color
- **Fonts:** Anton (condensed poster display, single offset shadow + knockout "U" in the wordmark), Helvetica Neue/Arial (body, kickers, labels)
- **Bands:** feature / contact / footer sit on inverted black bands with white print
- **Theme:** light only — no dark mode, no theme toggle

The site has **no top header/nav bar** — only a floating language switch (top-left), plus a footer.

## Structure

```
index.html          # Dutch (default)
en/index.html       # English (relative paths ../)
404.html            # Custom 404 (served by GitHub Pages)
css/styles.css      # Refined monochrome flyer design system
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
- Social links (Instagram / YouTube) — point to real profiles (contact section).
- Music section — wire in demo embeds once the cover recordings are uploaded (Bandcamp recommended).
- Repertoire — publish a real setlist once finalised.
