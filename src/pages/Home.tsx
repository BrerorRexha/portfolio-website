import SectionLayout from "../components/layout/SectionLayout";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

const Home = () => {
  return (
    <>
      <SectionLayout backgroundColor="dark" hasBorder={true} isSticky={true} hasPadding={false}>
        <Navbar />
      </SectionLayout>
      <SectionLayout backgroundColor="dark" hasPadding={false}>
        <Hero />
      </SectionLayout>
      <SectionLayout backgroundColor="light">
        <Projects />
      </SectionLayout>
    </>
  );
};

export default Home;
