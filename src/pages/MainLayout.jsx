import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import NTier from "./NTier";
import Worklist from "./Worklist";
import ScenarioCatalog from "./ScenarioCatalog";
import CreateScenario from "./CreateScenario";
import "../styles/MainLayout.css";

export default function MainLayout() {
  const [active, setActive] = useState("overview");

  const renderContent = () => {
    switch (active) {
      case "overview":
        return (
          <Dashboard
            onViewReport={() => setActive("worklist")}
            // ✅ Use "scenario" instead of "scenario-catalog" so sidebar highlights correctly
            onSimulate={() => setActive("scenario")}
          />
        );

      case "n-tier":
        return <NTier />;

      // ✅ "scenario" will now load ScenarioCatalog directly
      case "scenario":
        return <ScenarioCatalog />;
      case "create-scenario":
        return <CreateScenario setActive={setActive} />;


      case "worklist":
        return <Worklist />;

      case "settings":
        return <h2 style={{ padding: "30px" }}>Settings Page Coming Soon</h2>;

      default:
        return null;
    }
  };

  return (
    <div className="main-layout">
      <Sidebar active={active} setActive={setActive} />
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}































