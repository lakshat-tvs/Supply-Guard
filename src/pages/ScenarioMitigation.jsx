// src/pages/ScenarioMitigation.jsx
import React, { useState } from "react";
import "../styles/ScenarioMitigation.css";

export default function ScenarioMitigation({ setActive }) {
  const mitigationStrategies = [
    {
      id: "alt_supplier",
      title: "Alternate Supplier Activation",
      subtitle: "Switch to backup suppliers for affected parts",
    },
    {
      id: "expedite_mode",
      title: "Expedite Mode",
      subtitle: "Use faster shipping methods for critical parts",
    },
    {
      id: "safety_stock",
      title: "Increase Safety Stock",
      subtitle: "Build additional inventory buffers",
    },
    {
      id: "port_reroute",
      title: "Port Re-routing",
      subtitle: "Redirect shipments through alternative ports",
    },
    {
      id: "reorder_point",
      title: "Reorder Point Adjustment",
      subtitle: "Modify inventory triggers for affected items",
    },
  ];

  const [selectedMitigations, setSelectedMitigations] = useState([]);

  // Toggle selection
  const toggleMitigation = (id) => {
    setSelectedMitigations((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // 🟡 Go back to Scenario Shocks
  const handlePrevious = () => setActive("scenario-shocks");

  // 🟢 Go forward to Review & Run
  const handleNext = () => setActive("review");

  return (
    <div className="scenario-wrapper">
      {/* Header */}
      <div className="scenario-topbar">
        <div>
          <h2 className="scenario-title">Create New Scenario</h2>
          <p className="scenario-subtitle">
            Define your what-if analysis parameters
          </p>
        </div>
        <button className="close-btn" onClick={() => setActive("scenario")}>
          ×
        </button>
      </div>

      {/* Stepper */}
      <div className="scenario-steps">
        <button className="step done">1 Details</button>
        <button className="step done">2 Shocks</button>
        <button className="step active">3 Mitigations</button>
        <button className="step">4 Review & Run</button>
      </div>

      {/* Mitigation Cards */}
      <div className="scenario-shocks">
        <h3>Select Mitigation Strategies</h3>
        <div className="mitigation-grid">
          {mitigationStrategies.map((item) => (
            <div
              key={item.id}
              className={`mitigation-card ${
                selectedMitigations.includes(item.id)
                  ? "selected mitigation-gradient"
                  : ""
              }`}
              onClick={() => toggleMitigation(item.id)}
            >
              <div className="mit-title">{item.title}</div>
              <div className="mit-subtitle">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="scenario-footer">
        <button className="btn-secondary" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
