import React from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Task } from '../../../shared/utils/task-type';

import { Button } from '../../../shared/ui/button/button';

interface TaskNavigationProps {
  isEdit: boolean;
  togleEditTask: () => void;
  deleteTask: (id: Task['id']) => void;
  taskId: number;
}

export const TaskNavigation: React.FC<TaskNavigationProps> = props => {
  const { isEdit, togleEditTask, deleteTask, taskId } = props;

  const navigate = useNavigate();

  const handlerDeleteTask = () => {
    deleteTask(taskId);
    navigate('/', { replace: true });
  };

  const goHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={clsx(classes.nav)}>
      <Button
        variant="back"
        name="back"
        onclick={goHome}
        className={clsx(classes.button_back)}
        children={'назад'}
      />
      {/* <Button className={clsx(classes.button_back)} onclick={goHome}>
        Назад
      </Button> */}

      <div className={clsx(classes.action)}>
        <Button
          variant="edit"
          name="edit"
          onClick={togleEditTask}
          className={clsx({ [classes.edit]: isEdit })}
        />

        <Button variant="delete" name="delete" onClick={handlerDeleteTask} />
      </div>
    </div>
  );
};
