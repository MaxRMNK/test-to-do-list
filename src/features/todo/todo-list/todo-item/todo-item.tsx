import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Task } from '../../../../shared/utils/task-type';
import { Checkbox } from '../../../../shared/ui/checkbox/checkbox';
import { Link } from 'react-router-dom';

interface TodoItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  task: Task;
  completeTask: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = props => {
  const { task, completeTask, className } = props;

  return (
    <div className={clsx(className, classes.task)}>
      <Checkbox
        onChange={() => {
          completeTask(task.id);
        }}
        checked={task.completed}
        className={clsx(classes.state)}
      />

      <div
        className={clsx(classes.task_name, {
          [classes.completed]: task.completed,
        })}
      >
        <Link to={`/task/${task.id}`} className={clsx(classes.task_link)}>
          {task.name} - {task.completed ? 'true' : 'false'}
        </Link>
      </div>
    </div>
  );
};
