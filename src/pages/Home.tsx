import SectionLayout from "../components/layout/SectionLayout";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Workflow from "../components/sections/Workflow";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
