import clsx from 'clsx';
import classes from './styles.module.scss';
import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'nav' | 'delete' | 'edit';
}

export const Button: FC<ButtonProps> = props => {
  const {
    variant = 'default',
    children,
    disabled,
    className,
    ...otherProps
  } = props;

  return (
    <button
      className={clsx(className, classes.button, classes[variant])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
