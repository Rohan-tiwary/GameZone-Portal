// src/components/GameOptions.jsx
import React, { useState } from 'react';

const GameOptions = () => {
  const [selectedMap, setSelectedMap] = useState('');
  const [playMode, setPlayMode] = useState('');
  const [tournamentCode, setTournamentCode] = useState('');

  const maps = ['India', 'Indonesia'];

  const handleMapChange = (e) => {
    setSelectedMap(e.target.value);
  };

  const handleModeChange = (e) => {
    setPlayMode(e.target.value);
  };

  const generateTournamentCode = () => {
    const code = Math.random().toString(36).substr(2, 6).toUpperCase(); // Generate a random 6-character code
    setTournamentCode(code);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-black to-gray-900 p-10 flex items-center justify-center">
      <div className="w-full max-w-xl p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl border border-purple-500">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 text-center tracking-wide">
          🎮 Game Options 🎮
        </h2>

        {/* Map Selection */}
        <div className="mb-6">
          <label className="text-white mb-2 block text-lg">🌍 Select Map:</label>
          <select
            value={selectedMap}
            onChange={handleMapChange}
            className="w-full p-3 rounded-lg bg-purple-700 text-white text-lg shadow-md hover:bg-purple-600 transition"
          >
            <option value="" disabled>Select a map</option>
            {maps.map((map) => (
              <option key={map} value={map}>
                {map}
              </option>
            ))}
          </select>
        </div>

        {/* Play Mode Selection */}
        <div className="mb-6">
          <label className="text-white mb-2 block text-lg">🎯 Select Play Mode:</label>
          <div className="flex flex-col gap-3">
            <label className="flex items-center text-white text-lg">
              <input
                type="radio"
                value="Free Play"
                checked={playMode === 'Free Play'}
                onChange={handleModeChange}
                className="mr-2 accent-pink-500"
              />
              Free playing without any points
            </label>
            <label className="flex items-center text-white text-lg">
              <input
                type="radio"
                value="Random Join"
                checked={playMode === 'Random Join'}
                onChange={handleModeChange}
                className="mr-2 accent-green-500"
              />
              Random join with points
            </label>
            <label className="flex items-center text-white text-lg">
              <input
                type="radio"
                value="Team Play"
                checked={playMode === 'Team Play'}
                onChange={handleModeChange}
                className="mr-2 accent-blue-500"
              />
              Team play with points (10 players each)
            </label>
          </div>
        </div>

        {/* Tournament Code Generation */}
        <div className="mb-6">
          <label className="text-white mb-2 block text-lg">🏆 Generate Tournament Code:</label>
          <button
            onClick={generateTournamentCode}
            className="w-full py-3 bg-pink-600 text-white text-lg font-bold rounded-lg hover:bg-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Create Code
          </button>
          {tournamentCode && (
            <div className="mt-4 text-center text-green-400 text-xl">
              <strong>Tournament Code:</strong> {tournamentCode}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameOptions;
