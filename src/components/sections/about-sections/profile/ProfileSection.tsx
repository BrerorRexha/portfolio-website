import { Box, Typography } from "@mui/material";
import ProfileImageCard from "./ProfileImageCard";

const heroTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#0F172A",
  m: 0,
};

const heroTextStyle = {
  fontSize: "1.25rem",
  fontWeight: 400,
  color: "#475569",
  m: 0,
  lineHeight: '2rem',
};

const ProfileSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: "40px",
        padding: "24px",
        backgroundColor: "white",
        borderRadius: "32px",
        border: "1px solid #E2E8F0",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={heroTitleStyle}>Profile</Typography>
        <Typography sx={heroTextStyle}>
          I’m 23 years old, based in Prishtina, Kosovo. I’m a frontend developer
          with 4 years of experience. I am driven by structure, ambition, and
          long term growth.
        </Typography>
        <Typography sx={heroTextStyle}>
          Programming is where logic meets creativity for me. I enjoy building
          clean systems, solving problems methodically, and writing code that
          remains scalable and maintainable over time.
        </Typography>
        <Typography sx={heroTextStyle}>
          Outside of development, I’m passionate about art and basketball. Art
          sharpens my attention to detail and design, while basketball reflects
          my mindset, competitive, disciplined, and team oriented.
        </Typography>
      </Box>
      <ProfileImageCard />
    </Box>
  );
};

export default ProfileSection;
