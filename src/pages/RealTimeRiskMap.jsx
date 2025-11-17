import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/RealTimeRiskMap.css";

const RealTimeRiskMap = ({ activeAlert }) => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });

  return (
    <div className="map-container">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "420px", width: "100%", borderRadius: "14px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {activeAlert && (
          <Marker position={activeAlert.position}>
            <Popup>
              <strong>{activeAlert.title}</strong>
              <br />
              {activeAlert.message}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Overlay elements */}
      <div className="map-overlay">

        {/* === Right-end Alert Boxes === */}
        <div className="alert-section right-end">
          <div className="alert-box red">🟥 Natural Disaster Alert</div>
          <div className="alert-box orange">🟧 Port Congestion</div>
          <div className="alert-box yellow">🟨 Shipping Delay</div>
        </div>

        {/* === LEFT-ALIGNED RISK COUNTS === */}
        <div className="risk-counts left-aligned">
          <div className="risk-box high">
            <span>🟥 High Risk</span>
            <strong>156</strong>
          </div>
          <div className="risk-box medium">
            <span>🟧 Medium Risk</span>
            <strong>203</strong>
          </div>
          <div className="risk-box low">
            <span>🟩 Low Risk</span>
            <strong>312</strong>
          </div>
        </div>

        {/* === Supplier Group Legend === */}
        <div className="supplier-legend">
          <div className="legend-item">
            <span className="dot red"></span> High Risk (&gt;50 suppliers)
          </div>
          <div className="legend-item">
            <span className="dot orange"></span> Medium Risk (20-50 suppliers)
          </div>
          <div className="legend-item">
            <span className="dot green"></span> Low Risk (&lt;20 suppliers)
          </div>
        </div>

        {/* === Risk Summary Box === */}
        <div className="risk-summary">
          <h4>Risk Summary</h4>
          <p>
            High Risk Events: <span className="red">12</span>
          </p>
          <p>
            Medium Risk Events: <span className="orange">28</span>
          </p>
          <p>
            Monitored Suppliers: <span className="blue">156</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealTimeRiskMap;
