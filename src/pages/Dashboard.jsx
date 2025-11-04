// import React, { useState } from "react";
// import "../styles/Dashboard.css";
// import {
//   Database,
//   FileText,
//   Clipboard,
//   CreditCard,
//   AlertTriangle,
//   ArrowUp,
//   ArrowDown,
// } from "lucide-react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SupplyNetwork from "../components/SupplyNetwork";


// export default function Dashboard() {
//   const [highRiskOnly, setHighRiskOnly] = useState(false);
//   const [expandedPart, setExpandedPart] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const metrics = [
//     { title: "Items Monitored", value: "50,000+", change: "+12%", trend: "up", icon: <Database size={22} />, color: "#E7EEFF" },
//     { title: "Vendors Assessed", value: "2,000+", change: "+8%", trend: "up", icon: <FileText size={22} />, color: "#E6FBF0" },
//     { title: "POs per Year", value: "200K+", change: "+15%", trend: "up", icon: <Clipboard size={22} />, color: "#F6EDFF" },
//     { title: "Contract Value", value: "£200M", change: "+22%", trend: "up", icon: <CreditCard size={22} />, color: "#FFF6EB" },
//     { title: "Risk Score", value: "7.2", change: "-5%", trend: "down", icon: <AlertTriangle size={22} />, color: "#FFF1F2" },
//   ];

//   const riskData = [
//     { name: "High Risk", value: 15, color: "#ef4444" },
//     { name: "Medium Risk", value: 35, color: "#f59e0b" },
//     { name: "Low Risk", value: 50, color: "#22c55e" },
//   ];

//   const suppliers = [
//     {
//       name: "Connector A-100",
//       company: "Acme Electronics",
//       category: "Electronics",
//       stock: "1.2 mo",
//       risk: "HIGH",
//       email: "lakshat0404@gmail.com",
//     },
//     {
//       name: "Valve X2-22",
//       company: "HydraTech Ltd",
//       category: "Hydraulic",
//       stock: "3.1 mo",
//       risk: "MEDIUM",
//       email: "supplier2@example.com",
//     },
//     {
//       name: "Motor M-043",
//       company: "PowerTech Inc",
//       category: "Powertrain",
//       stock: "5.8 mo",
//       risk: "LOW",
//       email: "supplier3@example.com",
//     },
//   ];

//   const filteredSuppliers = highRiskOnly
//     ? suppliers.filter((s) => s.risk === "HIGH")
//     : suppliers;

//   const getRiskStyles = (risk) => {
//     switch (risk) {
//       case "HIGH":
//         return {
//           backgroundColor: "#fee2e2",
//           border: "1px solid #dc2626",
//           textColor: "#b91c1c",
//           subTextColor: "#7f1d1d",
//           boxColor: "#ffe5e5",
//         };
//       case "MEDIUM":
//         return {
//           backgroundColor: "#fff7e6",
//           border: "1px solid #f59e0b",
//           textColor: "#b45309",
//           subTextColor: "#92400e",
//           boxColor: "#fff3cd",
//         };
//       case "LOW":
//         return {
//           backgroundColor: "#ecfdf5",
//           border: "1px solid #22c55e",
//           textColor: "#065f46",
//           subTextColor: "#047857",
//           boxColor: "#d1fae5",
//         };
//       default:
//         return {};
//     }
//   };

//   // ✅ Send email and show toast
//   const handleContactSupplier = async (supplier) => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           supplierEmail: supplier.email,
//           supplierName: supplier.company,
//           message: `Dear ${supplier.company}, your item (${supplier.name}) is currently flagged as ${supplier.risk} risk. Please review and provide an update.`,
//         }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         toast.success(`📩 Email sent to ${supplier.company}`, {
//           style: {
//             background: "linear-gradient(90deg, #6a11cb, #2575fc)",
//             color: "#fff",
//             fontWeight: "bold",
//           },
//           icon: "🚀",
//         });
//       } else {
//         toast.error(`❌ Failed to send: ${data.error}`, {
//           style: {
//             background: "linear-gradient(90deg, #ff512f, #dd2476)",
//             color: "#fff",
//             fontWeight: "bold",
//           },
//         });
//       }
//     } catch (err) {
//       toast.error("⚠️ Error sending email", {
//         style: {
//           background: "linear-gradient(90deg, #ff512f, #f09819)",
//           color: "#fff",
//           fontWeight: "bold",
//         },
//       });
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Toast container renders the toasts */}
//       <ToastContainer position="top-right" autoClose={2500} hideProgressBar theme="colored" />

