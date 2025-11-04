
import React from "react";
import "../styles/SupplyNetwork.css";
import { Share2, AlertTriangle, Filter, Download } from "lucide-react";

export default function SupplyNetwork() {
  return (
    <div className="supplynetwork-wrapper">
      {/* Header */}
      <div className="header-row">
        <div className="title-section">
          <Share2 size={16} color="#8b5cf6" />
          <h3>Multi-Tier Supply Network</h3>
        </div>
        <div className="action-buttons">
          <button className="filter-btn">
            <Filter size={14} />
            Filter
          </button>
          <button className="export-btn">
            <Download size={14} />
            Export
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="alert-banner">
        <AlertTriangle size={18} color="#dc2626" />
        <span>
          <strong>Bottleneck Alert:</strong> Critical component delay detected in
          <span className="tier3-text"> Tier 3</span>
        </span>
        <a href="#" className="view-details">
          View Details
        </a>
      </div>

      {/* Tree Visualization */}
      <div className="tree-container">
        <svg
          viewBox="0 0 1000 500"
          xmlns="http://www.w3.org/2000/svg"
          className="tree-svg"
        >
          {/* Lines */}
          <path d="M500 60 C400 120, 300 150, 250 200" className="path" />
          <path d="M500 60 C600 120, 700 150, 750 200" className="path" />

          <path d="M250 200 C200 250, 170 300, 150 350" className="path" />
          <path d="M250 200 C260 250, 290 300, 320 350" className="path" />
          <path d="M750 200 C720 250, 700 300, 680 350" className="path" />
          <path d="M750 200 C780 250, 820 300, 850 350" className="path" />

          <path d="M150 350 C140 390, 130 420, 120 460" className="path" />
          <path d="M150 350 C160 390, 170 420, 180 460" className="path" />
          <path d="M320 350 C310 390, 300 420, 290 460" className="path" />
          <path d="M320 350 C330 390, 340 420, 350 460" className="path" />
          <path d="M680 350 C670 390, 660 420, 650 460" className="path" />
          <path d="M680 350 C690 390, 700 420, 710 460" className="path" />
          <path d="M850 350 C840 390, 830 420, 820 460" className="path" />
          <path d="M850 350 C860 390, 870 420, 880 460" className="path" />

          {/* Nodes */}
          <circle cx="500" cy="60" r="10" className="node level1" />
          <text x="500" y="40" textAnchor="middle" className="label">
            Supply Chain Network
          </text>

          <circle cx="250" cy="200" r="10" className="node level2" />
          <text x="250" y="185" textAnchor="middle" className="label">
            Tier 1 Supplier A
          </text>

          <circle cx="750" cy="200" r="10" className="node level2" />
          <text x="750" y="185" textAnchor="middle" className="label">
            Tier 1 Supplier B
          </text>

          <circle cx="150" cy="350" r="8" className="node level3" />
          <text x="150" y="335" textAnchor="middle" className="label">
            Tier 2 Supplier A1
          </text>

          <circle cx="320" cy="350" r="8" className="node level3" />
          <text x="320" y="335" textAnchor="middle" className="label">
            Tier 2 Supplier A2
          </text>

          <circle cx="680" cy="350" r="8" className="node level3" />
          <text x="680" y="335" textAnchor="middle" className="label">
            Tier 2 Supplier B1
          </text>

          <circle cx="850" cy="350" r="8" className="node level3" />
          <text x="850" y="335" textAnchor="middle" className="label">
            Tier 2 Supplier B2
          </text>

          {/* Tier 3 */}
          <circle cx="120" cy="460" r="6" className="node level4" />
          <text x="120" y="485" textAnchor="middle" className="label-small">
            Tier 3 Supplier A1-1
          </text>

          <circle cx="180" cy="460" r="6" className="node level4" />
          <text x="180" y="485" textAnchor="middle" className="label-small">
            Tier 3 Supplier A1-2
          </text>

          <circle cx="290" cy="460" r="6" className="node level4" />
          <text x="290" y="485" textAnchor="middle" className="label-small">
            Tier 3 Supplier A2-1
          </text>

          <circle cx="350" cy="460" r="6" className="node level4" />
          <text x="350" y="485" textAnchor="middle" className="label-small">
            Tier 3 Supplier A2-2
          </text>

          <circle cx="650" cy="460" r="6" className="node level4" />
          <text x="650" y="485" textAnchor="middle" className="label-small">
            Tier 3 Supplier B1-1
          </text>

          <circle cx="710" cy="460" r="6" className="node level4" />
          <text x="710" y="485" textAnchor="middle" className="label-small">
            Tier 3 Supplier B1-2
          </text>

          <circle cx="820" cy="460" r="6" className="node level4" />
          <text x="820" y="485" textAnchor="middle" className="label-small">
            Tier 3 Supplier B2-1
          </text>

          <circle cx="880" cy="460" r="6" className="node level4" />
          <text x="880" y="485" textAnchor="middle" className="label-small">
            Tier 3 Supplier B2-2
          </text>
        </svg>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-card">
          <h4>Tier 1</h4>
          <p className="value orange">24</p>
          <p>Direct Suppliers</p>
          <span className="visibility green">98% Visibility</span>
        </div>
        <div className="stat-card">
          <h4>Tier 2</h4>
          <p className="value purple">156</p>
          <p>Sub-suppliers</p>
          <span className="visibility purple">85% Visibility</span>
        </div>
        <div className="stat-card">
          <h4>Tier 3+</h4>
          <p className="value blue">800+</p>
          <p>Raw Material Suppliers</p>
          <span className="visibility red">62% Visibility</span>
        </div>
        <div className="stat-card">
          <h4>Total Parts</h4>
          <p className="value">12.5K</p>
          <p>Mapped Components</p>
          <span className="updated">Updated 2h ago</span>
        </div>
      </div>
    </div>
  );
}
