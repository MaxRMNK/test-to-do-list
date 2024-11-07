import React from 'react';
import styles from './styles.module.scss';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <header>
      <h1 className={styles.header}>To-Do List {todoCount}</h1>
    </header>
  );
};
