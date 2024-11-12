import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { Tasks } from '../../../shared/utils/task-type';
import { TodoItem } from '../todo-item/todo-item';

interface TodoListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  taskList: Tasks;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}

export const TodoList: FC<TodoListProps> = props => {
  const { taskList, completeTask, deleteTask, className } = props;

  return (
    <ul className={clsx(className, classes.task_list)}>
      {taskList.map(item => (
        <li key={item.id} className={clsx(classes.task)}>
          <TodoItem
            task={item}
            deleteTask={deleteTask}
            completeTask={completeTask}
            className={clsx(classes.task_item)}
          />
        </li>
      ))}
    </ul>
  );
};
