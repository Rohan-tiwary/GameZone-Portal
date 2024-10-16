// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fakeApiLogin(userId, password);

    if (response.success) {
      setNotification({ message: '🎉 Login Successful! Redirecting...', type: 'success' });
      setTimeout(() => navigate('/player-dashboard'), 2000); // Redirect after 2 seconds
    } else {
      setNotification({ message: '❌ Invalid User ID or Password', type: 'error' });
    }

    // Clear notification after 3 seconds
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  const fakeApiLogin = async (userId, password) => {
    const validCredentials = {
      userId: '2202143',
      password: 'tiwary14',
    };

    return userId === validCredentials.userId && password === validCredentials.password
      ? { success: true }
      : { success: false };
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 via-black to-indigo-900 relative">
      <form
        onSubmit={handleSubmit}
        className="bg-black/60 p-12 rounded-lg shadow-2xl w-96 transform transition-transform hover:scale-110 hover:rotate-2 duration-300"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 text-center mb-10 animate-pulse">
          Player Login Hub
        </h1>

        {/* Username Field */}
        <div className="mb-8">
          <label htmlFor="userId" className="text-lg text-cyan-300 mb-2 block">
            Username:
          </label>
          <input
            type="text"
            id="userId"
            placeholder="Enter your User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-md"
          />
        </div>

        {/* Password Field */}
        <div className="mb-8">
          <label htmlFor="password" className="text-lg text-cyan-300 mb-2 block">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg text-lg font-bold text-white bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-600 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          LET'S GO!
        </button>
      </form>

      {/* Notification at Bottom */}
      {notification.message && (
        <div
          className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white text-center text-lg font-bold transition-all duration-500 ease-in-out ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Welcome Text at Top */}
      <div className="absolute top-10 text-white text-xl font-mono animate-bounce">
        <p>🔥 Welcome to the Ultimate Gaming Hub! 🔥</p>
      </div>
    </div>
  );
};

export default Login;
