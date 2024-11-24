import React, { useState } from "react";
import { Task } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import useSortTasks from "../hooks/useSortTasks";
import ButtonsSort from "../TasksSection/ButtonsSort";
import TaskItem from "../TasksSection/TaskItem/TaskItem";

type Props = {
  title: string;
  tasks: Task[] | [];
  weather: any; // Add the weather prop type
};

const LayoutRoutes: React.FC<Props> = ({ title, tasks, weather }) => {
  const [isListInView1, setIsListInView1] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const { sortedBy, setSortedBy, sortedTasks } = useSortTasks(tasks);

  const [filterByPriority, setFilterByPriority] = useState<string>("");

  const openModalHandler = () => {
    dispatch(modalActions.openModalCreateTask());
  };

  const tasksTitle = `${title} (${tasks.length} ${tasks.length === 1 ? "task" : "tasks"
    })`;

  const uncompletedTasks = sortedTasks.filter(task => !task.completed);
  const completedTasks = sortedTasks.filter(task => task.completed);

  const filteredUncompletedTasks = filterByPriority
    ? uncompletedTasks.filter(task => task.priority === filterByPriority)
    : uncompletedTasks;

  return (
    <section>
      <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200">
        {tasksTitle}
      </h1>
      <ButtonsSort
        isListInView1={isListInView1}
        setIsListInView1={setIsListInView1}
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        filterByPriority={filterByPriority}
        setFilterByPriority={setFilterByPriority}
      />
      <ul
        className={`tasksList mt-4 ${isListInView1
          ? "grid-cols-1"
          : "grid gap-2 sm:gap-4 xl:gap-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
          }`}
      >
        {filteredUncompletedTasks.map((task) => (
          <TaskItem key={task.id} isListInView1={isListInView1} task={task} weather={weather} />
        ))}
      </ul>
      <h2 className="mt-8 font-medium text-lg dark:text-slate-200">Completed Tasks</h2>
      <ul
        className="tasksList mt-4 grid-cols-1"
      >
        {completedTasks.map((task) => (
          <TaskItem key={task.id} isListInView1={true} task={task} weather={weather} />
        ))}
      </ul>
      <li>
        <button
          onClick={openModalHandler}
          className={`border-2 w-full rounded-lg border-dashed transition 
      bg-[#35793729] text-[#357937] 
      dark:bg-[#357937] dark:text-[#CFCFCF]
      hover:bg-[#357937] hover:text-[#CFCFCF] 
      dark:hover:bg-[#CFCFCF] dark:hover:text-[#357937] 
      ${isListInView1 ? "h-12 sm:h-12" : "h-12 sm:h-12"} max-h-14`} // Further reduced max-height
        >
          ADD NEW TASK
        </button>
      </li>
    </section>
  );
};

export default React.memo(LayoutRoutes);
