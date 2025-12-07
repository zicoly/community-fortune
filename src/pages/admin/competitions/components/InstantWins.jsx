import React, { useState } from 'react';

const InstantWins = () => {
  const [instantWins, setInstantWins] = useState([
    {
      id: 1,
      prizeName: '',
      winnerSelectionMethod: 'First Entry',
      prize: '',
      payoutType: 'Cash',
      image: null,
      maxWinners: '5',
      ticketNumbers: '24, 56, 78, 90',
      claimed: '',
      firstWinners: '5',
      entryWinners: ''
    }
  ]);

  const addInstantWin = () => {
    setInstantWins([
      ...instantWins,
      {
        id: Date.now(),
        prizeName: '',
        winnerSelectionMethod: 'First Entry',
        prize: '',
        payoutType: 'Cash',
        image: null,
        maxWinners: '5',
        ticketNumbers: '',
        claimed: '',
        firstWinners: '5',
        entryWinners: ''
      }
    ]);
  };

  const deleteInstantWin = (id) => {
    setInstantWins(instantWins.filter(win => win.id !== id));
  };

  const handleChange = (id, field, value) => {
    setInstantWins(instantWins.map(win => 
      win.id === id ? { ...win, [field]: value } : win
    ));
  };

  const handleImageUpload = (id, file) => {
    if (file) {
      setInstantWins(instantWins.map(win => 
        win.id === id ? { ...win, image: file } : win
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
        <h2 className="text-white text-xl font-Orbitron font-semibold mb-8">
          Instant Wins
        </h2>

        {/* Table Header */}
        <div className="mb-6 overflow-x-auto">
          <div className="min-w-[1200px]">
            <div className="grid grid-cols-9 gap-4 mb-4 pb-4 border-b border-gray-700/50">
              <div className="text-white font-Oxanium text-sm font-semibold">Prize Name</div>
              <div className="text-white font-Oxanium text-sm font-semibold">Winner's Selection Method</div>
              <div className="text-white font-Oxanium text-sm font-semibold">Prize</div>
              <div className="text-white font-Oxanium text-sm font-semibold">Payout Type</div>
              <div className="text-white font-Oxanium text-sm font-semibold">Image</div>
              <div className="text-white font-Oxanium text-sm font-semibold">Max Winners</div>
              <div className="text-white font-Oxanium text-sm font-semibold">Ticket Numbers (Auto-Generated)</div>
              <div className="text-white font-Oxanium text-sm font-semibold">Claimed (Auto Generated)</div>
              <div></div>
            </div>

            {/* Instant Win Rows */}
            {instantWins.map((win) => (
              <div key={win.id} className="mb-8">
                <div className="grid grid-cols-9 gap-4 mb-4">
                  {/* Prize Name */}
                  <input
                    type="text"
                    value={win.prizeName}
                    onChange={(e) => handleChange(win.id, 'prizeName', e.target.value)}
                    className="rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none"
                    style={{
                      background: '#000000',
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                  />

                  {/* Winner Selection Method */}
                  <select
                    value={win.winnerSelectionMethod}
                    onChange={(e) => handleChange(win.id, 'winnerSelectionMethod', e.target.value)}
                    className="rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none appearance-none cursor-pointer"
                    style={{
                      background: '#000000',
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                  >
                    <option value="First Entry">First Entry</option>
                    <option value="Random">Random</option>
                    <option value="Last Entry">Last Entry</option>
                  </select>

                  {/* Prize */}
                  <input
                    type="text"
                    value={win.prize}
                    onChange={(e) => handleChange(win.id, 'prize', e.target.value)}
                    className="rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none"
                    style={{
                      background: '#000000',
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                  />

                  {/* Payout Type */}
                  <select
                    value={win.payoutType}
                    onChange={(e) => handleChange(win.id, 'payoutType', e.target.value)}
                    className="rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none appearance-none cursor-pointer"
                    style={{
                      background: '#000000',
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                  >
                    <option value="Cash">Cash</option>
                    <option value="Credit">Credit</option>
                    <option value="Physical">Physical</option>
                  </select>

                  {/* Image Upload */}
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(win.id, e.target.files[0])}
                      className="hidden"
                    />
                    <div 
                      className="rounded-lg p-2 flex items-center justify-center transition-all hover:border-fuchsia-500"
                      style={{
                        background: '#000000',
                        border: '0.5px solid rgba(0, 255, 255, 0.25)',
                        boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)',
                        minHeight: '40px'
                      }}
                    >
                      <svg className="w-5 h-5 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </label>

                  {/* Max Winners */}
                  <input
                    type="number"
                    value={win.maxWinners}
                    onChange={(e) => handleChange(win.id, 'maxWinners', e.target.value)}
                    className="rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none"
                    style={{
                      background: '#000000',
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                  />

                  {/* Ticket Numbers */}
                  <input
                    type="text"
                    value={win.ticketNumbers}
                    onChange={(e) => handleChange(win.id, 'ticketNumbers', e.target.value)}
                    placeholder="24, 56, 78, 90"
                    className="rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none"
                    style={{
                      background: '#000000',
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                  />

                  {/* Claimed */}
                  <input
                    type="text"
                    value={win.claimed}
                    className="rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none bg-gray-900/60"
                    style={{
                      border: '0.5px solid rgba(0, 255, 255, 0.25)',
                      boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                    }}
                    disabled
                  />

                  {/* Empty space for alignment */}
                  <div></div>
                </div>

                {/* Winners Section */}
                <div className="mb-4">
                  <p className="text-white font-Oxanium text-sm mb-2">
                    Winners (Same with Max Winners <span className="text-red-500">*</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-white font-Oxanium text-sm">First</span>
                    <input
                      type="number"
                      value={win.firstWinners}
                      onChange={(e) => handleChange(win.id, 'firstWinners', e.target.value)}
                      className="w-32 rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none"
                      style={{
                        background: '#000000',
                        border: '0.5px solid rgba(0, 255, 255, 0.25)',
                        boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                      }}
                    />
                    <span className="text-white font-Oxanium text-sm">Entry</span>
                    <input
                      type="number"
                      value={win.entryWinners}
                      onChange={(e) => handleChange(win.id, 'entryWinners', e.target.value)}
                      className="w-32 rounded-lg px-3 py-2 text-gray-300 font-Oxanium text-sm focus:outline-none"
                      style={{
                        background: '#000000',
                        border: '0.5px solid rgba(0, 255, 255, 0.25)',
                        boxShadow: '0px 2px 12px 0px rgba(0, 255, 255, 0.1)'
                      }}
                    />
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => deleteInstantWin(win.id)}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg font-Orbitron font-bold text-sm transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #FF0000 0%, #8B0000 100%)',
                    color: 'white',
                    boxShadow: '0px 4px 12px rgba(255, 0, 0, 0.3)'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>

                {/* Divider */}
                {instantWins.length > 1 && win.id !== instantWins[instantWins.length - 1].id && (
                  <div className="mt-8 mb-8 border-t border-gray-700/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add Instant Win Button */}
        <button
          onClick={addInstantWin}
          className="px-8 py-3 rounded-lg font-Orbitron font-bold text-sm transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(90.63deg, #FF00FF -0.01%, #3E003E 99.99%)',
            color: 'white',
            boxShadow: '0px 4px 24px rgba(255, 0, 255, 0.3)'
          }}
        >
          Add Instant Win
        </button>
      </div>
    </div>
  );
};

export default InstantWins;