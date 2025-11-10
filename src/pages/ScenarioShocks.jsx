import React, { useState } from "react";
import "../styles/ScenarioShocks.css";
import {
  Factory,
  CloudLightning,
  Percent,
  UserCheck,
  LineChart,
} from "lucide-react";
import DisasterEvent from "../components/DisasterEvent";

export default function ScenarioShocks({ setActive }) {
  const [selectedEvent, setSelectedEvent] = useState("Factory Shutdown");

  // Factory Shutdown State
  const [site, setSite] = useState("Shanghai Manufacturing");
  const [capacityImpact, setCapacityImpact] = useState("100% shutdown");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState(6);

  // Tariff State
  const [affectedCountries, setAffectedCountries] = useState("China, Vietnam");
  const [tariffRate, setTariffRate] = useState(25);
  const [tariffEffectiveDate, setTariffEffectiveDate] = useState("");
  const [productCategories, setProductCategories] = useState(
    "Electronics, Components"
  );

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

      {/* Steps */}
      <div className="scenario-steps">
        <button className="step done">1 Details</button>
        <button className="step active">2 Shocks</button>
        <button className="step">3 Mitigations</button>
        <button className="step">4 Review & Run</button>
      </div>

      {/* Disruption Events */}
      <div className="scenario-shocks">
        <h3>Define Disruption Events</h3>

        <div className="disruption-grid">
          {disruptionEvents.map((event) => (
            <div
              key={event.id}
              className={`disruption-card ${
                selectedEvent === event.label ? "selected factory-gradient" : ""
              }`}
              onClick={() => setSelectedEvent(event.label)}
            >
              <div className="icon">{event.icon}</div>
              <div className="label">{event.label}</div>
            </div>
          ))}
        </div>

        {/* Factory Shutdown Section */}
        {selectedEvent === "Factory Shutdown" && (
          <div className="factory-config">
            <h4>Factory Shutdown Configuration</h4>
            <div className="config-grid">
              <div className="config-group">
                <label>Select Site</label>
                <input
                  type="text"
                  value={site}
                  onChange={(e) => setSite(e.target.value)}
                />
              </div>

              <div className="config-group">
                <label>Capacity Impact</label>
                <input
                  type="text"
                  value={capacityImpact}
                  onChange={(e) => setCapacityImpact(e.target.value)}
                />
              </div>

              <div className="config-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="config-group">
                <label>Duration (weeks)</label>
                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        )}

        {/* Disaster Event */}
        {selectedEvent === "Disaster Event" && <DisasterEvent />}

        {/* Tariff Configuration */}
        {selectedEvent === "Tariffs" && (
          <div className="factory-config">
            <h4>Tariff Configuration</h4>
            <div className="config-grid">
              <div className="config-group">
                <label>Affected Countries</label>
                <input
                  type="text"
                  value={affectedCountries}
                  onChange={(e) => setAffectedCountries(e.target.value)}
                  placeholder="e.g. China, Vietnam"
                />
              </div>

              <div className="config-group">
                <label>Tariff Rate (%)</label>
                <input
                  type="number"
                  min="0"
                  value={tariffRate}
                  onChange={(e) => setTariffRate(Number(e.target.value))}
                />
              </div>

              <div className="config-group">
                <label>Effective Date</label>
                <input
                  type="date"
                  value={tariffEffectiveDate}
                  onChange={(e) => setTariffEffectiveDate(e.target.value)}
                />
              </div>

              <div className="config-group">
                <label>Product Categories</label>
                <input
                  type="text"
                  value={productCategories}
                  onChange={(e) => setProductCategories(e.target.value)}
                  placeholder="e.g. Electronics, Components"
                />
              </div>
            </div>
          </div>
        )}

        {/* ✅ Vendor Health Section */}
        {selectedEvent === "Vendor Health" && (
          <div className="vendor-health-config">
            <h4>Vendor Health Configuration</h4>
            <div className="vendor-placeholder">
              Configuration options for Vendor Health will appear here
            </div>
          </div>
        )}

        {/* Placeholder for Commodity (optional future use) */}
        {selectedEvent === "Commodity" && (
          <div className="vendor-health-config">
            <h4>Commodity Configuration</h4>
            <div className="vendor-placeholder">
              Configuration options for Commodity will appear here
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




























































