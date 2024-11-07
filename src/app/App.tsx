import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

import { Header } from '../widgets/Header/Header';
import { Form } from '../features/Form/Form';
import { ListItems } from '../shared/ListItems/ListItems';

const TODO_DEFAULT = { name: '' }; // { name: '', description: '' }

const TODO_LIST_DB = [
  { id: 1, name: 'task 1', checked: false },
  { id: 2, name: 'task 2', checked: false },
  { id: 3, name: 'task 3', checked: true },
  { id: 4, name: 'task 4', checked: false },
  { id: 5, name: 'task 5', checked: false },
];

const App = () => {
  // const [count, setCount] = useState(0);
  const [toDoList, setToDoList] = useState(TODO_LIST_DB);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<boolean>(false);

  const [toDo, setToDo] = useState(TODO_DEFAULT);

  // Ввод задачи
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setToDo({ ...toDo, [name]: value });
  };

  // Отправка формы
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    setToDo(TODO_DEFAULT);

    // const length = toDoList.length++;
    // const newTask = { id: length, name: 'task 5', checked: false };
    // setToDoList([...toDoList, newTask]);

    console.log('handlerSubmit', e.target.name.value.trim());
  };

  // console.log('toDoList, setToDoList', toDoList, setToDoList);

  useEffect(() => {
    console.log(toDo);
  }, [toDo]);

  return (
    <div className={clsx(classes.page)}>
      <Header todoCount={toDoList.length} />
      <main className={clsx(classes.main_container)}>
        <Form
          handlerSubmit={handlerSubmit}
          onChange={onChange}
          toDo={toDo}
          // setToDo={setToDo}
        />

        <ul className={clsx(classes.task_list)}>
          {toDoList.map(item => (
            <li>
              <ListItems task={item.name} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
