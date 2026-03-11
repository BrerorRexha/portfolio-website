import { Box, Typography } from '@mui/material';
import SectionLayout from '@/components/layout/SectionLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { tokens } from '@/theme/theme';

const groups = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'MUI', highlight: true },
      { name: 'TanStack Query', highlight: true },
      { name: 'TanStack Form', highlight: false },
      { name: 'Next.js', highlight: false },
      { name: 'Vue.js', highlight: false },
      { name: 'Hugo', highlight: false },
    ],
  },
  {
    label: 'State & Data',
    items: [
      { name: 'Zustand', highlight: false },
      { name: 'TanStack Router', highlight: false },
      { name: 'REST APIs', highlight: false },
      { name: 'MSW', highlight: false },
    ],
  },
  {
    label: 'Tooling',
    items: [
      { name: 'Vite', highlight: false },
      { name: 'Git', highlight: false },
      { name: 'ESLint', highlight: false },
      { name: 'Sass', highlight: false },
    ],
  },
  {
    label: 'Creative',
    items: [
      { name: 'Photoshop', highlight: false },
      { name: 'Video Editing', highlight: false },
      { name: '3D Modeling', highlight: false },
      { name: 'Drawing', highlight: false },
    ],
  },
];

const Chip = ({ name, highlight }: { name: string; highlight: boolean }) => (
  <Box
    sx={{
      px: { xs: 1.5, md: 2 },
      py: { xs: 0.5, md: 0.75 },
      backgroundColor: highlight ? 'rgba(122, 154, 58, 0.12)' : tokens.bg.elevated,
      border: `1px solid ${highlight ? tokens.border.strong : tokens.border.subtle}`,
      borderRadius: 0.5,
      transition: 'border-color 0.2s ease, background-color 0.2s ease',
      '&:hover': {
        borderColor: tokens.border.strong,
        backgroundColor: tokens.green.ghost,
      },
    }}
  >
    <Typography
      sx={{
        fontFamily: 'var(--font-mono)',
        fontSize: { xs: '0.68rem', md: '0.72rem' },
        letterSpacing: '0.06em',
        color: highlight ? tokens.green.light : tokens.text.secondary,
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </Typography>
  </Box>
);

const TechStack = () => {
  return (
    <SectionLayout variant="dark">
      <SectionHeader label="Technology" title="Tech Stack" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          gap: { xs: 6, md: 8 },
        }}
      >
        {groups.map((group, i) => (
          <AnimatedSection key={group.label} delay={i * 0.1}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: tokens.text.muted,
                  mb: 0.5,
                }}
              >
                {group.label}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {group.items.map((item) => (
                  <Chip key={item.name} {...item} />
                ))}
              </Box>
            </Box>
          </AnimatedSection>
        ))}
      </Box>
    </SectionLayout>
  );
};

export default TechStack;
