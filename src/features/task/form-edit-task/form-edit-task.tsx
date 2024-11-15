import React, { useState, DetailedHTMLProps, HTMLAttributes } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Task, Tasks } from '../../../shared/utils/task-type';

import { PageNotFound } from '../../../shared/not-found/not-found';

import { Textarea } from '../../../shared/ui/textarea/textarea';
import { Button } from '../../../shared/ui/button/button';

interface FormEditTaskProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  taskList: Tasks;
  editTask: ({ id, name, description }: Omit<Task, 'completed'>) => void;
  togleEditTask: () => void;
}

export const FormEditTask: React.FC<FormEditTaskProps> = props => {
  const { taskList, editTask, togleEditTask, ...otherProps } = props;

  const { taskId } = useParams();
  const task = taskList.filter(item => item.id == Number(taskId))[0];

  if (!task) {
    return <PageNotFound />;
  }

  const [todo, setTodo] = useState<Task>(task);

  // const [todo, setTodo] = useState<Task>({
  //   id: task.id,
  //   name: task.name,
  //   description: task.description,
  //   completed: task.completed,
  // });

  // ---
  // Обновление состояния при вводе/редактировании Таски.
  const changeTask = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // ---
  // Проверка содержимого полей. Вместо этого надо сделать нормальную валидацию.
  const checkTaskName = () => {
    return (
      todo.name.trim().length >= 5 &&
      todo.name.trim().length <= 250 &&
      todo.description.trim().length <= 1000
    );
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (checkTaskName()) {
      editTask(todo);
      setTodo(task);
      togleEditTask();
    }
  };

  return (
    <form
      className={clsx(classes.form_edit, {
        [classes.completed]: task.completed,
      })}
      onSubmit={e => {
        submitForm(e);
      }}
      {...otherProps}
    >
      <div className={clsx(classes.name)}>
        <Textarea
          className={clsx(classes.task_name)}
          variant="big"
          value={todo.name}
          onChange={changeTask}
          name="name"
          placeholder="Название задачи..."
          minLength={5}
          maxLength={250}
          required
        />
      </div>

      <div className={clsx(classes.description)}>
        <Textarea
          variant="medium_frame"
          className={clsx(classes.task_description)}
          value={todo.description}
          onChange={changeTask}
          name="description"
          maxLength={1000}
          placeholder="Описание задачи..."
        />
      </div>

      <div className={clsx(classes.button_wrapper)}>
        <Button
          type="submit"
          name="submit"
          children={'Сохранить'}
          disabled={!checkTaskName()}
        />
      </div>
    </form>
  );
};
