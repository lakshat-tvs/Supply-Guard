import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import {
  LayoutDashboard,
  Layers,
  BarChart2,
  ClipboardList,
  Settings,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Eye,
} from "lucide-react";

export default function Sidebar({ active, setActive }) {
  const [collapsed, setCollapsed] = useState(false);
  const [showScenarioSubmenu, setShowScenarioSubmenu] = useState(true);

  const menuItems = [
    { id: "overview", label: "Overview Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "n-tier", label: "N-Tier Explorer", icon: <Layers size={18} /> },
    {
      id: "scenario",
      label: "Scenario Analysis",
      icon: <BarChart2 size={18} />,
      subItems: [
        { id: "view-scenario", label: "View Scenario", icon: <Eye size={14} /> },
        { id: "create-scenario", label: "Create Scenario", icon: <PlusCircle size={14} /> },
      ],
    },
    { id: "worklist", label: "Worklist", icon: <ClipboardList size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  useEffect(() => {
    if (active.includes("scenario")) {
      setShowScenarioSubmenu(true);
    }
  }, [active]);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      {!collapsed && (
        <h2 className="sidebar-title">
          Supply Chain
          <br />
          Intelligence
        </h2>
      )}

      <ul className="sidebar-menu">
        {menuItems.map((item) => {
          const isActiveParent =
            active === item.id ||
            active.includes(item.id) ||
            (item.id === "scenario" && active.startsWith("scenario"));

          return (
            <React.Fragment key={item.id}>
              <li
                className={`menu-item ${isActiveParent ? "active" : ""}`}
                onClick={() => {
                  if (item.id === "scenario") {
                    setActive("view-scenario");
                    setShowScenarioSubmenu(true);
                  } else {
                    setActive(item.id);
                  }
                }}
              >
                <span className="menu-icon">{item.icon}</span>
                {!collapsed && <span className="menu-label">{item.label}</span>}
              </li>

              {item.subItems &&
                showScenarioSubmenu &&
                !collapsed &&
                (active.includes("scenario") || active === "view-scenario") && (
                  <ul className="submenu">
                    {item.subItems.map((sub) => {
                      const isActiveSub =
                        active === sub.id ||
                        (sub.id === "create-scenario" && active === "scenario-shocks");

                      return (
                        <li
                          key={sub.id}
                          className={`submenu-item ${isActiveSub ? "active" : ""}`}
                          onClick={() => setActive(sub.id)}
                        >
                          <span className="submenu-icon">{sub.icon}</span>
                          <span className="submenu-label">{sub.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}






















































