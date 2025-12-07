import React, { useState } from "react";

const CompetitionInformation = () => {
  const [formData, setFormData] = useState({
    title: "",
    competitionType: "Paid Competition",
    description: "",
    mainPrizeValue: "",
    startDate: "",
    endDate: "",
    ticketPrice: "0",
    maxTickets: "100",
    entryLimit: "5",
    ticketsRemaining: "100",
    ticketsSold: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-8">
      <div
        className="rounded-2xl p-8"
        style={{
          background:
            "linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Section Title */}
        <h2 className="text-white text-xl font-Orbitron font-semibold mb-6">
          Basic Competition Information
        </h2>

        {/* Title and Competition Type Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Title */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter competition title"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
          </div>

          {/* Competition Type */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              Competition Type <span className="text-red-500">*</span>
            </label>
            <select
              name="competitionType"
              value={formData.competitionType}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium focus:outline-none transition-colors appearance-none cursor-pointer"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            >
              <option value="Paid Competition">Paid Competition</option>
              <option value="Free Competition">Free Competition</option>
              <option value="Premium Competition">Premium Competition</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="text-white font-Oxanium text-sm mb-2 block">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter detailed description of the competition and prizes"
            rows={4}
            className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors resize-none"
            style={{
              background: "#000000",
              border: "0.5px solid rgba(0, 255, 255, 0.25)",
              boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
            }}
          />
        </div>

        {/* Main Prize Value */}
        <div className="mb-6">
          <label className="text-white font-Oxanium text-sm mb-2 block">
            Main Prize Value <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="mainPrizeValue"
            value={formData.mainPrizeValue}
            onChange={handleChange}
            placeholder="E.g. £25,000, £5,000 site credit, mystery gift"
            className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
            style={{
              background: "#000000",
              border: "0.5px solid rgba(0, 255, 255, 0.25)",
              boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
            }}
          />
          <p className="text-gray-500 font-Oxanium text-xs mt-2">
            The main prize could either be site credits or real cash or
            described in text
          </p>
        </div>

        {/* Start Date and End Date Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Start Date */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              Start Date and Time <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="E.g. 01/01/2026, 6:00 AM"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
            <p className="text-gray-500 font-Oxanium text-xs mt-2">
              Date when the competition opens and entries are made
            </p>
          </div>

          {/* End Date */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              End Date and Time <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              placeholder="E.g. 01/01/2026, 6:00 AM"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
            <p className="text-gray-500 font-Oxanium text-xs mt-2">
              Date when competition closes and winner is drawn
            </p>
          </div>
        </div>

        {/* Pricing and Ticket Configuration Section */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <h3 className="text-white text-lg font-Orbitron font-semibold mb-2">
            Pricing and Ticket Configuration
          </h3>
          <p className="text-gray-400 font-Oxanium text-sm mb-6">
            Fill in the following ticket details
          </p>

          {/* Ticket Price and Max Tickets Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Ticket Price */}
            <div>
              <label className="text-white font-Oxanium text-sm mb-2 block">
                Ticket Price (£) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleChange}
                placeholder="0"
                className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
                style={{
                  background: "#000000",
                  border: "0.5px solid rgba(0, 255, 255, 0.25)",
                  boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                }}
              />
              <p className="text-gray-500 font-Oxanium text-xs mt-2">
                Price of each ticket
              </p>
            </div>

            {/* Maximum Tickets */}
            <div>
              <label className="text-white font-Oxanium text-sm mb-2 block">
                Maximum Tickets <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="maxTickets"
                value={formData.maxTickets}
                onChange={handleChange}
                placeholder="100"
                className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
                style={{
                  background: "#000000",
                  border: "0.5px solid rgba(0, 255, 255, 0.25)",
                  boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                }}
              />
              <p className="text-gray-500 font-Oxanium text-xs mt-2">
                Total tickets available for sale
              </p>
            </div>
          </div>

          {/* Entry Limit and Tickets Remaining Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Entry Limit Per User */}
            <div>
              <label className="text-white font-Oxanium text-sm mb-2 block">
                Entry Limit Per User <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="entryLimit"
                value={formData.entryLimit}
                onChange={handleChange}
                placeholder="5"
                className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
                style={{
                  background: "#000000",
                  border: "0.5px solid rgba(0, 255, 255, 0.25)",
                  boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                }}
              />
              <p className="text-gray-500 font-Oxanium text-xs mt-2">
                Maximum tickets a user can buy
              </p>
            </div>

            {/* Tickets Remaining */}
            <div>
              <label className="text-white font-Oxanium text-sm mb-2 block">
                Tickets Remaining <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="ticketsRemaining"
                value={formData.ticketsRemaining}
                onChange={handleChange}
                placeholder="100"
                className="w-full rounded-lg px-4 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors bg-gray-900/60"
                style={{
                  border: "0.5px solid rgba(0, 255, 255, 0.25)",
                  boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                }}
                disabled
              />
              <p className="text-gray-500 font-Oxanium text-xs mt-2">
                Automatically calculated
              </p>
            </div>
          </div>

          {/* Tickets Sold */}
          <div>
            <label className="text-white font-Oxanium text-sm mb-2 block">
              Tickets Sold <span className="text-red-500">*</span>
            </label>
            <div
              className="w-full rounded-lg px-4 py-6 text-center"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            >
              <span className="text-white font-Orbitron text-4xl font-bold">
                {formData.ticketsSold}
              </span>
            </div>
            <p className="text-gray-400 font-Oxanium text-sm text-center mt-3">
              Live count from the database
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionInformation;
