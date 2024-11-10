// export type TaskName = string;
export type TaskName = {
  name: string;
};

export type Task = {
  id: number;
  name: string;
  completed: boolean;
};

export type Tasks = Task[];
