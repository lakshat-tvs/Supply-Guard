import React, { useState } from "react";
import "../styles/ScenarioCatalog.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ScenarioCatalog({ setActive }) {
  const [selectedScenarios, setSelectedScenarios] = useState([]);

  const handleNewScenario = () => {
    setActive("create-scenario");
  };

  const handleSelect = (id) => {
    setSelectedScenarios((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : prev.length < 2
        ? [...prev, id]
        : prev // limit to 2 selections
    );
  };

  const handleCompare = () => {
    if (selectedScenarios.length !== 2) {
      toast.warn("Please select exactly 2 scenarios to compare.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    const selected = scenarios.filter((s) =>
      selectedScenarios.includes(s.id)
    );
    localStorage.setItem("compareScenarios", JSON.stringify(selected));
    setActive("compare-scenarios");
  };

  const scenarios = [
    {
      id: 1,
      title: "Factory Shutdown - Shanghai",
      tag: "Factory Shutdown",
      tagColor: "#fde2e2",
      tagTextColor: "#b91c1c",
      service: "-12.5%",
      backlog: "+3.2 weeks",
      cost: "+$2.1M",
      owner: "Sarah Chen",
      status: "Completed",
      statusColor: "#d1fae5",
      statusText: "#065f46",
      date: "Dec 12, 2024",
      action: "View Results",
    },
    {
      id: 2,
      title: "Tariff Impact Analysis",
      tag: "Tariffs",
      tagColor: "#fff7e6",
      tagTextColor: "#92400e",
      service: "-3.8%",
      backlog: "+1.1 weeks",
      cost: "+$5.7M",
      owner: "Michael Rodriguez",
      status: "Running",
      statusColor: "#e0f2fe",
      statusText: "#0369a1",
      date: "Dec 10, 2024",
      action: "Processing...",
    },
    {
      id: 3,
      title: "Hurricane Impact - Gulf Coast",
      tag: "Disaster",
      tagColor: "#f3e8ff",
      tagTextColor: "#6b21a8",
      service: "-18.3%",
      backlog: "+5.7 weeks",
      cost: "+$8.9M",
      owner: "Jennifer Park",
      status: "Completed",
      statusColor: "#d1fae5",
      statusText: "#065f46",
      date: "Dec 8, 2024",
      action: "View Results",
    },
    {
      id: 4,
      title: "Vendor Health Decline",
      tag: "Vendor Health",
      tagColor: "#fef9c3",
      tagTextColor: "#a16207",
      service: "-7.2%",
      backlog: "+2.1 weeks",
      cost: "+$1.8M",
      owner: "David Kim",
      status: "Completed",
      statusColor: "#d1fae5",
      statusText: "#065f46",
      date: "Dec 5, 2024",
      action: "View Results",
    },
    {
      id: 5,
      title: "Commodity Price Surge",
      tag: "Commodity",
      tagColor: "#dcfce7",
      tagTextColor: "#166534",
      service: "-1.5%",
      backlog: "+0.3 weeks",
      cost: "+$12.4M",
      owner: "Lisa Thompson",
      status: "Draft",
      statusColor: "#f3f4f6",
      statusText: "#374151",
      date: "Dec 3, 2024",
      action: "Edit Draft",
    },
    {
      id: 6,
      title: "Multi-Vendor Disruption",
      tag: "Combined",
      tagColor: "#fee2e2",
      tagTextColor: "#b91c1c",
      service: "-25.7%",
      backlog: "+8.9 weeks",
      cost: "+$15.2M",
      owner: "Robert Johnson",
      status: "Completed",
      statusColor: "#d1fae5",
      statusText: "#065f46",
      date: "Nov 28, 2024",
      action: "View Results",
    },
  ];

  return (
    <div className="scenario-page">
      {/* Toast positioned at top-left */}
      <ToastContainer position="top-left" autoClose={3000} theme="colored" />

      <div className="scenario-header">
        <div>
          <h2>Scenario Catalog</h2>
          <p>Manage and compare your what-if scenarios</p>
        </div>
        <div className="scenario-actions">
          <button
            className={`compare-btn ${
              selectedScenarios.length === 2 ? "active" : ""
            }`}
            onClick={handleCompare}
          >
            ⚪ Compare Selected
          </button>
          <button className="new-btn" onClick={handleNewScenario}>
            + New Scenario
          </button>
        </div>
      </div>

      <div className="scenario-grid">
        {scenarios.map((s) => (
          <div
            key={s.id}
            className={`scenario-card ${
              selectedScenarios.includes(s.id) ? "selected" : ""
            }`}
          >
            <div className="scenario-top">
              <h3>
                {s.id}. {s.title}
              </h3>
              <input
                type="checkbox"
                checked={selectedScenarios.includes(s.id)}
                onChange={() => handleSelect(s.id)}
              />
            </div>

            <span
              className="scenario-tag"
              style={{ backgroundColor: s.tagColor, color: s.tagTextColor }}
            >
              {s.tag}
            </span>

            <div className="scenario-details">
              <p>
                Service Level <span className="impact-text">{s.service}</span>
              </p>
              <p>
                Backlog <span className="impact-text">{s.backlog}</span>
              </p>
              <p>
                Cost Impact <span className="impact-text">{s.cost}</span>
              </p>

              <div className="scenario-footer">
                <div>
                  <p className="owner-text">{s.owner}</p>
                  <p className="date-text">{s.date}</p>
                </div>
                <div>
                  <span
                    className="status"
                    style={{
                      backgroundColor: s.statusColor,
                      color: s.statusText,
                    }}
                  >
                    {s.status}
                  </span>
                </div>
              </div>

              <a href="#" className="scenario-link">
                {s.action}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
