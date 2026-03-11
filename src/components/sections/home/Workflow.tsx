import { Box, Typography } from '@mui/material';
import SectionLayout from '@/components/layout/SectionLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { tokens } from '@/theme/theme';

const steps = [
  {
    number: '01',
    title: 'Analysis',
    description:
      'Before writing code, I break down the problem into data flow, user interactions, and architectural constraints. Understanding real requirements prevents overengineering.',
  },
  {
    number: '02',
    title: 'Identifying Points of Interest',
    description:
      'I map state boundaries, data dependencies, and components requiring abstraction. This ensures reusable patterns and predictable state management from the start.',
  },
  {
    number: '03',
    title: 'Sustainable Implementation',
    description:
      'Modular, type-safe code built to evolve without forcing structural rewrites. Every decision is made for the developer who inherits this codebase later.',
  },
];

const Workflow = () => {
  return (
    <SectionLayout>
      <SectionHeader label="Process" title="Workflow" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: { xs: 0, md: 4 },
        }}
      >
        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.1}>
            <Box
              sx={{
                py: { xs: 5, md: 0 },
                pr: { xs: 0, md: 6 },
                borderTop: { xs: `1px solid ${tokens.border.subtle}`, md: 'none' },
                borderLeft: { xs: 'none', md: i > 0 ? `1px solid ${tokens.border.subtle}` : 'none' },
                pl: { xs: 0, md: i > 0 ? 6 : 0 },
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              {/* Ghost number */}
              <Typography
                aria-hidden
                sx={{
                  fontFamily: 'var(--font-fraunces)',
                  fontWeight: 900,
                  fontSize: { xs: '4rem', md: '5.5rem' },
                  color: tokens.border.subtle,
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {step.number}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    fontWeight: 700,
                    color: tokens.text.primary,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: tokens.text.secondary,
                    lineHeight: 1.75,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Box>
          </AnimatedSection>
        ))}
      </Box>
    </SectionLayout>
  );
};

export default Workflow;
