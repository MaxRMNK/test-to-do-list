import clsx from 'clsx';
import classes from './styles.module.scss';
import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'add' | 'edit';
  type: 'text';
}

export const Input: FC<InputProps> = props => {
  const {
    variant = 'add',
    type = 'text',
    children,
    disabled,
    className,
    ...otherProps
  } = props;

  return (
    <input
      className={clsx(className, classes.input, classes[variant])}
      disabled={disabled}
      placeholder="Add task"
      // autoFocus={variant === 'add' ? true : false}
      {...otherProps}
    >
      {children}
    </input>
  );
};
