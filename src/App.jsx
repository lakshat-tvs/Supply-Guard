
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";

export default function App() {
  return (
    <Router>
      <div style={{ background: "#f5f6fa", minHeight: "100vh" }}>
        <Header />
        <Routes>
          {/* Default route */}
          <Route path="/" element={<MainLayout />}>
            {/* Nested routes inside MainLayout */}
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
