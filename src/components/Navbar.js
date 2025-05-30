import "@/css/Navbar.css";
import Link from "next/link";
import Logo from "./Logo";
import NavbarWrapper from "./wrappers/navbar-wrapper";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="navbar-content fit-body">
        <Logo />
        <div className="links">
          <Link href={"/#about"}>About</Link>
          <Link href={"/#talents"}>Talents</Link>
          <Link href={"/#services"}>Services</Link>
          <Link href={"/#contact"}>Contact</Link>
        </div>
      </div>
    </NavbarWrapper>
  );
}
