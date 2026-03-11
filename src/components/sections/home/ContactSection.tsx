import { Box, Link, Typography } from '@mui/material';
import SectionLayout from '@/components/layout/SectionLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { tokens } from '@/theme/theme';

const contactLinks = [
  {
    label: 'breror.rexha@gmail.com',
    href: 'mailto:breror.rexha@gmail.com',
    mono: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/breror-rexha-0064251a6',
    mono: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/BrerorRexha',
    mono: false,
  },
];

const ContactSection = () => {
  return (
    <SectionLayout>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 8, md: 6 },
          alignItems: 'end',
        }}
      >
        {/* Left — Quote & CTA headline */}
        <AnimatedSection>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
                  mb: 2,
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
                Connect
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  color: tokens.text.primary,
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Let&apos;s build something worth keeping.
              </Typography>
              <Typography sx={{ color: tokens.text.secondary, lineHeight: 1.8, maxWidth: 400 }}>
                Open to frontend opportunities, collaborations, and any conversation worth having.
              </Typography>
            </Box>

            {/* Quote */}
            <Box sx={{ pt: 4, borderTop: `1px solid ${tokens.border.subtle}` }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-fraunces)',
                  fontStyle: 'italic',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: tokens.text.muted,
                  lineHeight: 1.65,
                  maxWidth: 420,
                }}
              >
                "Society grows when men plant trees the shade of which they will never sit in."
              </Typography>
            </Box>
          </Box>
        </AnimatedSection>

        {/* Right — Links */}
        <AnimatedSection delay={0.15}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {contactLinks.map(({ label, href, mono }, i) => (
              <Box key={href}>
                {i > 0 && (
                  <Box sx={{ height: 1, backgroundColor: tokens.border.subtle, mb: 2 }} />
                )}
                <Link
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    py: 0.5,
                    color: tokens.text.primary,
                    fontFamily: mono ? 'var(--font-mono)' : 'var(--font-fraunces)',
                    fontSize: mono ? '0.82rem' : '1.3rem',
                    fontWeight: mono ? 400 : 700,
                    letterSpacing: mono ? '0.04em' : '-0.01em',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: tokens.green.primary,
                    },
                    '&:hover .arrow': {
                      transform: 'translateX(4px)',
                      color: tokens.green.primary,
                    },
                  }}
                >
                  <span>{label}</span>
                  <Typography
                    className="arrow"
                    component="span"
                    sx={{
                      color: tokens.text.muted,
                      fontSize: '1.2rem',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                    }}
                  >
                    →
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </AnimatedSection>
      </Box>
    </SectionLayout>
  );
};

export default ContactSection;
