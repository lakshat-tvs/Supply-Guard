import React, { useEffect, useState } from "react";
import "../styles/CompareScenarios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CompareScenarios({ setActive }) {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("compareScenarios");
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed.length !== 2) {
        toast.error("Please select exactly 2 scenarios to compare!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setTimeout(() => {
          setActive("scenario-catalog");
        }, 3500);
      } else {
        setScenarios(parsed);
      }
    } else {
      toast.error("❌ No scenarios selected for comparison!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      setTimeout(() => {
        setActive("scenario-catalog");
      }, 3500);
    }
  }, [setActive]);

  if (scenarios.length !== 2) {
    return <ToastContainer />;
  }

  return (
    <div className="compare-container">
      <ToastContainer />
      <div className="compare-header">
        <h2>Scenario Comparison</h2>
        <p>Compare key performance impacts across two what-if scenarios</p>
      </div>

      <div className="compare-grid">
        {scenarios.map((s) => (
          <div key={s.id} className="compare-card">
            <h3>{s.title}</h3>

            <span
              className="compare-tag"
              style={{ backgroundColor: s.tagColor, color: s.tagTextColor }}
            >
              {s.tag}
            </span>

            <div className="compare-details">
              <p>
                <strong>Service Level:</strong> <span>{s.service}</span>
              </p>
              <p>
                <strong>Backlog:</strong> <span>{s.backlog}</span>
              </p>
              <p>
                <strong>Cost Impact:</strong> <span>{s.cost}</span>
              </p>
              <p>
                <strong>Owner:</strong> <span>{s.owner}</span>
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className="compare-status"
                  style={{
                    backgroundColor: s.statusColor,
                    color: s.statusText,
                  }}
                >
                  {s.status}
                </span>
              </p>
              <p>
                <strong>Date:</strong> <span>{s.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Redirect user to View Scenario page instead */}
      <button className="back-btn" onClick={() => setActive("view-scenario")}>
        ← Back to View Scenario
      </button>
    </div>
  );
}
