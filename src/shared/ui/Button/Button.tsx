import clsx from 'clsx';
import classes from './styles.module.scss';
import { FC, ButtonHTMLAttributes, ComponentPropsWithRef } from 'react';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'default' | 'nav' | 'delete' | 'edit';
// }

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'default' | 'nav' | 'delete' | 'more' | 'edit' | 'favorite';
  onclick?: () => void;
}

export const Button: FC<ButtonProps> = props => {
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
