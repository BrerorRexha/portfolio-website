import type { Metadata } from 'next';
import SectionLayout from '@/components/layout/SectionLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Box, Typography } from '@mui/material';
import { tokens } from '@/theme/theme';

export const metadata: Metadata = {
  title: 'Projects — Breror Rexha',
  description: 'A collection of frontend projects built with React, TypeScript, MUI, and TanStack.',
};

export default function ProjectsPage() {
  return (
    <SectionLayout fullHeight>
      <SectionHeader label="My work" title="Projects" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 3,
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1.5,
            px: 2,
            py: 1,
            border: `1px solid ${tokens.border.default}`,
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: tokens.green.primary,
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                '50%': { opacity: 0.5, transform: 'scale(0.8)' },
              },
            }}
          />
          <Typography
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: tokens.green.primary,
            }}
          >
            In Development
          </Typography>
        </Box>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: tokens.text.primary, maxWidth: 560 }}
        >
          Building three projects from the ground up.
        </Typography>
        <Typography sx={{ color: tokens.text.secondary, maxWidth: 520, lineHeight: 1.8 }}>
          An enterprise admin dashboard, an e-commerce product interface, and a Kanban board —
          each built with React, TypeScript, MUI, and TanStack. Launching soon.
        </Typography>
      </Box>
    </SectionLayout>
  );
}
