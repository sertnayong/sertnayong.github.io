import { links } from "@/lib/data";
import React from "react";
import HamburgerMenu from "./hamburger-menu";
import Header from "./header";

export default function Navbar() {
  
  return <nav>
    <HamburgerMenu links={links}/>
    <Header links={links}/>
  </nav>;
}
