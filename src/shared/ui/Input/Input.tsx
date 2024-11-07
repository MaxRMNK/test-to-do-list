import clsx from 'clsx';
import classes from './styles.module.scss';
import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'search' | 'edit';
  type: 'text';
  // label?: string | null;
}

export const Input: FC<InputProps> = props => {
  const {
    variant = 'search',
    type = 'text',
    // label = null,
    children,
    disabled,
    className,
    ...otherProps
  } = props;

  // label?.trim();

  return (
    // <label>
    //   <span>task name</span>
    <input
      className={clsx(className, classes.input, classes[variant])}
      disabled={disabled}
      placeholder="Add task"
      {...otherProps}
    >
      {children}
    </input>
    // </label>
  );
};
