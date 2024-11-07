import { FC } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Input } from '../../shared/ui/Input/Input';
import { Button } from '../../shared/ui/Button/Button';

interface FormProps {
  handlerSubmit: (e: any) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toDo: {
    name: string;
  };
  // setToDo: React.Dispatch<
  //   React.SetStateAction<{
  //     name: string;
  //   }>
  // >;
}

export const Form: FC<FormProps> = props => {
  const { handlerSubmit, onChange, toDo } = props;

  return (
    <form className={clsx(classes.form)} onSubmit={handlerSubmit}>
      <Input
        variant="search"
        type="text"
        name="name"
        value={toDo.name}
        onChange={onChange}
        className={clsx(classes.input)}
      />

      <Button
        type="submit"
        name="Add"
        children={'Add'}
        disabled={toDo.name ? false : true}
      />
    </form>
  );
};

{
  /* <label>
    <span>task description</span>
    <input
      type="text"
      name="description"
      value={toDo.description}
      className={(classes.input, classes.description)}
      onChange={onChange}
    />
  </label>; */
}
