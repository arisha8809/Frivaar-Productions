# Frivaar Productions Website

## File Structure

```
frivaar/
├── index.html          ← Landing page
├── story.html          ← Story & founders page
├── work.html           ← Vinyl record player catalog
├── milestones.html     ← Journey & timeline page
├── css/
│   └── style.css       ← All global styles (colors, fonts, nav, footer)
├── js/
│   └── main.js         ← Cursor, scroll reveal, page transitions, nav
└── assets/
    ├── logo.png        ← ⬅ PUT YOUR LOGO HERE (rename to logo.png)
    ├── vishal.jpg      ← ⬅ Founder photo (optional)
    ├── aksh.jpg        ← ⬅ Founder photo (optional)
    └── leo.jpg         ← ⬅ Founder photo (optional)
```

---

## Quick Edits

### Add your logo
Save the Frivaar logo file as `assets/logo.png`

### Add founder photos
Save photos as `assets/vishal.jpg`, `assets/aksh.jpg`, `assets/leo.jpg`
Then open `story.html` and uncomment the `<img>` tags inside each `.founder-avatar`

### Add celebrity clips (index.html)
Find the comment `<!-- PLACEHOLDER CARDS -->` in index.html
Replace each placeholder card with:
```html
<div class="celeb-card reveal" onclick="this.classList.toggle('active')">
  <img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg"
       style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" alt="Celebrity Name" />
  <div class="celeb-card-overlay">
    <span class="celeb-card-label">Celebrity Name</span>
  </div>
  <div class="celeb-play-btn"><i class="ti ti-player-play-filled"></i></div>
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
          style="width:100%;height:100%;position:absolute;inset:0;border:none;"
          allowfullscreen></iframe>
</div>
```
Replace `YOUR_VIDEO_ID` with the 11-character YouTube video ID.

### Add more songs to the catalog (work.html)
Find `/* ADD MORE TRACKS HERE */` in the `<script>` section of work.html
Add entries like:
```js
{ id: 'YOUTUBE_VIDEO_ID', title: 'Song Title', artist: 'Artist Name', year: '2025' },
```

### Add milestones (milestones.html)
Find `<!-- ADD YOUR AWARDS & MILESTONES HERE -->` and copy the example block

### Update Spotify link
Search all 4 HTML files for `href="#"` next to the Spotify icon and replace with your Spotify URL

### Update contact email
In milestones.html, find `contact@frivaarproductions.com` and replace with your real email

---

## Brand Colors
- Gold: `#D4A017`
- Gold bright: `#F0C040`
- Black: `#0A0A0A`
To change, edit the `:root` block at the top of `css/style.css`

---

## Deploying to Your Domain

### Option 1: cPanel (most hosting providers)
1. Log in to your hosting cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload all files — keep the folder structure exactly as-is
5. Point your domain to `public_html`

### Option 2: Netlify (free, very easy)
1. Go to netlify.com → New site → Deploy manually
2. Drag the entire `frivaar` folder into the deploy box
3. Add your custom domain under Site Settings → Domain Management

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. From inside the frivaar folder: `vercel --prod`
3. Add your domain in the Vercel dashboard

---

Built with: HTML · CSS · Vanilla JS · Google Fonts (Cormorant Garamond, Rajdhani, Space Mono) · Tabler Icons
