import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import AllTasksIcon from '../../assets/menu copy.svg';
import TodayTasksIcon from '../../assets/calendar.svg';
import ImportantTasksIcon from '../../assets/clock2.svg';
import CompletedTasksIcon from '../../assets/clock.svg';
import UncompletedTasksIcon from '../../assets/iwwa_assign.svg';

const links = [
  {
    name: "All tasks",
    path: "/",
    icon: <img src={AllTasksIcon} alt="All tasks" className="w-6 h-6" />,
  },
  {
    name: "Today's tasks",
    path: "/today",
    icon: <img src={TodayTasksIcon} alt="Today's tasks" className="w-6 h-6" />,
  },
  {
    name: "Important tasks",
    path: "/important",
    icon: <img src={ImportantTasksIcon} alt="Important tasks" className="w-6 h-6" />,
  },
  {
    name: "Completed tasks",
    path: "/completed",
    icon: <img src={CompletedTasksIcon} alt="Completed tasks" className="w-6 h-6" />,
  },
  {
    name: "Uncompleted tasks",
    path: "/uncompleted",
    icon: <img src={UncompletedTasksIcon} alt="Uncompleted tasks" className="w-6 h-6" />,
  },
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <div className="bg-white dark:bg-[#2C2C2C] shadow-md rounded-md p-4">
        <ul className="grid gap-1">
          {links.map((link) => (
            <li key={link.path} className="flex items-center">
              <NavLink
                to={link.path}
                className={`flex items-center px-8 py-2 w-full block transition hover:text-[#357937] dark:hover:text-slate-200 ${
                  currentPath === link.path ? `${classActive} bg-[#35793729] text-[#357937] rounded-lg` : ""
                }`}
              >
                {React.cloneElement(link.icon, {
                  className: `${link.icon.props.className} ${currentPath === link.path ? 'text-[#357937]' : ''} ${document.documentElement.classList.contains('dark') ? 'text-white' : ''}`
                })}
                <span className="ml-2">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
