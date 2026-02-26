import { Box, Typography } from "@mui/material";
import TimelineEvent from "./TimelineEvent";

const timelineTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#0F172A",
  m: 0,
  mb: "24px",
};

const TimelineSection = () => {
  const timeline = [
    {
      title: "Gjirafa — Frontend Developer",
      duration: "March 2025 – Present",
      stack: ["React", "TypeScript", "Material UI", "TanStack"],
      description:
        "Building modern frontend systems with scalable component architecture and structured state management. Focused on performance, maintainability, and predictable patterns.",
    },
    {
      title: "Ura Design — Frontend Developer",
      duration: "February 2023 – September 2024",
      stack: ["Hugo", "Static Architecture"],
      description:
        "Developed lightweight static websites that function without JavaScript. Prioritized accessibility, performance, and cross browser reliability. Solved unconventional constraints with structured solutions.",
    },
    {
      title: "]init[ — Frontend Developer",
      duration: "August 2022 – January 2023",
      stack: ["React", "Enterprise Collaboration"],
      description:
        "Worked in large team environments maintaining and improving existing React systems. Strengthened experience in structured collaboration and scalable code integration.",
    },
    {
      title: "Gjirafa — Junior Developer",
      duration: "August 2021 – January 2023",
      stack: ["Vue", "Docusaurus", ".NET systems"],
      description:
        "Started as an intern writing technical documentation, then moved into frontend development. Built landing pages and contributed to production systems.",
    },
  ];

  return (
    <Box
      sx={{
        flex: 1,
        padding: "24px",
        backgroundColor: "white",
        borderRadius: "32px",
        border: "1px solid #E2E8F0",
      }}
    >
      <Typography sx={timelineTitleStyle}>Timeline</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {timeline.map((item, key) => (
          <Box key={key}>
            {key !== 0 && (
              <Box
                sx={{
                  height: "40px",
                  width: "2px",
                  marginLeft: "12px",
                  backgroundColor: "#E2E8F0",
                }}
              />
            )}
            <TimelineEvent
              title={item.title}
              duration={item.duration}
              stack={item.stack}
              description={item.description}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TimelineSection;