//       <div className="metrics-row">
//         {metrics.map((m, i) => (
//           <div className="metric-card" key={i}>
//             <div className="metric-header">
//               <span className="metric-title">{m.title}</span>
//               <div className="metric-icon" style={{ backgroundColor: m.color }}>
//                 {m.icon}
//               </div>
//             </div>
//             <div className="metric-value">{m.value}</div>
//             <div className={`metric-change ${m.trend}`}>
//               {m.trend === "up" ? (
//                 <>
//                   <ArrowUp size={14} /> {m.change}
//                 </>
//               ) : (
//                 <>
//                   <ArrowDown size={14} /> {m.change}
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="dashboard-main">
//         <div className="table-section">
//           <div className="table-header">
//             <h3>Supply Chain Risk Dashboard</h3>
//             <label className="toggle-label">
//               High Risk Only
//               <div
//                 className={`toggle-switch ${highRiskOnly ? "active" : ""}`}
//                 onClick={() => setHighRiskOnly(!highRiskOnly)}
//               >
//                 <div className="toggle-circle"></div>
//               </div>
//             </label>
//           </div>

//           <table className="risk-table">
//             <thead>
//               <tr>
//                 <th>Part/Supplier</th>
//                 <th>Category</th>
//                 <th>Stock</th>
//                 <th>Simulations</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSuppliers.map((s, i) => {
//                 const styles = getRiskStyles(s.risk);
//                 return (
//                   <React.Fragment key={i}>
//                     <tr>
//                       <td>
//                         <strong>{s.name}</strong>
//                         <br />
//                         <span>{s.company}</span>
//                       </td>
//                       <td>{s.category}</td>
//                       <td>{s.stock}</td>
//                       <td>
//                         <button className="simulate-btn">Simulate</button>
//                       </td>
//                       <td>
//                         <div
//                           className={`risk-status ${s.risk.toLowerCase()}`}
//                           onClick={() =>
//                             setExpandedPart(expandedPart === s.name ? null : s.name)
//                           }
//                         >
//                           <span className="risk-label">{s.risk}</span>
//                           <span className="separator">|</span>
//                           <span className="view-label">View ▾</span>
//                         </div>
//                       </td>
//                     </tr>

//                     {expandedPart === s.name && (
//                       <tr className="expanded-row">
//                         <td colSpan="5">
//                           <div
//                             className="expanded-card"
//                             style={{
//                               backgroundColor: styles.backgroundColor,
//                               border: styles.border,
//                             }}
//                           >
//                             <div className="expanded-header">
//                               <div className="header-left">
//                                 <AlertTriangle size={18} color={styles.textColor} />
//                                 <h4 style={{ color: styles.textColor }}>
//                                   Contact Alternative Supplier
//                                 </h4>
//                               </div>
//                               {s.risk === "HIGH" && (
//                                 <span className="due-today">Due Today</span>
//                               )}
//                             </div>

//                             <p
//                               className="expanded-subtext"
//                               style={{ color: styles.subTextColor }}
//                             >
//                               {s.category} • {s.name} • Stock critically{" "}
//                               {s.risk.toLowerCase()}
//                             </p>

//                             <div
//                               className="expanded-info"
//                               style={{ background: styles.boxColor }}
//                             >
//                               <p><span>Current Stock:</span> <strong>{s.stock}</strong></p>
//                               <p><span>Reorder Point:</span> <strong>3 months</strong></p>
//                               <p><span>Alternative Suppliers:</span> <strong>3 available</strong></p>
//                               <p><span>Last Order:</span> <strong>45 days ago</strong></p>
//                             </div>

//                             <div className="expanded-buttons">
//                               <button
//                                 className="btn-contact"
//                                 onClick={() => handleContactSupplier(s)}
//                                 disabled={loading}
//                               >
//                                 {loading ? "Sending..." : "📞 Contact Supplier"}
//                               </button>
//                               <button className="btn-report">📄 View Report</button>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         <div className="chart-section">
//           <h3>Risk Distribution by Category</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={riskData}
//                 dataKey="value"
//                 innerRadius={70}
//                 outerRadius={100}
//               >
//                 {riskData.map((entry, index) => (
//                   <Cell key={index} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//           <ul className="legend">
//             {riskData.map((item, i) => (
//               <li key={i}>
//                 <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
//                 {item.name} <span className="legend-value">{item.value}%</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <SupplyNetwork />
//     </div>
//   );
// }































































