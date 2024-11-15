import clsx from 'clsx';
import classes from './styles.module.scss';
import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<CheckboxProps> = props => {
  const { onChange, checked, className, ...otherProps } = props;

  return (
    <input
      onChange={onChange}
      type="checkbox"
      className={clsx(className, classes.checkbox)} // , { [classes.checked]: checked, }
      checked={checked}
      {...otherProps}
    />
  );
};
