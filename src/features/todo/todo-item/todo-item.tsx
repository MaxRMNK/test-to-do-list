import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Button } from '../../../shared/ui/button/button';
import { Task } from '../utils/task-type';
import { Checkbox } from '../../../shared/ui/checkbox/checkbox';

interface TodoItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  task: Task;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = props => {
  const { task, removeTask, completeTask, className } = props;

  return (
    <div className={clsx(className, classes.task)}>
      <Checkbox
        onChange={() => {
          completeTask(task.id);
        }}
        checked={task.completed}
        className={clsx(classes.toggle)}
      />

      <div
        className={clsx(classes.task_name, {
          [classes.completed]: task.completed,
        })}
      >
        {task.name} - {task.completed ? 'true' : 'false'}
      </div>
      <div className={clsx(classes.action)}>
        {/* <Button variant="edit" name="edit" /> */}
        <Button
          variant="delete"
          name="delete"
          onClick={() => {
            removeTask(task.id);
          }}
        />
        {/* <Button variant="favorite" name="favorite" /> */}
        {/* <Button variant="more" name="more" /> */}
      </div>
    </div>
  );
};
