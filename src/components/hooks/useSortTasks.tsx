import { useState, useEffect } from "react";
import { Task } from "../../interfaces";

const useSortTasks = (tasks: Task[]) => {
  const [sortedBy, setSortedBy] = useState<string>("");

  const [sortedTasks, setSortedTasks] = useState<Task[]>(tasks);

  const sortByDate = (order: "max-date" | "min-date"): Task[] => {
    const toMillisseconds = (date: string) => Date.parse(date);
    const tasksCopy = [...tasks];
    const sorted = tasksCopy.sort((task1, task2) => {
      const date1 = toMillisseconds(task1.date);
      const date2 = toMillisseconds(task2.date);

      if (date1 < date2) {
        return -1;
      }

      if (date1 > date2) {
        return 1;
      }

      return 0;
    });

    if (order === "min-date") {
      return sorted;
    }

    if (order === "max-date") {
      return sorted.reverse();
    }

    return tasks; //se não existir tasks (para não retornar undefined)
  };

  const sortByCompletedStatus = (completed: boolean): Task[] => {
    const tasksCopy = [...tasks];
    const sorted = tasksCopy.sort((task1) => {
      if (task1.completed) {
        return -1;
      }
      return 0;
    });
    if (completed) {
      return sorted;
    }
    if (!completed) {
      return sorted.reverse();
    }
    return tasks;
  };

  const sortByPriority = (): Task[] => {
    const tasksCopy = [...tasks];
    const sorted = tasksCopy.sort((task1, task2) => {
      const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };
      return priorityOrder[task1.priority] - priorityOrder[task2.priority];
    });
    console.log("Sorted by priority:", sorted); // Debugging log
    return sorted;
  };

  useEffect(() => {
    let sorted = tasks;
    switch (sortedBy) {
      case "min-date":
        sorted = sortByDate("min-date");
        break;
      case "max-date":
        sorted = sortByDate("max-date");
        break;
      case "order-added":
        sorted = tasks;
        break;
      case "completed-first":
        sorted = sortByCompletedStatus(true);
        break;
      case "uncompleted-first":
        sorted = sortByCompletedStatus(false);
        break;
      case "priority":
        sorted = sortByPriority();
        break;
      default:
        sorted = tasks;
    }
    setSortedTasks(sorted);
  }, [sortedBy, tasks]);

  return { sortedBy, setSortedBy, sortedTasks };
};

export default useSortTasks;