// import React, { useState } from "react";
// import "../styles/Dashboard.css";
// import {
//   Database,
//   FileText,
//   Clipboard,
//   CreditCard,
//   AlertTriangle,
//   ArrowUp,
//   ArrowDown,
// } from "lucide-react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SupplyNetwork from "../components/SupplyNetwork";

// export default function Dashboard({ onViewReport }) {
//   const [highRiskOnly, setHighRiskOnly] = useState(false);
//   const [expandedPart, setExpandedPart] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const metrics = [
//     { title: "Items Monitored", value: "50,000+", change: "+12%", trend: "up", icon: <Database size={22} />, color: "#E7EEFF" },
//     { title: "Vendors Assessed", value: "2,000+", change: "+8%", trend: "up", icon: <FileText size={22} />, color: "#E6FBF0" },
//     { title: "POs per Year", value: "200K+", change: "+15%", trend: "up", icon: <Clipboard size={22} />, color: "#F6EDFF" },
//     { title: "Contract Value", value: "£200M", change: "+22%", trend: "up", icon: <CreditCard size={22} />, color: "#FFF6EB" },
//     { title: "Risk Score", value: "7.2", change: "-5%", trend: "down", icon: <AlertTriangle size={22} />, color: "#FFF1F2" },
//   ];

//   const riskData = [
//     { name: "High Risk", value: 15, color: "#ef4444" },
//     { name: "Medium Risk", value: 35, color: "#f59e0b" },
//     { name: "Low Risk", value: 50, color: "#22c55e" },
//   ];

//   const suppliers = [
//     {
//       name: "Connector A-100",
//       company: "Acme Electronics",
//       category: "Electronics",
//       stock: "1.2 mo",
//       risk: "HIGH",
//       email: "lakshat0404@gmail.com",
//     },
//     {
//       name: "Valve X2-22",
//       company: "HydraTech Ltd",
//       category: "Hydraulic",
//       stock: "3.1 mo",
//       risk: "MEDIUM",
//       email: "supplier2@example.com",
//     },
//     {
//       name: "Motor M-043",
//       company: "PowerTech Inc",
//       category: "Powertrain",
//       stock: "5.8 mo",
//       risk: "LOW",
//       email: "supplier3@example.com",
//     },
//   ];

//   const filteredSuppliers = highRiskOnly
//     ? suppliers.filter((s) => s.risk === "HIGH")
//     : suppliers;

//   const getRiskStyles = (risk) => {
//     switch (risk) {
//       case "HIGH":
//         return {
//           backgroundColor: "#fee2e2",
//           border: "1px solid #dc2626",
//           textColor: "#b91c1c",
//           subTextColor: "#7f1d1d",
//           boxColor: "#ffe5e5",
//         };
//       case "MEDIUM":
//         return {
//           backgroundColor: "#fff7e6",
//           border: "1px solid #f59e0b",
//           textColor: "#b45309",
//           subTextColor: "#92400e",
//           boxColor: "#fff3cd",
//         };
//       case "LOW":
//         return {
//           backgroundColor: "#ecfdf5",
//           border: "1px solid #22c55e",
//           textColor: "#065f46",
//           subTextColor: "#047857",
//           boxColor: "#d1fae5",
//         };
//       default:
//         return {};
//     }
//   };

//   const handleContactSupplier = async (supplier) => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           supplierEmail: supplier.email,
//           supplierName: supplier.company,
//           message: `Dear ${supplier.company}, your item (${supplier.name}) is currently flagged as ${supplier.risk} risk. Please review and provide an update.`,
//         }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         toast.success(`📩 Email sent to ${supplier.company}`, {
//           style: {
//             background: "linear-gradient(90deg, #6a11cb, #2575fc)",
//             color: "#fff",
//             fontWeight: "bold",
//           },
//           icon: "🚀",
//         });
//       } else {
//         toast.error(`❌ Failed to send: ${data.error}`, {
//           style: {
//             background: "linear-gradient(90deg, #ff512f, #dd2476)",
//             color: "#fff",
//             fontWeight: "bold",
//           },
//         });
//       }
//     } catch (err) {
//       toast.error("⚠️ Error sending email", {
//         style: {
//           background: "linear-gradient(90deg, #ff512f, #f09819)",
//           color: "#fff",
//           fontWeight: "bold",
//         },
//       });
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="dashboard-container">
//       <ToastContainer position="top-right" autoClose={2500} hideProgressBar theme="colored" />

