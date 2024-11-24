import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import BtnAddTask from "../Utilities/BtnAddTask";
import Directories from "./Directories/Directories";
import NavLinks from "./NavLinks";
import LayoutMenus from "../Utilities/LayoutMenus";
import Logout from '../Auth/Logout';
import avatar1 from "../../assets/avatar-1.jpg";
const classLinkActive =
  "text-rose-600 bg-violet-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

const Menu: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuHeaderOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };
  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="left-0"
    >
      <header className="dark:bg-[#232323] h-full flex flex-col items-center w-full px-4">
        <img src={avatar1} alt="Profile" className="w-24 h-24 rounded-full mt-8" />
        <span className="mt-4 mb-4 text-slate-600 dark:text-slate-200">User Name</span>
        <div className="flex flex-col items-center">
          <NavLinks classActive={classLinkActive} />
          <Directories classActive={classLinkActive} /> 
          <Logout />
        </div>
      </header>
    </LayoutMenus>
  );  
};

export default Menu;
