import { createTheme } from '@mui/material/styles';

// Design tokens
export const tokens = {
  bg: {
    base: '#0C0E09',
    paper: '#141710',
    elevated: '#1A1E14',
    subtle: '#111410',
  },
  green: {
    primary: '#7A9A3A',
    light: '#9BB84A',
    dark: '#5A7230',
    teal: '#4A9E8A',
    tealDark: '#358075',
    ghost: 'rgba(122, 154, 58, 0.07)',
  },
  text: {
    primary: '#E8E3D0',
    secondary: '#8A8770',
    muted: '#504F40',
    inverse: '#0C0E09',
  },
  border: {
    subtle: 'rgba(122, 154, 58, 0.12)',
    default: 'rgba(122, 154, 58, 0.22)',
    strong: 'rgba(122, 154, 58, 0.45)',
    warm: 'rgba(232, 227, 208, 0.08)',
  },
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: tokens.bg.base,
      paper: tokens.bg.paper,
    },
    primary: {
      main: tokens.green.primary,
      light: tokens.green.light,
      dark: tokens.green.dark,
      contrastText: tokens.text.inverse,
    },
    secondary: {
      main: tokens.green.teal,
      light: '#5BBDAA',
      dark: tokens.green.tealDark,
      contrastText: tokens.text.inverse,
    },
    text: {
      primary: tokens.text.primary,
      secondary: tokens.text.secondary,
      disabled: tokens.text.muted,
    },
    divider: tokens.border.subtle,
    error: { main: '#E57373' },
  },
  typography: {
    fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: 'var(--font-fraunces), Georgia, serif',
      fontWeight: 900,
      letterSpacing: '-0.03em',
      lineHeight: 0.95,
    },
    h2: {
      fontFamily: 'var(--font-fraunces), Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: 'var(--font-fraunces), Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h4: { fontWeight: 600, lineHeight: 1.3 },
    h5: { fontWeight: 600, lineHeight: 1.4 },
    h6: { fontWeight: 600, lineHeight: 1.4 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.65 },
    caption: {
      fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontSize: '0.7rem',
    },
    overline: {
      fontFamily: 'var(--font-mono), "JetBrains Mono", monospace',
      letterSpacing: '0.15em',
      fontSize: '0.65rem',
    },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: '0.03em',
          borderRadius: 2,
          transition: 'all 0.25s ease',
        },
        contained: {
          backgroundColor: tokens.green.primary,
          color: tokens.text.inverse,
          '&:hover': {
            backgroundColor: tokens.green.light,
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: tokens.border.default,
          color: tokens.text.primary,
          '&:hover': {
            borderColor: tokens.green.primary,
            backgroundColor: tokens.green.ghost,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          backgroundColor: tokens.bg.base,
          color: tokens.text.primary,
          scrollbarWidth: 'thin',
          scrollbarColor: `${tokens.border.default} transparent`,
          '&::-webkit-scrollbar': { width: '5px' },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: tokens.border.default,
            borderRadius: '999px',
          },
        },
        '::selection': {
          backgroundColor: 'rgba(122, 154, 58, 0.3)',
          color: tokens.text.primary,
        },
      },
    },
  },
});
