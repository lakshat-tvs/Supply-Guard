import React, { useState, useEffect } from "react";
import "../styles/WorklistDetail.css";

export default function WorklistDetail({ item, onClose }) {
  const [selectedAction, setSelectedAction] = useState("accept");
  const [customAction, setCustomAction] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rerun, setRerun] = useState(false);

  // Dynamic author based on item.id
  const getAuthorByPart = (id) => {
    switch (id) {
      case "P-456":
        return "Analyst";
      case "X-789":
        return "Coordinator";
      case "Y-012":
        return "Logistics";
      case "Z-345":
        return "Buyer Team";
      default:
        return "Buyer Team";
    }
  };

  useEffect(() => {
    if (item) {
      const author = getAuthorByPart(item.id);
      setComments([
        {
          author,
          time: "2 hours ago",
          text: "Contacted air freight provider, can expedite by tomorrow morning.",
        },
      ]);
    }
  }, [item]);

  if (!item) return null;

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      author: "You",
      time: "Just now",
      text: newComment.trim(),
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="detail-panel">
      <div className="detail-header">
        <h3>Scenario: Supply Chain Disruption Q1 2025</h3>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>

      {/* Scenario Summary */}
      <div className="scenario-summary">
        <p>
          <strong>Impact:</strong> Production delay of 3–5 days, potential
          revenue loss of <strong>$2.3M</strong>.
        </p>
        <div className="metrics">
          <div className="metric negative">
            <p>-15%</p>
            <span>Service Level</span>
          </div>
          <div className="metric positive">
            <p>+ $450K</p>
            <span>Extra Costs</span>
          </div>
        </div>
      </div>

      {/* Part Details */}
      <div className="section">
        <h4>Part & Vendor Details</h4>
        <div className="detail-grid">
          <p>
            <strong>Part Number:</strong> {item.id}-COMP-A
          </p>
          <p>
            <strong>Description:</strong> Critical Component A
          </p>
          <p>
            <strong>Current Stock:</strong> 125 units
          </p>
          <p>
            <strong>Lead Time:</strong> 14 days
          </p>
          <p>
            <strong>Supplier Rating:</strong>{" "}
            <span className="medium-risk">Medium Risk</span>
          </p>
        </div>
      </div>

      {/* Action Override */}
      <div className="section">
        <h4>Action Override</h4>
        <div className="recommendation-box">
          <p className="label">Current Recommendation</p>
          <p className="value">Expedite 50 units via air freight</p>
        </div>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="accept"
              checked={selectedAction === "accept"}
              onChange={() => setSelectedAction("accept")}
            />
            Accept recommendation
          </label>
          <label>
            <input
              type="radio"
              value="modify"
              checked={selectedAction === "modify"}
              onChange={() => setSelectedAction("modify")}
            />
            Modify action
          </label>
          <label>
            <input
              type="radio"
              value="reject"
              checked={selectedAction === "reject"}
              onChange={() => setSelectedAction("reject")}
            />
            Reject recommendation
          </label>
        </div>

        <textarea
          placeholder="Custom action details..."
          value={customAction}
          onChange={(e) => setCustomAction(e.target.value)}
        />
      </div>

      {/* Comments */}
      <div className="section">
        <h4>Comments</h4>
        <div className="comments-section">
          {comments.map((c, i) => (
            <div className="comment" key={i}>
              <div className="comment-avatar">{c.author[0]}</div>
              <div>
                <p className="comment-author">
                  {c.author} <span>{c.time}</span>
                </p>
                <p className="comment-text">{c.text}</p>
              </div>
            </div>
          ))}

          <textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="add-comment-btn" onClick={handleAddComment}>
            Add Comment
          </button>
        </div>
      </div>

      {/* Simulation Control */}
      <div className="section">
        <h4>Simulation Control</h4>
        <div className="toggle-row">
          <label>Re-run Simulation</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={rerun}
              onChange={() => setRerun(!rerun)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <button className="run-btn">Run Simulation</button>
      </div>
    </div>
  );
}




































