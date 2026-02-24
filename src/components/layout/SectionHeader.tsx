import { Box, Typography } from "@mui/material";

interface SectionHeaderProps {
  color: "light" | "dark";
  title: string;
  subtitle: string;
}

const SectionHeader = ({ color, title, subtitle }: SectionHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
        mb: { xs: 3, sm: 4 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textTransform: "uppercase",
          color: color === "light" ? "#475569" : "#94A3B8",
          fontWeight: 500,
          fontSize: "0.875rem",
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "1.75rem", sm: "2.25rem" },
          color: color === "light" ? "#0F172A" : "#FFFFFF",
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
