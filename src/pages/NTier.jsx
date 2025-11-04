import React from "react";
import "../styles/NTier.css";
import { ArrowRight, Download, AlertTriangle, Layers, Zap, Clock, Users } from "lucide-react";

/**
 * NTier.jsx
 * Static mock of N-tier analysis screen.
 * Replace static data with real props or API calls later.
 */
export default function NTier() {
  // sample data (can be replaced by API)
  const supplier = {
    name: "Precision Parts Inc",
    tier: "Tier 3 Supplier - Critical Failure",
    location: "Detroit, MI",
    riskScore: "9.2/10",
    capacity: "0%",
    lastShipment: "3 days ago",
  };

  const impact = {
    affectedParts: 12,
    affectedSites: 3,
    productionDelay: "7-14 days",
    financialImpact: "$2.4M estimated",
  };

  const alternatives = [
    { name: "Advanced Manufacturing Co", note: "Available", meta: "Capacity: 85% • Lead Time: +2 days • Risk: 3.2/10" },
    { name: "Global Parts Solutions", note: "Limited", meta: "Capacity: 60% • Lead Time: +5 days • Risk: 4.1/10" },
  ];

  return (
    <div className="ntier-page">
      <div className="ntier-left">
        <header className="ntier-header">
          <h1>N-Tier Supplier Failure Insights</h1>
          <div className="header-actions">
            <div className="critical-indicator">
              <span className="dot critical" /> Critical Alert
            </div>
            <button className="btn-primary">
              <Download size={14} /> Export Report
            </button>
          </div>
        </header>

        <section className="graph-card">
          <h3>Supply Network Graph</h3>
          <div className="graph-canvas">
            {/* Simple illustrative SVG/graph placeholder */}
            <svg viewBox="0 0 900 220" className="supply-graph" preserveAspectRatio="xMidYMid meet">
              {/* nodes */}
              <circle cx="80" cy="110" r="28" fill="#cfe7ff" />
              <text x="80" y="115" textAnchor="middle" fontSize="11" fill="#0b4a7a">Tier 1</text>

              <circle cx="260" cy="60" r="22" fill="#c9f0e2" />
              <text x="260" y="64" textAnchor="middle" fontSize="10" fill="#0b6b4a">Tier 2</text>

              <circle cx="260" cy="160" r="22" fill="#c9f0e2" />
              <text x="260" y="164" textAnchor="middle" fontSize="10" fill="#0b6b4a">Tier 2</text>

              <circle cx="420" cy="40" r="18" fill="#fef0d0" />
              <text x="420" y="44" textAnchor="middle" fontSize="9">T3</text>

              <circle cx="520" cy="110" r="18" fill="#fef0d0" />
              <text x="520" y="114" textAnchor="middle" fontSize="9">T3</text>

              <circle cx="420" cy="180" r="18" fill="#ef9a9a" />
              <text x="420" y="184" textAnchor="middle" fontSize="9" fill="#fff">T3</text>

              {/* links */}
              <line x1="108" y1="110" x2="238" y2="60" stroke="#b6d7ff" strokeWidth="2" />
              <line x1="108" y1="110" x2="238" y2="160" stroke="#b6d7ff" strokeWidth="2" />
              <line x1="282" y1="60" x2="402" y2="40" stroke="#b6d7ff" strokeWidth="2" />
              <line x1="282" y1="160" x2="402" y2="180" stroke="#b6d7ff" strokeWidth="2" />
              <line x1="282" y1="60" x2="502" y2="110" stroke="#b6d7ff" strokeWidth="2" />
            </svg>
          </div>
        </section>

        <section className="network-impact">
          <div className="impact-card failed">
            <div className="big">1</div>
            <div className="label">Failed Suppliers</div>
          </div>
          <div className="impact-card atrisk">
            <div className="big">2</div>
            <div className="label">At Risk Suppliers</div>
          </div>
          <div className="impact-card total">
            <div className="big">5</div>
            <div className="label">Total Affected Nodes</div>
          </div>
        </section>

        
      </div>

      <aside className="ntier-right">
        <div className="supplier-panel">
          <div className="supplier-title">
            <div className="icon-alert"><AlertTriangle size={18} /></div>
            <div>
              <div className="small-label">Supplier Details</div>
              <h4>{supplier.name}</h4>
              <div className="tier-tag">{supplier.tier}</div>
            </div>
          </div>

          <div className="supplier-meta">
            <div><strong>Location:</strong> {supplier.location}</div>
            <div><strong>Risk Score:</strong> {supplier.riskScore}</div>
            <div><strong>Capacity:</strong> {supplier.capacity}</div>
            <div><strong>Last Shipment:</strong> {supplier.lastShipment}</div>
          </div>
        </div>

        <div className="impact-panel">
          <h5>Impact Analysis</h5>
          <div className="impact-row"><div>Affected Parts</div><div className="pill">{impact.affectedParts} components</div></div>
          <div className="impact-row"><div>Impacted Sites</div><div className="pill">{impact.affectedSites} manufacturing plants</div></div>
          <div className="impact-row"><div>Production Delay</div><div className="pill red">{impact.productionDelay}</div></div>
          <div className="impact-row"><div>Financial Impact</div><div className="pill red">{impact.financialImpact}</div></div>
        </div>

        <div className="actions-panel">
          <h5>Recommended Actions</h5>
          <ul className="action-list">
            <li><button className="action-btn"><Layers size={16}/> Shift to Alternative <ArrowRight size={14} /></button></li>
            <li><button className="action-btn light"><Zap size={16}/> Increase Buffer Stock <ArrowRight size={14} /></button></li>
            <li><button className="action-btn soft"><Clock size={16}/> Expedite Orders <ArrowRight size={14} /></button></li>
            <li><button className="action-btn ghost"><Users size={16}/> Simulate Reroute <ArrowRight size={14} /></button></li>
          </ul>
        </div>

        <div className="alt-suppliers">
          <h5>Alternative Suppliers</h5>
          {alternatives.map((a, idx) => (
            <div key={idx} className="alt-row">
              <div className="alt-left">
                <div className={`status-dot ${a.note === "Available" ? "green" : "yellow"}`}/>
                <div>
                  <div className="alt-name">{a.name}</div>
                  <div className="alt-meta">{a.meta}</div>
                </div>
              </div>
              <div className="alt-action"><button className="link-btn">Select</button></div>
            </div>
          ))}
        </div>

        <div className="action-log">
          <h5>Action Log</h5>
          <div className="log-item">2025-10-20 — Alert raised for Precision Parts Inc</div>
          <div className="log-item">2025-10-21 — Notified Tier 2 backup</div>
        </div>
      </aside>
    </div>
  );
}






































