"use client"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/logo2.png";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function toggle() {
    setMenu(!menu);
  }

  useEffect(() => {
    const sidebar = document.querySelector(".navbar2") as HTMLElement;

    if (sidebar) {
      if (menu) {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
  }, [menu]);

  return (
    <header className="header">
      <div className="logo">
        <Image src={logo} alt={"logo"} height={100} width={90} />
      </div>
      <nav className="navbar">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/cofees"}>Cofees</Link>
        </li>
        <li>
          <Link href={"/review"}>reviews</Link>
        </li>
        <li>
          <Link href={"/contact"}>contact</Link>
        </li>
      </nav>

      <nav className="navbar2">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/cofees"}>coffees</Link>
        </li>
        <li>
          {" "}
          <Link href={"/review"}>review</Link>
        </li>
        <li>
          <Link href={"/contact"}>contact</Link>
        </li>
      </nav>
      <div className="icons">
        <div className="fas" id="search-btn">
          <FaSearch />
        </div>
        <div className="fas " id="cart-btn">
          <FaShoppingCart />
        </div>
        <div className="fas" id="menu-btn" onClick={toggle}>
          <MdMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
