import { Box } from "@mui/material";
import SectionHeader from "../../layout/SectionHeader";
import StackGroup from "./tech-stack/StackGroup";

const TechStack = () => {
  const techStack = [
    {
      title: "Frontend",
      stack: ["React", "TypeScript", "MUI", "TanStack Query", "Tanstack Table"],
    },
    {
      title: "State & Data",
      stack: ["Zustand", "REST APIs", "MSW", "JSON Server"],
    },
    {
      title: "Tooling",
      stack: ["Vite", "Git", "ESLint", "Prettier"],
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <SectionHeader color="light" title="Tech Stack" subtitle="Technology" />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 4, sm: 6 },
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {techStack.map((tech, key) => (
          <StackGroup key={key} title={tech.title} stack={tech.stack} />
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
