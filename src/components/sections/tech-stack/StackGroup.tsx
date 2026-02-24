import { Box, Typography } from "@mui/material";
import StackChip from "./StackChip";

interface StackGroupProps {
  title: string;
  stack: string[];
}

const StackGroup = ({ title, stack }: StackGroupProps) => {
  console.log(title, stack);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
      }}
    >
      <Typography
        sx={{ fontSize: "1rem", fontWeight: 600, color: "#0F172A", m: 0 }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {stack.map((item, key) => (
          <StackChip key={key} label={item} />
        ))}
      </Box>
    </Box>
  );
};

export default StackGroup;
