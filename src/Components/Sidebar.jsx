import { useState } from "react";
import { NavlinkwIcon } from "./Navlink";

export default function Sidebar() {
  const [isSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className="bg-transparent d-flex position-fixed start-0 top-0 min-vh-100 align-items-center"
      style={{ zIndex: "9999" }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="sidebar d-flex flex-column pt-3 rounded"
        style={{
          transform:
            isSidebarOpen || isHovered ? "translateX(0)" : "translateX(-190px)",
        }}
      >
        <div className="d-flex flex-column fs-6">
          <h3 className="fw-normal">Projects</h3>
          <hr
            className="divider m-0 align-self-center mt-3"
            style={{
              display: isSidebarOpen || isHovered ? "flex" : "none",
            }}
          />
          <div className="links-container mt-3">
            <NavlinkwIcon link="Uppgift 2" icon="bx bx-book" />
            <NavlinkwIcon link="Uppgift 3" icon="bx bx-book" />
          </div>
        </div>
        <i
          className="bx bx-sidebar sidebar-icon position-absolute fs-3"
          style={{ display: isSidebarOpen || isHovered ? "none" : "flex" }}
        ></i>
      </div>
    </aside>
  );
}
