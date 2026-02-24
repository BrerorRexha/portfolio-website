import { Box, Typography } from "@mui/material";

interface StackChipProps {
  label: string;
}

const StackChip = ({ label }: StackChipProps) => {
  console.log(label);
  return (
    <Box
      sx={{
        backgroundColor: "#E2E8F0",
        borderRadius: "8px",
        padding: "8px 14px",
      }}
    >
      <Typography
        sx={{ fontSize: "0.875rem", fontWeight: 500, color: "#0F172A" }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default StackChip;
