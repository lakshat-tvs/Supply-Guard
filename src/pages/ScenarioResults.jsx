import React from "react";
import "../styles/ScenarioResults.css";
import { AlertTriangle, TrendingDown, TrendingUp, Share2, Download, Edit3, Copy } from "lucide-react";

export default function ScenarioResults({ setActive }) {
  return (
    <div className="scenario-results-wrapper">
      {/* Header */}
      <div className="results-header">
        <div>
          <h2 className="results-title">Factory Shutdown - Shanghai</h2>
          <p className="results-subtitle">
            Scenario Results • Completed Dec 12, 2024
          </p>
        </div>
        <div className="results-actions">
          <button className="btn-action"><Copy size={16}/> Clone</button>
          <button className="btn-action"><Edit3 size={16}/> Annotate</button>
          <div className="dropdown">
            <button className="btn-action"><Download size={16}/> Export</button>
          </div>
          <button className="btn-share"><Share2 size={16}/> Share</button>
        </div>
      </div>

      {/* Top metrics */}
      <div className="metrics-grid">
        <div className="metric-card down">
          <h4>Service Level</h4>
          <p className="metric-value">87.5%</p>
          <span className="metric-change">-12.5% from baseline</span>
          <TrendingDown className="metric-icon red" size={18} />
        </div>

        <div className="metric-card up">
          <h4>Backlog</h4>
          <p className="metric-value">5.2 weeks</p>
          <span className="metric-change">+3.2 weeks from baseline</span>
          <TrendingUp className="metric-icon red" size={18} />
        </div>

        <div className="metric-card warning">
          <h4>Inventory at Risk</h4>
          <p className="metric-value">$18.7M</p>
          <span className="metric-change">High risk exposure</span>
          <AlertTriangle className="metric-icon yellow" size={18} />
        </div>

        <div className="metric-card cost">
          <h4>Cost Impact</h4>
          <p className="metric-value">$2.1M</p>
          <span className="metric-change">Additional costs</span>
          <AlertTriangle className="metric-icon red" size={18} />
        </div>
      </div>

      {/* Middle section */}
      <div className="charts-grid">
        <div className="chart-card">
          <h4>Inventory Trends</h4>
          <img
            src="https://quickchart.io/chart?c={type:'line',data:{labels:['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8'],datasets:[{label:'On-Hand Inventory',borderColor:'#3b82f6',fill:true,backgroundColor:'rgba(59,130,246,0.1)',data:[100,85,72,58,47,38,33,30]},{label:'Backorders',borderColor:'#f87171',fill:true,backgroundColor:'rgba(248,113,113,0.1)',data:[5,10,18,27,35,40,45,50]}]}}"
            alt="Inventory Trends"
            className="chart-img"
          />
        </div>

        <div className="chart-card">
          <h4>Geographic Impact</h4>
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Shanghai&zoom=10&size=600x300&markers=color:red|Shanghai&key=YOUR_API_KEY"
            alt="Map Impact"
            className="chart-img map-placeholder"
          />
          <div className="map-legend">
            <span className="dot red"></span> High Risk
            <span className="dot yellow"></span> Medium Risk
            <span className="dot green"></span> Low Risk
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="recommendations">
        <h4>Recommendations</h4>
        <ul>
          <li>✅ Activate Alternate Suppliers</li>
          <li>🚚 Expedite critical shipments via air freight</li>
          <li>📦 Increase regional safety stock</li>
          <li>🔁 Reroute shipments via alternate ports</li>
        </ul>
      </div>
    </div>
  );
}
