import "./style.css";

export default function ModeSelect({ onSelect }) {
  return (
    <div className="pacman-select-container">
      <h2 className="select-title">Select Game Mode</h2>

      <div className="mode-grid">
        <button className="mode-btn mode-free" onClick={() => onSelect("free")}>
          Free Mode
        </button>

        <button className="mode-btn mode-paid" onClick={() => onSelect("paid")}>
          Paid Mode
        </button>

        <button
          className="mode-btn mode-referral"
          onClick={() => onSelect("referral")}
        >
          Referral Mode
        </button>
      </div>
    </div>
  );
}
