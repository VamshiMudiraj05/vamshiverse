# ✨ Vamshi Verse — The Job Application Journal

A minimal, personal, chronological journal of job opportunities personally applied for by **Vamshi Mudiraj**, designed specifically for students, fresh graduates, and his Instagram audience to discover and apply to the exact same roles.

> **Live Reference Portfolio**: [vamshionweb.vercel.app](https://vamshionweb.vercel.app/)  
> **GitHub**: [github.com/VamshiMudiraj05](https://github.com/VamshiMudiraj05)  
> **Instagram**: [@vamshi__verse](https://www.instagram.com/vamshi__verse/)  
> **YouTube**: [@vamshi_verse](https://www.youtube.com/@vamshi_verse)

---

## 📖 Project Overview

**Vamshi Verse** is built as a warm, editorial companion to Vamshi's personal brand:
- **70/30 Desktop Layout**: Focuses ~70% of visual attention on the chronological job feed, with a ~30% sticky sidebar highlighting Vamshi's profile and social platforms.
- **Chronological Date Grouping**: Groups job openings by application date in descending order, with an active **TODAY** badge when entries match the current local day.
- **Sequential Numbering**: Automatically numbers positions within each date group (`01`, `02`, `03`...) for clean readability.
- **Pure Local JSON Storage**: Powered by a lightweight `jobs.json` file. Zero backend, zero external databases, zero cloud lock-in.
- **Warm Aesthetic & Dark Mode**: Reuses the visual language of Vamshi's portfolio—warm-white (`#fffefd`), berry-pink accent (`#c2185b` / `#f3b9c8`), Instrument Serif editorial headings, and smooth dark mode switching with `localStorage` persistence.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Google Fonts (*Instrument Serif*, *Inter*, *Space Mono*)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG icons
- **Deployment Target**: [Vercel](https://vercel.com/) (Static site)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher; tested on v24)
- npm (v9 or higher)

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/VamshiMudiraj05/Job_Postings.git
cd Job_Postings

# Install dependencies
npm install
```

### 2. Local Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Vite provides instant Hot Module Replacement (HMR)—whenever you edit `jobs.json`, the page refreshes automatically!

### 3. Production Build & Preview

```bash
# Compile optimized production bundle into /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 How to Add Jobs

All job records live in [`src/data/jobs.json`](./src/data/jobs.json).

### Single Job Schema

```json
{
  "id": "job-google-swe-2026",
  "date": "2026-10-31",
  "title": "Associate Software Engineer",
  "company": "Google",
  "location": "Bengaluru, India",
  "applicationUrl": "https://www.google.com/about/careers/applications/jobs/results/12345",
  "note": "Open for 2025/2026 batch graduates",
  "createdAt": "2026-10-31T18:30:00+05:30"
}
```

### Field Definitions

| Field | Required? | Type | Description |
|---|---|---|---|
| `id` | Yes | String | Unique string identifier (e.g. `"job-2026-10-31-01"`) |
| `date` | Yes | String | Date in `YYYY-MM-DD` format (determines date group) |
| `title` | Yes | String | Job title or role name |
| `company` | Optional | String | Company name |
| `location` | Optional | String | City, country, or "Remote" |
| `applicationUrl` | Yes | String | Direct link to original application or career page |
| `note` | Optional | String | Short note, tip, or eligibility detail |
| `createdAt` | Optional | String | ISO timestamp (used to sort entries within the same day) |

---

### How to Add Multiple Jobs on the Same Date

When applying to several companies on the same day, simply set the same `date` (`YYYY-MM-DD`) on each object. The site automatically bundles them together under one date heading and assigns sequential numbers `01`, `02`, `03`...

```json
[
  {
    "id": "job-accenture-ase",
    "date": "2026-10-31",
    "title": "Associate Software Engineer",
    "company": "Accenture",
    "location": "Hyderabad, India",
    "applicationUrl": "https://www.accenture.com/in-en/careers/jobdetails?id=123",
    "note": "Direct test link for CSE/IT branches",
    "createdAt": "2026-10-31T19:00:00+05:30"
  },
  {
    "id": "job-deloitte-analyst",
    "date": "2026-10-31",
    "title": "Associate Analyst — Technology",
    "company": "Deloitte",
    "location": "Hyderabad, India",
    "applicationUrl": "https://jobs.deloitte.com/job/12345",
    "note": "Referred through campus hiring drive",
    "createdAt": "2026-10-31T17:15:00+05:30"
  },
  {
    "id": "job-startup-frontend",
    "date": "2026-10-30",
    "title": "Junior Frontend Developer",
    "company": "FastTech Labs",
    "location": "Remote",
    "applicationUrl": "https://wellfound.com/jobs/67890",
    "note": "React + Tailwind experience preferred",
    "createdAt": "2026-10-30T11:00:00+05:30"
  }
]
```

---

## ⚙️ Central Site Configuration

To change your name, role, bio, or social profiles, edit [`src/data/siteConfig.js`](./src/data/siteConfig.js):

```javascript
export const siteConfig = {
  name: "Vamshi Mudiraj",
  fullName: "Pulaboina Vamshi",
  brandName: "Vamshi Verse",
  brandTagline: "The Job Application Journal",
  role: "Full-Stack Developer & Data Science Engineer",
  avatarUrl: "/profile-avatar.png",
  
  aboutBio:
    "I'm sharing the jobs I personally apply for, along with resources and opportunities that may help students and fresh graduates navigate their job hunt.",
  
  subBio:
    "B.Tech CSE (Data Science) graduate from Malla Reddy University & Trainee Software Engineer based in Hyderabad.",
  
  links: {
    portfolio: "https://vamshionweb.vercel.app/",
    github: "https://github.com/VamshiMudiraj05",
    instagram: "https://www.instagram.com/vamshi__verse/",
    youtube: "https://www.youtube.com/@vamshi_verse",
    linkedin: "https://www.linkedin.com/in/vamshi05/",
    email: "mailto:vmudiraj230@gmail.com",
    twitter: "https://x.com/vamshimudiraj",
  },
};
```

> **Smart Visibility**: Any social link left empty (`""`) is automatically omitted from the sidebar.

---

## 🌐 Deploying to Vercel

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "feat: setup Vamshi Verse job application journal"
git push origin main
```

### Step 2: Import into Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New Project** and select this repository.
3. Keep default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## ⚠️ Important: Static JSON Storage Limitations

This website is a **static, client-side application** powered by a local JSON file:
1. **Editing `jobs.json` on your local computer does NOT magically update the live site on Vercel.**
2. Whenever you add new jobs, commit and push your changes to GitHub:
   ```bash
   git add src/data/jobs.json
   git commit -m "chore: add new job entries for $(date +'%Y-%m-%d')"
   git push origin main
   ```
3. Vercel automatically detects the push and re-deploys your updated site within ~30 seconds.

---

## 🛠️ Troubleshooting Malformed JSON

If the build fails or Vite displays a syntax error when loading `jobs.json`:
1. **Trailing commas**: JSON does *not* allow trailing commas after the last item in an array or object:
   ```json
   // ❌ Invalid:
   { "title": "Developer", }
   
   // ✅ Valid:
   { "title": "Developer" }
   ```
2. **Double quotes**: All keys and strings must use double quotes (`"`), not single quotes (`'`).
3. **Array brackets**: Ensure the entire file is wrapped in outer brackets: `[ ... ]`.
4. **Validation**: Validate your JSON file in VS Code (which highlights syntax errors in red) or paste into [jsonlint.com](https://jsonlint.com/).

---

## 📄 License

Created with ❤️ by [Pulaboina Vamshi (Vamshi Mudiraj)](https://vamshionweb.vercel.app/).

