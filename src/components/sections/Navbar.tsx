import { Box, Typography } from "@mui/material";
import { Link } from "@mui/material";

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
      <Typography
        variant="h6"
        sx={{ color: "#F8FAFC", fontWeight: 600, fontSize: "1.125rem" }}
      >
        Breror Rexha
      </Typography>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          gap: 3,
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

export default Navbar;
