// import React, { useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import * as XLSX from "xlsx";
// import PPTX from "pptxgenjs";

// import "../styles/ScenarioResults.css";

// /* Icons */
// import {
//   AlertTriangle,
//   TrendingDown,
//   TrendingUp,
//   Share2,
//   Download,
//   Edit3,
//   Copy
// } from "lucide-react";

// /* Recharts */
// import {
//   AreaChart,
//   Area,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// /* Leaflet Map */
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// /* Marker icons */
// const redIcon = new L.Icon({
//   iconUrl:
//     "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41]
// });

// const yellowIcon = new L.Icon({
//   iconUrl:
//     "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41]
// });

// const greenIcon = new L.Icon({
//   iconUrl:
//     "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41]
// });

// export default function ScenarioResults({ setActive }) {
//   const [showExportMenu, setShowExportMenu] = useState(false);
//   const [exporting, setExporting] = useState(false);
//   const [exportMessage, setExportMessage] = useState("");

//   /* PDF Export */
//   const handleDownloadPDF = async () => {
//     try {
//       setShowExportMenu(false);   // hide dropdown
//       setExporting(true);         // show loading
//       setExportMessage("Preparing PDF...");

//       const element = document.querySelector(".scenario-results-wrapper");
//       // const canvas = await html2canvas(element, { scale: 3 });
//       const canvas = await html2canvas(element, {
//         scale: 3,
//         useCORS: true,
//         allowTaint: true,
//         logging: false,
//       });


//       const pdf = new jsPDF("p", "mm", "a4");
//       const img = canvas.toDataURL("image/png");

//       pdf.addImage(img, "PNG", 0, 0, 210, 297);
//       pdf.save("Scenario-Report.pdf");
//     } catch {
//       alert("PDF export failed.");
//     } finally {
//       setExporting(false);
//     }
//   };

//   /* Excel Export */
//   const handleExportExcel = () => {
//     setShowExportMenu(false);
//     setExporting(true);
//     setExportMessage("Preparing Excel...");

//     setTimeout(() => {
//       const ws = XLSX.utils.json_to_sheet(metrics);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, "Metrics");
//       XLSX.writeFile(wb, "Scenario-Metrics.xlsx");
//       setExporting(false);
//     }, 500);
//   };


//   const handleExportPPTX = async () => {
//     try {
//       setShowExportMenu(false);
//       setExporting(true);
//       setExportMessage("Preparing PowerPoint...");

//       const pres = new PPTX();

//       /* ---------- 1. Capture METRICS ---------- */
//       const metricsSlide = pres.addSlide();
//       metricsSlide.addText("Scenario Metrics", {
//         x: 0.5,
//         y: 0.3,
//         fontSize: 28,
//         bold: true,
//       });

//       metrics.forEach((m, i) => {
//         metricsSlide.addText(
//           `${m.name}: ${m.value} (${m.change})`,
//           { x: 0.7, y: 1 + i * 0.5, fontSize: 18 }
//         );
//       });


//       /* ---------- 2. Capture Inventory Chart ---------- */
//       const chartElem = document.querySelector(".chart-card:first-child");
//       const chartCanvas = await html2canvas(chartElem, { scale: 3 });
//       const chartImg = chartCanvas.toDataURL("image/png");

//       const chartSlide = pres.addSlide();
//       chartSlide.addText("Inventory Trend", {
//         x: 0.5,
//         y: 0.3,
//         fontSize: 26,
//         bold: true,
//       });
//       chartSlide.addImage({
//         data: chartImg,
//         x: 0.5,
//         y: 1,
//         w: 9,
//         h: 5,
//       });


//       /* ---------- 3. Capture Geographic Map ---------- */
//       const mapElem = document.querySelector(".map-wrapper");
//       const mapCanvas = await html2canvas(mapElem, { scale: 3 });
//       const mapImg = mapCanvas.toDataURL("image/png");

//       const mapSlide = pres.addSlide();
//       mapSlide.addText("Geographic Impact", {
//         x: 0.5,
//         y: 0.3,
//         fontSize: 26,
//         bold: true,
//       });
//       mapSlide.addImage({
//         data: mapImg,
//         x: 0.5,
//         y: 1,
//         w: 9,
//         h: 5,
//       });


