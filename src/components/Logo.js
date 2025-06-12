import Link from "next/link";
import "@/css/Logo.css";

export default function Logo() {
  return (
    <Link className="logo" href={"/"}>
      <img src="/logo.png" alt="orient-digital-logo" />
    </Link>
  );
}
