import { Box, Typography } from "@mui/material";
// import { Link } from "@mui/material";
import { Link } from "@tanstack/react-router";

const navLinkStyle = {
  color: "#94A3B8",
  textDecoration: "none",
  fontSize: "1rem",
  ":hover": {
    color: "white",
  },
};

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: { lg: "72px", xs: "56px" },
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="h6"
          sx={{ color: "#F8FAFC", fontWeight: 600, fontSize: "1.125rem" }}
        >
          Breror Rexha
        </Typography>
      </Link>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Link to="/contact" style={navLinkStyle}>
          Contact
        </Link>
        <Link to="/about" style={navLinkStyle}>
          About
        </Link>
        <Link to="/projects" style={navLinkStyle}>
          Projects
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
