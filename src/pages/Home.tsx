import { Box } from "@mui/material";
import SectionLayout from "../components/layout/SectionLayout";
import Hero from "../components/sections/home-sections/Hero";
import Projects from "../components/sections/home-sections/Projects";
import Workflow from "../components/sections/home-sections/Workflow";
import TechStack from "../components/sections/home-sections/TechStack";
import Contact from "../components/sections/home-sections/Contact";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
