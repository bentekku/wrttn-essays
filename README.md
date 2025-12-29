# 📖 wrttn-essays: The Exploration Continues

## About the Project

`wrttn-essays` is a personal blog and rigorous practice platform dedicated to **analytical writing, self-discovery, and enhancing essay skills** for high-stakes examinations like the UPSC Civil Services Examination (CSE) Mains.

The core goal of this project is to provide a structured environment for:
* **Developing Argumentation:** Transforming raw ideas into clear, well-structured arguments.
* **Skill Brushing:** Improving clarity, grammar, and expressive ability through consistent practice.
* **UPSC Preparation:** Serving as a dedicated repository for essays that build the necessary analytical rigor and eloquence for the Mains essay paper.

This application is built with the **Next.js App Router** and uses **Server Components** for efficient data fetching from Markdown files.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (for rapid utility-first styling)
* **Icons:** lucide-react (ArrowUp, Download, ArrowLeft)
* **Markdown Parsing:** react-markdown with remark-gfm
* **Metadata Extraction:** gray-matter
* **Font:** Google Font & Next/Font (Lora & Inter)
* **Data Source:** Markdown files in `/content` directory

---

## ✨ Features

### 1. **Scroll-to-Top Button**
- Appears when user scrolls down more than 300px on essay pages
- Smooth scroll animation to the top
- Fixed position button (bottom-right corner)
- Mobile-responsive sizing (smaller on mobile, larger on desktop)
- Uses `ArrowUp` icon from lucide-react

### 2. **PDF Preview & Download**
- Download icon button in essay detail header (top-right)
- Shows tooltip: "Preview hand-written pdf" on hover
- Automatically detects if PDF exists for the essay
- Button is hidden if PDF is not available
- Opens PDF in a new tab when clicked
- PDFs are stored in `/public/pdfs/{essayId}.pdf`

### 3. **Mobile-Responsive Design**
- Responsive header navigation (gap reduces on mobile)
- Adaptive font sizes across all components
- Reduced padding/spacing on mobile devices for optimal viewing
- Touch-friendly button sizes
- Optimized EssayCard and EssayDetail layouts for small screens

### 4. **Smart Word Count Calculation**
- Excludes disclaimer section from word count calculations
- Removes Markdown syntax before counting words
- More accurate reading time estimation (based on 200 WPM)
- Generates excerpt from actual essay content only

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Prerequisites

Ensure you have the following installed:
* Node.js (LTS version)
* npm or yarn

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/bentekku/wrttn-essays.git
cd wrttn-essays
npm install # or yarn install
```
### 3. Data Setup

The application reads essay content from **Markdown files** in the `/content` directory with YAML front matter:

```markdown
---
title: "Your Essay Title"
date: "December 27, 2025"
tags: ["Tag1", "Tag2"]
---

