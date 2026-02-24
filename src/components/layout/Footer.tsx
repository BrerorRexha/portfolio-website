import { Box, Typography } from "@mui/material";

const footerStyle = {
  fontSize: "0.875rem",
  color: "#94A3B8",
  fontWeight: 400,
  M: 0,
};

const Footer = () => {
  return (
    <Box
      sx={{ width: "100%", py: { xs: 8, sm: 12 }, backgroundColor: "#0B1220" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
        <Typography sx={footerStyle}>© 2026 Breror Rexha</Typography>
        <Typography sx={footerStyle}>Built with React & MUI</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
