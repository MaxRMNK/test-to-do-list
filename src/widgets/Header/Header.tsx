import { FC } from 'react';
// import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';

// import { NavigationMenu } from '../navigation-menu/navigation-menu';

interface HeaderProps {
  todoCount: number;
}

export const Header: FC<HeaderProps> = ({ todoCount }) => {
  // const location = useLocation().pathname.substring(1);

  return (
    <header className={clsx(classes.header_wrapper)}>
      <h1 className={clsx(classes.header)}>To-Do List {todoCount}</h1>
      {/* {location !== '' && <NavigationMenu />} */}
    </header>
  );
};
