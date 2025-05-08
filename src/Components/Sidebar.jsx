import { useState } from "react";
import Navlink from "./Navlink";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar toggled.");
  }

  return (
    <aside className="bg-transparent d-flex position-fixed start-0 top-0 min-vh-100 align-items-center">
      <div
        className="sidebar d-flex flex-column pt-3 rounded"
        style={{
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-240px)",
        }}
      >
        <div className="d-flex flex-column fs-6" style={{ gap: "20px" }}>
          <h3 style={{ fontWeight: "400" }}>Projects</h3>
          <Navlink link="Uppgift 2" />
          <Navlink link="Uppgift 3" />
        </div>
        <div
          onClick={toggleSidebar}
          className="toggle-side align-self-end rounded-end"
        ></div>
      </div>
    </aside>
  );
}
