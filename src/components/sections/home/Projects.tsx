import { Box } from '@mui/material';
import SectionLayout from '@/components/layout/SectionLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';

const projects = [
  {
    title: 'Enterprise Admin Dashboard',
    description:
      'Scalable admin interface with reusable data tables, role-based UI, analytics visualisation, and structured server state management.',
    stack: ['React', 'TypeScript', 'MUI', 'TanStack Query', 'TanStack Table', 'Recharts'],
    status: 'in-progress' as const,
  },
  {
    title: 'E-commerce Product Interface',
    description:
      'Performant product browsing UI with advanced filtering, cart management, optimised component rendering, and scalable global state.',
    stack: ['React', 'TypeScript', 'MUI', 'TanStack Query', 'Zustand'],
    status: 'in-progress' as const,
  },
  {
    title: 'Kanban Board',
    description:
      'Drag-and-drop task management board with customisable columns, card assignments, and persistent state architecture.',
    stack: ['React', 'TypeScript', 'MUI', 'TanStack Query', 'dnd-kit'],
    status: 'in-progress' as const,
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
