// default theme preset

export const preset = {
  colors: {
    text: '#404040',
    textSecondary: '#6A6A6A',
    textTertiary: '#C1C1C1',
    black: '#373737',
    background: '#F2F5F9',
    cardPrimary: '#FFFFFF',
    cardSecondary: '#F8FAFC',
    primary: '#0067EA',
    secondary: '#30c',
    muted: '#f6f6f9',
    success: '#70D54F',
    warning: '#FFA447',
    error: '#FF6966',
    gray: '#dddddf',
    border: '#D4D4D4',
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: 'Quicksand',
    monospace: '"Input Mono", monospace',
  },
  fontSizes: [12, 14, 16, 18, 22, 26, 30, 40, 46, 54],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 10, 12, 20, 24, 32, 42, 72],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 5,
    circle: 99999,
  },
  shadows: {
    card: '0 1px 1px rgba(33, 82, 139, .16)',
    pop: '0 1px 1px rgba(33, 82, 139, .16), 0 1px 6px rgba(33, 82, 139, .16)',
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    headingSecondary: {
      color: 'black',
      variant: 'text.heading',
    },
    secondary: {
      color: 'textSecondary',
      fontSize: [3],
    },
    bold: {
      fontWeight: 'bold',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    bgPrimary: {
      bg: 'primary',
    },
    bgLight: {
      bg: 'cardPrimary',
    },
    bgDark: {
      bg: 'black',
    },
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      borderRadius: 'default',
      bg: 'cardPrimary',
      boxShadow: 'card',
    },
    popCard: {
      p: 2,
      borderRadius: 'default',
      bg: 'cardPrimary',
      boxShadow: 'pop',
    },
    sideCard: {
      p: 2,
      borderRadius: 'default',
      boxShadow: 'card',
      bg: 'cardSecondary',
    },
    link: {
      color: 'primary',
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      border: '1px solid rgba(0, 107, 230, .43)',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
};

export default preset;
