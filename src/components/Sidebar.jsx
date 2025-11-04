// import React, { useState } from "react";
// import "../styles/Sidebar.css";
// import {
//   LayoutDashboard,
//   Layers,
//   BarChart2,
//   ClipboardList,
//   Settings,
//   ChevronLeft,
//   ChevronRight,
//   PlusCircle,
// } from "lucide-react";

// export default function Sidebar({ active, setActive }) {
//   const [collapsed, setCollapsed] = useState(false);
//   const [showScenarioSubmenu, setShowScenarioSubmenu] = useState(true);

//   const menuItems = [
//     { id: "overview", label: "Overview Dashboard", icon: <LayoutDashboard size={18} /> },
//     { id: "n-tier", label: "N-Tier Explorer", icon: <Layers size={18} /> },
//     {
//       id: "scenario",
//       label: "Scenario Analysis",
//       icon: <BarChart2 size={18} />,
//       subItems: [
//         { id: "create-scenario", label: "Create Scenario" }, // ✅ only this subpage
//       ],
//     },
//     { id: "worklist", label: "Worklist", icon: <ClipboardList size={18} /> },
//     { id: "settings", label: "Settings", icon: <Settings size={18} /> },
//   ];

//   return (
//     <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       {/* Toggle Sidebar */}
//       <button
//         className="toggle-btn"
//         onClick={() => setCollapsed(!collapsed)}
//         aria-label="Toggle sidebar"
//       >
//         {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
//       </button>

//       {/* Sidebar Title */}
//       {!collapsed && (
//         <h2 className="sidebar-title">
//           Supply Chain
//           <br />
//           Intelligence
//         </h2>
//       )}

//       {/* Menu Items */}
//       <ul className="sidebar-menu">
//         {menuItems.map((item) => (
//           <React.Fragment key={item.id}>
//             <li
//               className={`menu-item ${active === item.id ? "active" : ""}`}
//               onClick={() => {
//                 setActive(item.id);
//                 if (item.subItems) setShowScenarioSubmenu(!showScenarioSubmenu);
//               }}
//             >
//               <span className="menu-icon">{item.icon}</span>
//               {!collapsed && <span className="menu-label">{item.label}</span>}
//             </li>

//             {/* ✅ Submenu for "Create Scenario" */}
//             {item.subItems && showScenarioSubmenu && active.includes("scenario") && !collapsed && (
//               <ul className="submenu">
//                 {item.subItems.map((sub) => (
//                   <li
//                     key={sub.id}
//                     className={`submenu-item ${active === sub.id ? "active" : ""}`}
//                     onClick={() => setActive(sub.id)}
//                   >
//                     <span className="submenu-icon">
//                       <PlusCircle size={14} />
//                     </span>
//                     <span className="submenu-label">{sub.label}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </React.Fragment>
//         ))}
//       </ul>
//     </div>
//   );
// }






















































































// import React, { useState, useEffect } from "react";
// import "../styles/Sidebar.css";
// import {
//   LayoutDashboard,
//   Layers,
//   BarChart2,
//   ClipboardList,
//   Settings,
//   ChevronLeft,
//   ChevronRight,
//   PlusCircle,
//   Eye,
// } from "lucide-react";

// export default function Sidebar({ active, setActive }) {
//   const [collapsed, setCollapsed] = useState(false);
//   const [showScenarioSubmenu, setShowScenarioSubmenu] = useState(true);

//   const menuItems = [
//     { id: "overview", label: "Overview Dashboard", icon: <LayoutDashboard size={18} /> },
//     { id: "n-tier", label: "N-Tier Explorer", icon: <Layers size={18} /> },
//     {
//       id: "scenario",
//       label: "Scenario Analysis",
//       icon: <BarChart2 size={18} />,
//       // 👇 View Scenario first, then Create Scenario
//       subItems: [
//         { id: "view-scenario", label: "View Scenario", icon: <Eye size={14} /> },
//         { id: "create-scenario", label: "Create Scenario", icon: <PlusCircle size={14} /> },
//       ],
//     },
//     { id: "worklist", label: "Worklist", icon: <ClipboardList size={18} /> },
//     { id: "settings", label: "Settings", icon: <Settings size={18} /> },
//   ];

//   useEffect(() => {
//     if (active.includes("scenario")) {
//       setShowScenarioSubmenu(true);
//     }
//   }, [active]);

//   return (
//     <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       <button
//         className="toggle-btn"
//         onClick={() => setCollapsed(!collapsed)}
//         aria-label="Toggle sidebar"
//       >
//         {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
//       </button>

//       {!collapsed && (
//         <h2 className="sidebar-title">
//           Supply Chain
//           <br />
//           Intelligence
//         </h2>
//       )}

//       <ul className="sidebar-menu">
//         {menuItems.map((item) => (
//           <React.Fragment key={item.id}>
//             <li
//               className={`menu-item ${
//                 active === item.id || active.includes(item.id) ? "active" : ""
//               }`}
//               onClick={() => {
//                 if (item.id === "scenario") {
//                   setActive("create-scenario"); // Default opens Create Scenario submenu
//                   setShowScenarioSubmenu(true);
//                 } else {
//                   setActive(item.id);
//                 }
//               }}
//             >
//               <span className="menu-icon">{item.icon}</span>
//               {!collapsed && <span className="menu-label">{item.label}</span>}
//             </li>

