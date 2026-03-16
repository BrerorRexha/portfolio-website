import type { Metadata } from 'next';
import SectionLayout from '@/components/layout/SectionLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Box, Link, Typography } from '@mui/material';
import { tokens } from '@/theme/theme';

export const metadata: Metadata = {
  title: 'Contact — Breror Rexha',
  description: 'Get in touch with Breror Rexha — frontend engineer based in Prishtina, Kosova.',
};

const links = [
  { label: 'breror.rexha@gmail.com', href: 'mailto:breror.rexha@gmail.com', mono: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/breror-rexha-0064251a6', mono: false },
  { label: 'GitHub', href: 'https://github.com/BrerorRexha', mono: false },
];

export default function ContactPage() {
  return (
    <SectionLayout>
      <SectionHeader label="Reach out" title="Let's Work Together" />
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 480 }}>
        <Typography sx={{ color: tokens.text.secondary, lineHeight: 1.8, mb: 2 }}>
          Open to frontend opportunities, collaborations, and interesting conversations.
        </Typography>
        {links.map(({ label, href, mono }) => (
          <Link
            key={href}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            underline="none"
            sx={{
              fontFamily: mono ? 'var(--font-mono)' : 'inherit',
              fontSize: mono ? '0.85rem' : '1rem',
              color: tokens.text.primary,
              transition: 'color 0.2s ease',
              '&:hover': { color: tokens.green.primary },
              letterSpacing: mono ? '0.04em' : 0,
            }}
          >
            {label}
          </Link>
        ))}
      </Box>

    </SectionLayout>
  );
}
