import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./dojo-logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={logo}
        alt="Dojo Helpdesk"
        width={70}
        quality={100}
        placeholder="blur"
      />

      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/login" className="mr-auto">
        Login
      </Link>

      {user && <span>Hello, {user.email} </span>}
      <LogoutButton />
    </nav>
  );
}