## Your essay content here...
```

**To enable PDF download feature:**
1. Place PDF files in `/public/pdfs/` directory
2. Name them matching the essay filename (e.g., `the-years-teach-much-which-the-days-never-know.pdf`)
3. The download button automatically appears if a matching PDF exists

### 4. Running the Development Server

Start the development server with:

```bash
npm run dev # or yarn dev
```
Open http://localhost:3000 in your browser to see the result.

## 📁 Project Structure Highlights

The project adheres to the Next.js App Router conventions:
| Path | Description |
|:-----|:-------|
|`app/page.tsx`|The primary **Essay List Page** (Server Component). Fetches and sorts essays by date.|
|`app/essays/[id]/page.tsx`|The **Dynamic Essay Detail Page** (Server Component). Displays individual essays with scroll-to-top & PDF features.|
|`app/[about]/page.tsx`|The **About Page** component.|
|`components/Header.tsx`|Navigation header with responsive design.|
|`components/Footer.tsx`|Footer with social links.|
|`components/EssayList.tsx`|Lists all essays in chronological order.|
|`components/EssayCard.tsx`|Card component for each essay preview.|
|`components/EssayDetail.tsx`|Full essay view with PDF download button (Client Component).|
|`components/ScrollToTop.tsx`|Scroll-to-top button component (Client Component).|
|`libs/utils.ts`|Utility functions for calculating word count, read time, and excerpt.|
|`libs/types.ts`|TypeScript type definitions.|
|`libs/essays.ts`|Server-side functions for fetching essay data from Markdown files.|
|`content/`|Directory containing essay Markdown files.|
|`public/pdfs/`|Directory for essay PDF files (optional).|

## 💡 Key Implementation Details

### Data Handling & Metrics

* **Markdown-Based Content:** Stored in `/content` directory with YAML front matter
* **Server-Side Processing:** Uses `fs`, `path`, and `gray-matter` library for data fetching
* **Smart Calculations:** Word count excludes disclaimer sections and Markdown syntax, read time based on 200 WPM, excerpts extracted from cleaned content

### Features Implementation

**Scroll-to-Top Button (`components/ScrollToTop.tsx`):**
- Client Component with scroll event listener
- Conditional rendering based on scroll position (> 300px)
- Smooth scroll animation using `window.scrollTo()`
- Mobile-responsive with responsive padding and icon sizing

**PDF Download Button (`components/EssayDetail.tsx`):**
- Async PDF existence check using HEAD request on component mount
- Conditional rendering (only shows if PDF exists)
- Opens PDF in new tab on click
- Uses tooltip for UX clarity

**Mobile Responsiveness:**
- Tailwind breakpoints (`md:`) for responsive design
- Adaptive padding, margins, and font sizes

### Routing

* **Root Route:** `/` renders the sorted essay list
* **Dynamic Route:** `/essays/{essayId}` displays individual essays
* **Navigation:** All client-side navigation uses Next.js `Link` component
* **Static Generation:** Essay pages are pre-rendered at build time using `generateStaticParams()`

---

## 📝 Adding New Essays

### Step-by-Step Guide:

1. **Create a Markdown file** in the `content/` directory with a descriptive filename (use kebab-case):
   ```
   content/your-essay-title.md
   ```
   
   **Tip:** Need help generating slugs for your filenames? Check out [slug-mkr](https://github.com/bentekku/slug-mkr) - a utility tool for converting titles into URL-friendly slugs!

2. **Add YAML front matter** at the top of the file with metadata:
   ```markdown
   ---
   title: "Your Essay Title"
   date: "December 27, 2025"
   tags: ["Tag1", "Tag2", "Tag3"]
   ---
   ```

3. **Write your essay content** in Markdown format below the front matter

4. **Add a disclaimer** at the end of the essay (optional but recommended):
   ```markdown
   ---
   **Disclaimer:** [Your disclaimer text here]
   ```

5. **Optional: Add a PDF** to `/public/pdfs/your-essay-title.pdf` for the download feature
   
   **Note:** Use the same slug for both the `.md` and `.pdf` filenames for consistency!

6. **Rebuild the project** (if in development, the changes will hot-reload):
   ```bash
   npm run build
   ```

### Automatic Calculations:

Once you add an essay file, the following are automatically calculated:
- ✅ **Word Count:** Counted from content (excluding disclaimer)
- ✅ **Read Time:** Calculated at 200 WPM
- ✅ **Excerpt:** First 160 characters of cleaned content
- ✅ **Route:** `/essays/{filename-without-extension}`

---

## 🚀 Deployment

This project is ready for deployment on **Vercel**, **Netlify**, or any Node.js-compatible hosting platform.

### Deploy on Vercel (Recommended):

1. Push your changes to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import the repository
4. Click "Deploy"

Vercel will automatically:
- Build the project
- Optimize images and assets
- Deploy to a global CDN

---

### To-do list:
- ~~"Scroll to top" on the bottom right of the page~~
- ~~Add option to preview and download pdf of the essay written on papers if available~~
- ~~RSS feed feature~~
- Theme switching ?? (not sure on this one, might add it for accessibility)
- More accessibility features (text-to-speech for the essay?)


---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [lucide-react](https://lucide.dev/)
- Markdown parsing with [react-markdown](https://github.com/remarkjs/react-markdown)
- Metadata extraction with [gray-matter](https://github.com/jonschlinkert/gray-matter)

---

**Happy writing! 📝✨**