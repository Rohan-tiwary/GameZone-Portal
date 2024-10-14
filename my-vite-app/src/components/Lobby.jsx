// src/components/Lobby.jsx
import React, { useState } from 'react';

const Lobby = () => {
  const [points, setPoints] = useState(1000); // Example starting points

  // Function to handle buying points
  const buyPoints = (amount) => {
    // Logic for purchasing points (simulate purchase)
    setPoints(points + amount);
    alert(`You have purchased ${amount} points!`);
  };
  const loadPointsFromStore = (amount) => {
    setPoints(points + amount);
    alert(`You have loaded ${amount} points!`);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-8">Lobby</h1>
      <p className="text-2xl mb-4">Your Points: {points}</p>

      <div className="flex space-x-4">
        <button
          onClick={() => buyPoints(100)} // Example: buy 100 points
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Buy Points (100)
        </button>
        <button
          onClick={() => loadPointsFromStore(50)} // Example: load 50 points
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Load Points (50)
        </button>
      </div>
    </div>
  );
};

export default Lobby;
