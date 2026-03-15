import { Box } from '@mui/material';
import SectionLayout from '@/components/layout/SectionLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';

const projects = [
  {
    title: 'Enterprise Admin Dashboard',
    description:
      'Full-featured admin interface with role-based access control, analytics charts, and CRUD management for products, orders, categories, and users.',
    stack: ['React', 'TypeScript', 'MUI', 'TanStack Router', 'TanStack Query', 'TanStack Form', 'Recharts'],
    status: 'live' as const,
    href: 'https://admin-dashboard-nine-bice-97.vercel.app/dashboard',
    image: '/projects/admin-1.png',
  },
  {
    title: 'ShopWave — E-Commerce Store',
    description:
      'Full e-commerce storefront with product filtering, search, cart management, multi-step checkout with live card preview, and order history.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vite'],
    status: 'live' as const,
    href: 'https://e-commerce-project-tawny-psi.vercel.app/',
    image: '/projects/ecommerce-1.png',
  },
  {
    title: 'FlowBoard — Kanban Board',
    description:
      'Drag-and-drop task management board with sprint planning, analytics sidebar, card assignments, priority labels, and inline editing.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'dnd-kit', 'Framer Motion'],
    status: 'live' as const,
    href: 'https://kanban-board-vert-beta.vercel.app/',
    image: '/projects/kanban-1.png',
  },
];

const Projects = () => {
  return (
    <SectionLayout variant="dark">
      <SectionHeader
        label="Work"
        title="Projects"
        description="Three production-grade applications built to demonstrate real enterprise frontend architecture."
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
          gap: { xs: 3, md: 4 },
          alignItems: 'stretch',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </Box>
    </SectionLayout>
  );
};

export default Projects;
