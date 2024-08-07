import { Task } from './task.model'
export interface Work {
  id: number;
  name: string;
  tasks: Task[];
}
