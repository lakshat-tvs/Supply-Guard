import React, { useState } from "react";
import "../styles/ScenarioShocks.css";
import {
  Factory,
  CloudLightning,
  Percent,
  UserCheck,
  LineChart,
} from "lucide-react";

export default function ScenarioShocks({ setActive }) {
  const [selectedEvent, setSelectedEvent] = useState("Factory Shutdown");

  // Editable fields
  const [site, setSite] = useState("Shanghai Manufacturing");
  const [capacityImpact, setCapacityImpact] = useState("100% shutdown");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState(6);

  const disruptionEvents = [
    { id: 1, label: "Factory Shutdown", icon: <Factory size={20} /> },
    { id: 2, label: "Disaster Event", icon: <CloudLightning size={20} /> },
    { id: 3, label: "Tariffs", icon: <Percent size={20} /> },
    { id: 4, label: "Vendor Health", icon: <UserCheck size={20} /> },
    { id: 5, label: "Commodity", icon: <LineChart size={20} /> },
  ];

  const handlePrevious = () => setActive("create-scenario");
  const handleNext = () => setActive("mitigations");

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

      {/* Step Navigation */}
      <div className="scenario-steps">
        <button className="step done">1 Details</button>
        <button className="step active">2 Shocks</button>
        <button className="step">3 Mitigations</button>
        <button className="step">4 Review & Run</button>
      </div>

      {/* Main Section */}
      <div className="scenario-shocks">
        <h3>Define Disruption Events</h3>

        <div className="disruption-grid">
          {disruptionEvents.map((event) => (
            <div
              key={event.id}
              className={`disruption-card ${
                selectedEvent === event.label ? "selected" : ""
              } ${
                event.label === "Factory Shutdown" &&
                selectedEvent === "Factory Shutdown"
                  ? "factory-gradient"
                  : ""
              }`}
              onClick={() => setSelectedEvent(event.label)}
            >
              <div className="icon">{event.icon}</div>
              <div className="label">{event.label}</div>
            </div>
          ))}
        </div>

        {/* Factory Shutdown Configuration */}
        {selectedEvent === "Factory Shutdown" && (
          <div className="factory-config">
            <h4>Factory Shutdown Configuration</h4>

            <div className="config-grid">
              {/* Editable Select Site */}
              <div className="config-group">
                <label>Select Site</label>
                <input
                  type="text"
                  value={site}
                  onChange={(e) => setSite(e.target.value)}
                  placeholder="Enter site name"
                />
              </div>

              {/* Editable Capacity Impact */}
              <div className="config-group">
                <label>Capacity Impact</label>
                <input
                  type="text"
                  value={capacityImpact}
                  onChange={(e) => setCapacityImpact(e.target.value)}
                  placeholder="Enter impact (e.g., 80% shutdown)"
                />
              </div>

              {/* Start Date */}
              <div className="config-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              {/* Duration (weeks) */}
              <div className="config-group">
                <label>Duration (weeks)</label>
                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="duration-input"
                />
              </div>
            </div>
          </div>
        )}
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































































