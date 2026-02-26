import { Box } from "@mui/material";
import profile from "../../../assets/profile.jpg";

const ProfileImageCard = () => {
  return (
    <Box
      sx={{ borderRadius: "32px", width: "max-content", height: "max-content" }}
    >
      <img
        style={{ borderRadius: "24px" }}
        src={profile}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </Box>
  );
};

export default ProfileImageCard;
