import React, { useState } from "react";
import Link from "./Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = {
    1: { id: 1, name: "Home", path: "/" },
    2: { id: 2, name: "About", path: "/about" },
    3: { id: 3, name: "Services", path: "/services" },
    4: { id: 4, name: "Contact", path: "/contact" },
    5: { id: 5, name: "Profile", path: "/profile" },
  };

  return (
    <nav className="p-4 bg-gray-200 text-black">
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoMdClose /> : <AiOutlineMenu />}
      </div>

      <ul
        className={`
        md:flex
        absolute md:static
        bg-red-400 w-full md:w-auto
        duration-1000
        ${open ? "top-14" : "-top-60"}
      `}
      >
        {Object.values(routes).map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;