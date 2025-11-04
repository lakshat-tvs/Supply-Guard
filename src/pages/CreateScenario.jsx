// import React, { useState } from "react";
// import "../styles/CreateScenario.css";

// const CreateScenario = () => {
//   const [scenario, setScenario] = useState({
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     partsFilter: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setScenario({ ...scenario, [name]: value });
//   };

//   const handleNext = () => {
//     alert("Next clicked! Scenario details: " + JSON.stringify(scenario, null, 2));
//   };

//   return (
//     <div className="scenario-wrapper">
//       {/* Header Section */}
//       <div className="scenario-topbar">
//         <div>
//           <h2 className="scenario-title">Create New Scenario</h2>
//           <p className="scenario-subtitle">Define your what-if analysis parameters</p>
//         </div>
//         <button className="close-btn">×</button>
//       </div>

//       {/* Stepper */}
//       <div className="scenario-steps">
//         <button className="step active">1 Details</button>
//         <button className="step">2 Shocks</button>
//         <button className="step">3 Mitigations</button>
//         <button className="step">4 Review & Run</button>
//       </div>

//       {/* Form Section */}
//       <div className="scenario-form">
//         <div className="form-group">
//           <label>Scenario Title</label>
//           <input
//             type="text"
//             name="title"
//             placeholder="Enter scenario name"
//             value={scenario.title}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             name="description"
//             placeholder="Describe the scenario purpose and assumptions"
//             value={scenario.description}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-row">
//           <div className="form-group half">
//             <label>Start Date</label>
//             <input
//               type="date"
//               name="startDate"
//               value={scenario.startDate}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group half">
//             <label>End Date</label>
//             <input
//               type="date"
//               name="endDate"
//               value={scenario.endDate}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Parts Filter</label>
//           <select
//             name="partsFilter"
//             value={scenario.partsFilter}
//             onChange={handleChange}
//           >
//             <option value="">Select parts and suppliers</option>
//             <option value="Engine">Engine Parts</option>
//             <option value="Electrical">Electrical Components</option>
//             <option value="Body">Body Panels</option>
//           </select>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="scenario-footer">
//         <button className="btn-secondary" disabled>
//           Previous
//         </button>
//         <button className="btn-primary" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateScenario;

















































// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/CreateScenario.css";

// const CreateScenario = () => {
//   const navigate = useNavigate();

//   const [scenario, setScenario] = useState({
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     partsFilter: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setScenario({ ...scenario, [name]: value });
//   };

//   const handleNext = () => {
//     alert("Next clicked! Scenario details: " + JSON.stringify(scenario, null, 2));
//   };

//   // ✅ Redirect to Scenario page on close
//   const handleClose = () => {
//     navigate("/scenario");
//   };

//   return (
//     <div className="scenario-wrapper">
//       {/* Header Section */}
//       <div className="scenario-topbar">
//         <div>
//           <h2 className="scenario-title">Create New Scenario</h2>
//           <p className="scenario-subtitle">Define your what-if analysis parameters</p>
//         </div>
//         <button className="close-btn" onClick={handleClose}>
//           ×
//         </button>
//       </div>

//       {/* Stepper */}
//       <div className="scenario-steps">
//         <button className="step active">1 Details</button>
//         <button className="step">2 Shocks</button>
//         <button className="step">3 Mitigations</button>
//         <button className="step">4 Review & Run</button>
//       </div>

//       {/* Form Section */}
//       <div className="scenario-form">
//         <div className="form-group">
//           <label>Scenario Title</label>
//           <input
//             type="text"
//             name="title"
//             placeholder="Enter scenario name"
//             value={scenario.title}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             name="description"
//             placeholder="Describe the scenario purpose and assumptions"
//             value={scenario.description}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-row">
//           <div className="form-group half">
//             <label>Start Date</label>
//             <input
//               type="date"
//               name="startDate"
//               value={scenario.startDate}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group half">
//             <label>End Date</label>
//             <input
//               type="date"
//               name="endDate"
//               value={scenario.endDate}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Parts Filter</label>
//           <select
//             name="partsFilter"
//             value={scenario.partsFilter}
//             onChange={handleChange}
//           >
//             <option value="">Select parts and suppliers</option>
//             <option value="Engine">Engine Parts</option>
//             <option value="Electrical">Electrical Components</option>
//             <option value="Body">Body Panels</option>
//           </select>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="scenario-footer">
//         <button className="btn-secondary" disabled>
//           Previous
//         </button>
//         <button className="btn-primary" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateScenario;



















































import React, { useState } from "react";
import "../styles/CreateScenario.css";

const CreateScenario = ({ setActive }) => {
  const [scenario, setScenario] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    partsFilter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScenario({ ...scenario, [name]: value });
  };

  const handleNext = () => {
    alert("Next clicked! Scenario details: " + JSON.stringify(scenario, null, 2));
  };

  // ✅ Redirect back to Scenario Catalog when (x) is clicked
  const handleClose = () => {
    setActive("scenario");
  };

  return (
    <div className="scenario-wrapper">
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
          <label>Scenario Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter scenario name"
            value={scenario.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe the scenario purpose and assumptions"
            value={scenario.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group half">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={scenario.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group half">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={scenario.endDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Parts Filter</label>
          <select
            name="partsFilter"
            value={scenario.partsFilter}
            onChange={handleChange}
          >
            <option value="">Select parts and suppliers</option>
            <option value="Engine">Engine Parts</option>
            <option value="Electrical">Electrical Components</option>
            <option value="Body">Body Panels</option>
          </select>
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
