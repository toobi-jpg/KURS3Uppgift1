import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top mt-3 fs-6 w-100 w-md-50 w-lg-25 px-5">
      <div className="menu container-fluid py-2 px-3 rounded">
        <Navlink link="Home" />
        <Navlink link="About" />
        <Navlink link="Contact" />
      </div>
    </nav>
  );
}
