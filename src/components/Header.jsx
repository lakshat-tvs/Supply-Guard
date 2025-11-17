import React from "react";
import "../styles/Header.css";
import { User, Users, BarChart, Link, Briefcase } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      {/* TOP ROW: logo/title (left) + welcome/avatar (right) */}
      <div className="header-top">
        <div className="header-left">
          <div className="logo-circle">
            <User size={20} color="#635bff" />
          </div>
          <div className="logo-text">
            <h1 className="app-title">SupplyGuard</h1>
            <p className="app-subtitle">
              Predictive Supply Chain Risk Management for Fortune 500
            </p>
          </div>
        </div>

        <div className="header-right">
          <span className="welcome-text">
            Welcome back, <strong>Procurement Manager</strong>
          </span>
          <div className="user-avatar">
            <User size={20} color="#ffffff" />
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: role tabs */}
      {/* <div className="header-bottom">
        <div className="role-tabs">
          <button className="role-tab">
            <Users size={16} />
            Procurement Team
          </button>

          <button className="role-tab">
            <BarChart size={16} />
            Analyst
          </button>

          <button className="role-tab">
            <Link size={16} />
            Supply Coordinator
          </button>

          <button className="role-tab">
            <Briefcase size={16} />
            Director
          </button>
        </div>
      </div> */}
    </header>
  );
}





































