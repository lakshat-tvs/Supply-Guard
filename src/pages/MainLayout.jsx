import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import NTier from "./NTier";
import Worklist from "./Worklist";
import ScenarioCatalog from "./ScenarioCatalog";
import CreateScenario from "./CreateScenario";
import ScenarioShocks from "./ScenarioShocks";
import ScenarioMitigation from "./ScenarioMitigation";
import ScenarioReview from "./ScenarioReview"; 
import ScenarioResults from "./ScenarioResults"; 
import CompareScenarios from "./CompareScenarios"; 

import "../styles/MainLayout.css";
import RiskConfiguration from "./RiskConfiguration";

export default function MainLayout() {
  // ✅ Default active page
  const [active, setActive] = useState("overview");

  const renderContent = () => {
    switch (active) {
      case "overview":
        return (
          <Dashboard
            onViewReport={() => setActive("worklist")}
            onSimulate={() => setActive("view-scenario")} // Go to Scenario Catalog
          />
        );

      case "n-tier":
        return <NTier />;

      // ✅ Scenario catalog view
      case "scenario":
      case "view-scenario":
        return <ScenarioCatalog setActive={setActive} />;

      // ✅ Step 1: Create Scenario
      case "create-scenario":
        return <CreateScenario setActive={setActive} />;

      // ✅ Step 2: Scenario Shocks
      case "scenario-shocks":
        return <ScenarioShocks setActive={setActive} />;

      // ✅ Step 3: Mitigations
      case "mitigations":
      case "scenario-mitigation":
        return <ScenarioMitigation setActive={setActive} />;

      // ✅ Step 4: Review & Run (NEW)
      case "review":
      case "scenario-review":
        return <ScenarioReview setActive={setActive} />;

      // ✅ Compare Scenarios view
      case "compare-scenarios":
        return <CompareScenarios setActive={setActive} />;

      case "results":
      case "scenario-results":
        return <ScenarioResults setActive={setActive} />;

      case "worklist":
        return <Worklist />;

      case "risk-configuration":
        return <RiskConfiguration />;


      case "settings":
        return <h2 style={{ padding: "30px" }}>Settings Page Coming Soon</h2>;

      default:
        return null;
    }
  };

  return (
    <div className="main-layout">
      {/* ✅ Sidebar remains synced */}
      <Sidebar active={active} setActive={setActive} />

      {/* ✅ Main content area */}
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}





















































