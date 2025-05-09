import React from "react";
import { Link } from "react-router-dom";
export default function Navlink({ link }) {
  return (
    <Link to={link.split(" ").join("")} className="nav-link">
      {link}
    </Link>
  );
}

export function NavlinkwIcon({ link, icon }) {
  return (
    <Link to={link.split(" ").join("")} className="nav-link rounded">
      <i className={`${icon} me-2`}></i>
      {link}
    </Link>
  );
}
