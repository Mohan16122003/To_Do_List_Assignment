import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { menusActions } from '../../store/Menu.store';
import { ReactComponent as MenuIconLight } from '../../assets/mainmenu.svg';
import { ReactComponent as MenuIconDark } from '../../assets/menuwhite.svg';
import { ReactComponent as AppLogo } from '../../assets/logomark.svg';
import { ReactComponent as ViewIcon } from '../../assets/app-grid.svg';
import { ReactComponent as LightThemeIcon } from '../../assets/ph_sun.svg';
import { ReactComponent as DarkThemeIcon } from '../../assets/ri_moon-clear-line.svg';
import SearchField from '../TasksSection/SearchField';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const menuHeaderOpened = useAppSelector((state) => state.menu.menuHeaderOpened);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleMenu = () => {
    if (menuHeaderOpened) {
      dispatch(menusActions.closeMenuHeader());
    } else {
      dispatch(menusActions.openMenuHeader());
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white dark:bg-[#232323] shadow-md z-10 p-4 flex justify-between items-center`}>
      <button onClick={toggleMenu} className="menu-button flex items-center">
        <div className="flex items-center space-x-4">
          {theme === 'light' ? <MenuIconLight className="w-4 h-4 mr-1" /> : <MenuIconDark className="w-4 h-4 mr-1" />}
          <AppLogo className="w-8 h-8 mr-2" />
          <span className="font-bold text-lg font-sen">DoIt</span>
        </div>
      </button>
      <div className="flex items-center space-x-4">
        <SearchField />
        
        <button title="Toggle Theme" onClick={toggleTheme}>
          {theme === 'light' ? <DarkThemeIcon className="w-6 h-6" /> : <LightThemeIcon className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;