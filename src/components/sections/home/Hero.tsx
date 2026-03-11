'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { tokens } from '@/theme/theme';

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: 'calc(100dvh - 72px)',
        backgroundColor: tokens.bg.base,
        borderBottom: `1px solid ${tokens.border.subtle}`,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid lines */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${tokens.border.subtle} 1px, transparent 1px),
            linear-gradient(90deg, ${tokens.border.subtle} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      {/* Corner accent - top right */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          background: `radial-gradient(circle at top right, rgba(122,154,58,0.08) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 0 }, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>

            {/* Label */}
            <motion.div {...fadeUp(0.1)}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 24, height: 1, backgroundColor: tokens.green.primary }} />
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: tokens.green.primary,
                  }}
                >
                  Frontend Engineer · Prishtina, Kosovo
                </Typography>
              </Box>
            </motion.div>

            {/* Name */}
            <Box>
              <motion.div {...fadeUp(0.22)}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '5rem', sm: '7rem', md: '9rem', lg: '10.5rem' },
                    color: tokens.text.primary,
                    lineHeight: 0.88,
                    display: 'block',
                  }}
                >
                  Breror
                </Typography>
              </motion.div>
              <motion.div {...fadeUp(0.32)}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '5rem', sm: '7rem', md: '9rem', lg: '10.5rem' },
                    color: 'transparent',
                    WebkitTextStroke: `1.5px ${tokens.text.muted}`,
                    lineHeight: 0.88,
                    display: 'block',
                  }}
                >
                  Rexha
                </Typography>
              </motion.div>
            </Box>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
              style={{ transformOrigin: 'left' }}
            >
              <Box sx={{ height: 1, width: { xs: 80, md: 120 }, backgroundColor: tokens.border.strong }} />
            </motion.div>

            {/* Tagline */}
            <motion.div {...fadeUp(0.52)}>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  color: tokens.text.secondary,
                  lineHeight: 1.75,
                  maxWidth: 460,
                }}
              >
                Building digital systems with purpose and discipline.{' '}
                <Box component="span" sx={{ color: tokens.text.muted }}>
                  Specialized in React, TypeScript, MUI, and TanStack.
                </Box>
              </Typography>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.62)}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Button
                  component={Link}
                  href="/projects"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '0.85rem',
                    letterSpacing: '0.06em',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                  }}
                >
                  View Projects
                </Button>
                <Button
                  component={Link}
                  href="/about"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '0.85rem',
                    letterSpacing: '0.06em',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                  }}
                >
                  About Me
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* RIGHT COLUMN — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.3 }}
          >
            <Box
              sx={{
                position: 'relative',
                display: { xs: 'none', md: 'block' },
              }}
            >
              {/* Corner bracket decorations */}
              {[
                { top: -10, left: -10, borderTop: 2, borderLeft: 2 },
                { top: -10, right: -10, borderTop: 2, borderRight: 2 },
                { bottom: -10, left: -10, borderBottom: 2, borderLeft: 2 },
                { bottom: -10, right: -10, borderBottom: 2, borderRight: 2 },
              ].map((style, i) => (
                <Box
                  key={i}
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    width: 32,
                    height: 32,
                    borderColor: tokens.green.primary,
                    borderStyle: 'solid',
                    borderTopWidth: style.borderTop ?? 0,
                    borderBottomWidth: style.borderBottom ?? 0,
                    borderLeftWidth: style.borderLeft ?? 0,
                    borderRightWidth: style.borderRight ?? 0,
                    zIndex: 2,
                    ...style,
                  }}
                />
              ))}

              {/* Photo */}
              <Box
                sx={{
                  borderRadius: 1,
                  overflow: 'hidden',
                  border: `1px solid ${tokens.border.default}`,
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.5s ease',
                  '&:hover': { filter: 'grayscale(60%)' },
                  lineHeight: 0,
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Breror Rexha"
                  width={520}
                  height={580}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  priority
                />
              </Box>

              {/* Floating label */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: -20,
                  px: 2,
                  py: 1,
                  backgroundColor: tokens.bg.elevated,
                  border: `1px solid ${tokens.border.default}`,
                  borderRadius: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: tokens.green.primary,
                  }}
                >
                  Based in Prishtina
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
        >
          <Box
            sx={{
              mt: { xs: 8, md: 10 },
              pt: 4,
              borderTop: `1px solid ${tokens.border.subtle}`,
              display: 'flex',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: tokens.text.muted,
                whiteSpace: 'nowrap',
              }}
            >
              On building
            </Typography>
            <Box sx={{ flex: 1, height: 1, backgroundColor: tokens.border.subtle }} />
            <Typography
              sx={{
                fontFamily: 'var(--font-fraunces)',
                fontStyle: 'italic',
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                color: tokens.text.muted,
                lineHeight: 1.5,
                maxWidth: 480,
                textAlign: 'right',
              }}
            >
              "A society grows great when old men plant trees in whose shade they shall never sit."
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
