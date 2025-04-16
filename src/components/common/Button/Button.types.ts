import type { ButtonHTMLAttributes } from 'react';
import { buttonVariants } from './buttonStyles';

export type ButtonVariant = 'primary' | 'outline' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  isLoading?: boolean;
  fullWidth?: boolean;
}