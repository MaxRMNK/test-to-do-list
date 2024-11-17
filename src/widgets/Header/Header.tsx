import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';

interface HeaderProps {
  todoCount: number;
}

export const Header: FC<HeaderProps> = props => {
  // const { todoCount } = props;

  return (
    <header className={clsx(classes.header_wrapper)}>
      <Link className={clsx(classes.link)} to={'/'}>
        <h1 className={clsx(classes.header)}>To-Do List</h1>
      </Link>
    </header>
  );
};
