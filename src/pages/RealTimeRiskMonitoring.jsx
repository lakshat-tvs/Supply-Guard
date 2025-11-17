// import React, { useState } from "react";
// import RealTimeRiskMap from "./RealTimeRiskMap";
// import "../styles/RealTimeRiskMonitoring.css";

// export default function RealTimeRiskMonitoring() {
//   const [activeAlert, setActiveAlert] = useState(null);

//   return (
//     <div className="full-card-container">
//       <div className="risk-card">

//         <div className="rtm-wrapper">
//           {/* HEADER */}
//           <div className="rtm-header">
//             <h2 className="rtm-title">Real-time Risk Monitoring</h2>

//             <div className="rtm-header-right">
//               <span className="rtm-updated">⏱ Last updated: 2 mins ago</span>
//               <span className="rtm-country">United States</span>
//             </div>
//           </div>

//           {/* MAIN CONTENT */}
//           <div className="rtm-main">
//             {/* LEFT PANEL */}
//             <div className="rtm-left">
//               <div className="rtm-info-card green">
//                 <div className="circle green"></div>
//                 <div>
//                   <h4>Economic Indicators</h4>
//                   <p>Europe • All regions normal</p>
//                 </div>
//               </div>

//               <div className="rtm-info-card yellow">
//                 <div className="circle yellow"></div>
//                 <div>
//                   <h4>Geopolitical Events</h4>
//                   <p>2 Trade sanctions updated</p>
//                 </div>
//               </div>

//               <div className="rtm-info-card red">
//                 <div className="circle red"></div>
//                 <div>
//                   <h4>Supply Disruptions</h4>
//                   <p>Factory shutdown in Vietnam</p>
//                 </div>
//               </div>

//               <div className="ai-box">
//                 <h4>AI Recommendation</h4>
//                 <p>
//                   Consider diversifying Electronics suppliers to reduce
//                   concentration risk in Southeast Asia region.
//                 </p>
//               </div>
//             </div>

//             {/* RIGHT PANEL - MAP */}
//             <div className="rtm-right">
//               <RealTimeRiskMap activeAlert={activeAlert} />
//             </div>
//           </div>

//           {/* BOTTOM ALERT CARDS */}
//           <div className="rtm-bottom">
//             <div
//               className="rtm-bottom-card red"
//               onClick={() =>
//                 setActiveAlert({
//                   title: "Critical Alerts",
//                   message: "Hurricane warning affecting Southeast suppliers",
//                 })
//               }
//             >
//               <div className="rtm-bottom-header">
//                 <h4>Critical Alerts</h4>
//                 <span className="badge red">5 New</span>
//               </div>
//               <p>Hurricane warning affecting Southeast suppliers</p>
//             </div>

//             <div
//               className="rtm-bottom-card orange"
//               onClick={() =>
//                 setActiveAlert({
//                   title: "Logistics Issues",
//                   message: "Major delays at Los Angeles port",
//                 })
//               }
//             >
//               <div className="rtm-bottom-header">
//                 <h4>Logistics Issues</h4>
//                 <span className="badge orange">3 Active</span>
//               </div>
//               <p>Major delays at Los Angeles port</p>
//             </div>

//             <div
//               className="rtm-bottom-card yellow"
//               onClick={() =>
//                 setActiveAlert({
//                   title: "Market Updates",
//                   message: "Raw material prices increased by 8%",
//                 })
//               }
//             >
//               <div className="rtm-bottom-header">
//                 <h4>Market Updates</h4>
//                 <span className="badge yellow">Updated</span>
//               </div>
//               <p>Raw material prices increased by 8%</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }















import React, { useState } from "react";
import RealTimeRiskMap from "./RealTimeRiskMap";
import "../styles/RealTimeRiskMonitoring.css";

export default function RealTimeRiskMonitoring() {
  const [activeAlert, setActiveAlert] = useState(null);

  return (
    <div className="rtm-card-wrapper">
      <div className="rtm-card">

        {/* HEADER */}
        <div className="rtm-header">
          <h3 className="rtm-title">Real-time Risk Monitoring</h3>

          <div className="rtm-header-right">
            <span className="rtm-updated">⏱ Last updated: 2 mins ago</span>
            <span className="rtm-country">United States</span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="rtm-main">

          {/* LEFT PANEL */}
          <div className="rtm-left">
            <div className="rtm-info-card green">
              <div className="circle green"></div>
              <div>
                <h4>Economic Indicators</h4>
                <p>Europe • All regions normal</p>
              </div>
            </div>

            <div className="rtm-info-card yellow">
              <div className="circle yellow"></div>
              <div>
                <h4>Geopolitical Events</h4>
                <p>2 Trade sanctions updated</p>
              </div>
            </div>

            <div className="rtm-info-card red">
              <div className="circle red"></div>
              <div>
                <h4>Supply Disruptions</h4>
                <p>Factory shutdown in Vietnam</p>
              </div>
            </div>

            <div className="ai-box">
              <h4>AI Recommendation</h4>
              <p>
                Consider diversifying Electronics suppliers to reduce concentration
                risk in Southeast Asia region.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="rtm-right">
            <RealTimeRiskMap activeAlert={activeAlert} />
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="rtm-bottom">

          {/* Critical Alerts */}
          <div
            className="rtm-bottom-card red"
            onClick={() =>
              setActiveAlert({
                title: "Critical Alerts",
                message: "Hurricane warning affecting Southeast suppliers",
              })
            }
          >
            <span className="badge red">5 New</span>

            <h4>Critical Alerts</h4>
            <p>Hurricane warning affecting Southeast suppliers</p>
          </div>

          {/* Logistics Issues */}
          <div
            className="rtm-bottom-card orange"
            onClick={() =>
              setActiveAlert({
                title: "Logistics Issues",
                message: "Major delays at Los Angeles port",
              })
            }
          >
            <span className="badge orange">3 Active</span>

            <h4>Logistics Issues</h4>
            <p>Major delays at Los Angeles port</p>
          </div>

          {/* Market Updates */}
          <div
            className="rtm-bottom-card yellow"
            onClick={() =>
              setActiveAlert({
                title: "Market Updates",
                message: "Raw material prices increased by 8%",
              })
            }
          >
            <span className="badge yellow">Updated</span>

            <h4>Market Updates</h4>
            <p>Raw material prices increased by 8%</p>
          </div>
        </div>

      </div>
    </div>
  );
}
