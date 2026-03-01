# 🥷 Code Ninjas Seattle — Dojo Website

An 8-bit themed website for the Code Ninjas Seattle dojo, built as a single self-contained HTML file with local images.

## Project Structure

```
cnsdojo/
├── index.html          ← The entire website (edit this to update content)
├── images/             ← Staff photos and game thumbnails (local copies)
│   ├── staff-geo-chelsea.jpg
│   ├── staff-julie.jpg
│   ├── staff-vanessa.jpg
│   ├── staff-shana.jpg
│   ├── game-moose-mayhem.jpg
│   ├── game-hangman.jpg
│   ├── game-jeff-fly.jpg
│   └── game-solarmill.jpg
├── download-images.sh  ← Run this once to download images from Google Sites
└── README.md
```

---

## 🚀 First-Time Setup

### 1. Download the images

The images live on Google Sites and need to be saved locally before pushing:

```bash
chmod +x download-images.sh
./download-images.sh
```

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — CN Seattle Dojo website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Enable GitHub Pages (free hosting!)

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under *Source*, select **main branch** → **/ (root)**
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

> 💡 If you want it at `cnsdojo.com`, go to GitHub Pages settings, add your custom domain, and update your DNS to point to GitHub.

---

## ✏️ How to Update Content

Everything lives in `index.html`. Search for the `✏ ADMIN:` comments to find each editable section:

### Add / Edit an Event
Find `id="events-grid"` and copy any `.event-card` block. Update:
- `.ev-date` — date or frequency
- `h3` — event title
- `p` — description
- `href` on the button — enrollment link

### Add / Edit a Staff Member
Find the `.staff-grid` section and copy a `.staff-card` block. Update:
- `img src` — path to photo in `images/` folder
- `.staff-role` — role label
- `h3` — name
- `p` — bio text

To add a new photo: drop the image file into the `images/` folder, then reference it as `images/your-filename.jpg`.

### Add a New Ninja Game
Find `id="games-grid"` and copy a `.game-card` block. Update:
- `href` — link to MakeCode Arcade game
- `h3` — game title
- `.game-maker` — ninja's name
- The emoji in the `.game-thumb` div
- The background gradient color of `.game-thumb`

---

## 🎨 Colors

| Variable | Hex | Used for |
|---|---|---|
| `--blue` | `#3490bf` | Primary UI, borders, buttons |
| `--blue-light` | `#338fbf` | Accents, ticker, links |
| `--green-bright` | `#adef32` | Headings, CTAs, highlights |
| `--green-muted` | `#a7c839` | Secondary green accents |

---

## 🌐 Updating the Live Site

After making edits to `index.html`:

```bash
git add .
git commit -m "Update events / staff / games"
git push
```

GitHub Pages will automatically rebuild and publish within ~1 minute.