//       <div className="metrics-row">
//         {metrics.map((m, i) => (
//           <div className="metric-card" key={i}>
//             <div className="metric-header">
//               <span className="metric-title">{m.title}</span>
//               <div className="metric-icon" style={{ backgroundColor: m.color }}>
//                 {m.icon}
//               </div>
//             </div>
//             <div className="metric-value">{m.value}</div>
//             <div className={`metric-change ${m.trend}`}>
//               {m.trend === "up" ? (
//                 <>
//                   <ArrowUp size={14} /> {m.change}
//                 </>
//               ) : (
//                 <>
//                   <ArrowDown size={14} /> {m.change}
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="dashboard-main">
//         <div className="table-section">
//           <div className="table-header">
//             <h3>Supply Chain Risk Dashboard</h3>
//             <label className="toggle-label">
//               High Risk Only
//               <div
//                 className={`toggle-switch ${highRiskOnly ? "active" : ""}`}
//                 onClick={() => setHighRiskOnly(!highRiskOnly)}
//               >
//                 <div className="toggle-circle"></div>
//               </div>
//             </label>
//           </div>

//           <table className="risk-table">
//             <thead>
//               <tr>
//                 <th>Part/Supplier</th>
//                 <th>Category</th>
//                 <th>Stock</th>
//                 <th>Simulations</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSuppliers.map((s, i) => {
//                 const styles = getRiskStyles(s.risk);
//                 return (
//                   <React.Fragment key={i}>
//                     <tr>
//                       <td>
//                         <strong>{s.name}</strong>
//                         <br />
//                         <span>{s.company}</span>
//                       </td>
//                       <td>{s.category}</td>
//                       <td>{s.stock}</td>
//                       <td>
//                         <button className="simulate-btn" onClick={() => onSimulate()}>
//                           Simulate
//                         </button>
//                       </td>
//                       <td>
//                         <div
//                           className={`risk-status ${s.risk.toLowerCase()}`}
//                           onClick={() =>
//                             setExpandedPart(expandedPart === s.name ? null : s.name)
//                           }
//                         >
//                           <span className="risk-label">{s.risk}</span>
//                           <span className="separator">|</span>
//                           <span className="view-label">View ▾</span>
//                         </div>
//                       </td>
//                     </tr>

//                     {expandedPart === s.name && (
//                       <tr className="expanded-row">
//                         <td colSpan="5">
//                           <div
//                             className="expanded-card"
//                             style={{
//                               backgroundColor: styles.backgroundColor,
//                               border: styles.border,
//                             }}
//                           >
//                             <div className="expanded-header">
//                               <div className="header-left">
//                                 <AlertTriangle size={18} color={styles.textColor} />
//                                 <h4 style={{ color: styles.textColor }}>
//                                   Contact Alternative Supplier
//                                 </h4>
//                               </div>
//                               {s.risk === "HIGH" && (
//                                 <span className="due-today">Due Today</span>
//                               )}
//                             </div>

//                             <p
//                               className="expanded-subtext"
//                               style={{ color: styles.subTextColor }}
//                             >
//                               {s.category} • {s.name} • Stock critically{" "}
//                               {s.risk.toLowerCase()}
//                             </p>

//                             <div
//                               className="expanded-info"
//                               style={{ background: styles.boxColor }}
//                             >
//                               <p><span>Current Stock:</span> <strong>{s.stock}</strong></p>
//                               <p><span>Reorder Point:</span> <strong>3 months</strong></p>
//                               <p><span>Alternative Suppliers:</span> <strong>3 available</strong></p>
//                               <p><span>Last Order:</span> <strong>45 days ago</strong></p>
//                             </div>

//                             <div className="expanded-buttons">
//                               <button
//                                 className="btn-contact"
//                                 onClick={() => handleContactSupplier(s)}
//                                 disabled={loading}
//                               >
//                                 {loading ? "Sending..." : "📞 Contact Supplier"}
//                               </button>

