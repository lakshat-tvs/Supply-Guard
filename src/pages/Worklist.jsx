import React, { useState } from "react";
import "../styles/Worklist.css";
import {
  ArrowUpDown,
  Search,
  User,
  AlertTriangle,
  Tag,
  HeartPulse,
  PackageSearch,
  Ship,
} from "lucide-react";
import WorklistDetail from "../components/WorklistDetail";

export default function Worklist() {
  const originalData = [
    {
      id: "P-123",
      site: "Plant A Manufacturing",
      type: "Factory Shutdown",
      action: "Expedite 50 units via air freight",
      priority: "High",
      due: "Tomorrow",
      date: "Jan 16, 2025",
      assigned: "Buyer Team",
      status: "Open",
      badge: "BT",
    },
    {
      id: "P-456",
      site: "Supplier B Components",
      type: "Tariff Increase",
      action: "Switch 30% volume to Alt Supplier C",
      priority: "Medium",
      due: "+3 days",
      date: "Jan 18, 2025",
      assigned: "Analyst",
      status: "Open",
      badge: "AN",
    },
    {
      id: "X-789",
      site: "Supplier D Electronics",
      type: "Vendor Health Risk",
      action: "Increase safety stock by 2 weeks",
      priority: "Medium",
      due: "+7 days",
      date: "Jan 22, 2025",
      assigned: "Coordinator",
      status: "In Progress",
      badge: "CO",
    },
    {
      id: "Y-012",
      site: "Plant B Assembly",
      type: "Port Closure",
      action: "Reroute shipments via Port C",
      priority: "High",
      due: "Today",
      date: "Jan 15, 2025",
      assigned: "Logistics",
      status: "Open",
      badge: "LO",
    },
    {
      id: "Z-345",
      site: "Supplier E Materials",
      type: "Factory Shutdown",
      action: "Source from backup supplier immediately",
      priority: "High",
      due: "+2 days",
      date: "Jan 17, 2025",
      assigned: "Buyer Team",
      status: "Done",
      badge: "BT",
    },
  ];

  const [data, setData] = useState(originalData);
  const [sortConfig, setSortConfig] = useState({ column: null, direction: null });
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [showRiskDropdown, setShowRiskDropdown] = useState(false);
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
  const [showAssigneeDropdown, setShowAssigneeDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showDueDropdown, setShowDueDropdown] = useState(false);

  const [selectedRisk, setSelectedRisk] = useState("All Risk Types");
  const [selectedPriority, setSelectedPriority] = useState("All Priorities");
  const [selectedAssignee, setSelectedAssignee] = useState("All Assignees");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedDue, setSelectedDue] = useState("All Due Dates");

  const riskTypes = ["All Risk Types", "Factory Shutdown", "Tariff Increase", "Vendor Health Risk", "Port Closure"];
  const priorities = ["All Priorities", "High", "Medium", "Low"];
  const assignees = ["All Assignees", "Buyer Team", "Analyst", "Coordinator", "Logistics"];
  const statuses = ["All Status", "Open", "In Progress", "Done"];
  const dueDates = ["All Due Dates", "Due Today", "Due Tomorrow", "Due This Week", "Overdue"];

  const handleSort = (columnKey) => {
    let newDirection = "asc";
    if (sortConfig.column === columnKey && sortConfig.direction === "asc") newDirection = "desc";
    else if (sortConfig.column === columnKey && sortConfig.direction === "desc") newDirection = null;

    if (newDirection === null) {
      setData(originalData);
      setSortConfig({ column: null, direction: null });
      return;
    }

    const sortedData = [...data].sort((a, b) => {
      const aVal = a[columnKey]?.toString().toLowerCase() || "";
      const bVal = b[columnKey]?.toString().toLowerCase() || "";
      if (aVal < bVal) return newDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ column: columnKey, direction: newDirection });
  };

  const renderSortIcon = (columnKey) => {
    if (sortConfig.column !== columnKey) return <ArrowUpDown size={14} className="sort-icon" />;
    if (sortConfig.direction === "asc") return <ArrowUpDown size={14} className="sort-icon active up" />;
    if (sortConfig.direction === "desc") return <ArrowUpDown size={14} className="sort-icon active down" />;
  };

  const applyFilters = (risk, priority, assignee, status, due, query) => {
    let filtered = [...originalData];
    if (risk !== "All Risk Types") filtered = filtered.filter((i) => i.type === risk);
    if (priority !== "All Priorities") filtered = filtered.filter((i) => i.priority === priority);
    if (assignee !== "All Assignees") filtered = filtered.filter((i) => i.assigned === assignee);
    if (status !== "All Status") filtered = filtered.filter((i) => i.status === status);
    if (due !== "All Due Dates") {
      if (due === "Due Today") filtered = filtered.filter((i) => i.due === "Today");
      else if (due === "Due Tomorrow") filtered = filtered.filter((i) => i.due === "Tomorrow");
      else if (due === "Due This Week") filtered = filtered.filter((i) => i.due.includes("+"));
      else if (due === "Overdue") filtered = filtered.filter((i) => i.due.includes("-"));
    }
    if (query) {
      filtered = filtered.filter((i) =>
        Object.values(i).some((val) => val.toString().toLowerCase().includes(query.toLowerCase()))
      );
    }
    setData(filtered);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFilters(selectedRisk, selectedPriority, selectedAssignee, selectedStatus, selectedDue, query);
  };

  const handleRowClick = (item) => setSelectedRow(item);
  const handleCloseDetail = () => setSelectedRow(null);

  const renderRiskIcon = (type) => {
    switch (type) {
      case "Factory Shutdown":
        return <AlertTriangle size={16} color="#dc2626" className="risk-icon" />;
      case "Tariff Increase":
        return <Tag size={16} color="#f97316" className="risk-icon" />;
      case "Vendor Health Risk":
        return <HeartPulse size={16} color="#8b5cf6" className="risk-icon" />;
      case "Port Closure":
        return <Ship size={16} color="#2563eb" className="risk-icon" />;
      default:
        return <PackageSearch size={16} color="#6b7280" className="risk-icon" />;
    }
  };

  const getBadgeClass = (badge) => {
    switch (badge) {
      case "BT":
        return "wl-badge blue";
      case "AN":
        return "wl-badge green";
      case "CO":
        return "wl-badge purple";
      case "LO":
        return "wl-badge orange";
      default:
        return "wl-badge";
    }
  };

  return (
    <div className="worklist-container">
      <div className="worklist-header">
        <h2 className="worklist-title">Actions Worklist</h2>
        <div className="right-controls">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search actions..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="profile-icon">
            <User size={18} />
          </div>
        </div>
      </div>

      <div className="batch-actions">
        <button className="batch-dropdown">Batch Actions ▾</button>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        {[ /* filter mapping unchanged */ ].map((filter, i) => (
          <div key={i} className="dropdown-container">
            <button
              className="dropdown-button"
              onClick={() => {
                filter.setShow(!filter.show);
              }}
            >
              {filter.label} ▾
            </button>

            {filter.show && (
              <ul className="dropdown-menu">
                {filter.options.map((opt) => (
                  <li key={opt} onClick={() => filter.handler(opt)}>
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="worklist-content">
        <div className="worklist-table-wrapper">
          <table className="worklist-table">
            <thead>
              <tr>
                <th onClick={() => handleSort("site")}>
                  Part / Supplier / Site {renderSortIcon("site")}
                </th>
                <th onClick={() => handleSort("type")}>
                  Risk Type {renderSortIcon("type")}
                </th>
                <th onClick={() => handleSort("action")}>
                  Recommended Action {renderSortIcon("action")}
                </th>
                <th onClick={() => handleSort("priority")}>
                  Priority {renderSortIcon("priority")}
                </th>
                <th onClick={() => handleSort("due")}>
                  Due Date {renderSortIcon("due")}
                </th>
                <th onClick={() => handleSort("assigned")}>
                  Assigned To {renderSortIcon("assigned")}
                </th>
                <th onClick={() => handleSort("status")}>
                  Status {renderSortIcon("status")}
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => handleRowClick(item)}
                  className={selectedRow?.id === item.id ? "selected-row" : ""}
                >
                  <td>
                    <div className="part-cell">
                      <input type="checkbox" />
                      <div>
                        <p className="id">{item.id}</p>
                        <p className="sub">{item.site}</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="risk-type-cell">
                      {renderRiskIcon(item.type)}
                      <span>{item.type}</span>
                    </div>
                  </td>

                  <td>{item.action}</td>

                  <td>
                    <span className={`priority-${item.priority.toLowerCase()}`}>
                      {item.priority}
                    </span>
                  </td>

                  <td>
                    <div className="due-cell">
                      <p>{item.due}</p>
                      <span className="date">{item.date}</span>
                    </div>
                  </td>

                  <td>
                    <div className="assignee">
                      <span className={getBadgeClass(item.badge)}>{item.badge}</span>
                      <span>{item.assigned}</span>
                    </div>
                  </td>

                  <td>
                    <span className={`status-${item.status.toLowerCase().replace(" ", "-")}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <WorklistDetail item={selectedRow} onClose={handleCloseDetail} />
      </div>
    </div>
  );
}
