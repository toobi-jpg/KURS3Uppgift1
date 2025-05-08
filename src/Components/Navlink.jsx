export default function Navlink({ link }) {
  return (
    <a href={link.split(" ").join("")} className="nav-link">
      {link}
    </a>
  );
}
