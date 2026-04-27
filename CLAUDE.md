# brianeruiz.com — Personal Portfolio Site

## Project Overview

This is a personal portfolio and resume website for Brian Ruiz, Data Analyst and systems developer. The goal is a modern, fluid, single-page showcase that demonstrates technical depth, real project work, and personality. It should feel like a product, not a template.

The site will be deployed to **Cloudflare Pages** (free tier) and served at **brianeruiz.com**.

---

## Stack

- **Framework:** React 18 + Vite (fast dev experience, familiar component model, great ecosystem)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (native React integration, scroll-triggered fade-ins and transitions)
- **Deployment:** Cloudflare Pages (GitHub integration, auto-deploy on push)
- **Domain:** brianeruiz.com (DNS configured at registrar to point to Cloudflare Pages)

If any section feels overly complex, simplify it. Prioritize shipping a clean working site over perfect abstractions.

---

## Design Direction

- **Tone:** Professional but human. Not corporate. Not a generic Bootstrap resume.
- **Feel:** Deep navy background (`#0a0f1e`), primary accent `#4f8ef7` (bright blue), secondary accent `#7eb8f7` (lighter blue), clean white/light gray text. Think modern dev portfolio -- sharp, confident, not corporate. No orange, no green.
- **Layout:** Full-screen sections that snap or flow on scroll. Smooth transitions between sections.
- **Typography:** Clean sans-serif. Inter or similar. Large confident headings.
- **No stock photos.** No clip art. No generic hero images. Keep it clean and typographic.
- **Mobile responsive** -- this will be viewed on phones by hiring managers.

---

## Site Sections (in order)

### 1. Hero
- Full viewport height
- Name: **Brian Ruiz**
- Tagline: something like "I build systems that work." or "Developer. Analyst. Problem Solver." -- make it punchy, single line
- Subtle animated background (CSS only -- no heavy libraries)
- CTA button: "See My Work" scrolls to Projects section
- Secondary link: "Download Resume" (link to a PDF -- placeholder for now)

### 2. About
- Short 3-4 sentence bio written in first person, confident tone
- B.S. Computer Science, Information Systems -- California State University, Bakersfield, May 2025, Graduated with Honors, 3.67 GPA
- Bilingual: English and Spanish
- Based in the Central Valley, CA
- Currently: Data Analyst at Crop Management Company building automation, API integrations, and AI-powered tools for a large-scale citrus farming operation
- Interests: building things that save people time, AI automation, data systems

### 3. Skills
- Visual skill cards or grouped tags, not a boring list
- Groups:
  - **Languages:** Python, JavaScript, HTML/CSS, C/C++, SQL, Bash
  - **Frameworks:** React, Node.js, Flask
  - **Data & Reporting:** Power BI, REST APIs, ETL automation, Excel/Power Query
  - **Tools:** Git, VS Code, Linux (Ubuntu), Microsoft 365, Azure (familiar)
  - **Currently Learning:** C#/.NET, Azure deeper

### 4. Projects / Work
This is the showcase section. Each card should have a title, short description, and the tech used. No live links needed yet -- these are internal tools. Describe what they do.

**Projects to include:**

**Weekly Fleet Intelligence Report**
Automated pipeline that pulls equipment data from a REST API, builds a formatted Excel report with conditional formatting, generates an AI-written executive summary using the Gemini API, and delivers it via email every Monday morning. Built with Python, Flask, SMTP2Go, and Gemini AI. Includes an approval workflow before send.
*Tags: Python, Flask, REST API, Gemini AI, Excel automation, SMTP*

**Farm Data MCP Proxy**
Flask-based proxy server that bridges a SQL-backed farm management platform with Claude AI via the Model Context Protocol (MCP). Allows executives to query live farm data -- acreage, assets, ownership hierarchy -- in plain English. Secured with API key authentication and scoped access.
*Tags: Python, Flask, MCP, REST API, Claude AI, API Security*

