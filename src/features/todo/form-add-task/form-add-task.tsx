import React, { useState } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Input } from '../../../shared/ui/input/input';
import { Button } from '../../../shared/ui/button/button';

import { TaskName } from '../../../shared/utils/task-type';

const TODO_DEFAULT = { name: '', description: '' };

interface FormAddTaskProps {
  addTask: (task: TaskName) => void;
}

export const FormAddTask: React.FC<FormAddTaskProps> = props => {
  const { addTask } = props;

  const [todo, setTodo] = useState<TaskName>(TODO_DEFAULT);

  // ---
  // Обновление состояния при вводе/редактировании Таски
  const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // ---
  const checkTaskName = () => {
    return todo.name.trim().length >= 5 && todo.name.trim().length <= 250;
  };

  // ---
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checkTaskName()) {
      addTask(todo);
      setTodo(TODO_DEFAULT);
    }
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
        value={todo.name}
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
