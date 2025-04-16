export const cardBaseStyles = 'bg-white dark:bg-gray-800 overflow-hidden';

export const cardVariants = {
  default: '',
  hover: 'transform transition-transform duration-300 hover:scale-105',
  bordered: 'border border-gray-200 dark:border-gray-700'
} as const;

export const paddingVariants = {
  none: 'p-0',
  small: 'p-3',
  medium: 'p-5',
  large: 'p-8'
} as const;

export const shadowVariants = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg'
} as const;

export const roundedVariants = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
} as const;