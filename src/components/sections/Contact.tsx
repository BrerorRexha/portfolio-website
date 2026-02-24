import { Box, Typography, Link } from "@mui/material";
import SectionHeader from "../layout/SectionHeader";

const navLinkStyle = {
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "1rem",
  ":hover": {
    color: "#2563EB",
  },
};

const Contact = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <SectionHeader
        color="dark"
        title="Let's Work Together"
        subtitle="Connect"
      />
      <Typography
        sx={{
          fontSize: "1rem",
          lineHeight: "1.5rem",
          color: "#94A3B8",
          fontWeight: 400,
          mb: 3,
        }}
      >
        {"I’m open to frontend opportunities and collaborations"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Link
          href="mailto:breror.rexha@gmail.com"
          rel="noopener noreferrer"
          sx={navLinkStyle}
        >
          breror.rexha@gmail.com
        </Link>
        <Link
          href="https://linkedin.com/in/breror-rexha-0064251a6"
          target="_blank"
          rel="noopener noreferrer"
          sx={navLinkStyle}
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/BrerorRexha"
          target="_blank"
          rel="noopener noreferrer"
          sx={navLinkStyle}
        >
          GitHub
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;
