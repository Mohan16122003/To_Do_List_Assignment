import React from "react";
import { Task } from "../../../interfaces";

import useDate from "../../hooks/useDate";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";

const InfosTask: React.FC<{ task: Task; isListInView1: boolean; weather: any }> = ({
  task,
  isListInView1,
  weather,
}) => {
  const dateFormated = useDate(task.date);
  const dispatch = useAppDispatch();

  const toggleCompleted = () => {
    dispatch(tasksActions.toggleTaskCompleted(task.id));
  };

  return (
    <div className={`flex flex-col flex-1 justify-center items-start ${isListInView1 ? "mr-6" : ""}`}>
      <div
        className={`flex flex-1 items-center justify-center ${
          isListInView1 ? "mb-1" : "mb-2 mt-12  "
        }`}
      >
        <div className="relative">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleCompleted}
            className="mr-4 w-5 h-5 appearance-none bg-transparent border-2 border-black dark:border-white rounded-sm checked:bg-[#357937] checked:border-transparent dark:checked:border-transparent focus:outline-none transition duration-200 cursor-pointer"
          />
          {task.completed && (
            <span className="absolute inset-0 flex items-center justify-center text-white text-lg pointer-events-none" style={{ transform: 'translate(-8px, -3px)' }}>✔</span>
          )}
        </div>
        <span className={`block text-[17px] font-normal dark:text-slate-200 ${task.completed ? "line-through" : ""}`}>
          {task.title}
          {weather && !task.completed && (
            <span className="ml-2 text-sm text-gray-500"> - {weather.weather[0].description}, {weather.main.temp}°C</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default InfosTask;
