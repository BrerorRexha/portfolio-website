import Hero from '@/components/sections/home/Hero';
import Projects from '@/components/sections/home/Projects';
import Workflow from '@/components/sections/home/Workflow';
import TechStack from '@/components/sections/home/TechStack';
import ContactSection from '@/components/sections/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Workflow />
      <TechStack />
      <ContactSection />
    </>
  );
}