//       /* ---------- 4. Export the PPT ---------- */
//       await pres.writeFile({ fileName: "Scenario-Summary.pptx" });

//     } catch (err) {
//       console.error(err);
//       alert("PPT export failed.");
//     } finally {
//       setExporting(false);
//     }
//   };

//   /* Metrics */
//   const metrics = [
//     { name: "Service Level", value: "87.5%", change: "-12.5% from baseline" },
//     { name: "Backlog", value: "5.2 weeks", change: "+3.2 weeks from baseline" },
//     { name: "Inventory at Risk", value: "$18.7M", change: "High risk exposure" },
//     { name: "Cost Impact", value: "$2.1M", change: "Additional costs" }
//   ];

//   /* Chart Data */
//   const chartData = [
//     { week: "Week 1", inventory: 100, backorders: 5 },
//     { week: "Week 2", inventory: 90, backorders: 10 },
//     { week: "Week 3", inventory: 80, backorders: 15 },
//     { week: "Week 4", inventory: 65, backorders: 20 },
//     { week: "Week 5", inventory: 58, backorders: 25 },
//     { week: "Week 6", inventory: 52, backorders: 28 },
//     { week: "Week 7", inventory: 47, backorders: 30 },
//     { week: "Week 8", inventory: 43, backorders: 33 }
//   ];

//   /* Map risk points */
//   const riskLocations = [
//     { position: [31.2304, 121.4737], label: "Shanghai • High Risk", icon: redIcon },
//     {
//       position: [31.1500, 121.3000],
//       label: "Factory B • Medium Risk",
//       icon: yellowIcon
//     },
//     {
//       position: [31.2750, 121.6000],
//       label: "Supplier C • Low Risk",
//       icon: greenIcon
//     }
//   ];

//   return (
//     <>
//       {/* Export overlay */}
//       {exporting && (
//         <div className="export-overlay">
//           <div className="export-box">
//             <div className="spinner"></div>
//             <p>{exportMessage}</p>
//           </div>
//         </div>
//       )}

//       <div className="scenario-results-wrapper">
//         {/* HEADER */}
//         <div className="results-header">
//           <div>
//             <h2 className="results-title">Factory Shutdown - Shanghai</h2>
//             <p className="results-subtitle">Scenario Results • Completed</p>
//           </div>

//           <div className="results-actions">
//             <button className="btn-action">
//               <Copy size={16} /> Clone
//             </button>

//             <button className="btn-action">
//               <Edit3 size={16} /> Annotate
//             </button>

//             <div className="dropdown">
//               <button
//                 className="btn-action"
//                 onClick={() => setShowExportMenu(!showExportMenu)}
//               >
//                 <Download size={16} /> Export
//               </button>

//               {showExportMenu && (
//                 <div className="dropdown-menu">
//                   <div className="dropdown-item" onClick={handleDownloadPDF}>
//                     📄 PDF Report
//                   </div>
//                   <div className="dropdown-item" onClick={handleExportExcel}>
//                     📊 Excel Data
//                   </div>
//                   <div className="dropdown-item" onClick={handleExportPPTX}>
//                     🖼 PowerPoint Summary
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button className="btn-share">
//               <Share2 size={16} /> Share
//             </button>
//           </div>
//         </div>

//         {/* METRICS */}
//         <div className="metrics-grid">
//           <div className="metric-card down">
//             <h4>Service Level</h4>
//             <p className="metric-value">87.5%</p>
//             <span className="metric-change">-12.5% from baseline</span>
//             <TrendingDown className="metric-icon red" size={18} />
//           </div>

//           <div className="metric-card up">
//             <h4>Backlog</h4>
//             <p className="metric-value">5.2 weeks</p>
//             <span className="metric-change">+3.2 weeks from baseline</span>
//             <TrendingUp className="metric-icon red" size={18} />
//           </div>

//           <div className="metric-card warning">
//             <h4>Inventory at Risk</h4>
//             <p className="metric-value">$18.7M</p>
//             <span className="metric-change">High risk exposure</span>
//             <AlertTriangle className="metric-icon yellow" size={18} />
//           </div>

//           <div className="metric-card cost">
//             <h4>Cost Impact</h4>
//             <p className="metric-value">$2.1M</p>
//             <span className="metric-change">Additional costs</span>
//             <AlertTriangle className="metric-icon red" size={18} />
//           </div>
//         </div>

