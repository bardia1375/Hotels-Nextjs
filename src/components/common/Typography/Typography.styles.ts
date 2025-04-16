export const variantStyles = {
  h1: 'text-4xl md:text-5xl lg:text-6xl tracking-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl tracking-tight',
  h3: 'text-2xl md:text-3xl tracking-tight',
  h4: 'text-xl md:text-2xl tracking-tight',
  subtitle1: 'text-lg md:text-xl',
  subtitle2: 'text-base md:text-lg',
  body1: 'text-base md:text-lg leading-relaxed',
  body2: 'text-sm md:text-base leading-relaxed',
  caption: 'text-xs md:text-sm',
  overline: 'text-xs uppercase tracking-wider'
} as const;

export const colorStyles = {
  primary: 'text-gray-900 dark:text-white',
  secondary: 'text-gray-600 dark:text-gray-300',
  success: 'text-green-600 dark:text-green-400',
  error: 'text-red-600 dark:text-red-400',
  white: 'text-white',
  inherit: 'text-inherit'
} as const;

export const weightStyles = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
} as const;

export const alignStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
} as const;