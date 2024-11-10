import clsx from 'clsx';
import classes from './styles.module.scss';
import { FC, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: FC<CheckboxProps> = props => {
  const { onChange, checked, className, ...otherProps } = props;

  return (
    <input
      onChange={onChange}
      type="checkbox"
      className={clsx(className, classes.checkbox, {
        [classes.checked]: checked,
      })}
      checked={checked}
      {...otherProps}
    />
  );
};
