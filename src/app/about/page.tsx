import type { Metadata } from 'next';
import ProfileSection from '@/components/sections/about/ProfileSection';
import TimelineSection from '@/components/sections/about/TimelineSection';
import Workflow from '@/components/sections/home/Workflow';
import SectionLayout from '@/components/layout/SectionLayout';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'About — Breror Rexha',
  description: 'Frontend engineer from Prishtina, Kosova. 4 years of experience building scalable web systems.',
};

export default function AboutPage() {
  return (
    <>
      <SectionLayout>
        <SectionHeader label="Get to know me" title="About Me" />
        <ProfileSection />
        <TimelineSection />
      </SectionLayout>
      <SectionLayout variant="dark">
        <Workflow />
      </SectionLayout>
    </>
  );
}
