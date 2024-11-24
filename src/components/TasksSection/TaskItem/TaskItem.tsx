import React, { useState } from "react";
import { Task } from "../../../interfaces";
import InfosTask from "./InfosTask";
import ActionsTaskItem from "./ActionsTaskItem";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalCreateTask from "../../Utilities/ModalTask";

const TaskItem: React.FC<{ isListInView1: boolean; task: Task; weather: any }> = ({
  isListInView1,
  task,
  weather,
}) => {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const closeModalEditTask = () => {
    setModalEditTaskOpen(false);
  };

  const openModalEditTask = () => {
    setModalEditTaskOpen(true);
  };

  const editTaskHandler = (task: Task) => {
    dispatch(tasksActions.editTask(task));
  };

  return (
    <>
      <li key={task.id} onClick={(e) => {
        if (e.target instanceof HTMLElement && !e.target.closest('button')) {
          !task.completed && openModalEditTask();
        }
      }}>
        <article
          className={`bg-[#FBFDFC] dark:bg-[#232323] p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:hover:shadow-transparent ${
            isListInView1 ? "flex-row sm:h-14 border-t border-b border-x-0 border-[#496E4B33]" : "flex-col h-36 sm:h-40 border border-[3px] border-[#496E4B33]"
          }`}
        >
          <InfosTask task={task} isListInView1={isListInView1} weather={weather} />
          <ActionsTaskItem task={task} isListInView1={isListInView1} />
        </article>
      </li>
      {modalEditTaskOpen && (
        <ModalCreateTask
          onClose={closeModalEditTask}
          task={task}
          nameForm="Edit task"
          onConfirm={editTaskHandler}
        />
      )}
    </>
  );
};

export default React.memo(TaskItem);
