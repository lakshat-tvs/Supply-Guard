import React, { useState } from "react";
import "../styles/CreateScenario.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateScenario = ({ setActive }) => {
  const [scenario, setScenario] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    partsFilter: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScenario({ ...scenario, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateFields = () => {
    let newErrors = {};
    if (!scenario.title.trim()) newErrors.title = "Scenario Title is required";
    if (!scenario.description.trim())
      newErrors.description = "Description is required";
    if (!scenario.startDate) newErrors.startDate = "Start Date is required";
    if (!scenario.endDate) newErrors.endDate = "End Date is required";
    if (!scenario.partsFilter)
      newErrors.partsFilter = "Parts Filter selection is required";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all required fields before proceeding.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      return;
    }

    toast.success("Scenario details saved successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      onClose: () => setActive("scenario-shocks"),
    });

    // You can proceed to the next step or API call here
    console.log("Scenario details:", scenario);
  };

  // ✅ Redirect back to Scenario Catalog when (x) is clicked
  const handleClose = () => {
    setActive("scenario");
  };

  return (
    <div className="scenario-wrapper">
      {/* Toast Container */}
      <ToastContainer />

      {/* Header Section */}
      <div className="scenario-topbar">
        <div>
          <h2 className="scenario-title">Create New Scenario</h2>
          <p className="scenario-subtitle">Define your what-if analysis parameters</p>
        </div>
        <button className="close-btn" onClick={handleClose}>
          ×
        </button>
      </div>

      {/* Stepper */}
      <div className="scenario-steps">
        <button className="step active">1 Details</button>
        <button className="step">2 Shocks</button>
        <button className="step">3 Mitigations</button>
        <button className="step">4 Review & Run</button>
      </div>

      {/* Form Section */}
      <div className="scenario-form">
        <div className="form-group">
          <label>
            Scenario Title <span className="required">*</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter scenario name"
            value={scenario.title}
            onChange={handleChange}
            className={errors.title ? "error-input" : ""}
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label>
            Description <span className="required">*</span>
          </label>
          <textarea
            name="description"
            placeholder="Describe the scenario purpose and assumptions"
            value={scenario.description}
            onChange={handleChange}
            className={errors.description ? "error-input" : ""}
          />
          {errors.description && (
            <p className="error-text">{errors.description}</p>
          )}
        </div>

        <div className="form-row">
          <div className="form-group half">
            <label>
              Start Date <span className="required">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={scenario.startDate}
              onChange={handleChange}
              className={errors.startDate ? "error-input" : ""}
            />
            {errors.startDate && (
              <p className="error-text">{errors.startDate}</p>
            )}
          </div>
          <div className="form-group half">
            <label>
              End Date <span className="required">*</span>
            </label>
            <input
              type="date"
              name="endDate"
              value={scenario.endDate}
              onChange={handleChange}
              className={errors.endDate ? "error-input" : ""}
            />
            {errors.endDate && <p className="error-text">{errors.endDate}</p>}
          </div>
        </div>

        <div className="form-group">
          <label>
            Parts Filter <span className="required">*</span>
          </label>
          <select
            name="partsFilter"
            value={scenario.partsFilter}
            onChange={handleChange}
            className={errors.partsFilter ? "error-input" : ""}
          >
            <option value="">Select parts and suppliers</option>
            <option value="Engine">Engine Parts</option>
            <option value="Electrical">Electrical Components</option>
            <option value="Body">Body Panels</option>
          </select>
          {errors.partsFilter && (
            <p className="error-text">{errors.partsFilter}</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="scenario-footer">
        <button className="btn-secondary" disabled>
          Previous
        </button>
        <button className="btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateScenario;






















































