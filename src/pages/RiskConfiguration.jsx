import React, { useMemo, useState } from "react";
import "../styles/RiskConfiguration.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DEFAULT_DIMENSIONS = [
  {
    id: "supplier_financial",
    title: "Supplier Financial Health",
    subtitle: "Assess supplier's financial stability and creditworthiness",
    enabled: true,
    weight: 28,
  },
  {
    id: "geopolitical",
    title: "Geopolitical Risk",
    subtitle: "Monitor political stability and trade relations",
    enabled: true,
    weight: 25,
  },
  {
    id: "commodity",
    title: "Commodity Volatility",
    subtitle: "Track price fluctuations and market conditions",
    enabled: true,
    weight: 30,
  },
  {
    id: "supply_chain",
    title: "Supply Chain Disruption",
    subtitle: "Evaluate logistics and transportation risks",
    enabled: true,
    weight: 17,
  },
];

export default function RiskConfiguration() {
  const [dimensions, setDimensions] = useState(DEFAULT_DIMENSIONS);

  // ✅ Editable RAG threshold state
  const [ragValues, setRagValues] = useState({
    months: { red: 1, amber: 3, green: 6 },
    risk: { red: 7, amber: 4, green: 3 },
  });

  const handleRagChange = (category, color, value) => {
    setRagValues((prev) => ({
      ...prev,
      [category]: { ...prev[category], [color]: value },
    }));
  };

  const totalWeight = useMemo(() => {
    return dimensions.reduce((sum, d) => sum + (d.enabled ? d.weight : 0), 0);
  }, [dimensions]);

  const sampleItems = useMemo(() => {
    const computeScore = (base, dims) => {
      const enabledWeight = dims.reduce(
        (sum, d) => (d.enabled ? sum + d.weight : sum),
        0
      );
      const modifier = (enabledWeight - 50) / 50;
      return +(base + modifier * base * 0.15).toFixed(1);
    };

    return [
      {
        id: "engine",
        title: "Engine Components",
        baseScore: 8.2,
        score: computeScore(8.2, dimensions),
      },
      {
        id: "brake",
        title: "Brake Systems",
        baseScore: 5.1,
        score: computeScore(5.1, dimensions),
      },
      {
        id: "electrical",
        title: "Electrical Parts",
        baseScore: 2.8,
        score: computeScore(2.8, dimensions),
      },
    ];
  }, [dimensions]);

  const distribution = useMemo(() => {
    const avg =
      sampleItems.reduce((s, x) => s + x.score, 0) / sampleItems.length;
    const high = Math.min(50, Math.round((avg / 10) * 40 + 10));
    const medium = Math.min(70, Math.round((100 - high) * 0.6));
    const low = 100 - high - medium;
    return { high, medium, low };
  }, [sampleItems]);

  const toggleDimension = (id) => {
    setDimensions((prev) =>
      prev.map((d) => (d.id === id ? { ...d, enabled: !d.enabled } : d))
    );
  };

  const updateWeight = (id, value) => {
    setDimensions((prev) =>
      prev.map((d) => (d.id === id ? { ...d, weight: Number(value) } : d))
    );
  };

  const handleApply = () => {
    if (totalWeight !== 100) {
      toast.info("Weights do not sum to 100%. Normalizing...", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      const enabled = dimensions.filter((d) => d.enabled);
      const enabledSum = enabled.reduce((s, e) => s + e.weight, 0) || 1;
      const normalized = dimensions.map((d) =>
        d.enabled
          ? { ...d, weight: Math.round((d.weight / enabledSum) * 100) }
          : d
      );
      setDimensions(normalized);
      toast.success("Weights normalized and applied.", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }
    toast.success("Configuration applied successfully.", {
      position: "top-right",
      autoClose: 2200,
      theme: "colored",
    });
  };

  const handleReset = () => {
    setDimensions(DEFAULT_DIMENSIONS.map((d) => ({ ...d })));
    setRagValues({
      months: { red: 1, amber: 3, green: 6 },
      risk: { red: 7, amber: 4, green: 3 },
    });
    toast.info("Settings reset to defaults.", {
      position: "top-right",
      autoClose: 1800,
      theme: "colored",
    });
  };

  return (
    <div className="risk-config-page">
      <ToastContainer />
      <div className="risk-config-inner">
        <main className="risk-main">
          <h1 className="page-title">Risk Configuration</h1>
          <p className="page-sub">Configure risk parameters and thresholds</p>

          {/* 🔹 Risk Dimensions */}
          <section className="card risk-dimensions">
            <h2 className="card-title">Risk Dimensions</h2>
            <div className="dimensions-list">
              {dimensions.map((d) => (
                <div className="dimension-row" key={d.id}>
                  <div className="dimension-info">
                    <div className="dimension-title">{d.title}</div>
                    <div className="dimension-sub">{d.subtitle}</div>
                  </div>
                  <div className="dimension-toggle">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={d.enabled}
                        onChange={() => toggleDimension(d.id)}
                      />
                      <span className="slider" />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 🔹 Weighting Factors */}
          <section className="card weighting">
            <h2 className="card-title">Weighting Factors</h2>
            <div className="weights-list">
              {dimensions.map((d) => (
                <div className="weight-row" key={d.id}>
                  <label className="weight-label">
                    <strong>{d.title}</strong>
                    <span className="weight-percent">{d.weight}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={d.weight}
                    onChange={(e) => updateWeight(d.id, e.target.value)}
                    disabled={!d.enabled}
                    className="weight-slider"
                  />
                </div>
              ))}
            </div>
            <div className="weights-footer">
              <div>
                Total active weight: <strong>{totalWeight}%</strong>
              </div>
              <div className="hint">
                Tip: Adjust sliders — apply to preview updated impacts.
              </div>
            </div>
          </section>

          {/* 🔹 Editable RAG Thresholds Section */}
          <section className="card rag-thresholds">
            <h2 className="card-title">RAG Thresholds</h2>

            {/* Months of Stock */}
            <div className="threshold-section">
              <h3>Months of Stock</h3>
              <div className="threshold-row">
                <div className="threshold-box red">
                  <label>Red (Critical)</label>
                  <input
                    type="number"
                    value={ragValues.months.red}
                    onChange={(e) =>
                      handleRagChange("months", "red", e.target.value)
                    }
                  />
                  <p>≤ months</p>
                </div>

                <div className="threshold-box amber">
                  <label>Amber (Warning)</label>
                  <input
                    type="number"
                    value={ragValues.months.amber}
                    onChange={(e) =>
                      handleRagChange("months", "amber", e.target.value)
                    }
                  />
                  <p>≤ months</p>
                </div>

                <div className="threshold-box green">
                  <label>Green (Safe)</label>
                  <input
                    type="number"
                    value={ragValues.months.green}
                    onChange={(e) =>
                      handleRagChange("months", "green", e.target.value)
                    }
                  />
                  <p>&gt; months</p>
                </div>
              </div>
            </div>

            {/* Supplier Country Risk Score */}
            <div className="threshold-section">
              <h3>Supplier Country Risk Score</h3>
              <div className="threshold-row">
                <div className="threshold-box red">
                  <label>Red (High Risk)</label>
                  <input
                    type="number"
                    value={ragValues.risk.red}
                    onChange={(e) =>
                      handleRagChange("risk", "red", e.target.value)
                    }
                  />
                  <p>≥ score</p>
                </div>

                <div className="threshold-box amber">
                  <label>Amber (Medium Risk)</label>
                  <input
                    type="number"
                    value={ragValues.risk.amber}
                    onChange={(e) =>
                      handleRagChange("risk", "amber", e.target.value)
                    }
                  />
                  <p>4–6 score</p>
                </div>

                <div className="threshold-box green">
                  <label>Green (Low Risk)</label>
                  <input
                    type="number"
                    value={ragValues.risk.green}
                    onChange={(e) =>
                      handleRagChange("risk", "green", e.target.value)
                    }
                  />
                  <p>&lt; score</p>
                </div>
              </div>
            </div>
          </section>

          <div className="sidebar-actions">
            <button className="btn apply" onClick={handleApply}>
              Apply Changes
            </button>
            <button className="btn reset" onClick={handleReset}>
              Reset to Defaults
            </button>
          </div>
        </main>

        {/* 🔹 Sidebar */}
        <aside className="risk-sidebar">
          <div className="impact-preview card">
            <h3>Impact Preview</h3>

            <div className="config-preview">
              <input type="checkbox" checked readOnly />
              <div className="config-preview-text">
                <strong>Configuration Preview</strong>
                <div className="muted">
                  Changes will affect <strong>1,247 parts</strong> across{" "}
                  <strong>89 suppliers</strong>
                </div>
              </div>
            </div>

            <div className="sample-impact">
              <h4>Sample Impact Analysis</h4>
              {sampleItems.map((it) => (
                <div className="impact-row" key={it.id}>
                  <div>
                    <div className="impact-title">{it.title}</div>
                    <div className="impact-sub muted">
                      Risk Score: {it.baseScore} → {it.score} (
                      {(it.score - it.baseScore).toFixed(1) >= 0 ? "+" : ""}
                      {(it.score - it.baseScore).toFixed(1)})
                    </div>
                  </div>
                  <div
                    className={`risk-badge ${
                      it.score >= 7
                        ? "high"
                        : it.score >= 4
                        ? "medium"
                        : "low"
                    }`}
                  >
                    {it.score >= 7
                      ? "High Risk"
                      : it.score >= 4
                      ? "Medium Risk"
                      : "Low Risk"}
                  </div>
                </div>
              ))}
            </div>

            <div className="risk-distribution">
              <h4>Risk Distribution</h4>
              <div className="dist-row">
                <div className="dist-label">High Risk</div>
                <div className="dist-bar">
                  <div
                    className="fill high"
                    style={{ width: `${distribution.high}%` }}
                  />
                </div>
                <div className="dist-percent">{distribution.high}%</div>
              </div>
              <div className="dist-row">
                <div className="dist-label">Medium Risk</div>
                <div className="dist-bar">
                  <div
                    className="fill medium"
                    style={{ width: `${distribution.medium}%` }}
                  />
                </div>
                <div className="dist-percent">{distribution.medium}%</div>
              </div>
              <div className="dist-row">
                <div className="dist-label">Low Risk</div>
                <div className="dist-bar">
                  <div
                    className="fill low"
                    style={{ width: `${distribution.low}%` }}
                  />
                </div>
                <div className="dist-percent">{distribution.low}%</div>
              </div>
            </div>

            <div className="sidebar-actions">
              <button className="btn apply" onClick={handleApply}>
                Apply Changes
              </button>
              <button className="btn reset" onClick={handleReset}>
                Reset to Defaults
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
