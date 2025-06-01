import "@/css/Navbar.css";
import Link from "next/link";
import Logo from "./Logo";
import NavbarWrapper from "./wrappers/navbar-wrapper";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="navbar-content fit-body">
        <Logo />
        <MobileNavbar />
        <div className="links">
          <Link href={"/#about"}>About</Link>
          <Link href={"/#services"}>Services</Link>
          <Link href={"/#talents"}>Talents</Link>
          <Link href={"/#brands"}>Brands</Link>
          <Link href={"/#contact"}>Contact</Link>
        </div>
      </div>
    </NavbarWrapper>
  );
}
