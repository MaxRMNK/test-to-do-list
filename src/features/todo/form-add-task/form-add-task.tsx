import { FC, FormEvent, ChangeEvent } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Input } from '../../../shared/ui/input/input';
import { Button } from '../../../shared/ui/button/button';

import { TaskName } from '../utils/task-type';

interface FormAddTaskProps {
  taskName: TaskName;
  addTask: (e: FormEvent<HTMLFormElement>, nameTask: TaskName) => void;
  changeTask: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormAddTask: FC<FormAddTaskProps> = props => {
  const { taskName, addTask, changeTask } = props;

  return (
    <form
      className={clsx(classes.form)}
      onSubmit={e => {
        addTask(e, taskName);
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
        disabled={taskName.name.trim() ? false : true}
        // onClick={}
      />
    </form>
  );
};
