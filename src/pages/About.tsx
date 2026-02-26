import SectionHeader from "../components/layout/SectionHeader";
import SectionLayout from "../components/layout/SectionLayout";
import ProfileSection from "../components/sections/about-sections/profile/ProfileSection";
import TimelineSection from "../components/sections/about-sections/timeline/TimelineSection";
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
              alignItems: "flex-start",
              width: "100%",
              gap: "24px",
            }}
          >
            <TimelineSection />
            <TimelineSection />
          </Box>
        </Box>
      </SectionLayout>
    </>
  );
};

export default About;
