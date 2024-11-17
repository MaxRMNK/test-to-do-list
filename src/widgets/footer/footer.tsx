import { FC } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Link } from 'react-router-dom';

interface FooterProps {}

export const Footer: FC<FooterProps> = props => {
  const {} = props;

  const currentYear: number = new Date().getFullYear();

  const viewDate = (startYear: number) => {
    if (!currentYear || startYear >= currentYear) return startYear;
    return `${startYear}-${currentYear}`;
  };

  return (
    <footer className={clsx(classes.footer)}>
      <p>
        © {viewDate(2024)} |{' '}
        <Link to={'https://github.com/MaxRMNK'} target="_blank">
          MaxRMNK
        </Link>
      </p>
    </footer>
  );
};
