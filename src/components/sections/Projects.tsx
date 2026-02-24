import { Box } from "@mui/material";
import SectionHeader from "../layout/SectionHeader";
import ProjectCard from "./projects/ProjectCard";
import type { Project } from "./projects/ProjectCard";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Enterprise Admin Dashboard",
      description:
        "A scalable admin dashboard featuring reusable data tables, role-based UI and analytics visualization. Built to reflect real enterprise frontend architecture and strong TypeScript patterns.",
      bulletPoints:
        "Reusable table system • Role-based UI • Server state with TanStack Query",
      stack: ["React", "TypeScript", "MUI", "TanStack Query", "Recharts"],
    },
    {
      title: "E-commerce Product Interface",
      description:
        "A performant product browsing UI featuring filtering, cart management and optimized component rendering. Built with strong UI architecture and scalable state handling.",
      bulletPoints:
        "Optimized filtering • Global cart state (Zustand) • Component composition",
      stack: ["React", "TypeScript", "MUI", "TanStack Query", "Zustand"],
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <SectionHeader color="light" title="Projects" subtitle="Work" />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 4,
          width: '100%',
        }}
      >
        {projects.map((project, key) => (
          <ProjectCard key={key} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
