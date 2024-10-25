// src/components/PlayerDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameOption from './GameOption'; // Game options component
import Lobby from './Lobby';
import {
  FaMedal, FaGamepad, FaWallet, FaClock, 
  FaLink, FaUserFriends, FaPowerOff 
} from 'react-icons/fa';
import { GiPistolGun, GiTrophyCup, GiMatchHead } from 'react-icons/gi';

const PlayerDashboard = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const playerStats = {
    lastPointsEarned: 200,
    totalPointsEarned: 1500,
    withdrawal: 300,
    deposit: 500,
    kills: 25,
    wins: 10,
    totalMatches: 50,
    timeSpent: '2h 45m',
    referralCount: 12,
  };

  const referralLink = "https://example.com/referral?code=12345";

  const faqs = [
    { question: "How do I earn points?", answer: "Earn points by winning matches and completing daily tasks." },
    { question: "Can I redeem points?", answer: "Yes! Points can be redeemed for in-game items and skins." },
    { question: "What if I lose a match?", answer: "Losing won’t reduce points, but it won’t increase them either." },
    { question: "How to refer friends?", answer: "Use your referral link to invite friends and earn points." },
    { question: "Need more help?", answer: "Visit the Help Center or contact support in-game." },
  ];

  const toggleFaq = (index) => setFaqOpen(faqOpen === index ? null : index);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white min-h-screen p-4 md:p-8 font-mono select-none">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center mb-10 gap-6">
        <div className="relative group">
          <img
            src="https://photosvibe.in/wp-content/uploads/cute-girl-pic47.jpg"
            alt="Profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 to-purple-600 object-cover 
              transition-transform duration-500 hover:scale-110 hover:rotate-12 shadow-lg"
          />
          <span className="absolute -bottom-1 -right-1 w-4 h-4 md:w-6 md:h-6 rounded-full bg-green-500 border-2 border-gray-900 animate-pulse"></span>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-glow">
            Player123
          </h2>
          <p className="text-md md:text-lg text-gray-400 tracking-wide">
            ID: <span className="text-yellow-400">#56789</span>
          </p>
        </div>
      </div>

      {/* Dashboard Heading */}
      <h1 className="text-4xl md:text-6xl text-center mb-8 tracking-wider neon-text">
        🎮 Player Dashboard 🎮
      </h1>

      {/* Points Summary */}
      <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg mb-10 border border-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          💰 Points Summary 💰
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: 'Last Points Earned', value: playerStats.lastPointsEarned, Icon: FaMedal },
            { label: 'Total Points Earned', value: playerStats.totalPointsEarned, Icon: GiTrophyCup },
            { label: 'Total Withdrawal', value: playerStats.withdrawal, Icon: FaWallet },
            { label: 'Total Deposit', value: playerStats.deposit, Icon: FaGamepad },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
              <stat.Icon className="text-3xl md:text-4xl text-blue-400 mb-2 mx-auto" />
              <p className="text-lg md:text-xl font-semibold mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl text-yellow-400">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Player Stats */}
      <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">📊 Player Stats 📊</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: 'Total Matches', value: playerStats.totalMatches, Icon: GiMatchHead },
            { label: 'Total Wins', value: playerStats.wins, Icon: GiTrophyCup },
            { label: 'Total Kills', value: playerStats.kills, Icon: GiPistolGun },
            { label: 'Time Spent', value: playerStats.timeSpent, Icon: FaClock },
            { label: 'Referred Friends', value: playerStats.referralCount, Icon: FaUserFriends },
            { label: 'Referral Link', value: referralLink, Icon: FaLink },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md text-center hover:scale-105 transition-all duration-300">
              <stat.Icon className="text-3xl md:text-4xl text-red-400 mb-2 mx-auto" />
              <p className="text-lg md:text-xl font-semibold mb-1">{stat.label}</p>
              {stat.label === 'Referral Link' ? (
                <a href={referralLink} className="text-blue-300 hover:underline break-all">
                  {referralLink}
                </a>
              ) : (
                <p className="text-2xl md:text-3xl text-yellow-400">{stat.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Game Options and Lobby */}
      <GameOption />
      <Lobby />

      {/* FAQ Section */}
      <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">❓ FAQ ❓</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <button className="w-full text-left text-lg md:text-xl font-semibold" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className="float-right">{faqOpen === index ? '▲' : '▼'}</span>
              </button>
              {faqOpen === index && <p className="mt-2 text-sm md:text-lg text-gray-300">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-8 text-center">
        <Link to="/" className="text-red-400 hover:underline text-lg flex items-center justify-center gap-2">
          <FaPowerOff /> Logout
        </Link>
      </div>
    </div>
  );
};

export default PlayerDashboard;

