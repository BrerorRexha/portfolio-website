import { Box, Typography } from '@mui/material';
import { tokens } from '@/theme/theme';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ label, title, description, align = 'left' }: SectionHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: 1.5,
        mb: { xs: 6, md: 8 },
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: tokens.green.primary,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
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
        {label}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          color: tokens.text.primary,
          lineHeight: 1.05,
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{
            color: tokens.text.secondary,
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.75,
            maxWidth: 520,
            mt: 0.5,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
