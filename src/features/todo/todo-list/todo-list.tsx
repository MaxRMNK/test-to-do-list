import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { Tasks } from '../utils/task-type';
import { TodoItem } from '../todo-item/todo-item';

interface TodoListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  taskList: Tasks;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
}

export const TodoList: FC<TodoListProps> = props => {
  const { taskList, completeTask, removeTask, className } = props;

  return (
    <ul className={clsx(className, classes.task_list)}>
      {taskList.map((item, index) => (
        <li key={index} className={clsx(classes.task)}>
          <TodoItem
            task={item}
            removeTask={removeTask}
            completeTask={completeTask}
            className={clsx(classes.task_item)}
          />
        </li>
      ))}
    </ul>
  );
};
