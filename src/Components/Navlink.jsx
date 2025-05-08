export default function Navlink({ link }) {
  return (
    <a href={link.split(" ").join("")} className="nav-link">
      {link}
    </a>
  );
}

export function NavlinkwIcon({ link, icon }) {
  return (
    <a href={link.split(" ").join("")} className="nav-link rounded">
      <i className={`${icon} me-2`}></i>
      {link}
    </a>
  );
}