//         {/* CHARTS GRID */}
//         <div className="charts-grid">
//           <div className="chart-card">
//             <h4>Inventory Trends</h4>
//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="week" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />

//                 <Area
//                   type="monotone"
//                   dataKey="inventory"
//                   stroke="#3b82f6"
//                   fill="#93c5fd55"
//                   strokeWidth={3}
//                   name="On-Hand Inventory"
//                 />

//                 <Area
//                   type="monotone"
//                   dataKey="backorders"
//                   stroke="#f87171"
//                   fill="#fca5a555"
//                   strokeWidth={3}
//                   name="Backorders"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="chart-card">
//             <h4>Geographic Impact</h4>

//             <div className="map-wrapper">
//               <MapContainer
//                 center={[31.2304, 121.4737]}
//                 zoom={10}
//                 scrollWheelZoom={false}
//                 className="map-container"
//               >
//                 <TileLayer
//                   url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
//                   attribution='&copy; Stadia Maps &copy; OpenMapTiles &copy; OpenStreetMap contributors'
//                 />

//                 {riskLocations.map((loc, i) => (
//                   <Marker key={i} position={loc.position} icon={loc.icon}>
//                     <Popup>{loc.label}</Popup>
//                   </Marker>
//                 ))}
//               </MapContainer>

//               <div className="map-legend">
//                 <span className="dot red"></span> High Risk
//                 <span className="dot yellow"></span> Medium Risk
//                 <span className="dot green"></span> Low Risk
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RECOMMENDATIONS */}
//         <div className="recommendations">
//           <h4>Recommendations</h4>
//           <ul>
//             <li>Activate alternate suppliers</li>
//             <li>Expedite critical shipments via air</li>
//             <li>Increase regional safety stock</li>
//             <li>Reroute shipments through alternate ports</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }






import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import PPTX from "pptxgenjs";

import "../styles/ScenarioResults.css";

/* Icons */
import {
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Share2,
  Download,
  Edit3,
  Copy
} from "lucide-react";

/* Recharts */
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

