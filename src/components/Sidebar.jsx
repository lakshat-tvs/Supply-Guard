import React, { useState } from "react";
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
        { id: "create-scenario", label: "Create Scenario" }, // ✅ only this subpage
      ],
    },
    { id: "worklist", label: "Worklist", icon: <ClipboardList size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Toggle Sidebar */}
      <button
        className="toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      {/* Sidebar Title */}
      {!collapsed && (
        <h2 className="sidebar-title">
          Supply Chain
          <br />
          Intelligence
        </h2>
      )}

      {/* Menu Items */}
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <React.Fragment key={item.id}>
            <li
              className={`menu-item ${active === item.id ? "active" : ""}`}
              onClick={() => {
                setActive(item.id);
                if (item.subItems) setShowScenarioSubmenu(!showScenarioSubmenu);
              }}
            >
              <span className="menu-icon">{item.icon}</span>
              {!collapsed && <span className="menu-label">{item.label}</span>}
            </li>

            {/* ✅ Submenu for "Create Scenario" */}
            {item.subItems && showScenarioSubmenu && active.includes("scenario") && !collapsed && (
              <ul className="submenu">
                {item.subItems.map((sub) => (
                  <li
                    key={sub.id}
                    className={`submenu-item ${active === sub.id ? "active" : ""}`}
                    onClick={() => setActive(sub.id)}
                  >
                    <span className="submenu-icon">
                      <PlusCircle size={14} />
                    </span>
                    <span className="submenu-label">{sub.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
