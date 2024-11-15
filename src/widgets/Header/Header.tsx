import { FC } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

interface HeaderProps {
  todoCount: number;
}

export const Header: FC<HeaderProps> = props => {
  // const { todoCount } = props;
  // const location = useLocation().pathname.substring(1);

  return (
    <header className={clsx(classes.header_wrapper)}>
      <h1 className={clsx(classes.header)}>To-Do List</h1>
      {/* {location !== '' && <NavigationMenu />} */}
    </header>
  );
};
