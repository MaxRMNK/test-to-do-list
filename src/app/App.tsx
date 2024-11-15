import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { TaskName, Task, Tasks } from '../shared/utils/task-type';
import TODO_LIST_DB from '../shared/assets/defaultTodoList.json';

import { Header } from '../widgets/header/header';
// import { FormAddTask } from '../features/todo/form-add-task/form-add-task';
import { TodoList } from '../features/todo/todo-list/todo-list';
import { TaskPage } from '../features/task/task-page/task-page';

import { PageNotFound } from '../shared/not-found/not-found';
import { Footer } from '../widgets/footer/footer';

// const TODO_DEFAULT = { name: '', description: '' };

const App = () => {
  // const sortedList = TODO_LIST_DB.sort((a, b) => b.id - a.id);

  const [taskList, setTaskList] = useState<Tasks>(
    TODO_LIST_DB.sort((a, b) => b.id - a.id),
  );

  // ---
  // Отправка формы "Добавить Таск"
  const addTask = (task: TaskName) => {
    // Находим максимальный id в текущем массиве
    const maxId =
      taskList.length > 0 ? Math.max(...taskList.map(item => item.id)) : 0;

    // Вариант сбоит если добавлять элементы в начало списка, или если id будут не по порядку
    // const maxId = taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 0;

    setTaskList([
      {
        id: maxId + 1,
        name: task.name.trim(),
        description: task.description.trim(), // пока, при создании приходит пустая строка - ''
        completed: false,
      },
      ...taskList,
    ]);

    // Нормализует количество отображаемых элементов
    // setVisibleTasksCount(prev => prev + 1);
  };

  // ---
  // Отправка формы "Редактировать Таск"
  const editTask = ({ id, name, description }: Omit<Task, 'completed'>) => {
    // console.log('name', name);
    // console.log('description', description);

    setTaskList(
      taskList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            name: name.trim(),
            description: description.trim(),
          };
        }
        return task;
      }),
    );
  };

  // // ---
  // // Обновление состояния при вводе/редактировании Таски
  // const changeTask = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   console.log(e);

  //   const { name, value } = e.target;
  //   // setNewTask({ ...newTask, [name]: value });
  //   setTodo({ ...todo, [name]: value });
  // };

  // ---
  // Удалить Задачу
  const deleteTask = (id: Task['id']) => {
    // const updateTaskList = taskList.filter(task => task.id !== id);
    // setTaskList(updateTaskList);

    setTaskList(prevTasks => [...prevTasks.filter(task => task.id !== id)]);
  };

  // ---
  // Поставить/убрать метку "Задача выполнена"
  const completeTask = (id: Task['id']) => {
    // Коротко
    setTaskList(
      taskList.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );

    // Развернуто
    // setTaskList(
    //   taskList.map(task => {
    //     if (task.id === id) {
    //       return { ...task, completed: !task.completed };
    //     }
    //     return task;
    //   }),
    // );

    // Избыточно
    // setTaskList(prevTasks => [
    //   ...prevTasks.map(task =>
    //     task.id !== id ? task : { ...task, completed: !task.completed },
    //   ),
    // ]);
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
              <TodoList
                addTask={addTask}
                className={clsx(classes.task_list)}
                taskList={taskList}
                completeTask={completeTask}
                removeTask={deleteTask}
              />
            }
          />
          <Route
            path="/task/:taskId" // task? - необязательный сегмент
            element={
              <TaskPage
                taskList={taskList}
                deleteTask={deleteTask}
                completeTask={completeTask}
                editTask={editTask}
              />
            }
          />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
