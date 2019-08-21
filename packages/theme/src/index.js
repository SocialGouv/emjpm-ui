// default theme preset

export const preset = {
  buttons: {
    outline: {
      bg: 'transparent',
      border: '1px solid rgba(0, 107, 230, .43)',
      color: 'primary',
      variant: 'buttons.primary',
    },
    primary: {
      bg: 'primary',
      borderRadius: 'default',
      color: 'background',
      fontSize: 2,
      fontWeight: 'bold',
    },
    secondary: {
      bg: 'secondary',
      color: 'background',
      variant: 'buttons.primary',
    },
  },
  colors: {
    background: '#F2F5F9',
    black: '#373737',
    border: '#D4D4D4',
    cardPrimary: '#FFFFFF',
    cardSecondary: '#F8FAFC',
    error: '#FF6966',
    gray: '#dddddf',
    lightGray: '#555555',
    link: '#007AD9',
    muted: '#f6f6f9',
    primary: '#0067EA',
    secondary: '#30c',
    success: '#70D54F',
    text: '#404040',
    textSecondary: '#6A6A6A',
    textTertiary: '#C1C1C1',
    warning: '#FFA447',
  },
  fontSizes: [12, 14, 16, 18, 22, 26, 30, 40, 46, 54],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: 'Quicksand',
    monospace: '"Input Mono", monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: {
    circle: 99999,
    default: 5,
  },
  shadows: {
    card: '0 1px 1px rgba(33, 82, 139, .16)',
    pop: '0 1px 1px rgba(33, 82, 139, .16), 0 1px 6px rgba(33, 82, 139, .16)',
  },
  sizes: {
    avatar: 48,
  },
  // rebass variants
  space: [0, 10, 12, 20, 24, 32, 42, 72],
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
  text: {
    bold: {
      fontWeight: 'bold',
    },
    caps: {
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    display: {
      fontFamily: 'heading',
      fontSize: [5, 6, 7],
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    headingSecondary: {
      color: 'black',
      variant: 'text.heading',
    },
    secondary: {
      color: 'textSecondary',
      fontSize: [3],
    },
  },
  variants: {
    avatar: {
      borderRadius: 'circle',
      height: 'avatar',
      width: 'avatar',
    },
    bgDark: {
      bg: 'black',
    },
    bgLight: {
      bg: 'cardPrimary',
    },
    bgPrimary: {
      bg: 'primary',
    },
    card: {
      bg: 'cardPrimary',
      borderRadius: 'default',
      boxShadow: 'card',
      p: 2,
    },
    link: {
      color: 'primary',
    },
    nav: {
      ':hover,:focus,.active': {
        color: 'primary',
      },
      color: 'inherit',
      display: 'inline-block',
      fontSize: 1,
      fontWeight: 'bold',
      p: 2,
      textDecoration: 'none',
    },
    popCard: {
      bg: 'cardPrimary',
      borderRadius: 'default',
      boxShadow: 'pop',
      p: 2,
    },
    sideCard: {
      bg: 'cardSecondary',
      borderRadius: 'default',
      boxShadow: 'card',
      p: 2,
    },
  },
};

export default preset;
