import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { Tasks } from '../../../shared/utils/task-type';
import { Button } from '../../../shared/ui/button/button';
import { Checkbox } from '../../../shared/ui/checkbox/checkbox';
import { PageNotFound } from '../../../shared/not-found/not-found';
import { NavigationMenu } from '../../../widgets/navigation-menu/navigation-menu';
import { Input } from '../../../shared/ui/input/input';
import AutoResizeTextarea from '../../../shared/ui/textarea/textarea';

interface EditTaskPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  taskList: Tasks;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}

export const EditTaskPage: FC<EditTaskPageProps> = props => {
  const { taskList, deleteTask, completeTask } = props;

  const navigate = useNavigate();

  const handlerDeleteTask = () => {
    deleteTask(task.id);
    navigate('/', { replace: true });
  };

  const { taskId } = useParams();

  const task = taskList.filter(item => item.id == Number(taskId))[0];

  // console.log('thisTask', task);

  if (!task) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className={clsx(classes.nav)}>
        {/* <NavigationMenu /> */}
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Назад
        </Button>

        <div className={clsx(classes.action)}>
          {/* <Button variant="favorite" name="favorite" /> */}
          <Button variant="edit" name="edit" />
          <Button
            variant="delete"
            name="delete"
            onClick={() => {
              handlerDeleteTask();
            }}
          />
        </div>
      </div>
      <section className={clsx(classes.task)}>
        <Checkbox
          onChange={() => {
            completeTask(task.id);
          }}
          checked={task.completed}
          className={clsx(classes.toggle)}
        />

        <div
          className={clsx(classes.task_wrapper, {
            [classes.completed]: task.completed,
          })}
        >
          <div className={clsx(classes.task_name)}>
            {/* {task.name} - {task.completed ? 'true' : 'false'} */}
            {/* <Input
              type="text"
              variant="edit"
              value={task.name}
              className={clsx(classes.edit)}
            /> */}
            {/* <textarea>{task.name}</textarea> */}
            <AutoResizeTextarea />
          </div>

          <div className={clsx(classes.task_description)}>
            {task.description}
          </div>
        </div>
      </section>
    </>
  );
};
