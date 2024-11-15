import { FC } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Link } from 'react-router-dom';

interface FooterProps {}

export const Footer: FC<FooterProps> = props => {
  const {} = props;

  // var currentYear = new Date().getFullYear();

  return (
    <footer className={clsx(classes.footer)}>
      <p>
        © 2024,{' '}
        <Link to={'https://github.com/MaxRMNK'} target="_blank">
          Max RMNK
        </Link>
      </p>
    </footer>
  );
};
