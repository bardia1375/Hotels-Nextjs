export const buttonBaseStyles = 'px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all';

export const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800'
} as const;

export const buttonStates = {
  disabled: 'opacity-50 cursor-not-allowed',
  fullWidth: 'w-full'
};