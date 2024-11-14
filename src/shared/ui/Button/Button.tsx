import clsx from 'clsx';
import classes from './styles.module.scss';
import React, { ButtonHTMLAttributes, ComponentPropsWithRef } from 'react';

// Чтобы попробовать как работает
const unionOptions = [
  'default',
  'nav',
  'delete',
  'more',
  'edit',
  'save',
  'favorite',
] as const;
type Variant = (typeof unionOptions)[number];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  onclick?: () => void;
}

// interface ButtonProps extends ComponentPropsWithRef<'button'> {
//   variant?: 'default' | 'nav' | 'delete' | 'more' | 'edit' | 'favorite';
//   onclick?: () => void;
// }

export const Button: React.FC<ButtonProps> = props => {
  const {
    variant = 'default',
    children,
    disabled,
    className,
    onclick,
    ...otherProps
  } = props;

  return (
    <button
      onClick={onclick}
      className={clsx(
        className,
        classes.button,
        {
          [classes.button_icon]:
            variant === 'delete' ||
            variant === 'edit' ||
            variant === 'save' ||
            variant === 'more' ||
            variant === 'favorite',
        },
        classes[variant],
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
