import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

// Main Competitions Component
const CompetitionsSystem = () => {
  const [competitionType, setCompetitionType] = useState("Paid Competition");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mainPrizeValue: "",
    startDate: "",
    endDate: "",
    // ... other common fields
  });

  // Competition type configuration
  const COMPETITION_CONFIGS = {
    "Paid Competition": {
      sections: ["info", "media", "rules", "instantWins", "achievements"],
    },
    "Free Competition": {
      sections: ["info", "media", "rules", "instantWins", "achievements"],
    },
    "Jackpot Competition": {
      sections: [
        "info",
        "jackpotPricing",
        "media",
        "rules",
        "instantWins",
        "achievements",
      ],
    },
    "Wheel of Fortune": {
      sections: [
        "info",
        "wheelConfig",
        "wheelSettings",
        "prizeSegments",
        "media",
        "rules",
        "achievements",
      ],
    },
    "Subscription Competition": {
      sections: [
        "info",
        "subscriptionTiers",
        "subscriptionPricing",
        "media",
        "rules",
        "achievements",
      ],
    },
    "Mini Games": {
      sections: [
        "info",
        "miniGameSettings",
        "miniGamePricing",
        "rewardSystem",
        "media",
        "rules",
        "achievements",
      ],
    },
  };

  const handleCompetitionTypeChange = (type) => {
    setCompetitionType(type);
    // Reset form or preserve common fields as needed
  };

  const currentSections = COMPETITION_CONFIGS[competitionType]?.sections || [];

  return (
    <div className="min-h-screen bg-black p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-3xl font-bold font-['Orbitron'] mb-2">
          Create New Competition
        </h1>
        <p className="text-gray-400 font-['Oxanium']">
          Kindly fill in the competition details below
        </p>
      </div>

      {/* Basic Information with Competition Type Selector */}
      <CompetitionInformation
        competitionType={competitionType}
        onCompetitionTypeChange={handleCompetitionTypeChange}
        formData={formData}
        setFormData={setFormData}
      />

      {/* Dynamic Sections Based on Competition Type */}
      {currentSections.includes("jackpotPricing") && (
        <JackpotPricing formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("wheelConfig") && (
        <WheelConfiguration formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("wheelSettings") && (
        <WheelSettings formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("prizeSegments") && (
        <PrizeSegments formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("subscriptionTiers") && (
        <SubscriptionTiers formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("subscriptionPricing") && (
        <SubscriptionPricing formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("miniGameSettings") && (
        <MiniGameSettings formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("miniGamePricing") && (
        <MiniGamePricing formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("rewardSystem") && (
        <RewardSystem formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("media") && (
        <CompetitionMedia formData={formData} setFormData={setFormData} />
      )}

      {currentSections.includes("rules") && (
        <RulesAndRestrictions
          competitionType={competitionType}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {currentSections.includes("instantWins") && (
        <InstantWins
          competitionType={competitionType}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {currentSections.includes("achievements") && (
        <AchievementSettings formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
};

// ==================== COMPONENT: Competition Information ====================
const CompetitionInformation = ({
  competitionType,
  onCompetitionTypeChange,
  formData,
  setFormData,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const competitionTypes = [
    "Paid Competition",
    "Free Competition",
    "Jackpot Competition",
    "Wheel of Fortune",
    "Subscription Competition",
    "Mini Games",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Show dates for most competitions except Jackpot (dates shown after threshold)
  const showDates = competitionType !== "Jackpot Competition";

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
        <h2 className="text-white text-xl font-['Orbitron'] font-semibold mb-6">
          Basic Competition Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Title */}
          <div>
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter competition title"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] placeholder-gray-600 focus:outline-none"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
          </div>

          {/* Competition Type Dropdown */}
          <div className="relative">
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Competition Type <span className="text-red-500">*</span>
            </label>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] cursor-pointer flex justify-between items-center"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            >
              <span>{competitionType}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {dropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-2 rounded-lg overflow-hidden z-50"
                style={{
                  background: "#000000",
                  border: "0.5px solid rgba(0, 255, 255, 0.25)",
                  boxShadow: "0px 4px 24px 0px rgba(0, 255, 255, 0.2)",
                }}
              >
                {competitionTypes.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      onCompetitionTypeChange(type);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-3 text-gray-300 font-['Oxanium'] hover:bg-cyan-500/10 cursor-pointer flex items-center justify-between"
                  >
                    <span>{type}</span>
                    {type === competitionType && (
                      <Check className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="text-white font-['Oxanium'] text-sm mb-2 block">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter detailed description of the competition and prizes"
            rows={4}
            className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] placeholder-gray-600 focus:outline-none resize-none"
            style={{
              background: "#000000",
              border: "0.5px solid rgba(0, 255, 255, 0.25)",
              boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
            }}
          />
        </div>

        {/* Main Prize Value - Show for specific types */}
        {[
          "Free Competition",
          "Jackpot Competition",
          "Subscription Competition",
        ].includes(competitionType) && (
          <div className="mb-6">
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Main Prize Value <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="mainPrizeValue"
              value={formData.mainPrizeValue}
              onChange={handleChange}
              placeholder={
                competitionType === "Jackpot Competition"
                  ? "E.g. £1,000,000"
                  : "E.g. £25,000, £5,000 site credit, mystery gift"
              }
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] placeholder-gray-600 focus:outline-none"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
            <p className="text-gray-500 font-['Oxanium'] text-xs mt-2">
              The main prize could either be site credits or real cash or
              described in text
            </p>
          </div>
        )}

        {/* Dates - Conditional based on competition type */}
        {showDates && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white font-['Oxanium'] text-sm mb-2 block">
                Start Date and Time <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                placeholder="E.g. 01/01/2026, 6:00 AM"
                className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] placeholder-gray-600 focus:outline-none"
                style={{
                  background: "#000000",
                  border: "0.5px solid rgba(0, 255, 255, 0.25)",
                  boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                }}
              />
            </div>
            <div>
              <label className="text-white font-['Oxanium'] text-sm mb-2 block">
                End Date and Time <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                placeholder="E.g. 01/01/2026, 6:00 AM"
                className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] placeholder-gray-600 focus:outline-none"
                style={{
                  background: "#000000",
                  border: "0.5px solid rgba(0, 255, 255, 0.25)",
                  boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== COMPONENT: Jackpot Pricing ====================
const JackpotPricing = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        <h2 className="text-white text-xl font-['Orbitron'] font-semibold mb-6">
          Pricing and Ticket Configuration
        </h2>
        <p className="text-gray-400 font-['Oxanium'] text-sm mb-6">
          Fill in the following ticket details
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Ticket Price (£) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="ticketPrice"
              placeholder="10"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] focus:outline-none"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
          </div>
          <div>
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Maximum Tickets <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="maxTickets"
              placeholder="300,000"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] focus:outline-none"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Entry Limit Per User <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="1000"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] focus:outline-none"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
          </div>
          <div>
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              % of Free Tickets <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="10"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] focus:outline-none"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
            <p className="text-gray-500 font-['Oxanium'] text-xs mt-2">
              Percentage of Tickets Free
            </p>
          </div>
          <div>
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Tickets Remaining <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value="300,000"
              disabled
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] bg-gray-900/60"
              style={{
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
          </div>
        </div>

        {/* Threshold Section */}
        <div className="pt-6 border-t border-gray-700/50">
          <h3 className="text-white text-lg font-['Orbitron'] font-semibold mb-6">
            Threshold
          </h3>
          <p className="text-gray-400 font-['Oxanium'] text-sm mb-6">
            Fill in the following threshold details
          </p>

          <div className="mb-6">
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Number of Tickets to be sold{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="10,000"
              className="w-full rounded-lg px-4 py-3 text-gray-300 font-['Oxanium'] focus:outline-none"
              style={{
                background: "#000000",
                border: "0.5px solid rgba(0, 255, 255, 0.25)",
                boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
              }}
            />
            <p className="text-gray-500 font-['Oxanium'] text-xs mt-2">
              Target sales before countdown starts
            </p>
          </div>

          <div>
            <label className="text-white font-['Oxanium'] text-sm mb-2 block">
              Countdown Timer <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-6 gap-4">
              {[
                "Year(s)",
                "Month(s)",
                "Day(s)",
                "Hour(s)",
                "Minute(s)",
                "Second(s)",
              ].map((unit) => (
                <div key={unit}>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full rounded-lg px-3 py-3 text-gray-300 font-['Oxanium'] text-center focus:outline-none"
                    style={{
                      background: "#000000",
                      border: "0.5px solid rgba(0, 255, 255, 0.25)",
                      boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                    }}
                  />
                  <p className="text-gray-500 font-['Oxanium'] text-xs mt-1 text-center">
                    {unit}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 font-['Oxanium'] text-xs mt-2">
              Time taken for the competition to last after it starts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== PLACEHOLDER COMPONENTS ====================
// (These would be fully built out based on your designs)

const WheelConfiguration = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Wheel Configuration
    </h2>
    <p className="text-gray-400">Wheel settings would go here...</p>
  </div>
);

const WheelSettings = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Wheel Settings
    </h2>
    <p className="text-gray-400">Text styling, colors, animation settings...</p>
  </div>
);

const PrizeSegments = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Prize Segments
    </h2>
    <p className="text-gray-400">Segment configuration table...</p>
  </div>
);

const SubscriptionTiers = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Subscription Tiers
    </h2>
    <p className="text-gray-400">Tier selection and auto-entry toggle...</p>
  </div>
);

const SubscriptionPricing = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Subscription Pricing
    </h2>
    <p className="text-gray-400">
      Conditional pricing based on free-for-all toggle...
    </p>
  </div>
);

const MiniGameSettings = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Mini Game Settings
    </h2>
    <p className="text-gray-400">Game type, entry limits, time repeat...</p>
  </div>
);

const MiniGamePricing = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Mini Game Pricing
    </h2>
    <p className="text-gray-400">Conditional pricing for paid mini games...</p>
  </div>
);

const RewardSystem = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">Reward System</h2>
    <p className="text-gray-400">Leaderboard rewards configuration...</p>
  </div>
);

const CompetitionMedia = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Competition Media
    </h2>
    <p className="text-gray-400">Media upload section...</p>
  </div>
);

const RulesAndRestrictions = ({ competitionType }) => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Rules and Restrictions
    </h2>
    <p className="text-gray-400">Rules for {competitionType}...</p>
  </div>
);

const InstantWins = ({ competitionType }) => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">Instant Wins</h2>
    <p className="text-gray-400">Instant wins for {competitionType}...</p>
  </div>
);

const AchievementSettings = () => (
  <div className="mt-8 p-8 rounded-2xl border border-cyan-500/20 bg-black/80">
    <h2 className="text-white text-xl font-['Orbitron'] mb-4">
      Achievement Settings
    </h2>
    <p className="text-gray-400">Achievement configuration...</p>
  </div>
);

export default CompetitionsSystem;
