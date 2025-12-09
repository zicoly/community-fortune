import React, { useState } from 'react';

const AchievementSettings = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: 'E.g. Ticket Collector',
      description: 'E.g. Purchase 25 tickets in this competition',
      type: 'Purchase X Tickets',
      conditionValue: 'E.g. 50 (tickets) or 25.00 (amount)',
      pointsAwarded: 'E.g. 200',
      image: null
    }
  ]);

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      {
        id: Date.now(),
        title: '',
        description: '',
        type: 'Purchase X Tickets',
        conditionValue: '',
        pointsAwarded: '',
        image: null
      }
    ]);
  };

  const removeAchievement = (id) => {
    setAchievements(achievements.filter(achievement => achievement.id !== id));
  };

  const handleChange = (id, field, value) => {
    setAchievements(achievements.map(achievement => 
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    ));
  };

  const handleImageUpload = (id, file) => {
    if (file) {
      setAchievements(achievements.map(achievement => 
        achievement.id === id ? { ...achievement, image: file } : achievement
      ));
    }
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
        <h2 className="text-white text-xl font-Orbitron font-semibold mb-2">
          Achievement Settings
        </h2>

        {/* Subtitle */}
        <div className="mb-8">
          <h3 className="text-white font-Orbitron font-semibold text-base mb-1">
            Competition Achievements
          </h3>
          <p className="text-gray-400 font-Oxanium text-sm">
            {achievements.length} Created
          </p>
        </div>

        {/* Achievements List */}
        {achievements.map((achievement, index) => (
          <div key={achievement.id} className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="text-white font-Oxanium text-sm mb-2 block">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={achievement.title}
                    onChange={(e) => handleChange(achievement.id, 'title', e.target.value)}
                    placeholder="E.g. Ticket Collector"
                    className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none"
                    style={{
                      background: '#000000',
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="text-white font-Oxanium text-sm mb-2 block">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={achievement.description}
                    onChange={(e) => handleChange(achievement.id, 'description', e.target.value)}
                    placeholder="E.g. Purchase 25 tickets in this competition"
                    rows={4}
                    className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none resize-none"
                    style={{
                      background: '#000000',
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                  />
                </div>

                {/* Type, Condition Value, Points Awarded */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Type */}
                  <div>
                    <label className="text-white font-Oxanium text-sm mb-2 block">
                      Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={achievement.type}
                      onChange={(e) => handleChange(achievement.id, 'type', e.target.value)}
                      className="w-full rounded-lg px-3 py-3 text-gray-300 font-Oxanium focus:outline-none appearance-none cursor-pointer"
                      style={{
                        background: '#000000',
                        border: '0.5px solid rgba(0, 255, 255, 0.25)',
                        boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                      }}
                    >
                      <option value="Purchase X Tickets">Purchase X Tickets</option>
                      <option value="Spend X Amount">Spend X Amount</option>
                      <option value="First Purchase">First Purchase</option>
                      <option value="Highest/Lowest Ticket">Highest/Lowest Ticket</option>
                      <option value="Sequential Tickets">Sequential Tickets</option>
                      <option value="Most Instant Wins">Most Instant Wins</option>
                    </select>
                  </div>

                  {/* Condition Value */}
                  <div>
                    <label className="text-white font-Oxanium text-sm mb-2 block">
                      Condition Value <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={achievement.conditionValue}
                      onChange={(e) => handleChange(achievement.id, 'conditionValue', e.target.value)}
                      placeholder="E.g. 50 (tickets) or 25.00 (amount)"
                      className="w-full rounded-lg px-3 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none text-xs"
                      style={{
                        background: '#000000',
                        border: '0.5px solid rgba(0, 255, 255, 0.25)',
                        boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  {/* Points Awarded */}
                  <div>
                    <label className="text-white font-Oxanium text-sm mb-2 block">
                      Points Awarded <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={achievement.pointsAwarded}
                      onChange={(e) => handleChange(achievement.id, 'pointsAwarded', e.target.value)}
                      placeholder="E.g. 200"
                      className="w-full rounded-lg px-3 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none"
                      style={{
                        background: '#000000',
                        border: '0.5px solid rgba(0, 255, 255, 0.25)',
                        boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Image Upload */}
              <div>
                <label className="text-white font-Oxanium text-sm mb-2 block">
                  Achievement Image <span className="text-red-500">*</span>
                </label>
                <label className="cursor-pointer block h-full">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(achievement.id, e.target.files[0])}
                    className="hidden"
                  />
                  <div 
                    className="rounded-xl p-12 text-center transition-all hover:border-cyan-500 flex flex-col items-center justify-center h-full min-h-[200px]"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '2px dashed rgba(0, 255, 255, 0.3)'
                    }}
                  >
                    <svg className="w-16 h-16 text-cyan-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-white font-Oxanium font-semibold text-base">
                      Upload an image
                    </p>
                    {achievement.image && (
                      <p className="text-gray-400 font-Oxanium text-xs mt-2">
                        {achievement.image.name}
                      </p>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Type Explanations */}
            <div 
              className="rounded-xl p-6 mb-6"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(0, 255, 255, 0.2)'
              }}
            >
              <h4 className="text-white font-Orbitron font-semibold text-base mb-4">
                Type Explanations
              </h4>
              <ul className="space-y-2 text-gray-300 font-Oxanium text-sm">
                <li>
                  <span className="text-white font-semibold">Purchase X Tickets:</span> Unlocks when user purchases the specified number of tickets for this competition
                </li>
                <li>
                  <span className="text-white font-semibold">Spend X Amount:</span> Unlocks when user spends the specified amount on this competition
                </li>
                <li>
                  <span className="text-white font-semibold">First Purchase:</span> Unlocks on user's first purchase for this competition (no value needed)
                </li>
                <li>
                  <span className="text-white font-semibold">Highest/Lowest Ticket:</span> Unlocks if user gets the highest or lowest ticket number (no value needed)
                </li>
                <li>
                  <span className="text-white font-semibold">Sequential Tickets:</span> Unlocks when user gets the specified number of consecutive ticket numbers
                </li>
                <li>
                  <span className="text-white font-semibold">Most Instant Wins:</span> Unlocks when user gets the specified number of instant wins
                </li>
              </ul>
            </div>

            {/* Remove Achievement Button */}
            <button
              onClick={() => removeAchievement(achievement.id)}
              className="flex items-center gap-2 px-6 py-2 rounded-lg font-Orbitron font-bold text-sm transition-all hover:scale-105 mb-6"
              style={{
                background: 'linear-gradient(90deg, #FF0000 0%, #8B0000 100%)',
                color: 'white',
                boxShadow: '0px 4px 12px rgba(255, 0, 0, 0.3)'
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove Achievement
            </button>

            {/* Divider */}
            {achievements.length > 1 && index !== achievements.length - 1 && (
              <div className="border-t border-gray-700/50 pt-8"></div>
            )}
          </div>
        ))}

        {/* Add Achievement Button */}
        <button
          onClick={addAchievement}
          className="flex items-center gap-2 px-8 py-3 rounded-lg font-Orbitron font-bold text-sm transition-all hover:scale-105 mb-8"
          style={{
            background: 'linear-gradient(135deg, #008000 0%, #002B00 100%)',
            color: 'white',
            boxShadow: '0px 4px 24px rgba(0, 255, 0, 0.3)'
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Achievement
        </button>

        {/* Tips for Creating Achievements */}
        <div 
          className="rounded-xl p-6"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(0, 255, 255, 0.2)'
          }}
        >
          <h4 className="text-white font-Orbitron font-semibold text-base mb-4">
            Tips for Creating Achievements
          </h4>
          <ul className="space-y-2 text-gray-300 font-Oxanium text-sm">
            <li>
              <span className="text-white font-semibold">Keep titles short:</span> They display in a small grid format
            </li>
            <li>
              <span className="text-white font-semibold">Use clear descriptions:</span> Help users understand how to unlock the achievement
            </li>
            <li>
              <span className="text-white font-semibold">Upload custom images:</span> Make achievements more engaging with unique visuals
            </li>
            <li>
              <span className="text-white font-semibold">Balance point values:</span> Consider the difficulty when setting points (easier = 50-150, harder = 200-500)
            </li>
            <li>
              <span className="text-white font-semibold">Test your logic:</span> Create text purchases to verify achievements unlock correctly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AchievementSettings;