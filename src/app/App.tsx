import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { TaskName, Tasks } from '../shared/utils/task-type';
import TODO_LIST_DB from '../shared/assets/defaultTodoList.json';

import { Header } from '../widgets/header/header';
import { FormAddTask } from '../features/todo/form-add-task/form-add-task';
import { TodoList } from '../features/todo/todo-list/todo-list';
import { TaskPage } from '../features/task/task-page/task-page';
import { PageNotFound } from '../shared/not-found/not-found';
import { EditTaskPage } from '../features/task/edit-task/edit-task';

const TODO_DEFAULT = { name: '', description: '' }; // { name: '' }

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
  // const [count, setCount] = useState(0);

  // ---
  // Отправка формы "Добавить Таск"
  const addTask = (nameTask: TaskName) => {
    // const idTask =
    //   taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 0;

    // const clearName = nameTask.name.trim();

    setTaskList([
      ...taskList,
      {
        id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 0,
        name: nameTask.name.trim(),
        completed: false,
        description: '',
      },
    ]);

    setNewTask(TODO_DEFAULT);
  };

  // ---
  // Обновление состояния при вводе/редактировании Таски
  const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  //
  const deleteTask = (id: number) => {
    // const updateTaskList = taskList.filter(task => task.id !== id);
    // setTaskList(updateTaskList);

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
        <Routes>
          <Route
            // path="/"
            index
            element={
              <>
                <FormAddTask
                  addTask={addTask}
                  taskName={newTask}
                  changeTask={changeTask}
                />

                <TodoList
                  className={clsx(classes.task_list)}
                  taskList={taskList}
                  deleteTask={deleteTask}
                  completeTask={completeTask}
                />
              </>
            }
          />
          <Route
            path="/task/:taskId" // task? - необязательный сегмент
            element={
              <TaskPage
                deleteTask={deleteTask}
                completeTask={completeTask}
                taskList={taskList}
              />
            }
          />
          <Route
            path="/task/:taskId/edit" // task? - необязательный сегмент
            element={
              <EditTaskPage
                deleteTask={deleteTask}
                completeTask={completeTask}
                taskList={taskList}
              />
            }
          />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
