# 📖 wrttn-essays: The Exploration Continues

## About the Project

`wrttn-essays` is a personal blog and rigorous practice platform dedicated to **analytical writing, self-discovery, and enhancing essay skills** for high-stakes examinations like the UPSC Civil Services Examination (CSE) Mains.

The core goal of this project is to provide a structured environment for:
* **Developing Argumentation:** Transforming raw ideas into clear, well-structured arguments.
* **Skill Brushing:** Improving clarity, grammar, and expressive ability through consistent practice.
* **UPSC Preparation:** Serving as a dedicated repository for essays that build the necessary analytical rigor and eloquence for the Mains essay paper.

This application is built with the **Next.js App Router** and uses **Server Components** for efficient data fetching from local JSON files.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (for rapid utility-first styling)
* **Font:** Google Font & Next/Font (Lora & Inter)
* **Data Source:** Local JSON (`data/essays.json`)

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

The application reads essay content from a local JSON file using Server Components (`fs` and `path` modules).

* File Path: `data/essays.json`

* Structure: Ensure your essays are listed in the correct format within this file (see `data/essays.json`).

The application dynamically calculates word count and read time (at 200 WPM) using the utility in libs/utils.ts.

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
|`app/page.tsx`|The primary **Essay Page List** (Server Component). Fetches and sorts data.|
|`app/essays/[id]/page.tsx`|The **Dynamic Essay Detail Page** (Server Component). Fetches a single essay based on the URL parameter (`params.id`).|
|`app/[about]/page.tsx`|The **About Page** component.|
|`components/`|Reusable UI components (`Header`, `Footer`, `EssayList`, `EssayCard`, `EssayDetail`).|
|`libs/utils.ts`|Contains the core logic for calculating word count and read time.|
|`data/essays.json`|The local data source for all essays.|

## 💡 Key Implementation Details
### Data Handling

* Server-Side Data Fetching: Data retrieval from `data/essays.json` happens directly within the Server Components.

* Dynamic Metrics: Essay word count and estimated read time are calculated at the time of data fetch using the utility in `libs/utils.ts`.

* Sorting: Essays are sorted by date (newest first) in `components/EssayList.tsx` for presentation.

Routing

* Root Route: `/` renders the sorted essay list.

* Dynamic Route: `/essays/1` (and subsequent IDs) is handled by the folder structure `app/essays/[id]/page.tsx`.

* Navigation: All client-side navigation is handled via the `next/link` component.

## 📝 Adding New Essays

1. Open data/essays.json.

2. Add a new essay object, ensuring the id, title, date (e.g., "December 6, 2025"), tags, and content fields are filled out.

3. The readTime, wordCount, and excerpt fields will be automatically calculated by the server-side logic based on your content.

4. Restart the development server (npm run dev) if the changes aren't immediately visible.

## Possible feature updates
- Incorporation of 'slug' for url redirection
- Tag specific search
- Dark mode
- RSS Feed + Newsletter? (quite optimistic, right?)