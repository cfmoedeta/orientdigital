import "@/css/Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fit-body">
      <Link className="logo" href={"/"}>
        <span>X</span> Media
      </Link>
      <div className="links">
        <Link href={"/#about"}>About</Link>
        <Link href={"/#talents"}>Talents</Link>
        <Link href={"/#services"}>Services</Link>
        <Link href={"/#contact"}>Contact</Link>
      </div>
    </nav>
  );
}
