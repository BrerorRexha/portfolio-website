import { Box, Typography } from "@mui/material";

interface WorkflowStepProps {
  title: string;
  description: string;
  isAboutSection?: boolean;
}

const WorkflowStep = ({
  title,
  description,
  isAboutSection = false,
}: WorkflowStepProps) => {
  console.log(title, description);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "flex-start",
        padding: isAboutSection ? "24px" : "0",
        borderRadius: isAboutSection ? "24px" : "0",
        border: isAboutSection ? "1px solid #94A3B8" : "none",
      }}
    >
      <Typography
        sx={{ fontSize: "1rem", fontWeight: 600, color: "white", m: 0 }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ fontSize: "0.875rem", fontWeight: 400, color: "#94A3B8", m: 0 }}
      >
        {description}
      </Typography>
    </Box>
  );
};
export default WorkflowStep;
