import React, { useState } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { TaskName, Tasks } from '../features/todo/utils/task-type';
import TODO_LIST_DB from '../shared/assets/defaultTodoList.json';

import { Header } from '../widgets/header/header';
import { FormAddTask } from '../features/todo/form-add-task/form-add-task';
import { TodoList } from '../features/todo/todo-list/todo-list';

const TODO_DEFAULT = { name: '' }; // { name: '', description: '' }

// const TODO_LIST_DB: Tasks = [
//   { id: 1, name: 'task 1', completed: false },
//   { id: 2, name: 'task 2', completed: false },
//   { id: 3, name: 'task 3', completed: true },
//   { id: 4, name: 'task 4', completed: false },
//   { id: 5, name: 'task 5', completed: false },
// ];
// const [count, setCount] = useState(0);
// const [loading, setLoading] = useState<boolean>(true);
// const [error, setError] = useState<boolean>(false);

const App = () => {
  const [newTask, setNewTask] = useState<TaskName>(TODO_DEFAULT);
  const [taskList, setTaskList] = useState<Tasks>(TODO_LIST_DB);
  const [count, setCount] = useState(0);

  // ---
  // Отправка формы
  const addTask = (e: React.FormEvent<HTMLFormElement>, nameTask: TaskName) => {
    e.preventDefault();

    const idTask = taskList[taskList.length - 1].id + 1;
    const clearName = nameTask.name.trim();
    setTaskList([
      ...taskList,
      { id: idTask, name: clearName, completed: false },
    ]);

    setNewTask(TODO_DEFAULT);
  };

  // ---
  // Обновление состояния при вводе/редактировании Таски
  const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // setNewTask((prew:) => { ...prew, [name]: value });
    setNewTask({ ...newTask, [name]: value });

    // console.log('e.target.value', e.target.value);
    setCount(prew => prew + 1);
    console.log('newTask', count);
  };

  //
  const removeTask = (id: number) => {
    // const updateTaskList = taskList.filter(task => task.id !== id);
    // setTaskList(updateTaskList);

    // setTaskList(taskList => [...taskList.filter(task => task.id !== id)]);

    setTaskList(prevTasks => [...prevTasks.filter(task => task.id !== id)]);
  };

  //
  const completeTask = (id: number) => {
    // const updateTaskList = taskList.map(task =>
    //   task.id !== id ? task : { ...task, completed: !task.completed },
    // );
    // setTaskList(updateTaskList);

    setTaskList(prevTasks => [
      ...prevTasks.map(task =>
        task.id !== id ? task : { ...task, completed: !task.completed },
      ),
    ]);
  };

  return (
    <div className={clsx(classes.page)}>
      <Header todoCount={taskList.length} />
      <main className={clsx(classes.main_container)}>
        <FormAddTask
          addTask={addTask}
          taskName={newTask}
          changeTask={changeTask}
        />

        <TodoList
          className={clsx(classes.task_list)}
          taskList={taskList}
          removeTask={removeTask}
          completeTask={completeTask}
        />
      </main>
    </div>
  );
};

export default App;
