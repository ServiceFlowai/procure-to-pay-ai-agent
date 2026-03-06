import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password') {
      navigate('/orders');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;