//                               {/* ✅ Go to Worklist */}
//                               <button
//                                 className="btn-report"
//                                 onClick={() => onViewReport()}
//                               >
//                                 📄 View Report
//                               </button>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         <div className="chart-section">
//           <h3>Risk Distribution by Category</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={riskData}
//                 dataKey="value"
//                 innerRadius={70}
//                 outerRadius={100}
//               >
//                 {riskData.map((entry, index) => (
//                   <Cell key={index} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//           <ul className="legend">
//             {riskData.map((item, i) => (
//               <li key={i}>
//                 <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
//                 {item.name} <span className="legend-value">{item.value}%</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <SupplyNetwork />
//     </div>
//   );
// }

































import React, { useState } from "react";
import "../styles/Dashboard.css";
import {
  Database,
  FileText,
  Clipboard,
  CreditCard,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SupplyNetwork from "../components/SupplyNetwork";

export default function Dashboard({ onViewReport, onSimulate }) {
  const [highRiskOnly, setHighRiskOnly] = useState(false);
  const [expandedPart, setExpandedPart] = useState(null);
  const [loading, setLoading] = useState(false);

  const metrics = [
    {
      title: "Items Monitored",
      value: "50,000+",
      change: "+12%",
      trend: "up",
      icon: <Database size={22} />,
      color: "#E7EEFF",
    },
    {
      title: "Vendors Assessed",
      value: "2,000+",
      change: "+8%",
      trend: "up",
      icon: <FileText size={22} />,
      color: "#E6FBF0",
    },
    {
      title: "POs per Year",
      value: "200K+",
      change: "+15%",
      trend: "up",
      icon: <Clipboard size={22} />,
      color: "#F6EDFF",
    },
    {
      title: "Contract Value",
      value: "£200M",
      change: "+22%",
      trend: "up",
      icon: <CreditCard size={22} />,
      color: "#FFF6EB",
    },
    {
      title: "Risk Score",
      value: "7.2",
      change: "-5%",
      trend: "down",
      icon: <AlertTriangle size={22} />,
      color: "#FFF1F2",
    },
  ];

  const riskData = [
    { name: "High Risk", value: 15, color: "#ef4444" },
    { name: "Medium Risk", value: 35, color: "#f59e0b" },
    { name: "Low Risk", value: 50, color: "#22c55e" },
  ];

  const suppliers = [
    {
      name: "Connector A-100",
      company: "Acme Electronics",
      category: "Electronics",
      stock: "1.2 mo",
      risk: "HIGH",
      email: "lakshat0404@gmail.com",
    },
    {
      name: "Valve X2-22",
      company: "HydraTech Ltd",
      category: "Hydraulic",
      stock: "3.1 mo",
      risk: "MEDIUM",
      email: "supplier2@example.com",
    },
    {
      name: "Motor M-043",
      company: "PowerTech Inc",
      category: "Powertrain",
      stock: "5.8 mo",
      risk: "LOW",
      email: "supplier3@example.com",
    },
  ];

  const filteredSuppliers = highRiskOnly
    ? suppliers.filter((s) => s.risk === "HIGH")
    : suppliers;

  const getRiskStyles = (risk) => {
    switch (risk) {
      case "HIGH":
        return {
          backgroundColor: "#fee2e2",
          border: "1px solid #dc2626",
          textColor: "#b91c1c",
          subTextColor: "#7f1d1d",
          boxColor: "#ffe5e5",
        };
      case "MEDIUM":
        return {
          backgroundColor: "#fff7e6",
          border: "1px solid #f59e0b",
          textColor: "#b45309",
          subTextColor: "#92400e",
          boxColor: "#fff3cd",
        };
      case "LOW":
        return {
          backgroundColor: "#ecfdf5",
          border: "1px solid #22c55e",
          textColor: "#065f46",
          subTextColor: "#047857",
          boxColor: "#d1fae5",
        };
      default:
        return {};
    }
  };

  const handleContactSupplier = async (supplier) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          supplierEmail: supplier.email,
          supplierName: supplier.company,
          message: `Dear ${supplier.company}, your item (${supplier.name}) is currently flagged as ${supplier.risk} risk. Please review and provide an update.`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(`📩 Email sent to ${supplier.company}`, {
          style: {
            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
            color: "#fff",
            fontWeight: "bold",
          },
          icon: "🚀",
        });
      } else {
        toast.error(`❌ Failed to send: ${data.error}`, {
          style: {
            background: "linear-gradient(90deg, #ff512f, #dd2476)",
            color: "#fff",
            fontWeight: "bold",
          },
        });
      }
    } catch (err) {
      toast.error("⚠️ Error sending email", {
        style: {
          background: "linear-gradient(90deg, #ff512f, #f09819)",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    }
    setLoading(false);
  };

  return (
    <div className="dashboard-container">
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar theme="colored" />

      <div className="metrics-row">
        {metrics.map((m, i) => (
          <div className="metric-card" key={i}>
            <div className="metric-header">
              <span className="metric-title">{m.title}</span>
              <div className="metric-icon" style={{ backgroundColor: m.color }}>
                {m.icon}
              </div>
            </div>
            <div className="metric-value">{m.value}</div>
            <div className={`metric-change ${m.trend}`}>
              {m.trend === "up" ? (
                <>
                  <ArrowUp size={14} /> {m.change}
                </>
              ) : (
                <>
                  <ArrowDown size={14} /> {m.change}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-main">
        <div className="table-section">
          <div className="table-header">
            <h3>Supply Chain Risk Dashboard</h3>
            <label className="toggle-label">
              High Risk Only
              <div
                className={`toggle-switch ${highRiskOnly ? "active" : ""}`}
                onClick={() => setHighRiskOnly(!highRiskOnly)}
              >
                <div className="toggle-circle"></div>
              </div>
            </label>
          </div>

          <table className="risk-table">
            <thead>
              <tr>
                <th>Part/Supplier</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Simulations</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSuppliers.map((s, i) => {
                const styles = getRiskStyles(s.risk);
                return (
                  <React.Fragment key={i}>
                    <tr>
                      <td>
                        <strong>{s.name}</strong>
                        <br />
                        <span>{s.company}</span>
                      </td>
                      <td>{s.category}</td>
                      <td>{s.stock}</td>
                      <td>
                        {/* ✅ Simulate Button */}
                        <button className="simulate-btn" onClick={() => onSimulate()}>
                          Simulate
                        </button>
                      </td>
                      <td>
                        <div
                          className={`risk-status ${s.risk.toLowerCase()}`}
                          onClick={() =>
                            setExpandedPart(expandedPart === s.name ? null : s.name)
                          }
                        >
                          <span className="risk-label">{s.risk}</span>
                          <span className="separator">|</span>
                          <span className="view-label">View ▾</span>
                        </div>
                      </td>
                    </tr>

                    {expandedPart === s.name && (
                      <tr className="expanded-row">
                        <td colSpan="5">
                          <div
                            className="expanded-card"
                            style={{
                              backgroundColor: styles.backgroundColor,
                              border: styles.border,
                            }}
                          >
                            <div className="expanded-header">
                              <div className="header-left">
                                <AlertTriangle size={18} color={styles.textColor} />
                                <h4 style={{ color: styles.textColor }}>
                                  Contact Alternative Supplier
                                </h4>
                              </div>
                              {s.risk === "HIGH" && (
                                <span className="due-today">Due Today</span>
                              )}
                            </div>

                            <p
                              className="expanded-subtext"
                              style={{ color: styles.subTextColor }}
                            >
                              {s.category} • {s.name} • Stock critically{" "}
                              {s.risk.toLowerCase()}
                            </p>

                            <div
                              className="expanded-info"
                              style={{ background: styles.boxColor }}
                            >
                              <p>
                                <span>Current Stock:</span>{" "}
                                <strong>{s.stock}</strong>
                              </p>
                              <p>
                                <span>Reorder Point:</span>{" "}
                                <strong>3 months</strong>
                              </p>
                              <p>
                                <span>Alternative Suppliers:</span>{" "}
                                <strong>3 available</strong>
                              </p>
                              <p>
                                <span>Last Order:</span>{" "}
                                <strong>45 days ago</strong>
                              </p>
                            </div>

                            <div className="expanded-buttons">
                              <button
                                className="btn-contact"
                                onClick={() => handleContactSupplier(s)}
                                disabled={loading}
                              >
                                {loading ? "Sending..." : "📞 Contact Supplier"}
                              </button>

                              <button
                                className="btn-report"
                                onClick={() => onViewReport()}
                              >
                                📄 View Report
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="chart-section">
          <h3>Risk Distribution by Category</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={riskData}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
              >
                {riskData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ul className="legend">
            {riskData.map((item, i) => (
              <li key={i}>
                <span
                  className="legend-dot"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.name} <span className="legend-value">{item.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SupplyNetwork />
    </div>
  );
}

