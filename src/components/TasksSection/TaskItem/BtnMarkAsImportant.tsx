import React from "react";
import { useAppDispatch } from "../../../store/hooks";

import { tasksActions } from "../../../store/Tasks.store";

import { ReactComponent as StarLine } from "../../../assets/star-line.svg";



const BtnMarkAsImportant: React.FC<{

  taskId: string;

  taskImportant: boolean;

}> = ({ taskId, taskImportant }) => {

  const dispatch = useAppDispatch();



  const markAsImportantHandler = () => {

    dispatch(tasksActions.markAsImportant(taskId));

  };



  return (

    <button

      title={taskImportant ? "unmark as important" : "mark as important"}

      onClick={markAsImportantHandler}

      className="transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto"

    >

<StarLine
  className={`w-5 h-5 sm:w-6 sm:h-6 ${
    taskImportant
      ? "fill-black dark:fill-white" // Filled with black in light theme and white in dark theme
      : "fill-none dark:fill-none" // No fill in light theme, and matches dark background in dark theme
  } stroke-black dark:stroke-white`}
/>

    </button>

  );

};



export default React.memo(BtnMarkAsImportant);

