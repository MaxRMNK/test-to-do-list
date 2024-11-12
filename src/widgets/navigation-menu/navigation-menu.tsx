import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { Button } from '../../shared/ui/button/button';

export const NavigationMenu: FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={clsx(classes.nav_menu)}>
      <Button className={clsx(classes.button_back)} onclick={goHome}>
        Назад
      </Button>
    </div>
  );
};
