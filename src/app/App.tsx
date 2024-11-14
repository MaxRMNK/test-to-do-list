import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { TaskName, Task, Tasks } from '../shared/utils/task-type';
import TODO_LIST_DB from '../shared/assets/defaultTodoList.json';

import { Header } from '../widgets/header/header';
import { FormAddTask } from '../features/todo/form-add-task/form-add-task';
import { TodoList } from '../features/todo/todo-list/todo-list';
import { TaskPage } from '../features/task/task-page/task-page';

import { PageNotFound } from '../shared/not-found/not-found';

// const TODO_DEFAULT = { name: '', description: '' };

const App = () => {
  const [taskList, setTaskList] = useState<Tasks>(TODO_LIST_DB);

  // ---
  // Отправка формы "Добавить Таск"
  const addTask = (task: TaskName) => {
    setTaskList([
      ...taskList,
      {
        id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 0,
        name: task.name.trim(),
        description: task.description.trim(), // пока, при создании приходит пустая строка - ''
        completed: false,
      },
    ]);
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
              <>
                <FormAddTask addTask={addTask} />

                <TodoList
                  className={clsx(classes.task_list)}
                  taskList={taskList}
                  completeTask={completeTask}
                />
              </>
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
    </div>
  );
};

export default App;
