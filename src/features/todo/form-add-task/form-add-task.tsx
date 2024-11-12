import { FC, FormEvent, ChangeEvent } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Input } from '../../../shared/ui/input/input';
import { Button } from '../../../shared/ui/button/button';

import { TaskName } from '../../../shared/utils/task-type';

interface FormAddTaskProps {
  taskName: TaskName;
  addTask: (nameTask: TaskName) => void;
  changeTask: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormAddTask: FC<FormAddTaskProps> = props => {
  const { taskName, addTask, changeTask } = props;

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checkTaskName()) {
      addTask(taskName);
    }
  };

  // Примитивная "валидация":
  // Проверка на наличие в строке чего-то кроме пробелов +
  // ограничение минимальной и максимальной длины строки
  const checkTaskName = () => {
    return (
      taskName.name.trim().length >= 5 && taskName.name.trim().length <= 250
    );
  };

  return (
    <form
      className={clsx(classes.form)}
      onSubmit={e => {
        submitForm(e);
      }}
    >
      <Input
        variant="add"
        type="text"
        name="name"
        value={taskName.name}
        onChange={changeTask}
        className={clsx(classes.input)}
      />

      <Button
        type="submit"
        name="Add"
        children={'Add'}
        disabled={!checkTaskName()}
      />
    </form>
  );
};
