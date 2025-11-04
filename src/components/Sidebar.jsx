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
} from "lucide-react";

export default function Sidebar({ active, setActive }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: "overview", label: "Overview Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "n-tier", label: "N-Tier Explorer", icon: <Layers size={18} /> },
    { id: "scenario", label: "Scenario Analysis", icon: <BarChart2 size={18} /> },
    { id: "worklist", label: "Worklist", icon: <ClipboardList size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Floating Toggle Button */}
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
          <li
            key={item.id}
            className={`menu-item ${active === item.id ? "active" : ""}`}
            onClick={() => setActive(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            {!collapsed && <span className="menu-label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
