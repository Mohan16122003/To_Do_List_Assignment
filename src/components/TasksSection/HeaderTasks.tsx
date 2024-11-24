import React from "react";
import BtnAddTask from "../Utilities/BtnAddTask";


import { useAppDispatch } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import Notification from "./Notification";

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();

  const monthName: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
    .toString()
    .padStart(2, "0")}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };
  const openMenuAccountHandler = () => {
    dispatch(menusActions.openMenuAccount());
  };

  return (
    <header
      className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex h-[178px] relative"
      style={{
        background: 'linear-gradient(0deg, rgba(53, 121, 55, 0.1) 0%, rgba(208, 255, 210, 0.1) 100%)'
      }}
    >
      <div className="text-center">
        <span className="text-lg font-semibold ml-6 text-slate-600 dark:text-white">
          Add A Task
        </span>
      </div>
      <div className="flex flex-1">
        
        <BtnAddTask 
          className="absolute bottom-3 right-3 min-w-max shadow-lg shadow-slate-400 dark:shadow-slate-900
          bg-[#35793729] text-[#357937]
          dark:bg-[#357937] dark:text-[#CFCFCF]
          hover:bg-[#357937] hover:text-[#CFCFCF]
          dark:hover:bg-[#CFCFCF] dark:hover:text-[#357937]"
        />
        
      </div>
      <div className="absolute bottom-5 left-5 ">
        <Notification /> 
      </div>

    </header>
  );
};

export default HeaderTasks;
