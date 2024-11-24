import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/Auth.store';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    // Simulate login process
    dispatch(login());
  };

  return (
    <div className="flex flex-col items-center h-[calc(100vh-70px)] justify-center w-screen h-screen overflow-hidden">
      <h1 className="text-2xl mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="btn h-12"
      >
        Login
      </button>
    </div>



  );
};

export default Login;
