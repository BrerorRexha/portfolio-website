import { Box, Typography } from '@mui/material';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { tokens } from '@/theme/theme';

const timeline = [
  {
    company: 'Gjirafa',
    role: 'Frontend Developer',
    duration: 'March 2025 – Present',
    stack: ['React', 'TypeScript', 'MUI', 'TanStack'],
    description:
      'Building modern frontend systems with scalable component architecture and structured state management. Focused on performance, maintainability, and predictable patterns.',
    current: true,
  },
  {
    company: 'Ura Design',
    role: 'Frontend Developer',
    location: 'Berlin',
    duration: 'February 2023 – September 2024',
    stack: ['Hugo', 'Static Architecture', 'Accessibility'],
    description:
      'Developed lightweight static websites for open-source clients that had to function without JavaScript. Solved unconventional constraints — full cross-browser compatibility, zero-JS builds — with structured, creative solutions.',
    current: false,
  },
  {
    company: ']init[',
    role: 'Frontend Developer',
    location: 'Berlin',
    duration: 'August 2022 – January 2023',
    stack: ['React', 'Enterprise Collaboration'],
    description:
      'Worked within large team environments maintaining and improving existing React systems. Strengthened experience in structured collaboration and integrating into established codebases.',
    current: false,
  },
  {
    company: 'Gjirafa',
    role: 'Junior Developer',
    duration: 'August 2021 – January 2023',
    stack: ['Vue.js', 'Docusaurus', '.NET'],
    description:
      'Started as an intern writing technical documentation using Docusaurus, then moved into frontend development with Vue.js. Built the original video player landing page and contributed to production systems.',
    current: false,
  },
];

const TimelineSection = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: tokens.green.primary,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 5,
          '&::before': {
            content: '""',
            display: 'inline-block',
            width: 20,
            height: 1,
            backgroundColor: tokens.green.primary,
            flexShrink: 0,
          },
        }}
      >
        Experience
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {timeline.map((item, i) => (
          <AnimatedSection key={`${item.company}-${item.duration}`} delay={i * 0.1}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '200px 1fr' },
                gap: { xs: 1.5, sm: 4 },
                py: 4,
                borderTop: `1px solid ${tokens.border.subtle}`,
                position: 'relative',
              }}
            >
              {/* Left — Date */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.06em',
                    color: item.current ? tokens.green.primary : tokens.text.muted,
                    lineHeight: 1.6,
                  }}
                >
                  {item.duration}
                </Typography>
                {item.current && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 1 }}>
                    <Box
                      sx={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        backgroundColor: tokens.green.primary,
                        animation: 'pulse 2.5s ease-in-out infinite',
                        '@keyframes pulse': {
                          '0%, 100%': { opacity: 1 },
                          '50%': { opacity: 0.3 },
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: tokens.green.primary,
                      }}
                    >
                      Current
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Right — Content */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-fraunces)',
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      fontWeight: 700,
                      color: tokens.text.primary,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.company}
                    {item.location && (
                      <Box
                        component="span"
                        sx={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          fontWeight: 400,
                          color: tokens.text.muted,
                          letterSpacing: '0.06em',
                          ml: 1.5,
                        }}
                      >
                        {item.location}
                      </Box>
                    )}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: tokens.text.secondary, mt: 0.25 }}>
                    {item.role}
                  </Typography>
                </Box>

                <Typography sx={{ fontSize: '0.9rem', color: tokens.text.secondary, lineHeight: 1.75 }}>
                  {item.description}
                </Typography>

                {/* Stack chips */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {item.stack.map((s) => (
                    <Box
                      key={s}
                      sx={{
                        px: 1.25,
                        py: 0.35,
                        backgroundColor: tokens.bg.elevated,
                        border: `1px solid ${tokens.border.subtle}`,
                        borderRadius: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          letterSpacing: '0.06em',
                          color: tokens.text.muted,
                        }}
                      >
                        {s}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </AnimatedSection>
        ))}
      </Box>
    </Box>
  );
};

export default TimelineSection;
