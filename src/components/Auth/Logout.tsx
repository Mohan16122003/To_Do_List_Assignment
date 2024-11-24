import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/Auth.store';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    // Simulate logout process
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      className="btn flex items-center w-full h-10"
    >
      Logout
    </button>
  );
};

export default Logout;
