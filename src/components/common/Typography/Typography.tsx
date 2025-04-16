import { memo } from 'react';
import type { ElementType, JSXElementConstructor } from 'react';
import clsx from 'clsx';
import type { TypographyProps } from './Typography.types';
import { 
  variantStyles, 
  colorStyles, 
  weightStyles, 
  alignStyles 
} from './Typography.styles';

function getDefaultComponent(variant: TypographyProps['variant'] = 'body1'): ElementType {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'subtitle1':
    case 'subtitle2':
      return 'h6';
    case 'overline':
      return 'span';
    default:
      return 'p';
  }
}

export const Typography = memo(function Typography({
  variant = 'body1',
  color = 'primary',
  weight = 'regular',
  align = 'left',
  className,
  children,
  as,
  ...props
}: TypographyProps) {
  const Component = (as || getDefaultComponent(variant)) as ElementType<any>;

  return (
    <Component
      className={clsx(
        variantStyles[variant],
        colorStyles[color],
        weightStyles[weight],
        alignStyles[align],
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});