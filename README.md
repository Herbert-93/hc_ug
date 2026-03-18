# 🌿 Hope For Communities Uganda — Website

A full, professional React website for **Hope For Communities Uganda (HFCU)**, a youth empowerment NGO. Built with React + Vite. No backend required.

---

## 📁 Project Structure

```
hope-for-communities-uganda/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + Navbar.css
│   │   └── Footer.jsx + Footer.css
│   ├── hooks/
│   │   └── useReveal.js         ← scroll animation hook
│   ├── pages/
│   │   ├── Home.jsx + Home.css
│   │   ├── About.jsx + About.css
│   │   ├── Programs.jsx + Programs.css
│   │   ├── Activities.jsx + Activities.css
│   │   ├── Gallery.jsx + Gallery.css
│   │   └── Contact.jsx + Contact.css
│   ├── App.jsx                  ← routes
│   ├── main.jsx                 ← entry point
│   └── index.css                ← global styles + CSS variables
├── index.html
├── vite.config.js
├── package.json
├── render.yaml                  ← Render free hosting config
└── README.md
```

---

## 🚀 Running Locally (Your IDE → Browser)

### Requirements
- **Node.js** version 18 or higher — download from https://nodejs.org
- A terminal (VS Code terminal, PowerShell, or Command Prompt)

### Step-by-Step

**1. Open the project folder in your IDE**
(VS Code: File → Open Folder → select `hope-for-communities-uganda`)

**2. Open the terminal in your IDE**
In VS Code: press `` Ctrl+` `` (backtick)

**3. Install dependencies**
```bash
npm install
```
This downloads all required packages into a `node_modules` folder. Wait for it to finish.

**4. Start the development server**
```bash
npm run dev
```

**5. Open your browser**
You will see a message like:
```
  VITE v5.x.x  ready in 300ms
  ➜  Local:   http://localhost:5173/
```
Open that link — **http://localhost:5173** — in your browser.

The page will **auto-refresh** every time you save a file. 🎉

### To stop the server
Press `Ctrl + C` in the terminal.

---

## 🌐 Deploying FREE on Render (To Share With Others)

**Render** is a free hosting platform. Here's how to deploy the site so anyone in the world can view it.

### Step 1: Push to GitHub

You need a free GitHub account. If you don't have one, sign up at https://github.com

1. Create a **new repository** on GitHub (e.g. `hope-for-communities-uganda`)
2. In your terminal (inside the project folder), run:

```bash
git init
git add .
git commit -m "Initial commit - HFCU Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hope-for-communities-uganda.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your actual GitHub username.

---

### Step 2: Deploy on Render (Free)

1. Go to **https://render.com** and sign up (free — use your GitHub account)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub account if prompted
4. Select your repository: **hope-for-communities-uganda**
5. Fill in the settings:
   - **Name:** `hope-for-communities-uganda` (or any name you like)
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
6. Click **"Create Static Site"**

Render will build and deploy your site. In 2–5 minutes you'll get a live URL like:
```
https://hope-for-communities-uganda.onrender.com
```

Share that URL with anyone — it works on any device, anywhere in the world! ✅

---

### ⚠️ Important: React Router on Render

The `render.yaml` file in this project already handles this automatically — it rewrites all routes to `index.html` so pages like `/about`, `/programs` etc. work correctly.

---

## 🛠 Building for Production (Optional)

If you want to generate static files to upload anywhere:
```bash
npm run build
```
This creates a `dist/` folder with optimised files. Upload that folder to any static hosting (Netlify, GitHub Pages, Firebase Hosting, etc.)

---

## ✏️ Customising the Website

| What to change | Where to find it |
|---|---|
| Organisation name, address, phone | `src/components/Footer.jsx` and `src/pages/Contact.jsx` |
| Hero text and tagline | `src/pages/Home.jsx` |
| Program details | `src/pages/Programs.jsx` (the `allPrograms` array) |
| Activities content | `src/pages/Activities.jsx` |
| Team members | `src/pages/About.jsx` (the `teamMembers` array) |
| Colours and fonts | `src/index.css` (the `:root` CSS variables) |
| Logo | `src/components/Navbar.jsx` (SVG inline) |
| Navigation links | `src/components/Navbar.jsx` (the `navLinks` array) |

---

## 🎨 Design Features

- **Colours:** Deep forest green + warm gold — elegant, professional, Ugandan
- **Fonts:** Cormorant Garamond (display) + Jost (body) — classic + modern
- **Animations:** Scroll-triggered reveal animations on all sections
- **Responsive:** Works perfectly on mobile, tablet, and desktop
- **6 Pages:** Home, About, Programs, Activities, Gallery, Contact
- **Interactive:** Accordion programs, gallery lightbox, contact form
- **Animated counters** on impact stats

---

## 📞 Support

Built for Hope For Communities Uganda. For questions about customisation, contact your developer or reach out to HFCU directly.
