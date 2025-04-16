import type { ReactNode, JSX } from 'react';

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'subtitle1' 
  | 'subtitle2' 
  | 'body1' 
  | 'body2' 
  | 'caption'
  | 'overline';

export type TypographyColor = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'white'
  | 'inherit';

export type TypographyWeight = 
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold';

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}