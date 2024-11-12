import clsx from 'clsx';
import classes from './styles.module.scss';

export const PageNotFound = () => {
  return (
    <div className={clsx(classes.wrapper)}>
      <span className={clsx(classes.text)}>Ничего не найдено</span>
    </div>
  );
};
