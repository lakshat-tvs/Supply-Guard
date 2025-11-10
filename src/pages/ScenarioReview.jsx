// src/pages/ScenarioReview.jsx
import React from "react";
import "../styles/ScenarioReview.css";

export default function ScenarioReview({ setActive }) {
    const handlePrevious = () => setActive("scenario-mitigation");
    const handleComplete = () => setActive("scenario");

    return (
        <div className="scenario-wrapper">
            {/* Header */}
            <div className="scenario-topbar">
                <div>
                    <h2 className="scenario-title">Create New Scenario</h2>
                    <p className="scenario-subtitle">
                        Define your what-if analysis parameters
                    </p>
                </div>
                <button className="close-btn" onClick={() => setActive("scenario")}>
                    ×
                </button>
            </div>

            {/* Stepper */}
            <div className="scenario-steps">
                <button className="step done">1 Details</button>
                <button className="step done">2 Shocks</button>
                <button className="step done">3 Mitigations</button>
                <button className="step active">4 Review & Run</button>
            </div>

            {/* Review Section */}
            <div className="review-section">
                <h3>Review & Run Scenario</h3>

                <div className="review-card">
                    <h4>Scenario Summary</h4>
                    <div className="summary-grid">
                        <div className="summary-labels">
                            <p>Title:</p>
                            <p>Time Horizon:</p>
                            <p>Disruption Type:</p>
                            <p>Mitigations:</p>
                        </div>
                        <div className="summary-values">
                            <p>Factory Shutdown Analysis</p>
                            <p>Jan 1 - Mar 31, 2025</p>
                            <p>Factory Shutdown</p>
                            <p>3 strategies selected</p>
                        </div>
                    </div>
                </div>

                <div className="review-actions">
                    <button className="btn-secondary">Save as Draft</button>
                    <button className="btn-primary" onClick={() => setActive("scenario-results")}>
                        Run Simulation
                    </button>

                </div>
            </div>

            {/* Footer */}
            <div className="scenario-footer">
                <button className="btn-secondary" onClick={handlePrevious}>
                    Previous
                </button>
                <button className="btn-primary" onClick={handleComplete}>
                    Complete
                </button>
            </div>
        </div>
    );
}



































