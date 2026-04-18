# Code Ninjas Seattle — Dojo Site

## Project Overview
Static HTML website for Code Ninjas Seattle (Ballard Dojo). No build tools, frameworks, or dependencies — just vanilla HTML/CSS.

## Files
- `index.html` — main site (single-page with sections: events, staff, games, links, about)
- `cnsdojo.html` — secondary page
- `images/` — staff photos (geo.jpg, julie.jpg, vanessa.jpg, shana.jpg, nico.jpg)

## Design System
Retro pixel/8-bit aesthetic using:
- Fonts: `Press Start 2P` (headings/labels), `VT323` (body). Emailers use `'Trebuchet MS', Verdana, Arial` since custom fonts don't load in email clients.
- Colors defined as CSS variables in `:root` — always use these, never hardcode hex values
- Key colors: `--blue` (#3490bf), `--green-bright` (#adef32), `--dark` (#0e1a20)

## Editing Guide (from inline admin hints)
- **Events**: Edit cards inside `#events-grid`. Copy any `.event-card` block to add more.
- **Staff**: Swap photo URLs in `<img src="...">` tags. Copy `.staff-card` to add staff.
- **Games**: Edit cards inside `#games-grid`. Copy any `.game-card`. Update link, title, maker, emoji.

## Business Info
- **Location**: Ballard, Seattle WA
- **Hours**: Tues–Fri 3–7 PM, Sat 9:30 AM–3 PM
- **Owners**: Geo & Chelsea (Geo = georittenmyer)
- **Staff**: Manager Julie, Sensei Vanessa, Sensei Shana, Sensei Nico
- **Age range**: 5–14
- **Programs**: CREATE (belt system), Summer Camps, Day Camps, Clubs, Parent's Night Out, Birthday Parties
