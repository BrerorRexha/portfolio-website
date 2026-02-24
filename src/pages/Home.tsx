import { Box } from "@mui/material";
import PageLayout from "../components/layout/PageLayout";
import SectionLayout from "../components/layout/SectionLayout";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Workflow from "../components/sections/Workflow";
import TechStack from "../components/sections/TechStack";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <PageLayout>
      <SectionLayout
        backgroundColor="dark"
        hasBorder={true}
        isSticky={true}
        hasPadding={false}
      >
        <Navbar />
      </SectionLayout>
      <SectionLayout backgroundColor="dark" hasPadding={false}>
        <Hero />
      </SectionLayout>
      <SectionLayout backgroundColor="light">
        <Projects />
      </SectionLayout>
      <SectionLayout backgroundColor="dark">
        <Workflow />
      </SectionLayout>
      <SectionLayout backgroundColor="light">
        <TechStack />
      </SectionLayout>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <SectionLayout backgroundColor="dark">
          <Contact />
        </SectionLayout>
      </Box>
    </PageLayout>
  );
};

export default Home;
