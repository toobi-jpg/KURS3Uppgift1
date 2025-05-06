export default function Navbar() {
  return (
    <nav
      style={{ maxWidth: "300px" }}
      className="container navbar fixed-top mt-2 fs-5"
    >
      <div className="container-fluid">
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
