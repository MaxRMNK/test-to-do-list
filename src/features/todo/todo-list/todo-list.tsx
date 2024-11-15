import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { TaskName, Task, Tasks } from '../../../shared/utils/task-type';
import { TodoItem } from './todo-item/todo-item';
import { FormAddTask } from '../form-add-task/form-add-task';

interface TodoListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  addTask: (task: TaskName) => void;
  taskList: Tasks;
  completeTask: (id: Task['id']) => void;
  removeTask: (id: Task['id']) => void;
}

export const TodoList: FC<TodoListProps> = props => {
  const { addTask, taskList, completeTask, removeTask, className } = props;

  return (
    <>
      <FormAddTask addTask={addTask} />

      <ul className={clsx(className, classes.task_list)}>
        {taskList.map(item => (
          <li key={item.id} className={clsx(classes.task)}>
            <TodoItem
              task={item}
              completeTask={completeTask}
              removeTask={removeTask}
              className={clsx(classes.task_item)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
