import React from "react";
import AccountData from "./components/AccountSection/AccountData";
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import TasksSection from "./components/TasksSection/TasksSection";
import ModalCreateTask from "./components/Utilities/ModalTask";
import { Task } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { modalActions } from "./store/Modal.store";
import { tasksActions } from "./store/Tasks.store";

const App: React.FC = () => {
  const modal = useAppSelector((state) => state.modal);
  const menuHeaderOpened = useAppSelector((state) => state.menu.menuHeaderOpened);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const dispatch = useAppDispatch();

  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask());
  };

  const createNewTaskHandler = (task: Task) => {
    dispatch(tasksActions.addNewTask(task));
  };

  return (
    <div className="bg-[#FBFDFC] min-h-screen text-slate-600 dark:bg-[#232323] dark:text-slate-400 xl:text-base sm:text-sm text-xs flex">
      {modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Add a task"
          onConfirm={createNewTaskHandler}
        />
      )}
      {isAuthenticated ? (
        <>
          <Header />
          <Menu />
          <div className={`${menuHeaderOpened ? 'lg:ml-[270px] xl:ml-[300px]' : 'ml-0'} flex-grow`}>
            <TasksSection />
          </div>
          <AccountData />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
