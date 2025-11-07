// import React, { useState } from "react";
// import { MapContainer, TileLayer, Polygon, useMapEvents } from "react-leaflet";
// import "../styles/DisasterEvent.css";

// function RegionSelector({ setPolygon }) {
//   const [points, setPoints] = useState([]);

//   useMapEvents({
//     click(e) {
//       const newPoints = [...points, [e.latlng.lat, e.latlng.lng]];
//       setPoints(newPoints);
//       setPolygon(newPoints);
//     },
//   });

//   return points.length > 0 ? <Polygon positions={points} /> : null;
// }

// export default function DisasterEvent() {
//   const [disasterType, setDisasterType] = useState("Hurricane");
//   const [severity, setSeverity] = useState("Category 4");
//   const [duration, setDuration] = useState(5);
//   const [recoveryTime, setRecoveryTime] = useState(12);
//   const [polygon, setPolygon] = useState([]);

//   return (
//     <div className="disaster-container">
//       <h4>Disaster Event Configuration</h4>

//       <div className="disaster-grid">
//         <div className="disaster-group">
//           <label>Disaster Type</label>
//           <input
//             type="text"
//             value={disasterType}
//             onChange={(e) => setDisasterType(e.target.value)}
//           />
//         </div>

//         <div className="disaster-group">
//           <label>Severity</label>
//           <input
//             type="text"
//             value={severity}
//             onChange={(e) => setSeverity(e.target.value)}
//           />
//         </div>

//         <div className="disaster-group">
//           <label>Duration (days)</label>
//           <input
//             type="number"
//             value={duration}
//             min="1"
//             onChange={(e) => setDuration(e.target.value)}
//           />
//         </div>

//         <div className="disaster-group">
//           <label>Recovery Time (weeks)</label>
//           <input
//             type="number"
//             value={recoveryTime}
//             min="1"
//             onChange={(e) => setRecoveryTime(e.target.value)}
//           />
//         </div>
//       </div>

//       <h4>Select Affected Region</h4>

//       <div className="map-wrapper">
//         <MapContainer center={[38.8, -77]} zoom={11} scrollWheelZoom={true}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <RegionSelector setPolygon={setPolygon} />
//         </MapContainer>
//       </div>
//     </div>
//   );
// }







import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/DisasterEvent.css";

function RegionSelector({ setPolygon }) {
  const [points, setPoints] = useState([]);

  useMapEvents({
    click(e) {
      const newPoints = [...points, [e.latlng.lat, e.latlng.lng]];
      setPoints(newPoints);
      setPolygon(newPoints);
    },
  });

  return points.length > 0 ? <Polygon positions={points} /> : null;
}

export default function DisasterEvent() {
  const [disasterType, setDisasterType] = useState("Hurricane");
  const [severity, setSeverity] = useState("Category 4");
  const [duration, setDuration] = useState(5);
  const [recoveryTime, setRecoveryTime] = useState(12);
  const [polygon, setPolygon] = useState([]);

  return (
    <div className="disaster-container">
      <h4>Disaster Event Configuration</h4>

      <div className="disaster-grid">
        <div className="disaster-group">
          <label>Disaster Type</label>
          <input type="text" value={disasterType} onChange={(e) => setDisasterType(e.target.value)} />
        </div>

        <div className="disaster-group">
          <label>Severity</label>
          <input type="text" value={severity} onChange={(e) => setSeverity(e.target.value)} />
        </div>

        <div className="disaster-group">
          <label>Duration (days)</label>
          <input type="number" value={duration} min="1" onChange={(e) => setDuration(e.target.value)} />
        </div>

        <div className="disaster-group">
          <label>Recovery Time (weeks)</label>
          <input type="number" value={recoveryTime} min="1" onChange={(e) => setRecoveryTime(e.target.value)} />
        </div>
      </div>

      <h4>Select Affected Region</h4>

      <div className="map-wrapper">
        <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={true} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <RegionSelector setPolygon={setPolygon} />
        </MapContainer>
      </div>
    </div>
  );
}
