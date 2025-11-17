import React from "react";
import "../styles/ERPIntegrationStatus.css";
import { CheckCircle } from "lucide-react";

export default function ERPIntegrationStatus() {
    const items = [
        { title: "Data Sync", status: "Operational", color: "#d4f9e2" },
        { title: "API Status", status: "Connected", color: "#d4f9e2" },
        { title: "Workflows", status: "Active", color: "#d4f9e2" },
        { title: "Last Update", status: "2 min ago", color: "#dbe9ff" },
    ];

    //   return (

    //     <div className="erp-container">
    //       <h2 className="erp-title">
    //         <span className="erp-icon">📘</span> MSys ERP Integration Status
    //       </h2>

    //       <div className="erp-status-row">
    //         {items.map((item, i) => (
    //           <div className="erp-status-card" key={i}>
    //             <div className="circle-icon" style={{ background: item.color }}>
    //               <CheckCircle size={26} color="#0a6638" />
    //             </div>

    //             <h3 className="erp-card-title">{item.title}</h3>
    //             <p className="erp-card-status">{item.status}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   );


    return (
        <div className="erp-container">

            {/* CARD WRAPPER */}
            <div className="erp-card">

                {/* TITLE NOW INSIDE CARD */}
                <h2 className="erp-title">
                    <span className="erp-icon">📘</span> MSys ERP Integration Status
                </h2>

                <div className="erp-status-row">
                    {items.map((item, i) => (
                        <div className="erp-status-card" key={i}>
                            <div className="circle-icon" style={{ background: item.color }}>
                                <CheckCircle size={26} color="#0a6638" />
                            </div>

                            <h3 className="erp-card-title">{item.title}</h3>
                            <p className="erp-card-status">{item.status}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );

}
