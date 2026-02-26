import { Box, Typography } from "@mui/material";
import TimelineSkillChip from "./TimelineSkillChip";

const timelineEventTitleStyle = {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#475569",
  m: 0,
};

const timelineEventSubtitleStyle = {
  fontSize: "1rem",
  fontWeight: 400,
  color: "#64748B",
  m: 0,
};

interface TimelineEventProps {
  title: string;
  duration: string;
  stack: string[];
  description: string;
}

const TimelineEvent = ({
  title,
  duration,
  stack,
  description,
}: TimelineEventProps) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "8px", py: "8px" }}
    >
      <Typography sx={timelineEventTitleStyle}>{title}</Typography>
      <Typography sx={timelineEventSubtitleStyle}>{duration}</Typography>
      <Box sx={{ display: "flex", gap: "8px" }}>
        {stack.map((item) => (
          <TimelineSkillChip key={item} label={item} />
        ))}
      </Box>
      <Typography sx={timelineEventSubtitleStyle}>{description}</Typography>
    </Box>
  );
};

export default TimelineEvent;
