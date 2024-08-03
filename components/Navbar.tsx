"use client";
import { navbarItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleclick = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="w-full border-b border-[#151934] h-24">
      <div className="max-w-7xl mx-auto text-white w-full py-6 px-8 flex justify-between items-center ">

      <Image src={"/logo.png"} alt="logo" className="z-50" width={160} height={300}  />
      <nav className="hidden lg:flex items-center gap-6 ">
        {navbarItems.map((item, idx) => (
          <Link href={item.link} key={`nav-item-${idx}`}>
            {item.name}
          </Link>
        ))}
      </nav>
      <Button text="Get demo" href="/" border={false} navbar={true} />
      <div className="inline-block lg:hidden z-50 w-10" onClick={handleclick}>
        {!menuOpen ? (
          <Image
            src={"/burger-menu.svg"}
            className="rounded-sm cursor-pointer w-full transition-all bg-white p-1"
            alt="burger-menu"
            height={40}
            width={40}
          />
        ) : (
          <Image
            src={"/menu-close.svg"}
            className="rounded-sm cursor-pointer w-full transition-all bg-white p-1"
            alt="burger-menu"
            height={35}
            width={35}
          />
        )}
      </div>
      {menuOpen && <div className="absolute z-30 lg:hidden h-[100vh] left-0 top-0 w-[100vw] bg-[#060B27]">
        <nav className="text-gray-400 flex flex-col h-full justify-center items-center text-3xl gap-10">
        {navbarItems.map((item, idx) => (
          <Link href={item.link} key={`nav-item-${idx}`} onClick={handleclick}>
            {item.name}
          </Link>
        ))}
        </nav>
      </div> }
      </div>
    </div>
  );
};

export default Navbar;
