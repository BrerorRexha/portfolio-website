import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        maxWidth: "650px",
        height: "70vh",
        gap: { xs: 3, sm: 4 },
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 3 } }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#F8FAFC",
            fontWeight: 600,
            fontSize: { xs: "2rem", sm: "3rem" },
            lineHeight: { xs: "2.5rem", sm: "3.5rem" },
          }}
        >
          Frontend Engineer building scalable, high-performance web
          applications.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#F8FAFC",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1.125rem" },
            lineHeight: { xs: "1.5rem", sm: "1.75rem" },
          }}
        >
          Specialized in React, TypeScript, MUI, and TanStack. Focused on clean
          architecture, performance, and accessible UI systems.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "264px" },
            textAlign: "center",
            py: 1.5,
            fontSize: "1rem",
            lineHeight: "1.5rem",
            textTransform: "none",
            borderRadius: 2,
            fontWeight: 500,
            backgroundColor: "#2563EB",
            ":hover": {
              backgroundColor: "#1E4FD8",
            },
          }}
        >
          View Projects
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: "264px" },
            textAlign: "center",
            py: 1.5,
            fontSize: "1rem",
            lineHeight: "1.5rem",
            textTransform: "none",
            borderRadius: 2,
            fontWeight: 500,
            borderColor: "rgba(255,255,255,0.15)",
            color: "white",
          }}
        >
          Contact Me
        </Button>
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: "#94A3B8",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
        }}
      >
        Clean components. Predictable state. Maintainable systems.
      </Typography>
    </Box>
  );
};

export default Hero;
