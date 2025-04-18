// src/components/Login.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/authSlice';
import { RootState } from '../redux/store';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const error = useSelector((state: RootState) => state.auth.error);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      dispatch(loginRequest({ username, password }));
    }
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
