"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconMenu, IconX } from '@tabler/icons-react';
import Button from "../button/page";

const menuNav = [
    {
        id: 1,
        title: "Home",
        href: "/"
    },
    {
        id: 2,
        title: "To rent",
        href: "/rent"
    },
    {
        id: 3,
        title: "For sale",
        href: "/sale"
    },
    {
        id: 4,
        title: "Blog",
        href: "/blog"
    },
]



const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <nav className="w-full flex justify-between flex-col xl:flex-row z-50">
                <div className="header flex w-full xl:w-fit justify-between items-center">
                    <Link href={"/"}>
                        <Image className="w-24 h-24 object-contain" src={"/navbar-brand.svg"} alt="logo" width={100} height={100} />
                    </Link>
                    <div className="xl:hidden flex items-center gap-2">
                        <button onClick={handleClick} type="button" className={isOpen ? "transition-all duration-700 ease-out" : ""}>
                            {!isOpen ? <IconMenu className="w-8 h-8" /> : <IconX className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
                <div className={`nav-menu md:w-1/2 xl:w-fit ${isOpen ? "flex flex-col py-4 gap-8 bg-white drop-shadow-xl rounded-md px-4 border-2 border-[#f4f4f4] mt-4" : "hidden"} xl:bg-none xl:drop-shadow-none xl:rounded-none xl:px-0 xl:border-none xl:mt-0 xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-8`}>
                    {menuNav.map((item) => (
                        <Link href={item.href} key={item.id} className={`${pathname === item.href ? "font-bold border-2 border-[#f4f4f4] bg-white drop-shadow-md xl:bg-none xl:border-none xl:drop-shadow-none" : ""} py-3 text-center rounded-md`}>
                            {item.title}
                        </Link>
                    ))}
                    <div className="button-group w-full xl:w-fit mx-auto flex justify-center">
                        <Link href={"/login"}>
                            <Button variant="primary" onClick={() => { }} className="">Login</Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
