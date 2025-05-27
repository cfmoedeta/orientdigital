import Link from "next/link";
import "@/css/Logo.css";

export default function Logo() {
  return (
    <Link className="logo" href={"/"}>
      <img src="/x-logo.png" alt="x-media-logo" />
      Media
    </Link>
  );
}
