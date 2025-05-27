import "@/css/Navbar.css";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-content fit-body">
        <Logo />
        <div className="links">
          <Link href={"/#about"}>About</Link>
          <Link href={"/#talents"}>Talents</Link>
          <Link href={"/#services"}>Services</Link>
          <Link href={"/#contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
