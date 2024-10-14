import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import PlayerDashboard from './components/PlayerDashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/player-dashboard" element={<PlayerDashboard />} />
    </Routes>
  );
};

export default App;
