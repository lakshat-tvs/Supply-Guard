// src/pages/ScenarioCatalog.jsx
import React from "react";
import "../styles/ScenarioCatalog.css";

export default function ScenarioCatalog() {
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
      <div className="scenario-header">
        <div>
          <h2>Scenario Catalog</h2>
          <p>Manage and compare your what-if scenarios</p>
        </div>
        <div className="scenario-actions">
          <button className="compare-btn">⚪ Compare Selected</button>
          <button className="new-btn">+ New Scenario</button>
        </div>
      </div>

      <div className="scenario-grid">
        {scenarios.map((s) => (
          <div key={s.id} className="scenario-card">
            <div className="scenario-top">
              <h3>
                {s.id}. {s.title}
              </h3>
              <input type="checkbox" />
            </div>
            <span
              className="scenario-tag"
              style={{ backgroundColor: s.tagColor, color: s.tagTextColor }}
            >
              {s.tag}
            </span>

            <div className="scenario-details">
              <p>Service Level <span className="red">{s.service}</span></p>
              <p>Backlog <span className="red">{s.backlog}</span></p>
              <p>Cost Impact <span className="red">{s.cost}</span></p>
              <p>{s.owner}</p>
              <div className="scenario-footer">
                <span
                  className="status"
                  style={{ backgroundColor: s.statusColor, color: s.statusText }}
                >
                  {s.status}
                </span>
                <span className="date">{s.date}</span>
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













































































