


// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Dashboard from "./Dashboard";
// import "../styles/MainLayout.css";
// import Worklist from "./Worklist";


// export default function MainLayout() {
//   const [active, setActive] = useState("n-tier");

//   const renderContent = () => {
//     switch (active) {
//       case "overview":
//         // ✅ Show the actual Dashboard page here
//         return <Dashboard />;
//       case "n-tier":
//         return <h2 style={{ padding: "30px" }}>N-tire Coming Soon</h2>;
//       case "scenario":
//         return <h2 style={{ padding: "30px" }}>Scenario Analysis Coming Soon</h2>;
//       case "worklist":
//         return <Worklist />;;
//       case "settings":
//         return <h2 style={{ padding: "30px" }}>Settings Page Coming Soon</h2>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="main-layout">
//       <Sidebar active={active} setActive={setActive} />
//       <div className="main-content">{renderContent()}</div>
//     </div>
//   );
// }



















































// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Dashboard from "./Dashboard";
// import NTier from "./NTier";
// import "../styles/MainLayout.css";
// import Worklist from "./Worklist";

// export default function MainLayout() {
//   // ✅ Set initial active tab to "overview"
//   const [active, setActive] = useState("overview");

//   const renderContent = () => {
//     switch (active) {
//       case "overview":
//         return <Dashboard />;
//       case "n-tier":
//         return <NTier />;
//       case "scenario":
//         return <h2 style={{ padding: "30px" }}>Scenario Analysis Coming Soon</h2>;
//       case "worklist":
//         return <Worklist />;
//       case "settings":
//         return <h2 style={{ padding: "30px" }}>Settings Page Coming Soon</h2>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="main-layout">
//       <Sidebar active={active} setActive={setActive} />
//       <div className="main-content">{renderContent()}</div>
//     </div>
//   );
// }
































// // src/pages/MainLayout.jsx
// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Dashboard from "./Dashboard";
// import NTier from "./NTier";
// import "../styles/MainLayout.css";
// import ScenarioCatalog from "./ScenarioCatalog";
// import Worklist from "./Worklist";

// export default function MainLayout() {
//   const [active, setActive] = useState("overview");

//   const renderContent = () => {
//     switch (active) {
//       case "overview":
//         // ✅ Pass the callback to Dashboard
//         return <Dashboard onViewReport={() => setActive("worklist")} />;
//       case "n-tier":
//         return <NTier />;
//       case "scenario":
//         return <h2 style={{ padding: "30px" }}>Scenario Analysis Coming Soon</h2>;
//       case "worklist":
//         return <Worklist />;
//       case "settings":
//         return <h2 style={{ padding: "30px" }}>Settings Page Coming Soon</h2>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="main-layout">
//       <Sidebar active={active} setActive={setActive} />
//       <div className="main-content">{renderContent()}</div>
//     </div>
//   );
// }





































// src/pages/MainLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import NTier from "./NTier";
import Worklist from "./Worklist";
import ScenarioCatalog from "./ScenarioCatalog"; // ✅ Added
import "../styles/MainLayout.css";

export default function MainLayout() {
  // Default active page
  const [active, setActive] = useState("overview");

  // Function to control which page is displayed
  const renderContent = () => {
    switch (active) {
      case "overview":
        // ✅ Added both actions:
        // - onViewReport: opens Worklist
        // - onSimulate: opens ScenarioCatalog
        return (
          <Dashboard
            onViewReport={() => setActive("worklist")}
            onSimulate={() => setActive("scenario-catalog")}
          />
        );

      case "n-tier":
        return <NTier />;

      case "scenario":
        return (
          <h2 style={{ padding: "30px" }}>Scenario Analysis Coming Soon</h2>
        );

      case "scenario-catalog": // ✅ New route for scenario catalog
        return <ScenarioCatalog />;

      case "worklist":
        return <Worklist />;

      case "settings":
        return (
          <h2 style={{ padding: "30px" }}>Settings Page Coming Soon</h2>
        );

      default:
        return null;
    }
  };

  // Layout with sidebar and dynamic content
  return (
    <div className="main-layout">
      <Sidebar active={active} setActive={setActive} />
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}
