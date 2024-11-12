// export type TaskName = string;
export type TaskName = {
  name: string;
};

export type Task = {
  id: number;
  name: string;
  completed: boolean;
  description: string;
};

export type Tasks = Task[];
