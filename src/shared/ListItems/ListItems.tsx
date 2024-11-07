import React from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Button } from '../ui/Button/Button';

interface ListItemsProps {
  task: string;
}

export const ListItems: React.FC<ListItemsProps> = props => {
  const { task } = props;

  return (
    <div className={clsx(classes.item)}>
      <span>X</span>
      <div className={clsx(classes.task)}>{task}</div>
      <Button variant="delete" name="delete" className={clsx(classes.delete)} />
    </div>
  );
};
