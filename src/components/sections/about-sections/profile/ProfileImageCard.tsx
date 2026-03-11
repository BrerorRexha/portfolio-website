// This component has been superseded by src/components/sections/about/ProfileSection.tsx
import { Box } from "@mui/material";

const ProfileImageCard = () => {
  return (
    <Box sx={{ borderRadius: "32px", flex: 1, position: "relative" }}>
      <img
        style={{ borderRadius: "24px", width: "100%" }}
        src="/profile.jpg"
        alt="Profile"
      />
    </Box>
  );
};

export default ProfileImageCard;
