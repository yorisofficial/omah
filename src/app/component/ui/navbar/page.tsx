"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu, IconX } from "@tabler/icons-react";
import Button from "../button/page";

const menuNav = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "House",
    href: "/safehouse",
  },
  {
    id: 3,
    title: "Review",
    href: "/review",
  },
  {
    id: 4,
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isWindowScrolled = window.scrollY > 140;
      setIsScrolled(isWindowScrolled);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !(navbarRef.current as any).contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav
        className={`${isScrolled ? "shadow-lg fixed" : "fixed"} 
        border border-[#f4f4f4] flex justify-between flex-col xl:flex-row z-40 w-full right-0 top-0 xl:px-20 bg-white drop-shadow-sm`}
      >
        <div
          className={`header px-6 flex w-full xl:w-fit justify-between items-center z-50 bg-white`}
        >
          <Link href={"/"}>
            <Image
              className="w-24 h-24 object-contain"
              src={"/navbar-brand.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={handleClick}
              type="button"
              className={isOpen ? "transition-all duration-700 ease-out" : ""}
            >
              {!isOpen ? <IconMenu className="w-8 h-8" /> : <IconX className="w-8 h-8" />}
            </button>
          </div>
        </div>
        <div
          ref={navbarRef}
          className={`nav-menu-mobile xl:hidden flex flex-col gap-8 py-4 px-4 absolute drop-shadow-xl w-full md:w-1/2 md:h-screen -top-[400px] left-0 transform duration-500 ${
            isOpen ? "bg-white top-[100px] opacity-100 -z-50" : "opacity-0 -z-50"
          }`}
        >
          {menuNav.map((item) => (
            <Link
              onClick={handleClick}
              href={item.href}
              key={item.id}
              className={`p-3 rounded ${
                pathname === item.href ? `bg-primary text-white py-3` : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
          <div className="button-group w-full xl:w-fit mx-auto flex justify-center">
            <Link href={"/login"}>
              <Button variant="primary" onClick={() => {}} className="">
                Login
              </Button>
            </Link>
          </div>
        </div>
        <div className={`nav-menu-desktop xl:flex items-center hidden gap-4`}>
          {menuNav.map((item) => (
            <Link
              onClick={handleClick}
              href={item.href}
              key={item.id}
              className={`p-3 rounded w-28 flex justify-center ${
                pathname === item.href ? `bg-none text-primary font-bold py-3` : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
          <div className="button-group w-full xl:w-fit mx-auto flex justify-center">
            <Link href={"/login"}>
              <Button variant="primary" onClick={() => {}} className="">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
