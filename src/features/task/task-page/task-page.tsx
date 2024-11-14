import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Task, Tasks } from '../../../shared/utils/task-type';

// import { Button } from '../../../shared/ui/button/button';
import { Checkbox } from '../../../shared/ui/checkbox/checkbox';
import { PageNotFound } from '../../../shared/not-found/not-found';
import { FormEditTask } from '../form-edit-task/form-edit-task';
import { TaskNavigation } from '../task-navigation/task-navigation';

interface TaskPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  taskList: Tasks;
  deleteTask: (id: Task['id']) => void;
  completeTask: (id: Task['id']) => void;
  editTask: ({ id, name, description }: Omit<Task, 'completed'>) => void;
}

export const TaskPage: React.FC<TaskPageProps> = props => {
  const { taskList, deleteTask, completeTask, editTask } = props;

  // const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { taskId } = useParams();
  const task = taskList.filter(item => item.id == Number(taskId))[0];

  if (!task) {
    return <PageNotFound />;
  }

  // const goHome = () => {
  //   navigate('/', { replace: true });
  // };

  // const handlerDeleteTask = () => {
  //   deleteTask(task.id);
  //   navigate('/', { replace: true });
  // };

  const togleEditTask = () => {
    setIsEdit(prev => !prev);
  };

  return (
    <>
      <TaskNavigation
        isEdit={isEdit}
        togleEditTask={togleEditTask}
        // handlerDeleteTask={handlerDeleteTask}
        deleteTask={deleteTask}
        taskId={task.id}
      />

      <section className={clsx(classes.task)}>
        <Checkbox
          onChange={() => {
            completeTask(task.id);
          }}
          checked={task.completed}
          className={clsx(classes.toggle)}
        />

        {isEdit ? (
          // Правка
          <div className={clsx(classes.task_wrapper)}>
            <FormEditTask
              taskList={taskList}
              editTask={editTask}
              togleEditTask={togleEditTask}
            />
          </div>
        ) : (
          // Просмотр
          <div className={clsx(classes.task_wrapper)}>
            <div
              className={clsx(classes.task_name, {
                [classes.completed]: task.completed,
              })}
            >
              {task.name}
            </div>
            <div className={clsx(classes.task_description)}>
              {task.description}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
