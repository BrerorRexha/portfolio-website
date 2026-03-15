import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { tokens } from '@/theme/theme';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Projects — Breror Rexha',
  description: 'A collection of frontend projects built with React, TypeScript, MUI, and TanStack.',
};

const projects = [
  {
    id: 'admin-dashboard',
    title: 'Enterprise Admin Dashboard',
    subtitle: 'AdminPanel',
    href: 'https://admin-dashboard-nine-bice-97.vercel.app/dashboard',
    description:
      'A fully client-side admin panel built to simulate the kind of internal tooling real product companies rely on. Role-based access control determines which sections each user sees — an admin gets everything, a viewer gets read-only access. The dashboard surfaces key metrics at a glance: revenue over time, orders by status, recent activity.',
    detail:
      'Built with TanStack Router for file-based routing, TanStack Query for all data fetching and cache invalidation, and TanStack Form for the create/edit flows. All data lives in-memory mock services that simulate network latency, making the UX feel realistic without a backend. Recharts powers the analytics visualisations. material-react-table handles the sortable, filterable, paginated data tables across Products, Orders, Users, and more.',
    stack: ['React', 'TypeScript', 'MUI v7', 'TanStack Router', 'TanStack Query', 'TanStack Form', 'Recharts', 'Vite'],
    images: [
      { src: '/projects/admin-1.png', alt: 'Dashboard overview with revenue chart and recent orders' },
      { src: '/projects/admin-2.png', alt: 'Products table with sorting, filtering and pagination' },
      { src: '/projects/admin-3.png', alt: 'Orders management with status filtering' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'ShopWave — E-Commerce Store',
    subtitle: 'ShopWave',
    href: 'https://e-commerce-project-tawny-psi.vercel.app/',
    description:
      'A complete e-commerce storefront covering the full shopping experience — from browsing and filtering a product catalogue to completing a multi-step checkout. Products span six categories with search, sort, and category filtering. Each product has a detail page with an image carousel, related products, and an add-to-cart flow.',
    detail:
      'State is managed through Context API across three contexts: auth, cart, and theme. The checkout flow walks through shipping, payment (with a live interactive card preview that updates as you type), and a confirmation screen. Dark mode is a first-class feature, persisted to localStorage. All product images are generated with emoji and CSS gradients — no external image dependencies.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS v3', 'React Router v6', 'Vite 6', 'Context API'],
    images: [
      { src: '/projects/ecommerce-1.png', alt: 'Product catalogue with category filters and search' },
      { src: '/projects/ecommerce-2.png', alt: 'Product detail page with image carousel and add to cart' },
    ],
  },
  {
    id: 'kanban',
    title: 'FlowBoard — Kanban Board',
    subtitle: 'FlowBoard',
    href: 'https://kanban-board-vert-beta.vercel.app/',
    description:
      'An enterprise-grade task management board with sprint-based planning, a real-time analytics sidebar, and full card lifecycle management. Cards move between Backlog, To Do, In Progress, In Review, and Done via drag-and-drop. Each card supports priority levels, label tagging, assignees, checklists, due dates, comments, and attachment counts.',
    detail:
      'Drag-and-drop is powered by @dnd-kit/core and @dnd-kit/sortable. All state lives in a single BoardContext driven by useReducer — no external state library needed. The analytics sidebar updates live as cards move: completion percentage, overdue count, story points velocity, board flow by column, and team workload distribution. Sprint modal lets you create and switch between sprints with WIP limits.',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS v4', '@dnd-kit', 'Framer Motion', 'Vite 8', 'date-fns'],
    images: [
      { src: '/projects/kanban-1.png', alt: 'Full board view with analytics sidebar and sprint header' },
    ],
  },
];

function StackChip({ label }: { label: string }) {
  return (
    <Box
      sx={{
        px: 1.25,
        py: 0.4,
        backgroundColor: tokens.green.ghost,
        border: `1px solid ${tokens.border.subtle}`,
        borderRadius: 0.5,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.06em',
          color: tokens.text.secondary,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function ProjectsPage() {
  return (
    <Box sx={{ backgroundColor: tokens.bg.base, pt: { xs: 8, md: 12 }, pb: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
          <SectionHeader
            label="My work"
            title="Projects"
            description="Three production-grade applications — each built with a real tech stack, real architecture decisions, and mock data simulating a live backend."
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 14, md: 20 }, mt: { xs: 8, md: 12 } }}>
            {projects.map((project, i) => (
              <Box key={project.id}>
                {/* Project header */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    gap: 2,
                    mb: { xs: 4, md: 6 },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.12em',
                        color: tokens.green.primary,
                        textTransform: 'uppercase',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontFamily: 'var(--font-fraunces)',
                        fontSize: { xs: '1.75rem', md: '2.25rem' },
                        fontWeight: 700,
                        color: tokens.text.primary,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>

                  <Box
                    component={Link}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2,
                      py: 1,
                      border: `1px solid ${tokens.border.default}`,
                      borderRadius: 1,
                      textDecoration: 'none',
                      flexShrink: 0,
                      transition: 'border-color 0.2s ease, color 0.2s ease',
                      '&:hover': {
                        borderColor: tokens.green.primary,
                        '& .link-text': { color: tokens.green.primary },
                        '& .link-icon': { color: tokens.green.primary },
                      },
                    }}
                  >
                    <Typography
                      className="link-text"
                      sx={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: tokens.text.muted,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      View Live
                    </Typography>
                    <OpenInNewIcon
                      className="link-icon"
                      sx={{ fontSize: 13, color: tokens.text.muted, transition: 'color 0.2s ease' }}
                    />
                  </Box>
                </Box>

                {/* Images grid */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: project.images.length === 1
                      ? '1fr'
                      : project.images.length === 2
                        ? { xs: '1fr', md: '1fr 1fr' }
                        : { xs: '1fr', md: '1fr 1fr', lg: '2fr 1fr 1fr' },
                    gap: 2,
                    mb: { xs: 5, md: 8 },
                  }}
                >
                  {project.images.map((img, imgIdx) => (
                    <Box
                      key={imgIdx}
                      sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: imgIdx === 0 && project.images.length === 3 ? '16/10' : '16/10',
                        borderRadius: 1,
                        overflow: 'hidden',
                        border: `1px solid ${tokens.border.subtle}`,
                        backgroundColor: tokens.bg.elevated,
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </Box>
                  ))}
                </Box>

                {/* Description + stack */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: { xs: 4, md: 8 },
                    alignItems: 'start',
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Typography
                      sx={{
                        color: tokens.text.secondary,
                        lineHeight: 1.85,
                        fontSize: '0.95rem',
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Typography
                      sx={{
                        color: tokens.text.muted,
                        lineHeight: 1.85,
                        fontSize: '0.9rem',
                      }}
                    >
                      {project.detail}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: tokens.text.muted,
                          mb: 2,
                        }}
                      >
                        Tech Stack
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        {project.stack.map((item) => (
                          <StackChip key={item} label={item} />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Divider */}
                {i < projects.length - 1 && (
                  <Box
                    sx={{
                      mt: { xs: 14, md: 20 },
                      height: '1px',
                      backgroundColor: tokens.border.subtle,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
      </Container>
    </Box>
  );
}
