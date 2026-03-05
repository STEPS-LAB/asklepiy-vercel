/**
 * Medical Architecture 2026 - Design Tokens
 * Centralized design system configuration
 */

export const colors = {
  primary: {
    50: '#E8F1F5',
    100: '#D1E3ED',
    200: '#A5C7DB',
    300: '#7AABCA',
    400: '#4E8FB8',
    500: '#2273A7',
    600: '#1A5A85',
    700: '#134163',
    800: '#0F334E',
    900: '#0A3D62',
    950: '#051F33',
  },
  accent: {
    50: '#E8F8F9',
    100: '#D1F1F3',
    200: '#A3E3E7',
    300: '#75D5DB',
    400: '#47C7CF',
    500: '#19B9C3',
    600: '#00A8B5',
    700: '#008A96',
    800: '#006C77',
    900: '#004E58',
    950: '#00303A',
  },
  surface: {
    50: '#FAFBFC',
    100: '#F5F7F9',
    200: '#EBEFF2',
    300: '#E1E6EB',
    400: '#D7DDE4',
    500: '#CDD4DC',
  },
  text: {
    primary: '#0A3D62',
    secondary: '#4A5568',
    tertiary: '#718096',
    inverse: '#FFFFFF',
  },
  status: {
    success: '#00A86B',
    warning: '#F59E0B',
    error: '#DC2626',
    info: '#00A8B5',
  },
} as const;

export const spacing = {
  luxury: {
    sm: '2rem',
    md: '4rem',
    lg: '6rem',
    xl: '8rem',
    '2xl': '12rem',
  },
} as const;

export const borderRadius = {
  sm: '6px',
  md: '8px',
  lg: '10px',
  xl: '12px',
  '2xl': '16px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(10, 61, 98, 0.05)',
  md: '0 4px 6px -1px rgba(10, 61, 98, 0.1), 0 2px 4px -1px rgba(10, 61, 98, 0.06)',
  lg: '0 10px 15px -3px rgba(10, 61, 98, 0.1), 0 4px 6px -2px rgba(10, 61, 98, 0.05)',
  xl: '0 20px 25px -5px rgba(10, 61, 98, 0.1), 0 10px 10px -5px rgba(10, 61, 98, 0.04)',
  glow: '0 0 20px rgba(0, 168, 181, 0.3)',
  'glow-lg': '0 0 40px rgba(0, 168, 181, 0.4)',
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const typography = {
  fonts: {
    primary: 'Inter',
    secondary: 'Montserrat',
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 40,
  modal: 50,
  toast: 60,
  tooltip: 70,
} as const;

export const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
} as const;