**ERP Automation Pipelines**
Python scripts that extract, reformat, and import data between a payroll/timekeeping system and the company ERP, replacing a manual weekly process. Handles field mapping, error checking, and generates import-ready files.
*Tags: Python, ERP integration, Data automation, Excel/Power Query*

**Ranch Onboarding JotForm Workflow**
Replaced a multi-page paper packet with a digital intake form that collects signatures, uploads documents, and feeds structured data into farm management and operational systems.
*Tags: JotForm, Process automation, Digital transformation*

**Internal Web Tools**
Built several HTML/CSS/JavaScript tools for field and office staff including a Workday Summary calculator for plastic operations (auto-calculates, print-to-PDF ready) and a frost season windmachine tracker.
*Tags: HTML, CSS, JavaScript, Internal tooling*

**CMC Tracker App**
Internal Flask + SQLite web app for tracking tasks, projects, accomplishments, and wins by week. Used personally to document impact and build a review-ready record of work.
*Tags: Python, Flask, SQLite, Vanilla JS*

### 5. Experience (Timeline style)
Keep this tight. Two entries:

**Crop Management Company** -- Data Analyst | May 2025 - Present | Delano, CA
Building automation systems, API integrations, and AI-powered tools for a large-scale citrus farming operation managing 10,000+ acres.

**Kern Medical Hospital Authority** -- Information System Specialist I | Aug 2024 - May 2025 | Bakersfield, CA
IT support, device deployment, user account management, and infrastructure maintenance for a hospital system.

### 6. Contact
- Simple section. Email: Brianruiz007@gmail.com
- Optional: LinkedIn if he has one
- Short line: "Open to new opportunities. Reach out."

---

## File Structure

```
brianeruiz.com/
├── public/
│   └── resume.pdf          # placeholder, add later
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── src/
│   └── constants.js        # GITHUB_URL and LINKEDIN_URL placeholders -- Brian fills these in
├── package.json
└── CLAUDE.md
```

---

## Build and Dev Commands

```bash
npm create vite@latest brianeruiz-portfolio -- --template react
cd brianeruiz-portfolio
npm install
npm install framer-motion react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm run dev          # local dev server at localhost:5173
npm run build        # static output to /dist
npm run preview      # preview the build locally
```

---

## Deployment to Cloudflare Pages

### One-time setup:
1. Push this repo to GitHub (create a repo: `brianeruiz-portfolio`)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect GitHub account and select the repo
4. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click Deploy

### Point brianeruiz.com to Cloudflare Pages:
1. In your domain registrar (wherever brianeruiz.com is registered), update DNS:
   - Add a **CNAME** record: `www` pointing to `<your-project>.pages.dev`
   - Add an **A** record or CNAME at root (`@`) -- Cloudflare Pages will give you exact values after deploy
2. In Cloudflare Pages dashboard: Settings > Custom Domains > Add `brianeruiz.com`
3. SSL is automatic and free via Cloudflare

If the domain is already registered through Cloudflare, this is even easier -- just add the custom domain in the Pages dashboard and it configures DNS automatically.

---

## Coding Style

- Keep components small and focused
- No over-engineering -- this is a portfolio site, not a SaaS product
- Animations should be subtle (fade in on scroll, smooth section transitions) -- not distracting
- Performance matters: keep it fast, avoid heavy dependencies
- All content is hardcoded -- no CMS needed

---

## Content Tone

- First person, confident, not arrogant
- Technical but readable by non-technical people
- Avoid buzzword soup -- say what things actually do
- Short sentences. No fluff.

---

## Current Status

- [x] Initialize Vite + React project
- [x] Configure Tailwind
- [x] Build Hero section
- [x] Build About section
- [x] Build Skills section
- [x] Build Projects section
- [x] Build Experience section
- [x] Build Contact section
- [ ] Test mobile responsiveness (open in browser on phone)
- [x] Build to /dist and verify
- [ ] Push to GitHub
- [ ] Connect to Cloudflare Pages
- [ ] Point brianeruiz.com DNS
- [ ] Add resume PDF to /public