export type TaskName = {
  name: string;
  description: string;
};

export type Task = {
  id: number;
  name: TaskName['name'];
  description: TaskName['description'];
  completed: boolean;
};

export type Tasks = Task[];
