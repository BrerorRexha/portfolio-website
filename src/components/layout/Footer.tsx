import { Box, Container, Typography, Link } from '@mui/material';
import { tokens } from '@/theme/theme';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: tokens.bg.subtle,
        borderTop: `1px solid ${tokens.border.subtle}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Quote */}
          <Typography
            sx={{
              fontFamily: 'var(--font-fraunces)',
              fontStyle: 'italic',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              color: tokens.text.muted,
              maxWidth: 460,
              lineHeight: 1.65,
            }}
          >
            "Society grows when men plant trees the shade of which they will never sit in."
          </Typography>

          {/* Right */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 1.5 }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {[
                { label: 'GitHub', href: 'https://github.com/BrerorRexha' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/breror-rexha-0064251a6' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: tokens.text.muted,
                    transition: 'color 0.2s ease',
                    '&:hover': { color: tokens.green.primary },
                  }}
                >
                  {label}
                </Link>
              ))}
            </Box>
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                color: tokens.text.muted,
              }}
            >
              © 2026 Breror Rexha
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
