import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameOption from './GameOption'; // Imported game options component

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
    { question: "How do I earn points?", answer: "You earn points by winning matches and completing daily tasks." },
    { question: "Can I redeem points for rewards?", answer: "Yes! Points can be redeemed for in-game items and skins." },
    { question: "What happens if I lose a match?", answer: "Losing won’t reduce your points, but it won’t increase them either." },
    { question: "How do I refer friends?", answer: "Use your unique referral link to invite friends and earn extra points." },
    { question: "Where can I find more help?", answer: "Visit our Help Center or contact support through the in-game chat." }
  ];

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen p-8">
      {/* Profile Section */}
      <div className="flex items-center mb-8 gap-6">
    <div className="relative group">
      <img
        src="https://photosvibe.in/wp-content/uploads/cute-girl-pic47.jpg"
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-transparent 
          bg-gradient-to-r from-pink-500 to-blue-400 p-1 
          object-cover transform transition duration-500 ease-in-out 
          hover:rotate-12 group-hover:scale-110"
      />
      <span className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-gray-900"></span>
    </div>

    <div className="ml-2">
      <h2 className="text-3xl font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500 
        animate-pulse">
        Player123
      </h2>
      <p className="text-lg text-gray-400">
        ID: <span className="animate-slide-left">#56789</span>
      </p>
    </div>
  </div>

      {/* Main Heading with Neon Glow */}
      <h1 className="text-5xl font-semibold text-center mb-8 neon-text glow-effect font-serif">
        🎮 Player Dashboard 🎮
      </h1>

      {/* Points Summary Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center glow-effect">
          💰 Points Summary 💰
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Last Points Earned', value: playerStats.lastPointsEarned, emoji: '✨' },
            { label: 'Total Points Earned', value: playerStats.totalPointsEarned, emoji: '🏆' },
            { label: 'Total Withdrawal', value: playerStats.withdrawal, emoji: '📤' },
            { label: 'Total Deposit', value: playerStats.deposit, emoji: '📥' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40"
            >
              <p className="text-xl font-semibold mb-2">
                {stat.emoji} {stat.label}
              </p>
              <p className="text-3xl neon-text">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Player Statistics Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center glow-effect">
          📊 Player Statistics 📊
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'Total Matches Played', value: playerStats.totalMatches, emoji: '🎲' },
            { label: 'Total Wins', value: playerStats.wins, emoji: '🏅' },
            { label: 'Total Kills', value: playerStats.kills, emoji: '🔫' },
            { label: 'Total Time Spent', value: playerStats.timeSpent, emoji: '⏱️' },
            { label: 'Referred Friends', value: playerStats.referralCount, emoji: '👥' },
            {
              label: 'Referral Link',
              value: (
                <a
                  href={referralLink}
                  className="text-blue-220 hover:underline break-all hover:scale-105"
                >
                  {referralLink}
                </a>
              ),
              emoji: '🔗',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40"
            >
              <p className="text-xl font-semibold mb-2">
                {stat.emoji} {stat.label}
              </p>
              <p className="text-3xl neon-text">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Game Options Component */}
      <GameOption />

      {/* FAQ Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center glow-effect">
          ❓ Help / FAQ ❓
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 shadow-md">
              <button
                className="w-full text-left text-xl font-semibold focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="float-right">
                  {faqOpen === index ? '▲' : '▼'}
                </span>
              </button>
              {faqOpen === index && (
                <p className="mt-2 text-lg text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Logout Link */}
      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-400 hover:underline text-lg">
          🚪 Logout
        </Link>
      </div>
    </div>
  );
};

export default PlayerDashboard;
