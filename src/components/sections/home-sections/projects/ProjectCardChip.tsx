import { Box, Typography } from "@mui/material";

interface ProjectCardChipProps {
  label: string;
}

const ProjectCardChip = ({ label }: ProjectCardChipProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F1F5F9",
        borderRadius: "6px",
        padding: "6px 12px",
      }}
    >
      <Typography
        sx={{ fontSize: "0.75rem", fontWeight: 500, color: "#334155" }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default ProjectCardChip;
