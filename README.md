# breror.dev — Personal Portfolio

Personal portfolio website for Breror Rexha — frontend developer from Prishtina, Kosovo. Built to showcase professional work, projects, and technical craft. Designed to grow into a full personal platform over time.

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| UI Library | [MUI v7](https://mui.com/) + Emotion |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Data Fetching | [TanStack Query v5](https://tanstack.com/query) |
| Fonts | Fraunces · Space Grotesk · Space Mono |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, theme, providers)
│   ├── page.tsx            # Home
│   ├── about/page.tsx      # About
│   ├── projects/page.tsx   # Projects
│   └── contact/page.tsx    # Contact
├── components/
│   ├── layout/             # Navbar, Footer, PageLayout, SectionLayout
│   ├── sections/           # Page sections (home, about)
│   └── ui/                 # Reusable primitives
├── theme/
│   └── theme.ts            # MUI theme + design tokens
└── lib/
    └── registry.tsx        # Emotion SSR registry for Next.js
```

## Pages

- **Home** — Hero, tech stack, workflow, projects overview, contact
- **About** — Profile, career timeline
- **Projects** — Project showcase with detail
- **Contact** — Links and reach-out

## Roadmap

- [ ] Projects: Admin Dashboard (React / TS / MUI / TanStack)
- [ ] Projects: E-Commerce Store
- [ ] Projects: Kanban Board
- [ ] Blog / writing section
- [ ] Admin dashboard for content management
- [ ] Art & 3D model gallery