/* Leaflet Map */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Marker icons */
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const yellowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function ScenarioResults({ setActive }) {
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState("");

  /* PDF Export */
  // const handleDownloadPDF = async () => {
  //   try {
  //     setShowExportMenu(false);
  //     setExporting(true);
  //     setExportMessage("Preparing PDF...");

  //     const element = document.querySelector(".scenario-results-wrapper");

  //     const canvas = await html2canvas(element, {
  //       scale: 3,
  //       useCORS: true,
  //       allowTaint: true,
  //       logging: false
  //     });

  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const img = canvas.toDataURL("image/png");
  //     pdf.addImage(img, "PNG", 0, 0, 210, 297);
  //     pdf.save("Scenario-Report.pdf");
  //   } catch {
  //     alert("PDF export failed.");
  //   } finally {
  //     setExporting(false);
  //   }
  // };

  /* PDF Export – High Clarity */
  // const handleDownloadPDF = async () => {
  //   try {
  //     setShowExportMenu(false);
  //     setExporting(true);
  //     setExportMessage("Preparing high-quality PDF...");

  //     const element = document.querySelector(".scenario-results-wrapper");

  //     // Force high-resolution render
  //     const scale = 2.5; // best clarity without making huge files

  //     const canvas = await html2canvas(element, {
  //       scale,
  //       useCORS: true,
  //       allowTaint: true,
  //       logging: false,
  //       windowWidth: element.scrollWidth,     // force full pixel width
  //       windowHeight: element.scrollHeight,
  //       backgroundColor: "#ffffff"            // pure white background
  //     });

  //     // Convert canvas to image
  //     const imgData = canvas.toDataURL("image/png", 1.0);

  //     // PDF setup
  //     const pdf = new jsPDF("p", "mm", "a4", true);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();

  //     const imgWidth = pdfWidth;
  //     const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  //     // Add image (centered)
  //     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

  //     pdf.save("Scenario-Report.pdf");
  //   } catch (e) {
  //     console.error(e);
  //     alert("PDF export failed.");
  //   } finally {
  //     setExporting(false);
  //   }
  // };


  const handleDownloadPDF = async () => {
    try {
      setShowExportMenu(false);
      setExporting(true);
      setExportMessage("Preparing high-quality PDF...");

      const element = document.querySelector(".scenario-results-wrapper");

      const scale = 2.5;

      // Render full page with proper width
      const canvas = await html2canvas(element, {
        scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL("image/png", 1.0);

      const pdf = new jsPDF("p", "mm", "a4", true);

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      // ⭐ CENTER THE IMAGE VERTICALLY IF SHORTER THAN PAGE
      const y = imgHeight < pdfHeight ? (pdfHeight - imgHeight) / 2 : 0;

      // ⭐ CENTER THE IMAGE HORIZONTALLY (this fixes your alignment issue)
      const x = (pdfWidth - imgWidth) / 2;

      pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

      pdf.save("Scenario-Report.pdf");
    } catch (e) {
      console.error(e);
      alert("PDF export failed.");
    } finally {
      setExporting(false);
    }
  };


  /* Excel Export */
  const handleExportExcel = () => {
    setShowExportMenu(false);
    setExporting(true);
    setExportMessage("Preparing Excel...");

    setTimeout(() => {
      const ws = XLSX.utils.json_to_sheet(metrics);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Metrics");
      XLSX.writeFile(wb, "Scenario-Metrics.xlsx");
      setExporting(false);
    }, 500);
  };

  /* PPT Export */
  const handleExportPPTX = async () => {
    try {
      setShowExportMenu(false);
      setExporting(true);
      setExportMessage("Preparing PowerPoint...");

      const pres = new PPTX();

      /* METRICS SLIDE */
      const metricsSlide = pres.addSlide();
      metricsSlide.addText("Scenario Metrics", {
        x: 0.5,
        y: 0.3,
        fontSize: 28,
        bold: true
      });

      metrics.forEach((m, i) => {
        metricsSlide.addText(`${m.name}: ${m.value} (${m.change})`, {
          x: 0.7,
          y: 1 + i * 0.5,
          fontSize: 18
        });
      });

      /* INVENTORY CHART */
      const chartElem = document.querySelector(".chart-card:first-child");
      const chartCanvas = await html2canvas(chartElem, { scale: 3 });
      const chartImg = chartCanvas.toDataURL("image/png");

      const chartSlide = pres.addSlide();
      chartSlide.addText("Inventory Trend", {
        x: 0.5,
        y: 0.3,
        fontSize: 26,
        bold: true
      });

      chartSlide.addImage({
        data: chartImg,
        x: 0.5,
        y: 1,
        w: 9,
        h: 5
      });

      /* MAP IMAGE */
      const mapElem = document.querySelector(".map-wrapper");
      const mapCanvas = await html2canvas(mapElem, { scale: 3 });
      const mapImg = mapCanvas.toDataURL("image/png");

      const mapSlide = pres.addSlide();
      mapSlide.addText("Geographic Impact", {
        x: 0.5,
        y: 0.3,
        fontSize: 26,
        bold: true
      });

      mapSlide.addImage({
        data: mapImg,
        x: 0.5,
        y: 1,
        w: 9,
        h: 5
      });

      /* EXPORT */
      await pres.writeFile({ fileName: "Scenario-Summary.pptx" });
    } catch (err) {
      console.error(err);
      alert("PPT export failed.");
    } finally {
      setExporting(false);
    }
  };

  /* Metrics */
  const metrics = [
    { name: "Service Level", value: "87.5%", change: "-12.5% from baseline" },
    { name: "Backlog", value: "5.2 weeks", change: "+3.2 weeks from baseline" },
    { name: "Inventory at Risk", value: "$18.7M", change: "High risk exposure" },
    { name: "Cost Impact", value: "$2.1M", change: "Additional costs" }
  ];

  /* Chart Data */
  const chartData = [
    { week: "Week 1", inventory: 100, backorders: 5 },
    { week: "Week 2", inventory: 90, backorders: 10 },
    { week: "Week 3", inventory: 80, backorders: 15 },
    { week: "Week 4", inventory: 65, backorders: 20 },
    { week: "Week 5", inventory: 58, backorders: 25 },
    { week: "Week 6", inventory: 52, backorders: 28 },
    { week: "Week 7", inventory: 47, backorders: 30 },
    { week: "Week 8", inventory: 43, backorders: 33 }
  ];

  /* Map risk points */
  const riskLocations = [
    { position: [31.2304, 121.4737], label: "Shanghai • High Risk", icon: redIcon },
    {
      position: [31.1500, 121.3000],
      label: "Factory B • Medium Risk",
      icon: yellowIcon
    },
    {
      position: [31.2750, 121.6000],
      label: "Supplier C • Low Risk",
      icon: greenIcon
    }
  ];

  return (
    <>
      {/* LOADING OVERLAY */}
      {exporting && (
        <div className="export-overlay">
          <div className="export-box">
            <div className="spinner"></div>
            <p>{exportMessage}</p>
          </div>
        </div>
      )}

      <div className="scenario-results-wrapper">
        {/* HEADER */}
        <div className="results-header">
          <div>
            <h2 className="results-title">Factory Shutdown - Shanghai</h2>
            <p className="results-subtitle">Scenario Results • Completed</p>
          </div>

          <div className="results-actions">
            <button className="btn-action">
              <Copy size={16} /> Clone
            </button>

            <button className="btn-action">
              <Edit3 size={16} /> Annotate
            </button>

            <div className="dropdown">
              <button
                className="btn-action"
                onClick={() => setShowExportMenu(!showExportMenu)}
              >
                <Download size={16} /> Export
              </button>

              {showExportMenu && (
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={handleDownloadPDF}>
                    📄 PDF Report
                  </div>
                  <div className="dropdown-item" onClick={handleExportExcel}>
                    📊 Excel Data
                  </div>
                  <div className="dropdown-item" onClick={handleExportPPTX}>
                    🖼 PowerPoint Summary
                  </div>
                </div>
              )}
            </div>

            <button className="btn-share">
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>

        {/* METRICS */}
        <div className="metrics-grid">
          <div className="metric-card down">
            <h4>Service Level</h4>
            <p className="metric-value">87.5%</p>
            <span className="metric-change">-12.5% from baseline</span>
            <TrendingDown className="metric-icon red" size={18} />
          </div>

          <div className="metric-card up">
            <h4>Backlog</h4>
            <p className="metric-value">5.2 weeks</p>
            <span className="metric-change">+3.2 weeks from baseline</span>
            <TrendingUp className="metric-icon red" size={18} />
          </div>

          <div className="metric-card warning">
            <h4>Inventory at Risk</h4>
            <p className="metric-value">$18.7M</p>
            <span className="metric-change">High risk exposure</span>
            <AlertTriangle className="metric-icon yellow" size={18} />
          </div>

          <div className="metric-card cost">
            <h4>Cost Impact</h4>
            <p className="metric-value">$2.1M</p>
            <span className="metric-change">Additional costs</span>
            <AlertTriangle className="metric-icon red" size={18} />
          </div>
        </div>

        {/* CHARTS GRID */}
        <div className="charts-grid">
          <div className="chart-card">
            <h4>Inventory Trends</h4>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Area
                  type="monotone"
                  dataKey="inventory"
                  stroke="#3b82f6"
                  fill="#93c5fd55"
                  strokeWidth={3}
                  name="On-Hand Inventory"
                />

                <Area
                  type="monotone"
                  dataKey="backorders"
                  stroke="#f87171"
                  fill="#fca5a555"
                  strokeWidth={3}
                  name="Backorders"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h4>Geographic Impact</h4>

            <div className="map-wrapper">
              <MapContainer
                center={[31.2304, 121.4737]}
                zoom={10}
                scrollWheelZoom={false}
                className="map-container"
              >
                <TileLayer
                  url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
                  attribution='&copy; Stadia Maps &copy; OpenMapTiles &copy; OpenStreetMap contributors'
                />

                {riskLocations.map((loc, i) => (
                  <Marker key={i} position={loc.position} icon={loc.icon}>
                    <Popup>{loc.label}</Popup>
                  </Marker>
                ))}
              </MapContainer>

              <div className="map-legend">
                <span className="dot red"></span> High Risk
                <span className="dot yellow"></span> Medium Risk
                <span className="dot green"></span> Low Risk
              </div>
            </div>
          </div>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="recommendations">
          <h4>Recommendations</h4>
          <ul>
            <li>Activate alternate suppliers</li>
            <li>Expedite critical shipments via air</li>
            <li>Increase regional safety stock</li>
            <li>Reroute shipments through alternate ports</li>
          </ul>
        </div>
      </div>
    </>
  );
}
