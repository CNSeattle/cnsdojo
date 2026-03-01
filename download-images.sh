#!/bin/bash
# ============================================================
#  Code Ninjas Seattle — Image Downloader
#  Run this ONCE before pushing to GitHub to pull all images
#  from Google Sites into the local images/ folder.
#
#  Usage:
#    chmod +x download-images.sh
#    ./download-images.sh
# ============================================================

set -e
mkdir -p images
echo "📥 Downloading staff photos..."

curl -L --progress-bar \
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSKVVC7TjB9bKe14yAFqqfPAOLGy1rsPoPi8tlz2uitpVFP8J5ebZviQ3uLDHVBYzZ7utCNp7bCpk1vVfHZbOSaJ6f1eQI8rSgwIdLHF5eIDm_9U9v16dVPFuAHs9Z7rem3FcGHQUY9PM_Zo38qqQDGXAH2dPpSB0Xf4RZVCKEw_m3mLp3E9VDnL70nLoLyvgM2X1bfc3dya6rJRFMTDbtvxC_ZbLkAjPT3Nc0=w1280" \
  -o images/staff-geo-chelsea.jpg
echo "  ✓ staff-geo-chelsea.jpg"

curl -L --progress-bar \
  "https://lh3.googleusercontent.com/sitesv/APaQ0SQY0tPsA5bhQj88LU8lAqSWtPi11uSNu5XfnG7y65Lr6uWAgUOIAbybEohTgiYCxLXIjRQkkfMyjDG-Y1pQlCHTSiwqrrJxZJHyr10JUfvVfMp2UQuE-7aQcECZ07po_JUsDgTJ29kHT1A0FvoGTXSHa9odKphhr3MmK8oWsZBfUotfLe8J0CBBTEEcBVk8EyaLyQ0F7CdRV7MK-4cIEmT7YdKCaQoM1RYRZqY=w1280" \
  -o images/staff-julie.jpg
echo "  ✓ staff-julie.jpg"

curl -L --progress-bar \
  "https://lh3.googleusercontent.com/sitesv/APaQ0STBPKLM4uySMVlt9Lnp8cXkHVHImvSQq-2Ojrospj9Ck5rBAUJpVM0ttWVuA9Z4NEWN0rPEl2CEpN74nTaIwOXSTyTBrI88qKi-ZmFDNF0rnznR-QndNTxBk1LvYOKIknptIsPRdbS8PijmfbiODyQ1EVKHFDdzCfUjDs_VuIN-NybFe1tEpD30=w1280" \
  -o images/staff-vanessa.jpg
echo "  ✓ staff-vanessa.jpg"

curl -L --progress-bar \
  "https://lh3.googleusercontent.com/sitesv/APaQ0STrN3qENCUNyEL5jlaY1z3rA92G0WSP6XwAAZ1SEBOoOw1AdrAQJKwcTwgJSJtQCKtfr9_kPjANA8CQLqrG4NEg8Y9iu01ZEXsGn2DyuBE1krXe7glO8jIrSvIblxFQ8Hji550DbuXQFwRD-ARyC1mwdUmo491IDgW7p0Y8so-7Mx5nXWuPUFOnk0I=w1280" \
  -o images/staff-shana.jpg
echo "  ✓ staff-shana.jpg"

echo ""
echo "📥 Downloading game thumbnails..."

curl -L --progress-bar \
  "https://lh3.googleusercontent.com/docsubipk/AP9E6xWSMR4HWExXynR8UjXVASH76zRbbX-58rEXcVGI5nFXQ6dxDvfeKMnMUc8eUJkCJPgI6T42NN1WLDm7vELk-4KN1WfX_piVJOfqb3H-NGB7W-l5wI4fXoC80G57MVs" \
  -o images/game-moose-mayhem.jpg
echo "  ✓ game-moose-mayhem.jpg"

curl -L --progress-bar \
  "https://lh3.googleusercontent.com/docsubipk/AP9E6xWDyONJeS-lbC0iE8gJgtd05FH69Y86RI9qSZn-2YdU2GB8rLiwSTx5iyzl_WCGiYpRL5w8-RIBFL5vXi4KvoVxvdUOraTeMweplMJDxgdK2SaVXaU7rxcMc35utYs" \
  -o images/game-hangman.jpg
echo "  ✓ game-hangman.jpg"

curl -L --progress-bar \
  "https://lh3.googleusercontent.com/docsubipk/AP9E6xUwwp-3JVHs309Gi-k3WSHT63yS5CD-a-nmexWvU84GhozFkP0O53eE-kIwrK6K5mNr071jDgF8t001DGVnl_RxKUqMkWcoU53ePqQpyXb0auBWLwO0FuAmD1Bayw" \
  -o images/game-jeff-fly.jpg
echo "  ✓ game-jeff-fly.jpg"

curl -L --progress-bar \
  "https://lh3.googleusercontent.com/docsubipk/AP9E6xXKqzk3UTiHFSG5XHqo6B1jqh0fxNvV_lz11dVL91bAf_RLsjZo0vXzkWv62KQYTwlykePnWAEq4mAbXNoQC6d38hVjiT6rsF_B54pHysinnD-FZ0KPEiyd1O3Thm-AXTnaLAHz3CuXI4aITT4ElOP-jYTVrRCP0TbD" \
  -o images/game-solarmill.jpg
echo "  ✓ game-solarmill.jpg"

echo ""
echo "✅ All images downloaded to images/"
echo "   You can now commit and push to GitHub."
