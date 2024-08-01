import navbarItems from "@/data";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-white w-full py-6 px-8 flex justify-between items-center">
      <Image src={"/logo.png"} alt="logo" width={160} height={300} />
      <nav className="flex items-center gap-6">

      {navbarItems.map((item, idx) => (
          <a href={item.link} key={`nav-item-${idx}`}>
            {item.name}
        </a>
      ))}
      </nav>
      <a href="#demo" className="bg-purple-100 px-6 rounded-full py-3">
        Get a demo
      </a>
    </div>
  );
};

export default Navbar;
