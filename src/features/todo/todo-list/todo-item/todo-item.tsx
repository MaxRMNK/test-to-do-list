import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { Task } from '../../../../shared/utils/task-type';
import { Checkbox } from '../../../../shared/ui/checkbox/checkbox';
import { Button } from '../../../../shared/ui/button/button';

interface TodoItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  task: Task;
  completeTask: (id: Task['id']) => void;
  // removeTask: (id: Task['id']) => void;
}

export const TodoItem: FC<TodoItemProps> = props => {
  const {
    task,
    completeTask,
    // removeTask,
    className,
  } = props;

  const navigate = useNavigate();

  return (
    <div className={clsx(className, classes.task)}>
      <Checkbox
        className={clsx(classes.state)}
        checked={task.completed}
        onChange={() => {
          completeTask(task.id);
        }}
      />

      <div
        className={clsx(classes.task_name, {
          [classes.completed]: task.completed,
        })}
      >
        {/* <Link to={`/task/${task.id}`} className={clsx(classes.task_link)}> */}
        {task.name}
        {/* </Link> */}
      </div>

      <div className={clsx(classes.action)}>
        <Button
          variant="more"
          name="more"
          onClick={() => navigate(`/task/${task.id}`)}
        />
        {/* <Button
          variant="delete"
          name="delete"
          onClick={() => {
            removeTask(task.id);
          }}
        /> */}
        {/* <Button variant="edit" name="edit" /> */}
        {/* <Button variant="favorite" name="favorite" /> */}
      </div>
    </div>
  );
};
