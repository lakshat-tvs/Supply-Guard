// import React from "react";
// import "../styles/SupplierPopup.css";
// import { X } from "lucide-react";

// export default function SupplierPopup({ supplier, onClose }) {
//   if (!supplier) return null;

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         <div className="popup-header">
//           <h3>Supplier Contact Information</h3>
//           <button className="close-btn" onClick={onClose}>
//             <X size={20} />
//           </button>
//         </div>

//         <div className="popup-content">
//           <p><strong>Supplier Name:</strong> {supplier.company}</p>
//           <p><strong>Item:</strong> {supplier.name}</p>
//           <p><strong>Email:</strong> {supplier.email}</p>
//           <p><strong>Phone:</strong> {supplier.phone || "+91 98765 43210"}</p>
//           <p><strong>Risk Level:</strong> {supplier.risk}</p>
//         </div>

//         <div className="popup-footer">
//           <button className="close-popup-btn" onClick={onClose}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }







































// import React from "react";
// import "../styles/SupplierPopup.css";

// export default function SupplierPopup({ supplier, onClose }) {
//   if (!supplier) return null;

//   return (
//     <div className="popup-overlay" onClick={onClose}>
//       <div className="popup-card" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn" onClick={onClose}>✖</button>
//         <h2>Supplier Details</h2>
//         <div className="popup-content">
//           <p><strong>Supplier Name:</strong> {supplier.company}</p>
//           <p><strong>Part:</strong> {supplier.name}</p>
//           <p><strong>Email:</strong> {supplier.email}</p>
//           <p><strong>Phone:</strong> {supplier.phone}</p>
//           <p><strong>Category:</strong> {supplier.category}</p>
//           <p><strong>Stock:</strong> {supplier.stock}</p>
//         </div>
//         <button className="popup-ok-btn" onClick={onClose}>OK</button>
//       </div>
//     </div>
//   );
// }


































import React from "react";
import "../styles/SupplierPopup.css";
import { X, Phone, Mail, Building2 } from "lucide-react";

export default function SupplierPopup({ supplier, onClose }) {
  if (!supplier) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-card"
        onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
      >
        <div className="popup-header">
          <h2>Supplier Details</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="popup-body">
          <div className="popup-row">
            <Building2 className="popup-icon company" size={20} />
            <div>
              <h3>{supplier.company}</h3>
              <p className="popup-subtext">{supplier.category}</p>
            </div>
          </div>

          <div className="popup-divider" />

          <div className="popup-info">
            <p>
              <Mail className="popup-icon" size={18} />{" "}
              <a href={`mailto:${supplier.email}`} className="popup-link">
                {supplier.email}
              </a>
            </p>
            <p>
              <Phone className="popup-icon" size={18} />{" "}
              <a href={`tel:${supplier.phone}`} className="popup-link">
                {supplier.phone}
              </a>
            </p>
          </div>

          <div className="popup-status">
            <span
              className={`risk-badge ${supplier.risk.toLowerCase()}`}
            >
              {supplier.risk} RISK
            </span>
          </div>
        </div>

        <div className="popup-footer">
          {/* <button className="popup-btn contact">Contact</button> */}
          <button className="popup-btn cancel" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