//             {/* ✅ Submenu Logic */}
//             {item.subItems &&
//               showScenarioSubmenu &&
//               active.includes("scenario") &&
//               !collapsed && (
//                 <ul className="submenu">
//                   {item.subItems.map((sub) => (
//                     <li
//                       key={sub.id}
//                       className={`submenu-item ${active === sub.id ? "active" : ""}`}
//                       onClick={() => {
//                         // 👇 redirect "View Scenario" to ScenarioCatalog
//                         if (sub.id === "view-scenario") {
//                           setActive("scenario");
//                         } else {
//                           setActive(sub.id);
//                         }
//                       }}
//                     >
//                       <span className="submenu-icon">{sub.icon}</span>
//                       <span className="submenu-label">{sub.label}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//           </React.Fragment>
//         ))}
//       </ul>
//     </div>
//   );
// }


































// import React, { useState, useEffect } from "react";
// import "../styles/Sidebar.css";
// import {
//   LayoutDashboard,
//   Layers,
//   BarChart2,
//   ClipboardList,
//   Settings,
//   ChevronLeft,
//   ChevronRight,
//   PlusCircle,
//   Eye,
// } from "lucide-react";

// export default function Sidebar({ active, setActive }) {
//   const [collapsed, setCollapsed] = useState(false);
//   const [showScenarioSubmenu, setShowScenarioSubmenu] = useState(true);

//   const menuItems = [
//     { id: "overview", label: "Overview Dashboard", icon: <LayoutDashboard size={18} /> },
//     { id: "n-tier", label: "N-Tier Explorer", icon: <Layers size={18} /> },
//     {
//       id: "scenario",
//       label: "Scenario Analysis",
//       icon: <BarChart2 size={18} />,
//       subItems: [
//         { id: "view-scenario", label: "View Scenario", icon: <Eye size={14} /> },
//         { id: "create-scenario", label: "Create Scenario", icon: <PlusCircle size={14} /> },
//       ],
//     },
//     { id: "worklist", label: "Worklist", icon: <ClipboardList size={18} /> },
//     { id: "settings", label: "Settings", icon: <Settings size={18} /> },
//   ];

//   useEffect(() => {
//     if (active.includes("scenario")) {
//       setShowScenarioSubmenu(true);
//     }
//   }, [active]);

//   return (
//     <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       <button
//         className="toggle-btn"
//         onClick={() => setCollapsed(!collapsed)}
//         aria-label="Toggle sidebar"
//       >
//         {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
//       </button>

//       {!collapsed && (
//         <h2 className="sidebar-title">
//           Supply Chain
//           <br />
//           Intelligence
//         </h2>
//       )}

//       <ul className="sidebar-menu">
//         {menuItems.map((item) => (
//           <React.Fragment key={item.id}>
//             <li
//               className={`menu-item ${
//                 active === item.id || active.includes(item.id) ? "active" : ""
//               }`}
//               onClick={() => {
//                 if (item.id === "scenario") {
//                   setActive("scenario"); // ✅ Default opens View Scenario
//                   setShowScenarioSubmenu(true);
//                 } else {
//                   setActive(item.id);
//                 }
//               }}
//             >
//               <span className="menu-icon">{item.icon}</span>
//               {!collapsed && <span className="menu-label">{item.label}</span>}
//             </li>

//             {/* ✅ Submenu Logic */}
//             {item.subItems &&
//               showScenarioSubmenu &&
//               active.includes("scenario") &&
//               !collapsed && (
//                 <ul className="submenu">
//                   {item.subItems.map((sub) => (
//                     <li
//                       key={sub.id}
//                       className={`submenu-item ${active === sub.id ? "active" : ""}`}
//                       onClick={() => {
//                         // 👇 redirect "View Scenario" to ScenarioCatalog
//                         if (sub.id === "view-scenario") {
//                           setActive("scenario");
//                         } else {
//                           setActive(sub.id);
//                         }
//                       }}
//                     >
//                       <span className="submenu-icon">{sub.icon}</span>
//                       <span className="submenu-label">{sub.label}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//           </React.Fragment>
//         ))}
//       </ul>
//     </div>
//   );
// }




















































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

  // Auto-expand submenu when a scenario-related page is active
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
        aria-label="Toggle sidebar"
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
          // ✅ Highlight parent if "view-scenario" or any scenario subpage is active
          const isActiveParent =
            active === item.id ||
            active.includes(item.id) ||
            (item.id === "scenario" && active === "view-scenario");

          return (
            <React.Fragment key={item.id}>
              <li
                className={`menu-item ${isActiveParent ? "active" : ""}`}
                onClick={() => {
                  if (item.id === "scenario") {
                    setActive("view-scenario"); // ✅ Default shows ScenarioCatalog
                    setShowScenarioSubmenu(true);
                  } else {
                    setActive(item.id);
                  }
                }}
              >
                <span className="menu-icon">{item.icon}</span>
                {!collapsed && <span className="menu-label">{item.label}</span>}
              </li>

              {/* ✅ Scenario Submenu */}
              {item.subItems &&
                showScenarioSubmenu &&
                (active.includes("scenario") || active === "view-scenario") &&
                !collapsed && (
                  <ul className="submenu">
                    {item.subItems.map((sub) => (
                      <li
                        key={sub.id}
                        className={`submenu-item ${active === sub.id ? "active" : ""}`}
                        onClick={() => {
                          if (sub.id === "view-scenario") {
                            setActive("view-scenario"); // shows ScenarioCatalog + stays highlighted
                          } else {
                            setActive(sub.id); // opens CreateScenario
                          }
                        }}
                      >
                        <span className="submenu-icon">{sub.icon}</span>
                        <span className="submenu-label">{sub.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
