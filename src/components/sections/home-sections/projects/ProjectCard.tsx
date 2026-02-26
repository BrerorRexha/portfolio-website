import { Box, Typography } from "@mui/material";
import ProjectCardChip from "./ProjectCardChip";

export interface Project {
  title: string;
  description: string;
  bulletPoints: string;
  stack: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Box
      sx={{ width: "100%", border: "1px solid #E2E8F0", borderRadius: "12px" }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "192px", sm: "220px" },
          backgroundColor: "#dddddd",
          borderTopRightRadius: "12px",
          borderTopLeftRadius: "12px",
        }}
      ></Box>
      <Box
        sx={{
          p: { xs: 3, sm: 4 },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#0F172A",
              m: 0,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "#475569",
              m: 0,
            }}
          >
            {project.description}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 400,
            color: "#64748B",
            m: 0,
          }}
        >
          {project.bulletPoints}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {project.stack.map((stack, key) => (
            <ProjectCardChip key={key} label={stack} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
