'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Container, Typography } from '@mui/material';
import { tokens } from '@/theme/theme';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        backgroundColor: scrolled
          ? `rgba(12, 14, 9, 0.92)`
          : tokens.bg.base,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? tokens.border.subtle : 'transparent'}`,
        transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: { xs: '60px', md: '72px' },
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-fraunces)',
                  fontWeight: 900,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: tokens.text.primary,
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: tokens.green.primary },
                }}
              >
                BR
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: tokens.text.muted,
                }}
              >
                Breror Rexha
              </Typography>
            </Box>
          </Link>

          {/* Nav links */}
          <Box
            component="nav"
            sx={{ display: { xs: 'none', sm: 'flex' }, gap: 4, alignItems: 'center' }}
          >
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: active ? tokens.green.primary : tokens.text.secondary,
                      transition: 'color 0.2s ease',
                      position: 'relative',
                      '&:hover': { color: tokens.text.primary },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        width: active ? '100%' : '0%',
                        height: '1px',
                        backgroundColor: tokens.green.primary,
                        transition: 'width 0.25s ease',
                      },
                      '&:hover::after': { width: '100%' },
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
