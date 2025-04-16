import { memo } from 'react';
import clsx from 'clsx';
import type { CardProps } from './Card.types';
import {
  cardBaseStyles,
  cardVariants,
  paddingVariants,
  shadowVariants,
  roundedVariants
} from './cardStyles';

export const Card = memo(function Card({
  children,
  variant = 'default',
  padding = 'medium',
  shadow = 'md',
  rounded = 'md',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        cardBaseStyles,
        cardVariants[variant],
        paddingVariants[padding],
        shadowVariants[shadow],
        roundedVariants[rounded],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});