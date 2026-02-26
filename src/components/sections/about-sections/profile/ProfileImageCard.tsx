import { Box } from "@mui/material";
import profile from "../../../../assets/profile.jpg";

const ProfileImageCard = () => {
  return (
    <Box
      sx={{
        borderRadius: "32px",
        flex: 1,
        position: "relative",
      }}
    >
      <img
        style={{ borderRadius: "24px", width: '100%' }}
        src={profile}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </Box>
  );
};

export default ProfileImageCard;
