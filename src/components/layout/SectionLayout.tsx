import { Box, Container } from '@mui/material';
import { tokens } from '@/theme/theme';

interface SectionLayoutProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'elevated';
  fullHeight?: boolean;
  noPadding?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

const bgMap = {
  default: tokens.bg.base,
  dark: tokens.bg.subtle,
  elevated: tokens.bg.elevated,
};

const SectionLayout = ({
  children,
  variant = 'default',
  fullHeight = false,
  noPadding = false,
  maxWidth = 'lg',
}: SectionLayoutProps) => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: bgMap[variant],
        minHeight: fullHeight ? 'calc(100dvh - 72px)' : undefined,
        borderBottom: `1px solid ${tokens.border.subtle}`,
      }}
    >
      <Container
        maxWidth={maxWidth}
        sx={{ py: noPadding ? 0 : { xs: 8, md: 14 } }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default SectionLayout;
