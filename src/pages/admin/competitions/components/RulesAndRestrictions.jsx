import React, { useState } from 'react';

const RulesAndRestrictions = () => {
  const [formData, setFormData] = useState({
    competitionRules: '',
    winnerSelectionMethod: 'Random + FE Method',
    totalWinners: '5',
    minimumAge: '18+',
    firstEntryWinners: '4',
    randomWinners: '1',
    geographicRestrictions: 'UK',
    enableSkillQuestion: true,
    skillQuestion: 'What is the capital of UK',
    correctAnswer: 'London',
    enableFreeEntry: true,
    freeEntryInstructions: 'Send a handwritten letter to: 194 Harrington Road, Workington, Cumbria CA14 3UJ'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="mt-8">
      <div 
        className="rounded-2xl p-8"
        style={{
          background: 'linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Section Title */}
        <h2 className="text-white text-xl font-Orbitron font-semibold mb-8">
          Rules and Restrictions
        </h2>

        {/* Competition Rules */}
        <div className="mb-6">
          <label className="text-white font-Oxanium text-sm mb-2 block">
            Competition Rules <span className="text-red-500">*</span>
          </label>
          <textarea
            name="competitionRules"
            value={formData.competitionRules}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors resize-none"
            style={{
              background: '#000000',
              border: '0.5px solid rgba(0, 255, 255, 0.25)',
              boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
            }}
          />
          <p className="text-gray-500 font-Oxanium text-xs mt-2">
            Terms and conditions for the competition
          </p>
        </div>

        {/* Winner Selection Method, Total Winners, Minimum Age */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Winner Selection Method */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              Winner Selection Method <span className="text-red-500">*</span>
            </label>
            <select
              name="winnerSelectionMethod"
              value={formData.winnerSelectionMethod}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium focus:outline-none transition-colors appearance-none cursor-pointer"
              style={{
                background: '#000000',
                border: '0.5px solid rgba(0, 255, 255, 0.25)',
                boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
              }}
            >
              <option value="Random + FE Method">Random + FE Method</option>
              <option value="Random Only">Random Only</option>
              <option value="First Entry Only">First Entry Only</option>
            </select>
            <p className="text-gray-500 font-Oxanium text-xs mt-2">
              Method of winner selection
            </p>
          </div>

          {/* Total Winners */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              Total Winners <span className="text-red-500">*</span>
            </label>
            <select
              name="totalWinners"
              value={formData.totalWinners}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium focus:outline-none transition-colors appearance-none cursor-pointer"
              style={{
                background: '#000000',
                border: '0.5px solid rgba(0, 255, 255, 0.25)',
                boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          {/* Minimum Age */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              Minimum Age <span className="text-red-500">*</span>
            </label>
            <select
              name="minimumAge"
              value={formData.minimumAge}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium focus:outline-none transition-colors appearance-none cursor-pointer"
              style={{
                background: '#000000',
                border: '0.5px solid rgba(0, 255, 255, 0.25)',
                boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
              }}
            >
              <option value="18+">18+</option>
              <option value="21+">21+</option>
              <option value="16+">16+</option>
            </select>
            <p className="text-gray-500 font-Oxanium text-xs mt-2">
              Age required to participate in draw
            </p>
          </div>
        </div>

        {/* First Entry Winners and Random Winners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Entry Winners */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              First Entry Winners <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              <span className="text-white font-Oxanium text-base">First</span>
              <input
                type="number"
                name="firstEntryWinners"
                value={formData.firstEntryWinners}
                onChange={handleChange}
                className="flex-1 rounded-lg px-4 py-3 text-gray-300 font-Oxanium focus:outline-none transition-colors"
                style={{
                  background: '#000000',
                  border: '0.5px solid rgba(0, 255, 255, 0.25)',
                  boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                }}
              />
            </div>
          </div>

          {/* Random Winners (Auto Select) */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              Random Winners (Auto Select) <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              <span className="text-white font-Oxanium text-base">Entry</span>
              <input
                type="number"
                name="randomWinners"
                value={formData.randomWinners}
                onChange={handleChange}
                className="flex-1 rounded-lg px-4 py-3 text-gray-300 font-Oxanium focus:outline-none transition-colors"
                style={{
                  background: '#000000',
                  border: '0.5px solid rgba(0, 255, 255, 0.25)',
                  boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Geographic Restrictions */}
        <div className="mb-8">
          <label className="text-white font-Oxanium text-sm mb-2 block">
            Geographic Restrictions <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="geographicRestrictions"
            value={formData.geographicRestrictions}
            onChange={handleChange}
            placeholder="UK"
            className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
            style={{
              background: '#000000',
              border: '0.5px solid rgba(0, 255, 255, 0.25)',
              boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
            }}
          />
          <p className="text-gray-500 font-Oxanium text-xs mt-2">
            Geographic eligibility requirements
          </p>
        </div>

        {/* Compliance Settings */}
        <div className="pt-6 border-t border-gray-700/50">
          <h3 className="text-white text-lg font-Orbitron font-semibold mb-6">
            Compliance Settings
          </h3>

          {/* Enable Skill Question */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="enableSkillQuestion"
                checked={formData.enableSkillQuestion}
                onChange={handleChange}
                className="w-5 h-5 mt-0.5 rounded cursor-pointer"
                style={{
                  accentColor: '#00FFFF'
                }}
              />
              <div>
                <span className="text-white font-Oxanium font-semibold text-base block">
                  Enable Skill Question
                </span>
                <span className="text-gray-400 font-Oxanium text-sm">
                  Required for paid competitions
                </span>
              </div>
            </label>
          </div>

          {/* Skill Question and Correct Answer */}
          {formData.enableSkillQuestion && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Skill Question */}
              <div>
                <label className="text-white font-Oxanium text-sm mb-2 block">
                  Skill Question <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="skillQuestion"
                  value={formData.skillQuestion}
                  onChange={handleChange}
                  placeholder="What is the capital of UK"
                  className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
                  style={{
                    background: '#000000',
                    border: '0.5px solid rgba(0, 255, 255, 0.25)',
                    boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                  }}
                />
              </div>

              {/* Correct Answer */}
              <div>
                <label className="text-white font-Oxanium text-sm mb-2 block">
                  Correct Answer <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="correctAnswer"
                  value={formData.correctAnswer}
                  onChange={handleChange}
                  placeholder="London"
                  className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
                  style={{
                    background: '#000000',
                    border: '0.5px solid rgba(0, 255, 255, 0.25)',
                    boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                  }}
                />
              </div>
            </div>
          )}

          {/* Enable Free Entry Route */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="enableFreeEntry"
                checked={formData.enableFreeEntry}
                onChange={handleChange}
                className="w-5 h-5 mt-0.5 rounded cursor-pointer"
                style={{
                  accentColor: '#00FFFF'
                }}
              />
              <div>
                <span className="text-white font-Oxanium font-semibold text-base block">
                  Enable Free Entry Route
                </span>
                <span className="text-gray-400 font-Oxanium text-sm">
                  Postal entry option for compliance
                </span>
              </div>
            </label>
          </div>

          {/* Free Entry Instructions */}
          {formData.enableFreeEntry && (
            <div>
              <label className="text-white font-Oxanium text-sm mb-2 block">
                Free Entry Instructions <span className="text-red-500">*</span>
              </label>
              <textarea
                name="freeEntryInstructions"
                value={formData.freeEntryInstructions}
                onChange={handleChange}
                rows={3}
                placeholder="Send a handwritten letter to: 194 Harrington Road, Workington, Cumbria CA14 3UJ"
                className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors resize-none"
                style={{
                  background: '#000000',
                  border: '0.5px solid rgba(0, 255, 255, 0.25)',
                  boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RulesAndRestrictions;