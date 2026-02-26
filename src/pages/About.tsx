import SectionHeader from "../components/layout/SectionHeader";
import SectionLayout from "../components/layout/SectionLayout";
import ProfileSection from "../components/sections/about-sections/profile/ProfileSection";
import TimelineSection from "../components/sections/about-sections/timeline/TimelineSection";
import Workflow from "../components/sections/home-sections/Workflow";
import { Box } from "@mui/material";

const About = () => {
  return (
    <>
      <SectionLayout backgroundColor="light">
        <SectionHeader
          title="About Me"
          subtitle="Get to know me better"
          color="light"
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <ProfileSection />
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              width: "100%",
              gap: "24px",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                fontSize: '1rem',
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                opacity: 0.2,
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(180deg, #1E293B, #0F172A)",
                borderRadius: "32px",
                padding: "24px",
              }}
            >
              BUILDING SYSTEMS THAT LAST<br />
              STRUCTURE. DISCIPLINE. GROWTH.
            </Box>
            <TimelineSection />
          </Box>
        </Box>
      </SectionLayout>
      <SectionLayout backgroundColor="dark">
        <Workflow isAboutSection={true} />
      </SectionLayout>
    </>
  );
};

export default About;
