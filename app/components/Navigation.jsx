import Link from "next/link";
import "../globals.css";
export default function Navigation() {
  return (
   <header className="grid grid-cols-2">
    <div className="">thapa logo</div>
    <nav>
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/clientcomp">clientcomp</Link></li>
        <li><Link href="/servercomp">servercomp</Link></li>
        <li><Link href="/service">Service</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
   </header>
  );
}