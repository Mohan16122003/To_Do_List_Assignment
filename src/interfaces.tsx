export interface Task {
  title: string;
  dir: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
  priority: "High" | "Medium" | "Low"; 
  id: string;
}
