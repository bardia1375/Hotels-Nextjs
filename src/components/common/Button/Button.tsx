import { memo, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { buttonBaseStyles, buttonVariants, buttonStates } from './buttonStyles';
import { ButtonProps } from './Button.types';


const Button = memo(function Button({
  children,
  variant = 'primary',
  isLoading = false,
  fullWidth = false,
  className,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={clsx(
        buttonBaseStyles,
        buttonVariants[variant],
        fullWidth && buttonStates.fullWidth,
        disabled && buttonStates.disabled,
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <LoadingSpinner />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
});

export default Button;