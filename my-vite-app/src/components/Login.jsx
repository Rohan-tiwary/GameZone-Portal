// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate API call to validate user credentials
    const response = await fakeApiLogin(userId, password);
    
    if (response.success) {
      alert('Login successful');
      navigate('/player-dashboard'); // Redirect to Player Dashboard
    } else {
      alert(response.message);
    }
  };

  // Fake API function to simulate login
  const fakeApiLogin = async (userId, password) => {
    // Replace this with a real API call later
    const validCredentials = {
      userId: 'player1',
      password: 'password123',
    };

    if (userId === validCredentials.userId && password === validCredentials.password) {
      return { success: true };
    } else {
      return { success: false, message: 'Invalid User ID or Password' };
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Player Login Hub</h1>

        {/* Username Field */}
        <div className="mb-6 flex items-center">
          <label htmlFor="userId" className="text-white mr-2">Username:</label>
          <input
            type="text"
            id="userId"
            placeholder="Enter your User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border border-gray-600 p-2 rounded-md w-full bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-8 flex items-center">
          <label htmlFor="password" className="text-white mr-2">Password:</label>
          <input 
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-600 p-2 rounded-md w-full bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
